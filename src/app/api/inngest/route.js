import { inngest } from "@/inngest/client";
import { GenVideodata, helloWorld } from "@/inngest/function";
import { serve } from "inngest/next";

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    helloWorld,
    GenVideodata
  ],
});