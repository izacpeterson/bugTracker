<script setup>
import { signInWithGoogle, createPasswordUser, signInPasswordUser, getUser, logout, updateUser } from "../functions/firebaseSetup.js";
</script>
<template>
  <main class="flex flex-col items-center dark:text-zinc-100 p-6">
    <h1 class="text-6xl">Welcome to Izac's bug tracker!</h1>
    <img src="../assets/bug.svg" alt="" class="w-1/6 p-12" />
    <p>To continue, please sign in, or create an account</p>
    <div class="flex w-1/4">
      <button @click="page = 'create'" class="m-2 p-2 bg-secondary text-white w-full">Create Account</button>
      <button @click="page = 'login'" class="m-2 p-2 bg-secondary text-white w-full">Login</button>
    </div>

    <div v-if="page == 'create'" class="flex p-8 items-center w-1/2 justify-evenly">
      <button @click="signInWithGoogle" class="m-2 p-2 bg-secondary text-white">Create account with Google</button>
      <div class="flex flex-col">
        <h2 class="dark:text-white">Create Account with email and password</h2>
        <input v-model="email" class="m-2 bg-gray-200 dark:bg-zinc-800" type="text" placeholder="email" />
        <input v-model="password" class="m-2 bg-gray-200 dark:bg-zinc-800" type="text" placeholder="password" />
        <button @click="createUser" class="m-2 p-2 bg-secondary text-white">Create</button>
      </div>
    </div>
    <div v-if="page == 'login'" class="flex p-8 items-center w-1/2 justify-evenly">
      <button @click="signInWithGoogle" class="m-2 p-2 bg-secondary text-white">Login with Google</button>
      <div class="flex flex-col">
        <h2 class="dark:text-white">Login with email and password</h2>
        <input v-model="email" class="m-2 bg-gray-200 dark:bg-zinc-800" type="email" placeholder="email" />
        <input v-model="password" class="m-2 bg-gray-200 dark:bg-zinc-800" type="password" placeholder="password" />
        <button @click="loginUser" class="m-2 p-2 bg-secondary text-white">Login</button>
      </div>
    </div>
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
