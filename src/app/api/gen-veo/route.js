import { getScriptResponse } from "@/config/AiModel";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { topic } = await req.json();

    const prompt = `Write two different scripts for a 30-second video on the Topic: ${topic}.
Give the response in JSON format and follow this schema:

{
  "scripts": [
    {
      "content": ""
    },
    {
      "content": ""
    }
  ]
}`;

    const result = await getScriptResponse(prompt);
    let text = result.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!text) {
      throw new Error("AI returned empty response");
    }

    // ✅ Strip markdown ```json blocks if present
    text = text.trim().replace(/^```json\s*|```$/g, "");

    return NextResponse.json(JSON.parse(text));
  } catch (err) {
    console.error("API error:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
