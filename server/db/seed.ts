import * as seeds from './seeds';
import * as schema from './schema';
import { db } from '.';

for (const table of [schema.post, schema.user]) {
  await db.delete(table);
}

await seeds.post(db);
await seeds.user(db);
