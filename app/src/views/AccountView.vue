<script setup>
import {
  signInWithGoogle,
  createPasswordUser,
  signInPasswordUser,
  getUser,
} from "../functions/firebaseSetup.js";
</script>
<template>
  <main class="flex items-center justify-evenly">
    <div>
      <h2 class="m-2 text-white text-2xl">Create Account</h2>
      <button @click="signInWithGoogle" class="m-2 p-2 bg-blue-800 text-white">
        Create account with Google
      </button>
      <div class="flex flex-col">
        <h2 class="text-white">Create Account with email and password</h2>
        <input v-model="email" class="m-2" type="text" placeholder="email" />
        <input
          v-model="password"
          class="m-2"
          type="text"
          placeholder="password"
        />
        <button @click="createUser" class="m-2 p-2 bg-blue-800 text-white">
          Create
        </button>
      </div>
    </div>
    <div>
      <h2 class="m-2 text-white text-xl">Login</h2>
      <button @click="signInWithGoogle" class="m-2 p-2 bg-blue-800 text-white">
        Login with Google
      </button>
      <div class="flex flex-col">
        <h2 class="text-white">Login with email and password</h2>
        <input v-model="email" class="m-2" type="text" placeholder="email" />
        <input
          v-model="password"
          class="m-2"
          type="text"
          placeholder="password"
        />
        <button @click="loginUser" class="m-2 p-2 bg-blue-800 text-white">
          Login
        </button>
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
  },
  async created() {
    getUser((user) => {
      console.log(user);
    });
  },
};
</script>
