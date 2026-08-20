interface ContactPayload {
  name?: string;
  email?: string;
  company?: string;
  phone?: string;
  industry?: string;
  service?: string;
  challenge?: string;
  preferredTime?: string;
}

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
    const data: ContactPayload = event.body ? JSON.parse(event.body) : {};

    if (!data.name || !data.email) {
      return {
        statusCode: 400,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ error: "Name and email are required fields." }),
      };
    }

    const referenceId = `ERF-${Math.floor(100000 + Math.random() * 900000)}`;

    console.log("[Netlify Function Lead Received]:", {
      ...data,
      referenceId,
      timestamp: new Date().toISOString(),
    });

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        success: true,
        referenceId,
        message: "Thank you! Our AI Solutions Architect will contact you shortly.",
      }),
    };
  } catch (err) {
    console.error("Netlify contact function error:", err);
    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: "Failed to process lead submission." }),
    };
  }
};
