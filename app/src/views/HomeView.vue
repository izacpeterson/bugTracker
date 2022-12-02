<script setup lang="ts">
import MyProjects from "../components/MyProjects.vue";
</script>

<template>
  <main class="text-center">
    <MyProjects v-if="user"></MyProjects>
    <button @click="signInWithGoogle" v-if="!user" class="btn m-4">Sign In With Google</button>
  </main>
</template>
<script lang="ts">
import { getUser, signIn } from "../composables/firebase";
export default {
  data() {
    return {
      user: "",
    };
  },
  async created() {
    this.user = await getUser();
  },
  methods: {
    signInWithGoogle() {
      signIn();
    },
  },
};
</script>
