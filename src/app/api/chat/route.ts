import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize Gemini API only if key exists
const apiKey = process.env.GEMINI_API_KEY || "";
const genAI = apiKey ? new GoogleGenerativeAI(apiKey) : null;

const SYSTEM_PROMPT = `
You are an empathetic, professional Care Concierge AI for Seren Place, a premium home healthcare agency. 
Your goal is to reassure families, answer basic questions about home healthcare, and encourage them to book a consultation or speak with a Care Coordinator.
Keep responses concise, warm, and professional. 
Do NOT provide medical advice or diagnoses under any circumstances.
If a user shares complex or urgent needs, kindly advise that a Care Coordinator will reach out via email shortly to assist them fully.
`;

export async function POST(req: Request) {
  const apiKey = (process.env.GEMINI_API_KEY || "").trim();
  
  try {
    const body = await req.json();
    const { message, conversationHistory = [] } = body;

    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    if (!apiKey) {
      console.warn("No GEMINI_API_KEY provided. Using fallback response.");
      return NextResponse.json({ 
        reply: "Thank you for sharing. A Care Coordinator has securely received your message and will reach out via email shortly to assist you further. (Note: Please add GEMINI_API_KEY to your .env file to enable the live AI Concierge)." 
      });
    }

    const genAI = new GoogleGenerativeAI(apiKey);

    // Format history for Gemini - Ensure it starts with a 'user' message
    const chatHistory = conversationHistory
      .map((msg: any) => ({
        role: msg.sender === 'user' ? 'user' : 'model',
        parts: [{ text: msg.text }]
      }))
      .filter((msg: any, index: number) => {
        // Gemini requires history to start with a 'user' message
        if (index === 0 && msg.role === 'model') return false;
        return true;
      });
    
    // List of models to try in order of preference (using explicit full paths)
    const modelsToTry = [
      "models/gemini-1.5-flash",
      "models/gemini-1.5-flash-latest",
      "models/gemini-1.5-pro",
      "models/gemini-pro",
      "models/gemini-1.0-pro"
    ];

    let lastError: any = null;
    let responseText = "";

    for (const modelName of modelsToTry) {
      try {
        console.log(`Trying model: ${modelName}...`);
        const model = genAI.getGenerativeModel({ 
          model: modelName,
          systemInstruction: SYSTEM_PROMPT,
        });

        const chat = model.startChat({
          history: chatHistory,
        });

        const result = await chat.sendMessage(message);
        responseText = result.response.text();
        
        if (responseText) {
          console.log(`Successfully used model: ${modelName}`);
          return NextResponse.json({ reply: responseText });
        }
      } catch (err: any) {
        lastError = err;
        console.warn(`Model ${modelName} failed:`, err.message);
        // If it's not a 404, it might be a safety/quota issue, so we should probably stop or log it
        if (err.status !== 404) {
           break; 
        }
      }
    }

    // If we get here, all models failed
    throw lastError;
    
  } catch (error: any) {
    // Detailed logging for the developer console
    console.error('--- Chat API Error Detail ---');
    console.error('Message:', error.message);
    
    const isActivationError = error.status === 404 || error.message?.includes("not found") || error.message?.includes("not enabled");
    
    if (isActivationError) {
      console.error('TIP: This looks like the "Generative Language API" is not enabled. Please check Google AI Studio.');
    }
    
    // We return a 500 status instead of 404 to ensure the frontend receives JSON, not a 404 HTML page
    return NextResponse.json(
      { 
        reply: isActivationError 
          ? "I'm having trouble connecting to the AI brain. Please ensure the 'Generative Language API' is enabled in your Google AI Studio settings and that your API key is correctly set in .env." 
          : "I'm currently experiencing high volume. A Care Coordinator will reach out via email shortly to assist." 
      },
      { status: 500 }
    );
  }
}
