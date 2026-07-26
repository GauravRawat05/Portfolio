export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { type, name, email, message, projectType, budget, details } = req.body;

  const msgText = message || details;

  // Validate fields
  if (!name || !msgText) {
    return res.status(400).json({ error: "Name and message/details are required." });
  }

  const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || process.env.VITE_TELEGRAM_BOT_TOKEN;
  const CHAT_ID = process.env.TELEGRAM_CHAT_ID || process.env.VITE_TELEGRAM_CHAT_ID;

  if (!BOT_TOKEN || !CHAT_ID) {
    console.error("Missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID env vars");
    return res.status(500).json({ error: "Server misconfigured." });
  }

  let text = "";

  if (type === "project") {
    text = [
      `🚀 *NEW PROJECT INQUIRY*`,
      ``,
      `👤 *Client Name:* ${escapeMarkdown(name)}`,
      email ? `📧 *Contact:* ${escapeMarkdown(email)}` : "",
      projectType ? `📌 *Project Type:* ${escapeMarkdown(projectType)}` : "",
      budget ? `💰 *Budget/Timeline:* ${escapeMarkdown(budget)}` : "",
      ``,
      `📝 *Details:*`,
      escapeMarkdown(msgText),
      ``,
      `⏰ _${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}_`,
    ]
      .filter(Boolean)
      .join("\n");
  } else {
    text = [
      `💬 *NEW GET IN TOUCH QUERY*`,
      ``,
      `👤 *Name:* ${escapeMarkdown(name)}`,
      email ? `📧 *Contact:* ${escapeMarkdown(email)}` : "",
      ``,
      `📝 *Message:*`,
      escapeMarkdown(msgText),
      ``,
      `⏰ _${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}_`,
    ]
      .filter(Boolean)
      .join("\n");
  }

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
  if (!text) return "";
  return String(text).replace(/[_*[\]()~`>#+\-=|{}.!]/g, "\\$&");
}
