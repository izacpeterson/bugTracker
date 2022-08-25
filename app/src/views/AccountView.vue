<script setup>
import { signInWithGoogle, createPasswordUser, signInPasswordUser, getUser, logout, updateUser } from "../functions/firebaseSetup.js";
</script>
<template>
  <main class="flex flex-col lg:flex-row items-center justify-evenly">
    <div v-if="user">
      <h2>My Account</h2>
      <div class="flex flex-col lg:flex-row items-center">
        <img :src="`https://ui-avatars.com/api/?name=${user.displayName}&background=random&rounded=true`" alt="" class="m-2" />
        <div class="dark:text-white text-xl m-2">
          <input @input="editedUsername = true" v-model="displayName" placeholder="Firstname Lastname" class="bg-zinc-100 dark:bg-zinc-800" />
          <button @click="updateUser(displayName)" v-if="editedUsername" class="m-1 p-1 bg-secondary text-white text-xs">Save</button>
          <p>{{ user.email }}</p>
        </div>
      </div>
      <button @click="logoutUser" class="m-2 p-2 bg-secondary text-white">Logout</button>
    </div>
    <label for="darkmode" class="fixed bottom-0"><input @click="darkmode" type="checkbox" name="darkmode" id="darkmode" v-model="checked" class="m-4" />darkmode</label>
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
      window.location.reload();
      this.$router.push("/");
    },
    saveDisplayname() {},
  },
  async created() {
    if (localStorage.getItem("darkmode") == "true") {
      console.log("darkmode");
      this.checked = true;
    }
    getUser((user) => {
      console.log(user);
      this.user = user;
      this.displayName = user.displayName;
    });
  },
};
</script>
