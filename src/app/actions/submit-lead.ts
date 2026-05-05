"use server";

import { leadSchema } from "@/lib/lead-schema";

const MIN_FILL_TIME_MS = 3000;

async function sendToTelegram(text: string): Promise<void> {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) return;

  await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: chatId, text, parse_mode: "HTML" })
  });
}

export type SubmitLeadResult = { ok: true } | { ok: false; error: string };

export async function submitLead(formData: unknown): Promise<SubmitLeadResult> {
  const parsed = leadSchema.safeParse(formData);

  if (!parsed.success) {
    return { ok: false, error: "Проверьте заполнение формы." };
  }

  const { name, phone, problem, honeypot, renderedAt } = parsed.data;

  // Silent rejection for bots
  if (honeypot) {
    return { ok: true };
  }

  if (renderedAt && Date.now() - renderedAt < MIN_FILL_TIME_MS) {
    return { ok: true };
  }

  const submittedAt = new Date().toLocaleString("ru-RU", { timeZone: "Europe/Moscow" });

  const lines = [
    "📋 <b>Новая заявка</b>",
    `👤 ${name}`,
    `📞 ${phone}`,
    problem ? `💬 ${problem}` : null,
    `🕐 ${submittedAt}`
  ].filter(Boolean);

  try {
    await sendToTelegram(lines.join("\n"));
  } catch {
    console.error("Telegram send failed");
  }

  return { ok: true };
}
