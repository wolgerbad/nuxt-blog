import type { db } from '..';
import { post } from '../schema';
import posts from './data/post.json';

export default async function seed(db: db) {
  await db.insert(post).values(posts);
}
