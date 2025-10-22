"use server";

import { mastra } from "@/mastra";

export async function getWeatherInfo(formData: FormData) {
  const city = formData.get("city") as string;

  const agent = mastra.getAgent("weatherAgent");
  const result = await agent.generate(`What is the weather in ${city}?`);

  return result.text;
}
