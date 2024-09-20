export async function analyzeEmotion(text: string) {
  const response = await fetch("/api/analyze", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text }),
  });

  if (!response.ok) {
    throw new Error("Error analyzing emotion");
  }

  const data = await response.json();
  return data.recommendations;
}
