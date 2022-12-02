<template>
  <ul>
    <li v-for="project in projects" :key="project['uuid']" class="text-center bg-base-200 m-4 shadow-sm">
      <router-link :to="'/project/' + project['uuid']">
        <div class="font-bold">{{ project["name"] }}</div>
        <div>{{ project["description"] }}</div>
        <div>
          <span class="badge m-2 badge-primary">To Do: 0</span>
          <span class="badge m-2 badge-error">Bugs: 0</span>
        </div>
      </router-link>
    </li>
  </ul>
</template>
<script lang="ts">
import { getUser } from "../composables/firebase";
export default {
  data() {
    return {
      projects: [],
    };
  },
  created() {
    this.getProjects();
  },
  methods: {
    async getProjects() {
      let user = await getUser();
      let rawData = await fetch(`/api/projects/myProjects/${user.uid}`);
      let jsonData = await rawData.json();
      this.projects = jsonData;
      console.log(this.projects[0]);
    },
  },
};
</script>
