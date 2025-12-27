<template>
  <div class="bg-neutral-100">
    <div class="max-w-7xl mx-auto">
      <nav class="flex justify-between py-4">
        <div class="flex gap-8 items-center">
          <h1 class="text-2xl text-green-600 font-semibold">Nuxt Blog</h1>
          <div class="flex items-center gap-4">
            <NuxtLink to="/">Home</NuxtLink>
            <NuxtLink to="/about">About</NuxtLink>
            <NuxtLink to="/articles">Articles</NuxtLink>
          </div>
        </div>
        <div>Login</div>
      </nav>
      <main>
        <slot />
      </main>
    </div>
  </div>
</template>
