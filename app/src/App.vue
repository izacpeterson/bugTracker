<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import PageHeader from "./components/PageHeader.vue";
</script>

<template>
  <div>
    <PageHeader></PageHeader>
    <RouterView />
  </div>
</template>
