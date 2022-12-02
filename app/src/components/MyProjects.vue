<template>
  <ul class="text-center">
    <label for="my-modal" class="btn">new project</label>

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

  <input type="checkbox" id="my-modal" class="modal-toggle" />
  <div class="modal">
    <div class="modal-box">
      <div class="form-control w-full max-w-xs">
        <label class="label">
          <span class="label-text">Project Name:</span>
        </label>
        <input v-model="newName" type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
      </div>
      <div class="form-control w-full max-w-xs">
        <label class="label">
          <span class="label-text">Project Description:</span>
        </label>
        <textarea v-model="newDescription" class="textarea textarea-bordered"></textarea>
      </div>

      <div class="modal-action">
        <label for="my-modal" class="btn" @click="newProject">Create</label>
        <label for="my-modal" class="btn">Cancel</label>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { getUser } from "../composables/firebase";
export default {
  data() {
    return {
      projects: [],
      newName: "",
      newDescription: "",
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
    },
    async newProject() {
      let user = await getUser();
      let response = await fetch(`/api/projects/new?name=${this.newName}&description=${this.newDescription}&owner=${user.uid}`);
      let newUUID = await response.text();
      console.log(newUUID);
    },
  },
};
</script>
