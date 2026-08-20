import { GoogleGenAI } from '@google/genai';

export default async function handler(req: any, res: any) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const data = typeof req.body === 'string' ? JSON.parse(req.body) : req.body || {};
    const { message } = data;

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    const apiKey =
      process.env.GEMINI_API_KEY ||
      process.env.VITE_GEMINI_API_KEY ||
      process.env.VERCEL_GEMINI_API_KEY;

    if (apiKey && apiKey !== 'MY_GEMINI_API_KEY') {
      try {
        const ai = new GoogleGenAI({ apiKey });
        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash',
          contents: [
            {
              role: 'user',
              parts: [
                {
                  text: `You are ERFLOGWORLD's AI Solutions Assistant. ERFLOGWORLD helps businesses eliminate repetitive work, automate operations, generate qualified leads, and accelerate growth through AI automation, website development, digital marketing, and creative design.
User Query: "${message}"
Provide a clear, business-focused response in 2-3 sentences highlighting how ERFLOGWORLD's solutions (AI agents, CRM automation, high-converting websites) solve this problem. Keep it professional and inviting.`,
                },
              ],
            },
          ],
        });

        return res.status(200).json({
          reply:
            response.text ||
            'At ERFLOGWORLD, we build tailored AI workflows and software that turn manual processes into scalable growth engines.',
          source: 'gemini',
        });
      } catch (genErr) {
        console.error('Vercel Gemini API error:', genErr);
      }
    }

    // Intelligent Fallback Logic if API key is unconfigured or rate limited
    const msgLower = String(message).toLowerCase();
    let reply =
      'At ERFLOGWORLD, we build tailored AI workflows and digital solutions that help businesses eliminate repetitive work and scale faster.';

    if (
      msgLower.includes('cost') ||
      msgLower.includes('price') ||
      msgLower.includes('roi') ||
      msgLower.includes('save')
    ) {
      reply =
        'Our AI automation systems typically reduce operational labor costs by 40-70% while improving lead response time to under 10 seconds. You can test your potential savings with our interactive ROI Calculator on the page!';
    } else if (
      msgLower.includes('lead') ||
      msgLower.includes('whatsapp') ||
      msgLower.includes('sales') ||
      msgLower.includes('crm')
    ) {
      reply =
        'We integrate 24/7 AI Receptionists, WhatsApp Automation, and CRM sync to capture, qualify, and route high-value leads automatically without manual effort.';
    } else if (
      msgLower.includes('website') ||
      msgLower.includes('app') ||
      msgLower.includes('design') ||
      msgLower.includes('portal')
    ) {
      reply =
        'ERFLOGWORLD builds custom high-performance web applications, SaaS dashboards, and landing pages designed specifically for max conversions and AI integration.';
    } else if (
      msgLower.includes('marketing') ||
      msgLower.includes('seo') ||
      msgLower.includes('ads')
    ) {
      reply =
        'Our performance marketing and SEO strategies focus on bringing targeted, qualified buyers directly to your AI-automated sales pipeline.';
    }

    return res.status(200).json({ reply, source: 'simulated' });
  } catch (err) {
    console.error('Vercel chat function error:', err);
    return res.status(500).json({ error: 'Failed to generate AI response' });
  }
}
