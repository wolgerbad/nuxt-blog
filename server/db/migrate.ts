import { migrate } from 'drizzle-orm/mysql2/migrator';
import { connection, db } from '.';
import drizzleConfig from '~/drizzle.config';

await migrate(db, { migrationsFolder: drizzleConfig.out });

await connection.end();
