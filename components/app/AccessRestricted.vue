<script setup>
import { signOut } from '~/lib/authClient';

const router = useRouter();
async function handleLogout() {
  await signOut();
  router.go(0);
}
</script>

<template>
  <div class="bg-white rounded-3xl">
    <div
      class="max-w-[60%] mx-auto flex flex-col gap-8 items-center mt-12 p-16"
    >
      <div class="flex flex-col items-center gap-4">
        <span>lock icon</span>
        <h3 class="text-3xl font-semibold">Access Restricted</h3>
        <p class="text-lg text-gray-900 text-center">
          Sorry emir, this admin panel is only accessible to administrators. You
          don't have the required permissions to view this page.
        </p>
      </div>
      <div class="flex flex-col gap-6 items-center">
        <div
          class="bg-yellow-300 border border-yellow-500 text-yellow-900 rounded-2xl px-8 py-4"
        >
          <div class="flex gap-2 items-center">
            <span>warning icon</span>
            <h4>Admin Access Required</h4>
          </div>
          <p>
            Contact your system administrator if you believe you should have
            access to this page.
          </p>
        </div>
        <div class="flex gap-4">
          <button
            class="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg text-white"
          >
            Go to Home
          </button>
          <button
            class="bg-red-600 hover:bg-red-700 px-4 py-2 text-white rounded-lg"
            @click="handleLogout"
          >
            Log out
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
