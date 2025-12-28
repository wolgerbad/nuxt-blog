<script setup>
const { data: posts } = await useFetch('/api/posts');
const latestPost = posts.value.at(-1);
console.log('latest post', latestPost);
</script>

<template>
  <div class="grid grid-cols-3 gap-8 mt-12">
    <AppPost :post="latestPost" />
    <AppSidebar />
  </div>
</template>
