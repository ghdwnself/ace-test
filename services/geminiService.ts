import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

// Initialize only if key is present to avoid immediate crash, handle error gracefully in UI
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

export const generateDiagnosticResponse = async (userMessage: string): Promise<string> => {
  if (!ai) {
    return "I'm sorry, I'm currently offline. Please call us directly at (949) 555-0199.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userMessage,
      config: {
        systemInstruction: `You are a helpful, friendly, and professional virtual assistant for "Bran Solution", a plumbing company in Orange County, CA. 
        
        Your goal is to:
        1. Briefly assess the user's plumbing issue based on their description.
        2. Categorize the urgency (Low, Medium, Emergency).
        3. If it sounds like an emergency (burst pipe, gas leak, major flooding), urge them to call (949) 555-0199 immediately.
        4. Otherwise, suggest they book an appointment via the form below.
        5. Keep responses short (under 50 words) and helpful.
        6. Do NOT provide complex DIY instructions that could lead to liability. Stick to basic triage (e.g., "Turn off the main water valve").
        
        Tone: Trustworthy, calm, local expert.`,
        thinkingConfig: { thinkingBudget: 0 } // Disable thinking for fast chat response
      },
    });

    return response.text || "I didn't catch that. Could you please describe your plumbing issue again?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to the server. Please call us directly for assistance.";
  }
};