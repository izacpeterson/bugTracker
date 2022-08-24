<template>
  <header class="p-5 bg-primary dark:bg-zinc-800 text-white flex items-center w-full justify-evenly shadow">
    <img width="50" src="../assets/bug.svg" alt="" />
    <h1 class="text-2xl">Izac's Bug Tracker</h1>
    <ul class="flex-grow flex justify-center">
      <li class="m-2"><router-link to="/">Home</router-link></li>
      <li class="m-2"><router-link to="/bugs">Bugs</router-link></li>
      <li class="m-2"><router-link to="/bugs">Users</router-link></li>
    </ul>
    <router-link to="/account">My Account</router-link>
  </header>
</template>
