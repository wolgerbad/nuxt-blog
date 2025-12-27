<script setup>
const { data: posts } = await useFetch('/api/posts');
const latestPost = posts.value.at(-1);
console.log('latest post', latestPost);
</script>

<template>
  <div class="grid grid-cols-3 gap-8 mt-12">
    <div class="col-start-1 col-span-2 border-2 rounded-3xl overflow-hidden">
      <NuxtImg :src="latestPost.image" class="w-full h-96 object-center" />
      <div class="px-8 py-4">
        <div class="mb-8">
          <h3 class="text-3xl font-semibold mb-4">{{ latestPost.title }}</h3>
          <p class="text-lg text-gray-700">
            {{ latestPost.article }}
          </p>
        </div>
        <div class="flex flex-col gap-6">
          <h3 class="text-xl font-semibold">Comments</h3>
          <span class="text-lg">
            Share your thoughts on:
            <span class="font-semibold text-xl"> {{ latestPost.title }}</span>
          </span>
          <div
            class="text-red-800 font-medium py-4 bg-red-300 flex justify-center border-2 border-red-400 rounded-xl"
          >
            You must be logged in to comment
          </div>

          <div>list of comments</div>
        </div>
      </div>
    </div>
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
  </div>
</template>
