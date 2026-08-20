import { GoogleGenAI } from "@google/genai";

export const handler = async (event: { httpMethod: string; body: string | null }) => {
  // CORS Preflight
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
      },
      body: "",
    };
  }

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method Not Allowed" }),
    };
  }

  try {
    const { message } = event.body ? JSON.parse(event.body) : {};

    if (!message) {
      return {
        statusCode: 400,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ error: "Message is required" }),
      };
    }

    const apiKey =
      process.env.GEMINI_API_KEY ||
      process.env.VITE_GEMINI_API_KEY ||
      process.env.NETLIFY_GEMINI_API_KEY;
    if (apiKey && apiKey !== "MY_GEMINI_API_KEY") {
      try {
        const ai = new GoogleGenAI({ apiKey });
        const response = await ai.models.generateContent({
          model: "gemini-2.5-flash",
          contents: [
            {
              role: "user",
              parts: [
                {
                  text: `You are ERFLOGWORLD's AI Solutions Assistant. ERFLOGWORLD helps businesses eliminate repetitive work, automate operations, generate qualified leads, and accelerate growth through AI automation, website development, digital marketing, and creative design.
User Query: "${message}"
Provide a clear, business-focused response in 2-3 sentences highlighting how ERFLOGWORLD's solutions solve this problem. Keep it professional and inviting.`,
                },
              ],
            },
          ],
        });

        return {
          statusCode: 200,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify({
            reply: response.text || "At ERFLOGWORLD, we build tailored AI workflows and software that turn manual processes into scalable growth engines.",
            source: "gemini",
          }),
        };
      } catch (geminiError) {
        console.error("Netlify Gemini function error:", geminiError);
      }
    }

    // Fallback response if key is missing or errored
    const msgLower = String(message).toLowerCase();
    let reply = "At ERFLOGWORLD, we build tailored AI workflows and digital solutions that help businesses eliminate repetitive work and scale faster.";

    if (msgLower.includes("cost") || msgLower.includes("price") || msgLower.includes("roi") || msgLower.includes("save")) {
      reply = "Our AI automation systems typically reduce operational labor costs by 40-70% while improving lead response time to under 10 seconds. You can test your potential savings with our interactive ROI Calculator!";
    } else if (msgLower.includes("lead") || msgLower.includes("whatsapp") || msgLower.includes("sales") || msgLower.includes("crm")) {
      reply = "We integrate 24/7 AI Receptionists, WhatsApp Automation, and CRM sync to capture, qualify, and route high-value leads automatically without manual effort.";
    } else if (msgLower.includes("website") || msgLower.includes("app") || msgLower.includes("design") || msgLower.includes("portal")) {
      reply = "ERFLOGWORLD builds custom high-performance web applications, SaaS dashboards, and landing pages designed specifically for max conversions and AI integration.";
    } else if (msgLower.includes("marketing") || msgLower.includes("seo") || msgLower.includes("ads")) {
      reply = "Our performance marketing and SEO strategies focus on bringing targeted, qualified buyers directly to your AI-automated sales pipeline.";
    }

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ reply, source: "simulated" }),
    };
  } catch (err) {
    console.error("Netlify chat function error:", err);
    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: "Failed to generate AI response" }),
    };
  }
};
