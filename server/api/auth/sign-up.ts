import { auth } from '~/server/auth';

export default defineEventHandler(async (event) => {
  const { name, email, password } = await readBody(event);
  try {
    const result = await auth.api.signUpEmail({
      body: {
        name,
        email,
        password,
      },
    });
    return result;
  } catch (error) {
    return { error: error.message };
  }
});
