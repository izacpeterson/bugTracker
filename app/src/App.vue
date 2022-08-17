<script setup>
import { RouterLink, RouterView } from "vue-router";
import PageHeader from "./components/PageHeader.vue";
</script>

<template>
  <div>
    <PageHeader />

    <RouterView />
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Hello World",
    };
  },
  async created() {
    console.log("App created");
    const res = await fetch("/api/test");
    const data = await res.json();
    console.log(data);
  },
};
</script>
