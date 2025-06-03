export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).send("Only POST allowed");

  const { message } = req.body;

  const openaiRes = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": "Bearer YOUR_API_KEY_HERE",
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