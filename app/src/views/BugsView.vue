<template>
  <main>
    <div class="flex">
      <ul class="dark:text-gray-300 w-1/3">
        <h2 class="text-center text-xl">New</h2>
        <li v-for="bug in bugs" v-bind:key="bug.title">
          <Bug v-if="bug.status == 'new'" :bug="bug.title" :description="bug.description" :timestamp="bug.timestamp" :uuid="bug.uuid" :status="bug.status" />
        </li>
      </ul>
      <ul class="dark:text-gray-300 w-1/3">
        <h2 class="text-center text-xl">WIP</h2>
        <li v-for="bug in bugs" v-bind:key="bug.title">
          <Bug v-if="bug.status == 'wip'" :bug="bug.title" :description="bug.description" :timestamp="bug.timestamp" :uuid="bug.uuid" :status="bug.status" />
        </li>
      </ul>
      <ul class="dark:text-gray-300 w-1/3">
        <h2 class="text-center text-xl">Fixed</h2>
        <li v-for="bug in bugs" v-bind:key="bug.title">
          <Bug v-if="bug.status == 'fixed'" :bug="bug.title" :description="bug.description" :timestamp="bug.timestamp" :uuid="bug.uuid" :status="bug.status" />
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
    };
  },
  created() {
    this.getBugs();
  },
  methods: {
    async getBugs() {
      let rawData = await fetch("/api/bugs");
      let jsonData = await rawData.json();
      this.bugs = jsonData;
    },
  },
  components: { Bug },
};
</script>
