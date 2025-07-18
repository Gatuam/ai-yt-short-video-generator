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

    text = text.trim().replace(/^```json\s*|```$/g, "");


    const json = JSON.parse(text);


    const cleaned = json.scripts.map((script) => ({
      content: script.content
        .replace(/\(.*?\)/g, '')
        .replace(/#\w+/g, '')
        .replace(/\\n|[\r\n]+/g, ' ')
        .trim()
    }));

    return NextResponse.json({ scripts: cleaned });
  } catch (err) {
    console.error("API error:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
