export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  // Validate fields
  if (!name || !message) {
    return res.status(400).json({ error: "Name and message are required." });
  }

  const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
  const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

  if (!BOT_TOKEN || !CHAT_ID) {
    console.error("Missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID env vars");
    return res.status(500).json({ error: "Server misconfigured." });
  }

  // Format the Telegram message
  const text = [
    `🚀 *New Portfolio Message*`,
    ``,
    `👤 *Name:* ${escapeMarkdown(name)}`,
    email ? `📧 *Email:* ${escapeMarkdown(email)}` : "",
    ``,
    `💬 *Message:*`,
    escapeMarkdown(message),
    ``,
    `⏰ _${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}_`,
  ]
    .filter(Boolean)
    .join("\n");

  try {
    const telegramRes = await fetch(
      `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text,
          parse_mode: "Markdown",
        }),
      }
    );

    const data = await telegramRes.json();

    if (!data.ok) {
      console.error("Telegram API error:", data);
      return res.status(500).json({ error: "Failed to send message." });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Telegram send error:", err);
    return res.status(500).json({ error: "Internal server error." });
  }
}

function escapeMarkdown(text) {
  return text.replace(/[_*[\]()~`>#+\-=|{}.!]/g, "\\$&");
}
