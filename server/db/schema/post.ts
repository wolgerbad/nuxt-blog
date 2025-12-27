import { int, mysqlTable, text, varchar } from 'drizzle-orm/mysql-core';

const post = mysqlTable('posts', {
  id: int('id').primaryKey().autoincrement(),
  title: varchar('title', { length: 100 }).notNull(),
  article: text('article').notNull(),
  image: text('image').notNull(),
});

export default post;
