<script setup>
defineProps({
  post: {
    type: {
      title: String,
      article: String,
      image: String,
    },
    default: {},
  },
});
</script>

<template>
  <div class="col-start-1 col-span-2 border-2 rounded-3xl overflow-hidden">
    <NuxtImg :src="post.image" class="w-full h-96 object-top" />
    <div class="p-8">
      <div class="mb-8">
        <h3 class="text-3xl font-semibold mb-4">{{ post.title }}</h3>
        <p class="text-lg text-gray-700">
          {{ post.article }}
        </p>
      </div>
      <div class="flex flex-col gap-6">
        <h3 class="text-xl font-semibold">Comments</h3>
        <span class="text-lg">
          Share your thoughts on:
          <span class="font-semibold text-xl"> {{ post.title }}</span>
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
</template>
