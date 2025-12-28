<script setup>
const email = ref('');
const password = ref('');
const error = ref('');

const router = useRouter();
const session = await $fetch('/api/auth/session');

async function signIn() {
  const result = await $fetch('/api/auth/sign-in', {
    method: 'POST',
    body: {
      email: email.value,
      password: password.value,
    },
  });
  if (result.error) return (error.value = result.error);
  router.go(0);
}

if (session) navigateTo('/');
</script>

<template>
  <div class="bg-white w-[33%] mx-auto p-8 rounded-3xl mt-20">
    <div class="flex flex-col gap-8">
      <div class="flex flex-col gap-3 items-center">
        <h3 class="text-2xl font-semibold">Welcome</h3>
        <p>Sign in to access your admin dashboard</p>
      </div>
      <form class="flex flex-col gap-4" @submit.prevent="signIn">
        <div>
          <label for="email" class="block mb-1">Email</label>
          <input
            id="email"
            v-model="email"
            type="email"
            name="email"
            placeholder="Enter your email"
            class="px-4 py-3 border border-gray-400 rounded-lg w-full"
          />
        </div>
        <div>
          <label for="password" class="block mb-1">Password</label>
          <input
            id="password"
            v-model="password"
            type="password"
            name="password"
            placeholder="Enter your password"
            class="px-4 py-3 border border-gray-400 rounded-lg w-full"
          />
        </div>

        <p v-if="error" class="text-red-700">{{ error }}</p>
        <button
          class="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg text-white font-semibold text-lg"
        >
          Sign In
        </button>
        <span class="text-gray-800 text-center"
          >Secure authentication with email and password</span
        >
        <div class="flex items-center gap-2 justify-center">
          <span class="text-gray-800"> Have no account? </span>
          <NuxtLink to="/signup" class="text-green-700">Sign up!</NuxtLink>
        </div>
      </form>
    </div>
  </div>
</template>
