import { auth } from '~/server/auth';

export default defineEventHandler(async (event) => {
  const { email, password } = await readBody(event);
  try {
    const result = await auth.api.signInEmail({
      body: {
        email,
        password,
      },
    });

    return result;
  } catch (error) {
    return { error: error.message };
  }
});
