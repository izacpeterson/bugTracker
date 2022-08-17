<script setup>
import { signInWithGoogle, createPasswordUser, signInPasswordUser, getUser, logout } from "../functions/firebaseSetup.js";
</script>
<template>
  <main class="flex items-center justify-evenly">
    <div v-if="!user">
      <h2 class="m-2 dark:text-white text-2xl">Create Account</h2>
      <button @click="signInWithGoogle" class="m-2 p-2 bg-primary text-white">Create account with Google</button>
      <div class="flex flex-col">
        <h2 class="dark:text-white">Create Account with email and password</h2>
        <input v-model="email" class="m-2 bg-gray-200" type="text" placeholder="email" />
        <input v-model="password" class="m-2 bg-gray-200" type="text" placeholder="password" />
        <button @click="createUser" class="m-2 p-2 bg-primary text-white">Create</button>
      </div>
    </div>
    <div v-if="!user">
      <h2 class="m-2 dark:text-white text-xl">Login</h2>
      <button @click="signInWithGoogle" class="m-2 p-2 bg-primary text-white">Login with Google</button>
      <div class="flex flex-col">
        <h2 class="dark:text-white">Login with email and password</h2>
        <input v-model="email" class="m-2 bg-gray-200" type="email" placeholder="email" />
        <input v-model="password" class="m-2 bg-gray-200" type="password" placeholder="password" />
        <button @click="loginUser" class="m-2 p-2 bg-primary text-white">Login</button>
      </div>
    </div>
    <div v-if="user">
      <h2>My Account</h2>
      <div class="flex">
        <img :src="`https://ui-avatars.com/api/?name=${user.displayName}&background=random&rounded=true`" alt="" class="m-2" />
        <div class="dark:text-white text-xl m-2">
          <p>{{ user.displayName }}</p>
          <p>{{ user.email }}</p>
        </div>
      </div>
      <button @click="logout" class="m-2 p-2 bg-primary text-white">Logout</button>
    </div>
    <label for="darkmode"><input @click="darkmode" type="checkbox" name="darkmode" id="darkmode" v-model="checked" />darkmode</label>
  </main>
</template>
<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      user: null,
      checked: false,
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
  },
  async created() {
    if (localStorage.getItem("darkmode") == "true") {
      console.log("darkmode");
      this.checked = true;
    }
    getUser((user) => {
      console.log(user);
      this.user = user;
    });
  },
};
</script>
