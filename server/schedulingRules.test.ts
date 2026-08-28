import { describe, expect, it } from "vitest";
import { canChangeSlotStatus, isEditableAvailabilityStatus, isReservableStatus } from "./schedulingRules";

describe("regras de agenda", () => {
  it("permite reserva somente em horários disponíveis", () => {
    expect(isReservableStatus("available")).toBe(true);
    expect(isReservableStatus("booked")).toBe(false);
    expect(isReservableStatus("blocked")).toBe(false);
    expect(isReservableStatus("completed")).toBe(false);
  });

  it("permite alterar disponibilidade apenas antes da reserva ou em bloqueios", () => {
    expect(isEditableAvailabilityStatus("available")).toBe(true);
    expect(isEditableAvailabilityStatus("blocked")).toBe(true);
    expect(isEditableAvailabilityStatus("booked")).toBe(false);
    expect(isEditableAvailabilityStatus("completed")).toBe(false);
  });

  it("não libera novamente uma aula que ainda possui reserva", () => {
    expect(canChangeSlotStatus("booked", "available")).toBe(false);
    expect(canChangeSlotStatus("booked", "blocked")).toBe(false);
    expect(canChangeSlotStatus("booked", "completed")).toBe(true);
    expect(canChangeSlotStatus("available", "blocked")).toBe(true);
    expect(canChangeSlotStatus("completed", "available")).toBe(false);
  });
});
