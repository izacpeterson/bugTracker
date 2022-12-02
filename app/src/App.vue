<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import PageHeader from "./components/PageHeader.vue";
import io from "socket.io-client";
const socket = io("http://127.0.0.1:3000");
</script>
<template>
  <div>
    <PageHeader></PageHeader>
    <RouterView />
  </div>
</template>
<script lang="ts"></script>
