import { NextResponse } from 'next/server';
import Groq from 'groq-sdk';

const SYSTEM_PROMPT = `
You are the official Care Concierge AI assistant for Seren Place Homecare.
Your answers MUST BE STRICTLY BOUNDED to the information, services, contact details, and scope of Seren Place as provided on this website.

COMPANY DETAILS & BOUNDARIES:
- Name: Seren Place Homecare
- Website: serenplace.com
- Contact Email: info@serenplace.com
- Phone: +1 910-710-7977
- Service Area: Charlotte Metro & Union County, North Carolina (currently preparing for official launch).

SERVICES OFFERED:
1. Personal Care: Assistance with bathing, grooming, dressing, toileting, hygiene, and mobility support.
2. Companionship & Social Support: Friendly conversation, meal preparation, light housekeeping, errands, and social engagement.
3. Medication & Health Monitoring: Safe medication reminders, wellness monitoring, and healthcare coordination.
4. Skilled Nursing: Wound care, IV therapy, post-hospital discharge support, and chronic condition management.
5. Physical & Occupational Therapy: In-home mobility exercises, rehab support, and home safety/adaptive equipment guidance.
6. Respite Care: Short-term relief for family caregivers.
7. End-of-Life & Palliative Support: Compassionate, dignified end-of-life care focused on comfort.

IMPORTANT GUARDRAILS & INSTRUCTIONS:
- ONLY answer questions related to Seren Place, its services, contact details, waitlist/launch status, and home care options.
- If a user asks about unrelated topics (general medical advice, non-company topics, external services, weather, coding, etc.), politely decline and steer them back to Seren Place homecare services or contacting the team.
- Do NOT provide medical diagnoses or medical advice.
- Keep responses warm, empathetic, concise, and professional.
- Always offer options to schedule an assessment or contact the team at info@serenplace.com or +1 910-710-7977.
`;

export async function POST(req: Request) {
  try {
    const apiKey = (process.env.GROQ_API_KEY || "").trim();
    const groq = apiKey ? new Groq({ apiKey }) : null;


    const body = await req.json();
    const { message, conversationHistory = [] } = body;

    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    if (!apiKey || !groq) {
      console.error("GROQ_API_KEY is missing from environment variables.");
      return NextResponse.json(
        { reply: "I'm currently unable to connect. Please contact us directly at info@serenplace.com or wait for a Care Coordinator to reach out." },
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
        model: "openai/gpt-oss-20b",
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
      const errorMsg = err?.status ? `Groq Error ${err.status}: ${err?.message || JSON.stringify(err)}` : (err?.message || String(err));
      console.error('Groq API Error Details:', errorMsg);
      
      return NextResponse.json({ 
        reply: `[AI Connection Notice]: ${errorMsg}` 
      }, { status: 200 });
    }







    
  } catch (error: any) {
    console.error('Chat API Error:', error.message);
    return NextResponse.json(
      { reply: "An unexpected error occurred. A Care Coordinator will reach out to assist you." },
      { status: 500 }
    );
  }
}
