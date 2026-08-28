import { describe, expect, it } from "vitest";
import { notifyProfessorByEmail } from "./email";

describe("e-mail transacional", () => {
  it("não bloqueia a agenda enquanto as credenciais não foram preenchidas", async () => {
    const original = {
      apiKey: process.env.RESEND_API_KEY,
      from: process.env.RESEND_FROM_EMAIL,
      to: process.env.PROFESSOR_NOTIFICATION_EMAIL,
    };
    delete process.env.RESEND_API_KEY;
    delete process.env.RESEND_FROM_EMAIL;
    delete process.env.PROFESSOR_NOTIFICATION_EMAIL;

    await expect(notifyProfessorByEmail({ subject: "Teste", message: "Mensagem" })).resolves.toBe(false);

    process.env.RESEND_API_KEY = original.apiKey;
    process.env.RESEND_FROM_EMAIL = original.from;
    process.env.PROFESSOR_NOTIFICATION_EMAIL = original.to;
  });
});
