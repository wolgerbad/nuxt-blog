<script setup>
import { authClient } from '~/lib/authClient';

const session = await authClient.getSession();
</script>

<template>
  <nav class="py-4 bg-white">
    <div class="max-w-7xl mx-auto flex justify-between">
      <div class="flex gap-8 items-center">
        <NuxtLink to="/" class="text-2xl text-green-600 font-semibold"
          >Nuxt Blog</NuxtLink
        >
        <div class="flex items-center gap-4">
          <NuxtLink to="/" class="hover:text-green-600">Home</NuxtLink>
          <NuxtLink to="/about" class="hover:text-green-600">About</NuxtLink>
          <NuxtLink to="/articles" class="hover:text-green-600"
            >Articles</NuxtLink
          >
        </div>
      </div>
      <NuxtLink
        v-if="!session"
        to="/login"
        class="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg text-white"
        >Login</NuxtLink
      >
      <NuxtLink
        v-else
        to="/dashboard"
        class="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg text-white"
        >Admin Dashboard</NuxtLink
      >
    </div>
  </nav>
</template>
