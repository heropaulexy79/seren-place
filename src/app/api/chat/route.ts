import { NextResponse } from 'next/server';
import Groq from 'groq-sdk';

// Initialize Groq API
const apiKey = (process.env.GROQ_API_KEY || "").trim();
const groq = apiKey ? new Groq({ apiKey }) : null;

const SYSTEM_PROMPT = `
You are an empathetic, professional Care Concierge AI for Seren Place, a premium home healthcare agency. 
Your goal is to reassure families, answer basic questions about home healthcare, and encourage them to book a consultation or speak with a Care Coordinator.
Keep responses concise, warm, and professional. 
Do NOT provide medical advice or diagnoses under any circumstances.
If a user shares complex or urgent needs, kindly advise that a Care Coordinator will reach out via email shortly to assist them fully.
`;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { message, conversationHistory = [] } = body;

    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    if (!apiKey || !groq) {
      console.warn("No GROQ_API_KEY provided. Using fallback response.");
      return NextResponse.json({ 
        reply: "Thank you for sharing. A Care Coordinator has securely received your message and will reach out via email shortly to assist you further. (Note: Please add GROQ_API_KEY to your .env file to enable the live AI Concierge)." 
      });
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
      console.log(`Using Groq model: llama-3.3-70b-versatile...`);
      
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
        console.log(`Successfully received Groq response`);
        return NextResponse.json({ reply: responseText });
      } else {
        throw new Error("Empty response from Groq");
      }
    } catch (err: any) {
      console.error('Groq API Error:', err.message);
      throw err;
    }
    
  } catch (error: any) {
    console.error('--- Chat API Error Detail ---');
    console.error('Message:', error.message);
    
    return NextResponse.json(
      { 
        reply: "I'm currently experiencing some technical difficulties. A Care Coordinator will reach out via email shortly to assist you." 
      },
      { status: 500 }
    );
  }
}
