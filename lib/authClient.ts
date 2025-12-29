import { createAuthClient } from 'better-auth/client';
export const authClient = createAuthClient();

export async function signIn({ email, password }) {
  const result = await authClient.signIn.email({
    email,
    password,
  });

  return result;
}
export async function signUp({ name, email, password }) {
  const result = await authClient.signUp.email({
    name,
    email,
    password,
  });

  return result;
}

export async function signOut() {
  await authClient.signOut();
}
