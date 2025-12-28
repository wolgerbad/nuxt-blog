import { db } from '~/server/db';
import { post } from '~/server/db/schema';

export default defineEventHandler(async (event) => {
  const method = event.method;
  const id = event.context.params?.id;

  if (method === 'GET') {
    const postData = await db
      .select()
      .from(post)
      .where({ id: Number(id) });

    return postData[0];
  }
});
