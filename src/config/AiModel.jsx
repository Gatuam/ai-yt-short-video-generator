import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY,
});

const tools = [
  {
    googleSearch: {},
  },
];
const config = {
  tools,
  responseMimeType: "text/plain",
};

const model = "gemini-2.0-flash";

export async function getScriptResponse(prompt) {
  try {
    const contents = [
      {
        role: "user",
        parts: [{ text: prompt }],
      },
    ];

    const response = await ai.models.generateContent({
      model,
      config,
      contents,
    });

    return response;
  } catch (error) {
    console.error("getScriptResponse failed:", error);
    throw error;
  }
}
