export interface ContactPayload {
  type?: "contact" | "project";
  name: string;
  email?: string;
  message?: string;
  projectType?: string;
  budget?: string;
  details?: string;
}

export async function sendTelegramMessage(payload: ContactPayload): Promise<{ success: boolean; error?: string }> {
  try {
    const apiRes = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await apiRes.json().catch(() => ({}));

    if (apiRes.ok && data.success) {
      return { success: true };
    }

    return {
      success: false,
      error: data.error || "Failed to send message. Please try again later.",
    };
  } catch (e: any) {
    console.error("Failed to send message via API endpoint:", e);
    return {
      success: false,
      error: e?.message || "Network error. Please try again later.",
    };
  }
}

