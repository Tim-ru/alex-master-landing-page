import { z } from "zod";

export const leadSchema = z.object({
  name: z.string().min(2, "Введите имя (минимум 2 символа)").max(80),
  phone: z
    .string()
    .min(10, "Введите корректный номер телефона")
    .max(20)
    .regex(/^[\d\s\+\-\(\)]+$/, "Только цифры и символы +, -, (, )"),
  problem: z.string().max(300).optional(),
  honeypot: z.string().max(0).optional(),
  renderedAt: z.number().optional(),
  pageUrl: z.string().max(500).optional(),
  utmSource: z.string().max(100).optional(),
  utmMedium: z.string().max(100).optional(),
  utmCampaign: z.string().max(100).optional(),
  utmContent: z.string().max(100).optional(),
  utmTerm: z.string().max(100).optional()
});

export type LeadFormValues = z.infer<typeof leadSchema>;
