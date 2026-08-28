import { index, int, mysqlEnum, mysqlTable, text, timestamp, uniqueIndex, varchar } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = mysqlTable("users", {
  /**
   * Surrogate primary key. Auto-incremented numeric value managed by the database.
   * Use this for relations between tables.
   */
  id: int("id").autoincrement().primaryKey(),
  /** Manus OAuth identifier (openId) returned from the OAuth callback. Unique per user. */
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

export const lessonSlots = mysqlTable(
  "lesson_slots",
  {
    id: int("id").autoincrement().primaryKey(),
    startsAt: timestamp("startsAt").notNull(),
    durationMinutes: int("durationMinutes").default(60).notNull(),
    status: mysqlEnum("status", ["available", "booked", "blocked", "completed"])
      .default("available")
      .notNull(),
    notes: text("notes"),
    createdAt: timestamp("createdAt").defaultNow().notNull(),
    updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  },
  table => [uniqueIndex("lesson_slots_starts_at_unique").on(table.startsAt)]
);

export const lessonBookings = mysqlTable(
  "lesson_bookings",
  {
    id: int("id").autoincrement().primaryKey(),
    slotId: int("slotId")
      .notNull()
      .references(() => lessonSlots.id, { onDelete: "cascade" }),
    studentId: int("studentId")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    createdAt: timestamp("createdAt").defaultNow().notNull(),
    updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  },
  table => [
    uniqueIndex("lesson_bookings_slot_unique").on(table.slotId),
    index("lesson_bookings_student_idx").on(table.studentId),
  ]
);

export type LessonSlot = typeof lessonSlots.$inferSelect;
export type InsertLessonSlot = typeof lessonSlots.$inferInsert;
export type LessonBooking = typeof lessonBookings.$inferSelect;
export type InsertLessonBooking = typeof lessonBookings.$inferInsert;
