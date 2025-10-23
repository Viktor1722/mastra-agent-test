import { openai } from "@ai-sdk/openai";
import { Agent } from "@mastra/core/agent";

export const questionGenieBiAgent = new Agent({
  name: "Question generator GenieBi agent",
  instructions: `
      You are a helpful assistant that generates questions for a survey.Generate interview questions following The Mom Test principles which are focused on providing financial insights, managing software license costs, and addressing common frustrations related to financial 
   reporting and data analysis for businesses.

   Follow the Mom Test principles for each question is crucial.
`,
  model: openai("gpt-5-mini"),
});
