ALTER TABLE `comments` DROP INDEX `comments_created_at_unique`;--> statement-breakpoint
ALTER TABLE `comments` DROP INDEX `comments_updated_at_unique`;--> statement-breakpoint
ALTER TABLE `users` DROP INDEX `users_created_at_unique`;