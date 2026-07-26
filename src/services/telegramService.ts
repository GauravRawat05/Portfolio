export interface ContactPayload {
  type?: "contact" | "project";
  name: string;
  email?: string;
  message?: string;
  projectType?: string;
  budget?: string;
  details?: string;
}

function escapeMarkdown(text: string): string {
  if (!text) return "";
  return text.replace(/[_*[\]()~`>#+\-=|{}.!]/g, "\\$&");
}

export async function sendTelegramMessage(payload: ContactPayload): Promise<{ success: boolean; error?: string }> {
  try {
    // Attempt 1: Try serverless endpoint /api/contact
    const apiRes = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (apiRes.ok) {
      return { success: true };
    }
  } catch (e) {
    console.warn("API route failed, trying direct Telegram fallback...", e);
  }

  // Fallback: Direct client-side fetch using VITE env vars if available
  const botToken = import.meta.env.VITE_TELEGRAM_BOT_TOKEN || "8910621864:AAHCU43orPmnEOLE-sMDP70OV-353DJ2178";
  const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID || "5905098867";

  if (!botToken || !chatId) {
    return { success: false, error: "Telegram bot configuration missing." };
  }

  const msgText = payload.message || payload.details || "";
  let text = "";

  if (payload.type === "project") {
    text = [
      `🚀 *NEW PROJECT INQUIRY*`,
      ``,
      `👤 *Client Name:* ${escapeMarkdown(payload.name)}`,
      payload.email ? `📧 *Contact:* ${escapeMarkdown(payload.email)}` : "",
      payload.projectType ? `📌 *Project Type:* ${escapeMarkdown(payload.projectType)}` : "",
      payload.budget ? `💰 *Budget/Timeline:* ${escapeMarkdown(payload.budget)}` : "",
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
      `👤 *Name:* ${escapeMarkdown(payload.name)}`,
      payload.email ? `📧 *Contact:* ${escapeMarkdown(payload.email)}` : "",
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
    const res = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: "Markdown",
      }),
    });

    const data = await res.json();
    if (data.ok) {
      return { success: true };
    } else {
      return { success: false, error: data.description || "Failed to send message via Telegram." };
    }
  } catch (err: any) {
    return { success: false, error: err?.message || "Network error sending to Telegram." };
  }
}
