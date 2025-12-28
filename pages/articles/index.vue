<script setup>
const { data: posts } = await useFetch('/api/posts');
</script>

<template>
  <div class="mt-8">
    <div class="mb-8">
      <h1 class="text-3xl font-semibold mb-2">All Articles</h1>
      <p class="text-gray-800">Discover our latest stories and insights</p>
    </div>
    <div class="flex gap-4">
      <div
        v-for="post in posts"
        :key="post.id"
        class="rounded-3xl overflow-hidden flex flex-col bg-white"
      >
        <NuxtImg :src="post.image" class="h-52 object-top" />
        <div class="p-4 flex flex-col gap-4">
          <h3 class="text-xl font-semibold">{{ post.title }}</h3>
          <p class="text-md">{{ post.article.slice(0, 120) }}...</p>
          <NuxtLink :to="`/articles/${post.id}`" class="text-green-700"
            >read more...</NuxtLink
          >
        </div>
      </div>
    </div>
  </div>
</template>
