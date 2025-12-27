import { db } from '../db';
import { post } from '../db/schema';

export default defineEventHandler(async (event) => {
  const method = event.method;

  if (method === 'GET') {
    const posts = await db.select().from(post);
    return posts;
  }
});
