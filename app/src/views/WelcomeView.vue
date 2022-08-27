<script setup>
import { signInWithGoogle, createPasswordUser, signInPasswordUser, getUser, logout, updateUser } from "../functions/firebaseSetup.js";
import BugReport from "../components/BugReport.vue";
</script>
<template>
  <main class="flex flex-col items-center dark:text-zinc-100 p-6">
    <h1 class="text-6xl">Welcome</h1>
    <h2 class="text-xl">to Izac's bug tracker!</h2>
    <img src="../assets/bug.svg" alt="" class="hidden lg:flex w-1/6 p-12" />
    <p>To continue, please sign in, or create an account</p>
    <div class="flex w-full lg:w-1/4">
      <button @click="page = 'create'" class="m-2 p-2 bg-primary text-white w-full">Create Account</button>
      <button @click="page = 'login'" class="m-2 p-2 bg-primary text-white w-full">Login</button>
    </div>

    <div v-if="page == 'create'" class="flex flex-col lg:flex-row p-8 items-center lg:w-1/2 justify-evenly">
      <button @click="signInWithGoogle" class="m-2 mb-12 p-2 bg-secondary text-white">Create account with Google</button>
      <div class="flex flex-col">
        <h2 class="dark:text-white">Create Account with email and password</h2>
        <input v-model="email" class="m-2 bg-gray-200 dark:bg-zinc-800" type="text" placeholder="email" />
        <input v-model="password" class="m-2 bg-gray-200 dark:bg-zinc-800" type="text" placeholder="password" />
        <button @click="createUser" class="m-2 p-2 bg-secondary text-white">Create</button>
      </div>
    </div>
    <div v-if="page == 'login'" class="flex flex-col lg:flex-row p-8 items-center lg:w-1/2 justify-evenly">
      <button @click="signInWithGoogle" class="m-2 mb-12 p-2 bg-secondary text-white">Login with Google</button>
      <div class="flex flex-col">
        <h2 class="dark:text-white">Login with email and password</h2>
        <input v-model="email" class="m-2 bg-gray-200 dark:bg-zinc-800" type="email" placeholder="email" />
        <input v-model="password" class="m-2 bg-gray-200 dark:bg-zinc-800" type="password" placeholder="password" />
        <button @click="loginUser" class="m-2 p-2 bg-secondary text-white">Login</button>
      </div>
    </div>
    <p class="pt-10">Or if you'd like to just report a bug, click the button below</p>
    <button @click="popupVisible = !popupVisible" class="m-2 p-2 bg-secondary text-white">Report Bug</button>
    <BugReport v-if="popupVisible" @closePopup="popupVisible = !popupVisible" class="text-black"></BugReport>
  </main>
</template>
<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      displayName: "",
      user: null,
      checked: false,
      editedUsername: false,
      count: 0,
      page: "welcome",
      popupVisible: false,
    };
  },
  methods: {
    createUser() {
      createPasswordUser(this.email, this.password);
      this.email = "";
      this.password = "";
    },
    loginUser() {
      signInPasswordUser(this.email, this.password);
      this.email = "";
      this.password = "";
    },
    darkmode(e) {
      console.log(e.target.checked);
      document.querySelector("html").classList.toggle("dark");
      localStorage.setItem("darkmode", e.target.checked);
    },
    logoutUser() {
      logout();
      this.$router.push("/");
    },
    saveDisplayname() {},
  },
};
</script>
