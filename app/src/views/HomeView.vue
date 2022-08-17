<script setup>
import { getUser } from "../functions/firebaseSetup";
</script>

<template>
  <main class="flex flex-col items-center">
    <div v-if="user" class="text-white text-8xl">Hello {{ user }}</div>
    <router-link
      v-if="!user"
      class="m-2 p-2 bg-blue-800 text-white"
      to="/account"
      >Login</router-link
    >
  </main>
</template>

<script>
export default {
  data() {
    return {
      user: "",
    };
  },
  created() {
    getUser((user) => {
      this.user = user.displayName.split(" ")[0];
    });
  },
};
</script>
