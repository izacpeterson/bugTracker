<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import PageHeader from "./components/PageHeader.vue";
</script>

<template>
  <PageHeader></PageHeader>
  <RouterView />
</template>
