<script setup>
import { signOut } from '~/lib/authClient';

const router = useRouter();

const { data: posts } = await useFetch('/api/posts');

console.log('posts', posts.value);

async function handleSignOut() {
  await signOut();
  router.go(0);
}
</script>

<template>
  <div class="bg-white rounded-3xl p-8 mt-8">
    <div>
      <h3 class="text-3xl font-bold mb-2">Welcome back, admin</h3>
      <p class="text-lg text-neutral-800 mb-4">
        Manage your blog posts and content from here
      </p>
    </div>
    <button
      class="bg-green-600 hover:bg-green-700 rounded-lg text-white px-4 py-2 mb-6"
    >
      Create New Article
    </button>
    <div class="bg-neutral-100 rounded-lg px-8 py-4 mb-6">
      <h3 class="mb-4 text-2xl font-semibold">Your Articles</h3>
      <table className="w-full bg-white rounded-lg shadow-sm">
        <AppTableHead />
        <tbody className="divide-y divide-gray-200">
          <AppTableList v-for="post in posts" :key="post.id" :post="post" />
        </tbody>
      </table>
    </div>

    <button
      class="bg-red-600 hover:bg-red-700 rounded-lg px-8 py-2 text-white"
      @click="handleSignOut"
    >
      Log out
    </button>
  </div>
</template>
