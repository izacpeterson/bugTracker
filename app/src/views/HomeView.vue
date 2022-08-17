<script setup>
import { getUser } from "../functions/firebaseSetup";
import BugReport from "../components/BugReport.vue";
</script>

<template>
  <main class="flex flex-col items-center">
    <router-link v-if="!user" class="m-2 p-2 bg-blue-800 text-white" to="/account">Login</router-link>
    <div v-if="user" class="text-white flex flex-col justify-center">
      <p class="text-6xl">Hello, {{ user.displayName.split(" ")[0] }}</p>
      <button @click="popupVisible = !popupVisible" class="m-2 p-2 bg-blue-800 text-white">Report Bug</button>
    </div>
    <BugReport v-if="popupVisible" @closePopup="popupVisible = !popupVisible"></BugReport>
  </main>
</template>

<script>
export default {
  data() {
    return {
      user: "",
      popupVisible: false,
    };
  },
  created() {
    getUser((user) => {
      this.user = user;
    });
  },
};
</script>
