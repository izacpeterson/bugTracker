<script setup>
import { getUser } from "../functions/firebaseSetup";
</script>
<template>
  <div class="flex m-4 bg-gray-100 dark:bg-zinc-800 drop-shadow lg:w-full">
    <span v-if="status == 'new'" class="bg-secondary w-1"></span>
    <span v-if="status == 'wip'" class="bg-primary w-1"></span>
    <span v-if="status == 'fixed'" class="bg-tertiary w-1"></span>
    <div class="flex flex-col w-full px-4 py-1">
      <div class="flex w-full justify-between">
        <router-link :to="{ name: 'bug', params: { uuid: uuid } }">
          <span class="underline">{{ bug }}</span>
        </router-link>
      </div>
      <span class="px-2 h-12 text-clip overflow-hidden ...">{{ description }}</span>
      <span class="text-xs text-right text-gray-500">{{ uuid }}</span>
      <span class="text-xs text-right text-gray-500">{{ assigned }}</span>
    </div>

    <select @change="changeStatus" v-model="bugStatus" name="" id="" class="bg-gray-100 dark:bg-zinc-800">
      <option value="new">new</option>
      <option value="wip">wip</option>
      <option value="fixed">fixed</option>
    </select>
    <button @click="updateAssigned" v-if="assignedUser !== user.uid" class="w-16 bg-primary text-white">+</button>
    <button @click="updateAssigned" v-if="assignedUser == user.uid" class="w-16 bg-secondary text-white">-</button>
  </div>
</template>
<script>
export default {
  props: ["bug", "description", "timestamp", "uuid", "status", "assigned"],
  data() {
    return {
      bugStatus: this.status,
      user: {},
      assignedUser: this.assigned,
    };
  },
  created() {
    getUser((user) => {
      this.user = user;
    });
  },
  methods: {
    async changeStatus() {
      let url = `/api/status?uuid=${this.uuid}&status=${this.bugStatus}`;
      let response = await fetch(url);
      let responseText = await response.text();
      console.log(responseText);

      this.$emit("refresh", this.uuid, this.bugStatus, this.assignedUser);
    },
    async updateAssigned() {
      if (this.assignedUser == "none") {
        getUser((user) => {
          let url = `/api/assign?uuid=${this.uuid}&user=${user.uid}`;
          this.assignedUser = user.uid;
          this.$emit("refresh", this.uuid, this.bugStatus, this.assignedUser);
          fetch(url);
        });
      } else {
        getUser((user) => {
          let url = `/api/assign?uuid=${this.uuid}&user=none`;
          this.assignedUser = "none";
          this.$emit("refresh", this.uuid, this.bugStatus, this.assignedUser);

          fetch(url);
        });
      }
    },
  },
};
</script>
