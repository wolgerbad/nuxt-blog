<script setup>
const session = await $fetch('/api/auth/session');

const fullName = ref('');
const email = ref('');
const password = ref('');

const error = ref('');

const router = useRouter();

const signUp = async () => {
  const result = await $fetch('/api/auth/sign-up', {
    method: 'POST',
    body: {
      name: fullName.value,
      email: email.value,
      password: password.value,
    },
  });

  if (result.error) return (error.value = result.error);

  router.go(0);
};

if (session) navigateTo('/');
</script>

<template>
  <div class="bg-white w-[33%] mx-auto p-8 rounded-3xl mt-20">
    <div class="flex flex-col gap-8">
      <div class="flex flex-col gap-3 items-center">
        <h3 class="text-2xl font-semibold">Create Account</h3>
        <p>Sign up to get started with your admin dashboard</p>
      </div>
      <form class="flex flex-col gap-4" @submit.prevent="signUp">
        <div>
          <label for="name" class="block mb-1">Full Name</label>
          <input
            id="name"
            v-model="fullName"
            type="name"
            name="name"
            placeholder="Enter your full name"
            class="px-4 py-3 border border-gray-400 rounded-lg w-full"
          />
        </div>
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
        <p v-if="error" class="text-red-800">{{ error }}</p>
        <button
          class="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg text-white font-semibold text-lg"
        >
          Sign In
        </button>
        <span class="text-gray-800 text-center"
          >Secure authentication with email and password</span
        >
        <div class="flex items-center gap-2 justify-center">
          <span class="text-gray-800"> Already have an account? </span>
          <NuxtLink to="/login" class="text-green-700">Sign In!</NuxtLink>
        </div>
      </form>
    </div>
  </div>
</template>
