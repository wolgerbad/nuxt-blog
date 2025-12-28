import { auth } from '~/server/auth';

export default defineEventHandler(async (event) => {
  const session = await auth.api.getSession({
    headers: event.headers,
  });

  if (!session) {
    createError({
      statusCode: 400,
      statusMessage: 'Bad request',
      message: 'No session',
    });
  } else return session;
});
