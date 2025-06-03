Mehrnoosh Joon, [6/3/2025 6:06 PM]
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).send("Only POST allowed");

  const { message } = req.body;

  const openaiRes = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": "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",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: message }]
    })
  });

  const data = await openaiRes.json();
  const reply = data.choices?.[0]?.message?.content || "Oops! Something went wrong.";

  res.status(200).json({ reply });
}

Mehrnoosh Joon, [6/3/2025 6:12 PM]
{
  "version": 2,
  "routes": [
    {
      "src": "/api/chat",
      "dest": "/api/chat.js"
    }
  ]
}
