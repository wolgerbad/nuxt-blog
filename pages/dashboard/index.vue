<script setup>
import { authClient } from '~/lib/authClient';

const { data: session } = await authClient.getSession();

const role = session?.user.role;
console.log(session);
if (!session) navigateTo('/login');
</script>

<template>
  <div v-if="role !== 'admin'">
    <AccessRestricted />
  </div>
  <div v-else>
    <AdminDashboard />
  </div>
</template>
