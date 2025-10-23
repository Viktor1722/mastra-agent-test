"use server";

import { mastra } from "@/mastra";

export type AgentId =
  | "personaAgent"
  | "questionGeneratorWampAgent"
  | "questionGenieBiAgent";

export async function sendMessage(agentId: AgentId, message: string) {
  try {
    const agent = mastra.getAgent(agentId);
    const result = await agent.generate(message);
    return result.text;
  } catch (error) {
    console.error("Error in sendMessage:", error);
    throw new Error("Failed to get response from agent");
  }
}
