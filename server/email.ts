type ScheduleEmail = {
  subject: string;
  message: string;
};

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, character => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "'": "&#039;",
      '"': "&quot;",
    };
    return entities[character] ?? character;
  });
}

/**
 * Envia avisos transacionais se o Resend estiver configurado. Enquanto os
 * campos estiverem vazios, a função retorna false sem impedir a reserva.
 */
export async function notifyProfessorByEmail({ subject, message }: ScheduleEmail) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  const to = process.env.PROFESSOR_NOTIFICATION_EMAIL;

  if (!apiKey || !from || !to) return false;

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        subject,
        html: `<main style="font-family:Arial,sans-serif;color:#1F4D3A"><h1>${escapeHtml(subject)}</h1><p>${escapeHtml(message)}</p></main>`,
      }),
    });

    if (!response.ok) {
      console.warn(`[Email] Resend não aceitou a notificação (${response.status}).`);
      return false;
    }

    return true;
  } catch (error) {
    console.warn("[Email] Falha no envio de e-mail:", error);
    return false;
  }
}
