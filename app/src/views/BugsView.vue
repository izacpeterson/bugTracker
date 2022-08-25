<template>
  <main>
    <div v-if="!isMobile" class="flex justify-evenly">
      <ul class="dark:text-gray-300 lg:w-1/4">
        <h2 class="text-center text-xl">New</h2>
        <li v-for="bug in bugs" v-bind:key="bug.title">
          <Bug @refresh="updateList" v-if="bug.status == 'new'" :bug="bug.title" :description="bug.description" :timestamp="bug.timestamp" :uuid="bug.uuid" :status="bug.status" />
        </li>
      </ul>
      <ul class="dark:text-gray-300 w-1/4">
        <h2 class="text-center text-xl">WIP</h2>
        <li v-for="bug in bugs" v-bind:key="bug.title">
          <Bug @refresh="updateList" v-if="bug.status == 'wip'" :bug="bug.title" :description="bug.description" :timestamp="bug.timestamp" :uuid="bug.uuid" :status="bug.status" />
        </li>
      </ul>
      <ul class="dark:text-gray-300 w-1/4">
        <h2 class="text-center text-xl">Fixed</h2>
        <li v-for="bug in bugs" v-bind:key="bug.title">
          <Bug @refresh="updateList" v-if="bug.status == 'fixed'" :bug="bug.title" :description="bug.description" :timestamp="bug.timestamp" :uuid="bug.uuid" :status="bug.status" />
        </li>
      </ul>
    </div>
    <div v-if="isMobile" class="flex flex-col items-center justify-evenly">
      <div class="flex justify-between items-center w-full px-10">
        <button @click="previousList"><img src="../assets/arrow-right-solid.svg" class="w-10 rotate-180" /></button>
        <h2 class="dark:text-white text-2xl">{{ mobileList }}</h2>
        <button @click="nextList"><img src="../assets/arrow-right-solid.svg" class="w-10" /></button>
      </div>
      <ul v-if="mobileList == 'New'" class="dark:text-gray-300 lg:w-1/4">
        <li v-for="bug in bugs" v-bind:key="bug.title">
          <Bug @refresh="updateList" v-if="bug.status == 'new'" :bug="bug.title" :description="bug.description" :timestamp="bug.timestamp" :uuid="bug.uuid" :status="bug.status" />
        </li>
      </ul>
      <ul v-if="mobileList == 'WIP'" class="dark:text-gray-300 lg:w-1/4">
        <li v-for="bug in bugs" v-bind:key="bug.title">
          <Bug @refresh="updateList" v-if="bug.status == 'wip'" :bug="bug.title" :description="bug.description" :timestamp="bug.timestamp" :uuid="bug.uuid" :status="bug.status" />
        </li>
      </ul>
      <ul v-if="mobileList == 'Fixed'" class="dark:text-gray-300 lg:w-1/4">
        <li v-for="bug in bugs" v-bind:key="bug.title">
          <Bug @refresh="updateList" v-if="bug.status == 'fixed'" :bug="bug.title" :description="bug.description" :timestamp="bug.timestamp" :uuid="bug.uuid" :status="bug.status" />
        </li>
      </ul>
    </div>
  </main>
</template>
<script>
import Bug from "../components/Bug.vue";
export default {
  data() {
    return {
      bugs: [],
      isMobile: false,
      mobileList: "New",
    };
  },
  created() {
    this.getBugs();
    this.isMobile = window.innerWidth < 900;
  },
  methods: {
    async getBugs() {
      let rawData = await fetch("/api/bugs");
      let jsonData = await rawData.json();
      this.bugs = jsonData;
    },
    updateList(uuid, status) {
      let index = this.bugs.findIndex((bug) => bug.uuid == uuid);
      this.bugs[index].status = status;
    },
    nextList() {
      if (this.mobileList == "New") {
        this.mobileList = "WIP";
      } else if (this.mobileList == "WIP") {
        this.mobileList = "Fixed";
      } else if (this.mobileList == "Fixed") {
        this.mobileList = "New";
      }
    },
    previousList() {
      if (this.mobileList == "WIP") {
        this.mobileList = "New";
      } else if (this.mobileList == "Fixed") {
        this.mobileList = "WIP";
      } else if (this.mobileList == "New") {
        this.mobileList = "Fixed";
      }
    },
  },
  components: { Bug },
};
</script>
