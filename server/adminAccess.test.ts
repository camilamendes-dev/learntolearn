import { describe, expect, it } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

function createStudentContext(): TrpcContext {
  return {
    user: {
      id: 99,
      openId: "student-access-test",
      name: "Aluno de teste",
      email: "aluno@example.com",
      loginMethod: "manus",
      role: "user",
      createdAt: new Date(),
      updatedAt: new Date(),
      lastSignedIn: new Date(),
    },
    req: { protocol: "https", headers: {} } as TrpcContext["req"],
    res: {} as TrpcContext["res"],
  };
}

describe("proteção do painel do professor", () => {
  it("impede que um aluno consulte a agenda administrativa", async () => {
    const caller = appRouter.createCaller(createStudentContext());
    await expect(caller.schedule.adminAgenda()).rejects.toMatchObject({ code: "FORBIDDEN" });
  });
});
