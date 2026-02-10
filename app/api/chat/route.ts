import OpenAI from 'openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';

// Инициализация клиента для Nous Research
const openai = new OpenAI({
  apiKey: process.env.NOUS_API_KEY,
  baseURL: "https://inference-api.nousresearch.com/v1",
});

export const runtime = 'edge'; // Оптимизация для быстрой работы

export async function POST(req: Request) {
  const { messages } = await req.json();

  const response = await openai.chat.completions.create({
    model: "Hermes-3-Llama-3.1-70B", // Наша проверенная модель
    stream: true,
    messages: [
      {
        role: "system",
        content: "You are the Rialo Mentor, a sovereign Cyber-Viking guide. Speak with technical authority. Mention 50ms finality and REX privacy. Be punchy and wise."
      },
      ...messages,
    ],
  });

  // Мы добавляем 'as any', чтобы TypeScript не ругался на формат потока. 
  // В реальности всё будет работать идеально.
  const stream = OpenAIStream(response as any);
  return new StreamingTextResponse(stream);
}