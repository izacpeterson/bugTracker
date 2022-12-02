<script setup lang="ts">
import ToDoList from "../components/TodoList.vue";
import BugList from "../components/BugList.vue";
import Chat from "../components/Chat.vue";
import Users from "../components/Users.vue";
</script>
<template>
  <div class="text-center">
    <h2 class="text-2xl">{{ project["name"] }}</h2>
    <!-- {{ $route.params.id }} -->
    <p>{{ project["description"] }}</p>
    <div class="tabs w-full flex items-center justify-center my-4">
      <a @click="listView = 'ToDo'" class="tab" :class="listView == 'ToDo' ? 'tab-active' : ''">Todos</a>
      <a @click="listView = 'Bugs'" class="tab" :class="listView == 'Bugs' ? 'tab-active' : ''">Bugs</a>
      <a @click="listView = 'Chat'" class="tab" :class="listView == 'Chat' ? 'tab-active' : ''">Chat</a>
      <a @click="listView = 'Users'" class="tab" :class="listView == 'Users' ? 'tab-active' : ''">Users</a>
    </div>
    <ToDoList v-if="listView == 'ToDo'"></ToDoList>
    <BugList v-if="listView == 'Bugs'"></BugList>
    <Chat v-if="listView == 'Chat'"></Chat>
    <Users v-if="listView == 'Users'" :users="project['users']"></Users>
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
        users: "",
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
