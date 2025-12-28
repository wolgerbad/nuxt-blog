<script setup>
const { data: posts } = await useFetch('/api/posts');
</script>

<template>
  <div class="rounded-3xl p-6 bg-white">
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-2xl font-semibold">Latest articles</h2>
      <NuxtLink to="/articles" class="text-green-600">View All</NuxtLink>
    </div>
    <div class="flex flex-col gap-4">
      <div v-for="post in posts" :key="post.id" class="flex flex-col gap-2">
        <NuxtImg
          :src="post.image"
          class="rounded-xl w-full h-52 object-cover"
        />
        <h3 class="text-lg font-semibold">{{ post.title }}</h3>
        <p class="text-gray-800">{{ post.article.slice(0, 80) }}...</p>
        <NuxtLink :to="`/articles/${post.id}`" class="text-green-700"
          >Read more</NuxtLink
        >
      </div>
    </div>
  </div>
</template>
