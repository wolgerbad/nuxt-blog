<script setup lang="ts">
defineProps<{
  post: {
    id: string;
    title: string;
    article: string;
  };
}>();
</script>

<template>
  <tr class="hover:bg-gray-50 transition-colors duration-150">
    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
      {{ post.id }}
    </td>
    <td class="px-6 py-4 text-sm text-gray-900 font-medium">
      <div class="max-w-xs truncate" :title="post.title">{{ post.title }}</div>
    </td>
    <td class="px-6 py-4 text-sm text-gray-600">
      <div class="max-w-xs truncate" title="{article}">
        {{ post.article.slice(0, 80) }}...
      </div>
    </td>
    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
      <div class="flex items-center space-x-2">
        <button
          class="border border-green-600 rounded-lg hover:bg-green-600 text-green-600 hover:text-white px-4 py-2 transition-all ease duration-200"
        >
          ✏️ Edit
        </button>
        <button
          class="border border-red-600 rounded-lg hover:bg-red-600 text-red-600 hover:text-white px-4 py-2 transition-all ease duration-200"
        >
          Delete
        </button>
      </div>
    </td>
  </tr>
</template>
