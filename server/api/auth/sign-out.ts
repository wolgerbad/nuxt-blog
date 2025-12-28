import { auth } from '~/server/auth';

export default defineEventHandler(async () => {
  await auth.api.signOut();
});
