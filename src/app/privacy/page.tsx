import type { Metadata } from "next";
import { Section } from "@/components/layout/section";

export const metadata: Metadata = {
  title: "Политика конфиденциальности — Alex Master",
  description: "Политика конфиденциальности и обработки персональных данных сервиса Alex Master.",
  robots: { index: false, follow: false }
};

export default function PrivacyPage() {
  return (
    <Section>
      <div className="max-w-2xl">
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-950">
          Политика конфиденциальности
        </h1>

        <div className="mt-8 space-y-6 text-sm leading-7 text-zinc-600">
          <section>
            <h2 className="text-base font-semibold text-zinc-950">1. Общие положения</h2>
            <p className="mt-2">
              Настоящая политика описывает, как Alex Master собирает, использует и защищает
              персональные данные пользователей сайта.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-zinc-950">2. Какие данные мы собираем</h2>
            <p className="mt-2">
              При отправке заявки через форму мы получаем имя и номер телефона. Дополнительно
              фиксируется URL страницы и источник перехода (UTM-метки), если они присутствуют в
              адресе.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-zinc-950">3. Как мы используем данные</h2>
            <p className="mt-2">
              Данные используются исключительно для связи с вами по вопросу ремонта стиральной
              машины. Мы не передаём данные третьим лицам и не используем их в маркетинговых целях
              без вашего согласия.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-zinc-950">4. Аналитика</h2>
            <p className="mt-2">
              На сайте используется Яндекс.Метрика для сбора обезличенной статистики посещений.
              Метрика работает согласно политике конфиденциальности Яндекса.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-zinc-950">5. Контакт</h2>
            <p className="mt-2">
              По вопросам обработки данных обращайтесь через страницу{" "}
              <a href="/contacts" className="text-teal-700 underline-offset-4 hover:underline">
                Контакты
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </Section>
  );
}
