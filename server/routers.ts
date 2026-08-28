import { COOKIE_NAME } from "@shared/const";
import { TRPCError } from "@trpc/server";
import { z } from "zod";
import {
  cancelStudentBooking,
  createLessonSlot,
  getAdminSchedule,
  getAvailableSlots,
  getStudentBookings,
  reserveLessonSlot,
  setLessonSlotStatus,
} from "./db";
import { getSessionCookieOptions } from "./_core/cookies";
import { notifyProfessorByEmail } from "./email";
import { notifyOwner } from "./_core/notification";
import { systemRouter } from "./_core/systemRouter";
import { adminProcedure, protectedProcedure, publicProcedure, router } from "./_core/trpc";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),
  schedule: router({
    available: publicProcedure.query(() => getAvailableSlots()),
    mine: protectedProcedure.query(({ ctx }) => getStudentBookings(ctx.user.id)),
    reserve: protectedProcedure
      .input(z.object({ slotId: z.number().int().positive() }))
      .mutation(async ({ ctx, input }) => {
        try {
          const slot = await reserveLessonSlot(input.slotId, ctx.user.id);
          void notifyOwner({
            title: "Nova aula agendada",
            content: `${ctx.user.name || "Um aluno"} reservou ${slot.startsAt.toLocaleString("pt-BR")}.`,
          }).catch(error => console.warn("[Agenda] Falha ao avisar o professor:", error));
          void notifyProfessorByEmail({
            subject: "Nova aula agendada",
            message: `${ctx.user.name || "Um aluno"} reservou ${slot.startsAt.toLocaleString("pt-BR")}.`,
          });
          return { success: true, slot };
        } catch (error) {
          if (error instanceof Error && error.message === "SLOT_NOT_AVAILABLE") {
            throw new TRPCError({
              code: "CONFLICT",
              message: "Este horário não está mais disponível. Escolha outro horário.",
            });
          }
          throw error;
        }
      }),
    cancel: protectedProcedure
      .input(z.object({ bookingId: z.number().int().positive() }))
      .mutation(async ({ ctx, input }) => {
        try {
          const slotId = await cancelStudentBooking(input.bookingId, ctx.user.id);
          void notifyOwner({
            title: "Aula cancelada",
            content: `${ctx.user.name || "Um aluno"} cancelou a reserva do horário #${slotId}.`,
          }).catch(error => console.warn("[Agenda] Falha ao avisar o professor:", error));
          void notifyProfessorByEmail({
            subject: "Aula cancelada",
            message: `${ctx.user.name || "Um aluno"} cancelou a reserva do horário #${slotId}.`,
          });
          return { success: true };
        } catch (error) {
          if (error instanceof Error && error.message === "BOOKING_NOT_FOUND") {
            throw new TRPCError({ code: "NOT_FOUND", message: "Reserva não encontrada." });
          }
          throw error;
        }
      }),
    adminAgenda: adminProcedure.query(() => getAdminSchedule()),
    createSlot: adminProcedure
      .input(
        z.object({
          startsAt: z.coerce.date(),
          durationMinutes: z.number().int().min(30).max(180).default(60),
          notes: z.string().max(500).optional(),
        })
      )
      .mutation(({ input }) => createLessonSlot(input)),
    setSlotStatus: adminProcedure
      .input(
        z.object({
          slotId: z.number().int().positive(),
          status: z.enum(["available", "blocked", "completed"]),
        })
      )
      .mutation(async ({ input }) => {
        try {
          await setLessonSlotStatus(input.slotId, input.status);
          return { success: true };
        } catch (error) {
          if (error instanceof Error && error.message === "INVALID_SLOT_TRANSITION") {
            throw new TRPCError({ code: "CONFLICT", message: "Este status não pode ser aplicado a uma aula já reservada." });
          }
          if (error instanceof Error && error.message === "SLOT_NOT_FOUND") {
            throw new TRPCError({ code: "NOT_FOUND", message: "Horário não encontrado." });
          }
          throw error;
        }
      }),
  }),
});

export type AppRouter = typeof appRouter;
