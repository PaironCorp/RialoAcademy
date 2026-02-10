import OpenAI from 'openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';

// Инициализация клиента для Nous Research
const openai = new OpenAI({
  apiKey: process.env.NOUS_API_KEY, // Ключ берется из переменных окружения Vercel
  baseURL: "https://inference-api.nousresearch.com/v1",
});

export const runtime = 'edge'; // Оптимизация для максимальной скорости

export async function POST(req: Request) {
  const { messages } = await req.json();

  const response = await openai.chat.completions.create({
    model: "Hermes-3-Llama-3.1-70B", // Самая стабильная и умная модель из тестов
    stream: true,
    messages: [
      {
        role: "system",
        content: "You are the Rialo Mentor, a sovereign Cyber-Viking guide. Speak with technical authority. Mention 50ms finality and REX privacy. Be punchy and wise."
      },
      ...messages,
    ],
  });

  // 'as any' необходим для обхода ошибки типизации в версии 2.2.37
  const stream = OpenAIStream(response as any);
  return new StreamingTextResponse(stream);
}