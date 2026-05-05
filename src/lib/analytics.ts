declare global {
  interface Window {
    ym?: (counterId: number, action: string, ...args: unknown[]) => void;
  }
}

function getCounterId(): number | null {
  const raw = process.env.NEXT_PUBLIC_YM_COUNTER_ID;
  if (!raw) return null;
  const id = parseInt(raw, 10);
  return isNaN(id) ? null : id;
}

function reachGoal(target: string) {
  if (typeof window === "undefined") return;
  const id = getCounterId();
  if (!id || !window.ym) return;
  window.ym(id, "reachGoal", target);
}

export const analytics = {
  formSubmit: () => reachGoal("form_submit"),
  phoneClick: () => reachGoal("phone_click"),
  whatsappClick: () => reachGoal("whatsapp_click"),
  telegramClick: () => reachGoal("telegram_click")
};
