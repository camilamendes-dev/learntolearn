CREATE TABLE `lesson_bookings` (
	`id` int AUTO_INCREMENT NOT NULL,
	`slotId` int NOT NULL,
	`studentId` int NOT NULL,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `lesson_bookings_id` PRIMARY KEY(`id`),
	CONSTRAINT `lesson_bookings_slot_unique` UNIQUE(`slotId`)
);
--> statement-breakpoint
CREATE TABLE `lesson_slots` (
	`id` int AUTO_INCREMENT NOT NULL,
	`startsAt` timestamp NOT NULL,
	`durationMinutes` int NOT NULL DEFAULT 60,
	`status` enum('available','booked','blocked','completed') NOT NULL DEFAULT 'available',
	`notes` text,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `lesson_slots_id` PRIMARY KEY(`id`),
	CONSTRAINT `lesson_slots_starts_at_unique` UNIQUE(`startsAt`)
);
--> statement-breakpoint
ALTER TABLE `lesson_bookings` ADD CONSTRAINT `lesson_bookings_slotId_lesson_slots_id_fk` FOREIGN KEY (`slotId`) REFERENCES `lesson_slots`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `lesson_bookings` ADD CONSTRAINT `lesson_bookings_studentId_users_id_fk` FOREIGN KEY (`studentId`) REFERENCES `users`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX `lesson_bookings_student_idx` ON `lesson_bookings` (`studentId`);