<script setup>
const route = useRoute();
const postId = route.params.id;

const { data: post } = await useFetch(`/api/posts/${postId}`);

console.log('post', post.value);
</script>

<template>
  <div class="mt-8 grid grid-cols-3 gap-8">
    <div class="col-start-1 col-span-2">
      <AppPost :post="post" />
    </div>
    <AppSidebar />
  </div>
</template>
