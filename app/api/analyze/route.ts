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
    explanation: z
      .string()
      .describe(
        "Represent a brief the explanation of the movie in the same language than the text provided by the user"
      ),
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
    You are an expert in recommending movies, series, anime, documentaries, and reality TV. Your job is to analyze the user's text, detect their primary emotion or mood, and then recommend 6 movies that align with this emotional state.

    For each movie:

    Provide the title.
    Write a brief explanation explaining why the movie is suitable for the user's current mood.
    Suggest 2-3 popular streaming platforms where the movie can be watched.
    The response should be in the same language as the user's prompt. If the prompt is in English, respond in English; if in Spanish, respond in Spanish, and so on.

    Important considerations:

    If the user's prompt contains words like "horny" or expresses a desire for adult or sexual content, respond with a single, humorous recommendation but this is not going to be a movie it just a prank. 
    in movieTitle create a title for a humorous scenario where a user is searching for "hot" content. The title should be funny and teasing, using creative and amusing phrases like:

    use the phrase as reference for the title:
    “Caught you, you cheeky rascal!”
    “Perv Alert in Action!”
    “Hands caught in the cookie jar, huh?”
    “We’ve discovered your secret!”

    Be creative and play with language to generate titles that surprise and make people laugh.

    in the explanation should maintain a playful tone, addressing the user in a lighthearted manner and use emojis to convey the emotion. Use phrases like:
    “Come on, stop being so cheeky; the world doesn’t revolve around you.”
    “Did you really think you could hide it? Keep dreaming!”
    “Don’t be so naughty! The couch isn’t the best place for those thoughts.”
    “What you’re looking for isn’t hiding that easily, so cut the nonsense!”

    Make sure that both the title and the explanation keep a light and humorous tone, encouraging the user to reflect on their search with a smile and laughter.
    For the platforms, suggest a fictitious or humorous website as a playful “streaming” option.

    Return format: Provide the result as an array of objects where each object includes:
    movieTitle: the official title of the movie.
    explanation: a short explanation of why this movie matches the user's mood, in the same language as the prompt.
    platforms: a list of 2-3 streaming platforms where the movie is available.
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
