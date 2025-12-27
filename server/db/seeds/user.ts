import type { db } from '..';
import { user } from '../schema';
import users from './data/user.json';

export default async function seed(db: db) {
  await db.insert(user).values(users);
}
