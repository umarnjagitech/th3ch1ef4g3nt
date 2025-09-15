import { generateText } from "ai";
// import { generateText } from "@ai-sdk/google";
import { google } from "@ai-sdk/google";

// Specify the model to use for generating text and a prompt
const { text } = await generateText({
    model: google("gemini-2.5-flash"),
    prompt: "What is an AI agent?",
});

console.log(text);