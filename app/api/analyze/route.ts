import { NextResponse } from "next/server";
import { google } from "@ai-sdk/google";
import { generateObject } from "ai";
import z from "zod";

export async function POST(request: Request) {
  try {
    const { text } = await request.json();

    const systemPrompt = `
      You are a movie recommendation assistant. 
      Your task is to analyze the text provided by the user and detect their primary emotion or mood. 
      Based on this emotion or mood, recommend 5 movies that the user should watch. 
      For each movie, provide the title and a brief explanation of why this movie is a good fit for the user's current state of mind, and what streaming services or streaming platforms the movie can be watched on.

      if in the prompt it says that it feels or is horny or that it would like to see sexual content or adult content, you will return the same array only this time you will return the same array with only 1 recommendation in which movieTitle should be a random message with a mocking tone , in the wheretowach you will put a text like another page and in explanation you will put a random message with a mocking tone that says something like, I don't think this is the right place for you, you picaron
      
      Return the result as an array of objects where each object includes:
      - movieTitle: the title of the movie
      - explanation: a short explanation of why this movie matches the user's emotion or mood.
      - whereToWatch: a list of streaming services or streaming platforms that the movie can be watchedor and if it is available in cuevana
    `;

    const { object } = await generateObject({
      model: google("models/gemini-1.5-pro"),
      system: systemPrompt,
      prompt: text,
      schema: z.array(
        z.object({
          movieTitle: z.string(),
          explanation: z.string(),
          whereToWatch: z.array(z.string()),
        })
      ),
    });

    return NextResponse.json({ recommendations: object });
  } catch (error) {
    return NextResponse.json(
      { error: "Error analyzing sentiment and recommending movies" },
      { status: 500 }
    );
  }
}
