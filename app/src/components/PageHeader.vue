<template>
  <header class="p-5 bg-primary dark:bg-zinc-800 text-white flex items-center w-full justify-evenly shadow">
    <img width="50" src="../assets/bug.svg" alt="" />
    <h1 class="text-2xl">Izac's Bug Tracker</h1>
    <ul class="flex-grow flex justify-center">
      <li class="m-2">
        <router-link to="/">Home</router-link>
      </li>
      <li class="m-2">
        <router-link to="/bugs">Bugs</router-link>
      </li>
      <!-- <li class="m-2"><router-link to="/bugs">Users</router-link></li> -->
    </ul>
    <router-link v-if="!user" to="/account">My Account</router-link>
    <!-- <router-link v-if="user" to="/account" class="flex items-center">
      <img :src="`https://ui-avatars.com/api/?name=${user.displayName}&background=random&rounded=true`" alt=""
        class="m-2 w-8" />
      {{ user.displayName }}
    </router-link> -->
    <div v-if="user" class="group relative">
      <router-link to="/account" class="flex items-center">
        <img :src="`https://ui-avatars.com/api/?name=${user.displayName}&background=random&rounded=true`" alt="" class="m-2 w-8" /><span class="hidden lg:flex">{{ user.displayName }}</span>
      </router-link>
      <ul class="hidden group-hover:block absolute w-32 right-0 bg-zinc-200 text-zinc-900">
        <li class="p-2 cursor-pointer">
          <router-link to="/account">My Account</router-link>
        </li>
        <li class="p-2 cursor-pointer">
          <router-link to="/account">Logout</router-link>
        </li>
        <!-- <li><router-link to="/account"></router-link>My Account</li> -->
      </ul>
    </div>
  </header>
</template>
<script>
export default {
  props: ["user"],
};
</script>
