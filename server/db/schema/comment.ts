import { int, mysqlTable, timestamp, varchar } from 'drizzle-orm/mysql-core';
import user from './user';
import post from './post';

const comment = mysqlTable('comments', {
  id: int('id').primaryKey().autoincrement(),
  message: varchar('message', { length: 255 }).notNull(),
  authorId: int('author_id').references(() => user.id),
  postId: int('postId').references(() => post.id),
  createdAt: timestamp('created_at', { mode: 'string' }).defaultNow(),
  updatedAt: timestamp('updated_at', { mode: 'string' }).defaultNow(),
});

export default comment;
