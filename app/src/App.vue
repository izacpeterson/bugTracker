<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>
<template>
  <div>
    <PageHeader />

    <RouterView />
  </div>
</template>

<script>
import PageHeader from "./components/PageHeader.vue";
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
