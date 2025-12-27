import {
  boolean,
  int,
  mysqlTable,
  timestamp,
  varchar,
} from 'drizzle-orm/mysql-core';

const user = mysqlTable('users', {
  id: int('id').primaryKey().autoincrement(),

  name: varchar('name', {
    length: 100,
  }),

  email: varchar('email', {
    length: 100,
  })
    .notNull()
    .unique(),

  password: varchar('password', {
    length: 255,
  }).notNull(),

  isAdmin: boolean('is_admin').default(false),

  createdAt: timestamp('created_at', { mode: 'string' }).defaultNow(),
});

export default user;
