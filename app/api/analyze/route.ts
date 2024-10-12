import { NextResponse } from "next/server";
import { google } from "@ai-sdk/google";
import { generateObject } from "ai";
import z from "zod";

const requestSchema = z.object({
  text: z.string().min(1, "Text is required"),
});

const recommendationSchema = z.array(
  z.object({
    movieTitle: z.string().describe("Represent the movie's name"),
    explanation: z.string().describe("Represent a brief the explanation of the movie"),
    trailer: z.string().describe("Represent the trailer's link youtube"),
    platforms: z
      .array(
        z.object({
          name: z.string().describe("Represent the name of the platform"),
          link: z.string().describe("the link of this platform"),
        })
      )
      .describe("Represent the all platforms where this show is available"),
  })
);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsedBody = requestSchema.parse(body);

    const systemPrompt = `
    You are a expert in recommending TV shows such as movies, series, animes, documentary, reality TV. 
    Your job is to analyze the text provided by the user and detect their primary emotion or mood. 
    Based on this emotion or mood, recommend 6 movies that the user should watch. 
    For each movie, provide the title and a brief explanation of why this movie is a good fit for the user's current state of mind, and what streaming services or streaming platforms the movie can be watched on.

    if in the prompt it says that it feels or is horny or that it would like to see sexual content or adult content, you will return the same array only this time you will return the same array with only 1 recommendation in which movieTitle should be a random message with a mocking tone, somethig like this site is not for that buddy, or somethig like that in the wheretowach you will put a troll page with a mocking tone and in explanation should be a random message with a mocking tone, you can use words like dirty boy, bad ladie or some other word. these messages will be shown in the target language so in the prompt language or in the language of the target.
    Make sure the movies are not too old, or before 2002, or they will not be recommended.
    
    Return the result as an array of objects where each object includes:
    - movieTitle: the official title of the movie
    - explanation: a short explanation of why this movie matches the user's emotion or mood in the target language
    - trailer: a link to the trailer of the movie in youtube
    - platforms: You are going to give me all the available platforms to watch this film, a list of streaming services or streaming platforms that the movie can be watched
  `;

    const { object } = await generateObject({
      model: google("models/gemini-1.5-pro-latest"),
      system: systemPrompt,
      prompt: parsedBody.text,
      schema: recommendationSchema,
    });

    return NextResponse.json({ recommendations: object });
  } catch (error) {
    console.error("Error in API:", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: "Invalid input", details: error.errors }, { status: 400 });
    }

    return NextResponse.json({ error: "Error analyzing sentiment and recommending movies" }, { status: 500 });
  }
}
