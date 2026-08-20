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
    const { name, company, email, phone, industry, service, challenge, preferredTime } = data;

    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required fields.' });
    }

    const referenceId = `ERF-${Math.floor(100000 + Math.random() * 900000)}`;

    console.log('[Vercel Lead Received]:', {
      name,
      company,
      email,
      phone,
      industry,
      service,
      challenge,
      preferredTime,
      referenceId,
      timestamp: new Date().toISOString(),
    });

    return res.status(200).json({
      success: true,
      message: 'Strategy call request received successfully! An ERFLOGWORLD AI consultant will contact you within 24 hours.',
      referenceId,
    });
  } catch (err) {
    console.error('Vercel contact function error:', err);
    return res.status(500).json({ error: 'Failed to process lead request' });
  }
}
