export type SlotStatus = "available" | "booked" | "blocked" | "completed";

export function isReservableStatus(status: SlotStatus) {
  return status === "available";
}

export function isEditableAvailabilityStatus(status: SlotStatus) {
  return status === "available" || status === "blocked";
}

export function canChangeSlotStatus(current: SlotStatus, next: SlotStatus) {
  if (current === "booked") return next === "completed";
  if (current === "completed") return false;
  return next === "available" || next === "blocked";
}
