import { NextResponse } from 'next/server';
import Groq from 'groq-sdk';

// Initialize Groq API
const apiKey = (process.env.GROQ_API_KEY || "").trim();
const groq = apiKey ? new Groq({ apiKey }) : null;

const SYSTEM_PROMPT = `
You are an empathetic, professional Care Concierge AI for Seren Place, a premium home healthcare agency. 
Your goal is to reassure families, answer basic questions about home healthcare, and encourage them to book a consultation or speak with a Care Coordinator.

Key Guidelines:
- Keep responses concise, warm, and professional. 
- Do NOT provide medical advice or diagnoses under any circumstances.
- If a user shares complex or urgent needs, kindly advise that a Care Coordinator will reach out via email shortly to assist them fully.
- Always maintain a tone of care and support.
`;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { message, conversationHistory = [] } = body;

    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    if (!apiKey || !groq) {
      console.error("GROQ_API_KEY is missing from environment variables.");
      return NextResponse.json(
        { reply: "I'm currently unable to connect. Please contact us directly at contact@serenplace.com or wait for a Care Coordinator to reach out." },
        { status: 503 }
      );
    }

    // Format messages for Groq
    const messages = [
      { role: 'system', content: SYSTEM_PROMPT },
      ...conversationHistory.map((msg: any) => ({
        role: msg.sender === 'user' ? 'user' : 'assistant',
        content: msg.text
      })),
      { role: 'user', content: message }
    ];

    try {
      const chatCompletion = await groq.chat.completions.create({
        messages: messages as any,
        model: "llama-3.3-70b-versatile",
        temperature: 0.7,
        max_tokens: 1024,
        top_p: 1,
        stream: false,
      });

      const responseText = chatCompletion.choices[0]?.message?.content || "";
      
      if (responseText) {
        return NextResponse.json({ reply: responseText });
      } else {
        throw new Error("Empty response from Groq");
      }
    } catch (err: any) {
      console.error('Groq API Error:', err.message);
      return NextResponse.json(
        { reply: "I'm having trouble processing your request right now. A Care Coordinator will reach out via email shortly." },
        { status: 500 }
      );
    }
    
  } catch (error: any) {
    console.error('Chat API Error:', error.message);
    return NextResponse.json(
      { reply: "An unexpected error occurred. A Care Coordinator will reach out to assist you." },
      { status: 500 }
    );
  }
}
