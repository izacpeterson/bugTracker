<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>
<template>
  <div>
    <PageHeader :user="user"/>

    <RouterView />
  </div>
</template>

<script>
import { getUser } from "./functions/firebaseSetup";

import PageHeader from "./components/PageHeader.vue";
export default {
  data() {
    return {
      message: "Hello World",
      user: null,
    };
  },
  async created() {
    console.log("App created");
    const res = await fetch("/api/test");
    const data = await res.json();
    console.log(data.msg);

    getUser((user) => {
      this.user = user;
    });
  },
};
</script>
