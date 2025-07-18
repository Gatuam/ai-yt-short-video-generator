import axios from "axios";
import { inngest } from "./client";

export const GenVideodata = inngest.createFunction(
  { id: "gen-veo-data" },
  { event: "gen-veo-data" },
  async ({ event, step }) => {
    const { script, voice } = event?.data;

    const GenerateAudioFile = await step.run("GenerateAudioFile", async () => {
      const response = await axios.post(
        `${process.env.BASE_URL}/api/gen-audio`,
        {
          text: script,
          voiceId: voice,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          responseType: "arraybuffer", 
        }
      );

      return response.data; // audio buffer
    });

    return {
      message: "Audio gen complete",
      audio: GenerateAudioFile,
    };
  }
);
