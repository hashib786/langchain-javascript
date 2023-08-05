import { configDotenv } from "dotenv";
import { OpenAI } from "langchain/llms/openai";
configDotenv();
const { openAIApiKey } = process.env;

const llm = new OpenAI({
  openAIApiKey,
  temperature: 0.9,
});

const result = await llm.predict(
  "What would be a good company name for a company that makes colorful socks?"
);
// "Feetful of Fun"

console.log(result);
