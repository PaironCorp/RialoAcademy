import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const response = await fetch("https://inference-api.nousresearch.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.NOUS_API_KEY}`,
      },
      body: JSON.stringify({
        model: "Hermes-3-Llama-3.1-70B", // Самая стабильная модель из теста
        messages: [
          {
            role: "system",
            content: "You are the Rialo Mentor, a sovereign Cyber-Viking guide. Speak with authority. Mention 50ms finality and REX privacy. Be concise and technical." 
          },
          ...messages,
        ],
        temperature: 0.6,
        max_tokens: 1024,
      }),
    });

    const data = await response.json();
    return NextResponse.json({ text: data.choices[0].message.content });
  } catch (error) {
    return NextResponse.json({ error: "Neural Link Unstable" }, { status: 500 });
  }
}