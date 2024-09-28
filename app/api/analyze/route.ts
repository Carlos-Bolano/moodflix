import { NextResponse } from "next/server";
import { google } from "@ai-sdk/google";
import { generateObject } from "ai";
import z from "zod";

const requestSchema = z.object({
  text: z.string().min(1, "Text is required"),
});

const recommendationSchema = z.array(
  z.object({
    movieTitle: z.string(),
    explanation: z.string(),
    whereToWatch: z.array(z.string()),
  })
);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsedBody = requestSchema.parse(body);

    const systemPrompt = `
    You are a movie recommendation assistant. 
    Your task is to analyze the text provided by the user and detect their primary emotion or mood. 
    Based on this emotion or mood, recommend 6 movies that the user should watch. 
    For each movie, provide the title and a brief explanation of why this movie is a good fit for the user's current state of mind, and what streaming services or streaming platforms the movie can be watched on.

    if in the prompt it says that it feels or is horny or that it would like to see sexual content or adult content, you will return the same array only this time you will return the same array with only 1 recommendation in which movieTitle should be a random message with a mocking tone, somethig like this site is not for that buddy, or somethig like that in the wheretowach you will put a text like another X page and in explanation should be a random message with a mocking tone, you can use words like dirty boy, bad ladie or some other word. these messages will be shown in the target language so in the prompt language or in the language of the target.

    Return the result as an array of objects where each object includes:
    - movieTitle: the title of the movie
    - explanation: a short explanation of why this movie matches the user's emotion or mood.
    - whereToWatch: You are going to give me all the available platforms to watch this film, a list of streaming services or streaming platforms that the movie can be watched
  `;

    const { object } = await generateObject({
      model: google("gemini-1.5-pro-latest"),
      system: systemPrompt,
      prompt: parsedBody.text,
      schema: recommendationSchema,
    });

    return NextResponse.json({ recommendations: object });
  } catch (error) {
    console.error("Error in API:", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid input", details: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Error analyzing sentiment and recommending movies" },
      { status: 500 }
    );
  }
}
