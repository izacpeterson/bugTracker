<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <h1>Header</h1>
  </header>

  <RouterView />
</template>

<script>
async function fetchData() {
  const res = await fetch('/api/test')
  const data = await res.json()
  console.log(data);
}

fetchData();
</script>