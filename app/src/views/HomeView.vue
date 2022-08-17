<template>
  <main class="flex flex-col items-center">
    <router-link v-if="!user" class="m-2 p-2 bg-primary text-white" to="/account">Login</router-link>
    <div v-if="user" class="dark:text-white flex flex-col justify-center">
      <p class="text-6xl">Hello, {{ user.displayName.split(" ")[0] }}</p>
      <button @click="popupVisible = !popupVisible" class="m-2 p-2 bg-primary text-white">Report Bug</button>
    </div>
    <BugReport v-if="popupVisible" @closePopup="popupVisible = !popupVisible"></BugReport>
    <button @click="reset" class="fixed bottom-0">RESET DB</button>
  </main>
</template>

<script>
import { getUser } from "../functions/firebaseSetup";
import BugReport from "../components/BugReport.vue";
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
  methods: {
    reset() {
      fetch("/api/reset");
    },
  },
};
</script>
