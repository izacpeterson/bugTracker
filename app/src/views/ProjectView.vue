<script setup lang="ts">
import ToDoList from "../components/TodoList.vue";
import BugList from "../components/BugList.vue";
</script>
<template>
  <div class="text-center">
    <h2 class="text-2xl">{{ project["name"] }}</h2>
    <!-- {{ $route.params.id }} -->
    <p>{{ project["description"] }}</p>
    <ToDoList v-if="listView == 'ToDo'"></ToDoList>
    <BugList v-if="listView == 'Bugs'"></BugList>
    <!-- <div>
      <span class="badge m-2 badge-primary"
        >To Do:
        {{
          todos.filter((todo) => {
            return todo["status"] == "New";
          }).length
        }}</span
      >
      <span class="badge m-2 badge-error">Bugs: 0</span>
    </div> -->
  </div>
</template>
<script lang="ts">
import { getUser } from "../composables/firebase";
export default {
  data() {
    return {
      project: {
        name: "",
        description: "",
      },
      bugs: [],
      listView: "ToDo",
    };
  },
  created() {
    this.getProject();
  },
  methods: {
    async getProject() {
      let rawData = await fetch(`/api/projects/project/${this.$route.params.id}`);
      let jsondData = await rawData.json();
      this.project = jsondData;
      console.log(jsondData);
    },
  },
};
</script>
