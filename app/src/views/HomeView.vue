<script setup>
import BugReport from "../components/BugReport.vue";
import Bug from "../components/Bug.vue";
</script>

<template>
  <main class="flex flex-col items-center">
    <div v-if="user" class="dark:text-white flex flex-col justify-center items-center">
      <p class="text-6xl">Hello, {{ user.displayName.split(" ")[0] }}</p>
      <button @click="popupVisible = !popupVisible" class="m-2 p-2 bg-secondary text-white">Report Bug</button>
      <div class="flex justify-evenly">
        <ul class="dark:text-gray-300 lg:w-1/3">
          <h2 class="text-center text-xl">New</h2>
          <li v-for="bug in bugs" v-bind:key="bug.title">
            <Bug @refresh="updateList" v-if="bug.status == 'new'" :bug="bug.title" :description="bug.description" :timestamp="bug.timestamp" :uuid="bug.uuid" :status="bug.status" :assigned="bug.assigned" />
          </li>
        </ul>
        <ul class="dark:text-gray-300 lg:w-1/3">
          <h2 class="text-center text-xl">Bugs I'm working on</h2>
          <li v-for="bug in bugs" v-bind:key="bug.title">
            <Bug @refresh="updateList" v-if="bug.assigned == user.uid && bug.status == 'wip'" :bug="bug.title" :description="bug.description" :timestamp="bug.timestamp" :uuid="bug.uuid" :status="bug.status" :assigned="bug.assigned" />
          </li>
        </ul>
      </div>
    </div>

    <BugReport v-if="popupVisible" @closePopup="popupVisible = !popupVisible"></BugReport>

    <!-- <button @click="reset" class="fixed bottom-0">RESET DB</button> -->
  </main>
</template>

<script>
import { getUser } from "../functions/firebaseSetup";

export default {
  data() {
    return {
      user: "",
      popupVisible: false,
      bugs: [],
    };
  },
  created() {
    getUser((user) => {
      this.user = user;
      if (!user) {
        window.location.reload();
      }
    });
    this.getBugs();
  },

  methods: {
    reset() {
      fetch("/api/reset");
    },
    async getBugs() {
      let rawData = await fetch("/api/bugs");
      let jsonData = await rawData.json();
      console.log(jsonData);
      this.bugs = jsonData;
    },
    updateList(uuid, status, assigned) {
      let index = this.bugs.findIndex((bug) => bug.uuid == uuid);
      this.bugs[index].status = status;
      this.bugs[index].assigned = assigned;
    },
  },
};
</script>
