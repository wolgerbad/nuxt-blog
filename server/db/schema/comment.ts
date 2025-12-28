import { int, mysqlTable, timestamp, varchar } from 'drizzle-orm/mysql-core';
import { post } from './post';
import { user } from './auth';

export const comment = mysqlTable('comments', {
  id: int('id').primaryKey().autoincrement(),
  message: varchar('message', { length: 255 }).notNull(),
  authorId: varchar('author_id', { length: 36 }).references(() => user.id),
  postId: int('postId').references(() => post.id),
  createdAt: timestamp('created_at', { mode: 'string' }).defaultNow(),
  updatedAt: timestamp('updated_at', { mode: 'string' }).defaultNow(),
});
