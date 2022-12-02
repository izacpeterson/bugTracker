<template>
  <div>
    <ul class="flex flex-col justify-center items-center">
      <div>BugList List</div>
      <!-- <button @click="newBug = true" class="btn btn-sm btn-primary">New</button> -->
      <label for="bug-modal" class="btn">new bug</label>
      <li v-for="(bug, index) in bugs" :key="bug['uuid']">
        <div class="flex flex-col items-center m-4">
          <div>
            {{ bug["name"] }} <span class="badge badge-primary">{{ bug["status"] }}</span>
          </div>
          <p>{{ bug["description"] }}</p>
          <div class="flex justify-evenly w-full">
            <button @click="updateBug(index)" class="btn btn-sm" :class="bug['status'] == 'New' ? ' btn-success' : 'btn-ghost text-success'">{{ bug["status"] == "New" ? "Complete" : "Redo" }}<font-awesome-icon :icon="bug['status'] == 'New' ? 'fa-solid fa-check' : 'fa-solid fa-rotate-left'" class="ml-2" /></button>
            <button @click="deleteBug(bug['uuid'], index)" class="btn btn-sm btn-error">Delete<font-awesome-icon icon="fa-solid fa-trash" class="ml-2" /></button>
          </div>
        </div>
        <!-- <div v-if="bug['status'] == 'Done'" class="flex items-center m-4">
          <div class="line-through">{{ bug["name"] }}</div>
          <font-awesome-icon @click="updateBug(index)" icon="fa-solid fa-rotate-left" class="m-2 text-success" />
          <font-awesome-icon icon="fa-solid fa-trash" class="m-2 text-error" />
        </div> -->
      </li>
    </ul>
  </div>

  <!-- NEW BUG -->
  <input type="checkbox" id="bug-modal" class="modal-toggle" />
  <div class="modal">
    <div class="modal-box">
      <div class="form-control w-full max-w-xs">
        <label class="label">
          <span class="label-text">To Do:</span>
        </label>
        <input v-model="newBug" type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
      </div>

      <div class="form-control w-full max-w-xs">
        <label class="label">
          <span class="label-text">Project Description:</span>
        </label>
        <textarea v-model="newDescription" class="textarea textarea-bordered"></textarea>
      </div>

      <div class="modal-action">
        <label for="bug-modal" class="btn btn-error">Cancel</label>
        <label for="bug-modal" class="btn btn-primary" @click="addBug">Add</label>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { getUser } from "../composables/firebase";
export default {
  data() {
    return {
      bugs: new Array<any>(),
      newBug: "",
      newDescription: "",
    };
  },
  created() {
    this.getBugs();
  },
  methods: {
    async getBugs() {
      let rawData = await fetch(`/api/bugs/project/${this.$route.params.id}`);
      let jsonData = await rawData.json();
      this.bugs = jsonData;
    },
    async updateBug(id: number) {
      this.bugs[id].status = this.bugs[id].status == "New" ? "Done" : "New";
      await fetch(`/api/bugs/update?uuid=${this.bugs[id].uuid}&status=${this.bugs[id].status}`);
    },
    async addBug() {
      let newBug = await fetch(`/api/bugs/add?name=${this.newBug}&project=${this.$route.params.id}&description=${this.newDescription}`);
      let newUUID = await newBug.text();
      console.log(newUUID);

      this.bugs.push({ name: this.newBug, description: this.newDescription, uuid: newUUID, status: "New" });

      this.newBug = "";
      this.newDescription = "";
    },
    async deleteBug(uuid: Number, index: number) {
      //   alert(uuid);
      this.bugs.splice(index, 1);

      let response = await fetch(`/api/bugs/delete?uuid=${uuid}`);
      let msg = await response.text();
      console.log(msg);
    },
  },
};
</script>
