<template>
  <ul>
    <li v-for="user in users" :key="user">
      {{ user }}
    </li>
  </ul>
  <form @submit.prevent="addUser" class="flex flex-col justify-center items-center">
    <div class="form-control w-full max-w-xs">
      <label class="label">
        <span class="label-text">Add User</span>
      </label>
      <input v-model="newUserEmail" type="text" placeholder="Email Address" class="input input-bordered w-full max-w-xs" />
    </div>
    <button class="btn">Add</button>
  </form>
</template>
<script lang="ts">
export default {
  props: ["users"],
  data() {
    return {
      newUserEmail: new String(),
    };
  },
  methods: {
    async addUser() {
      await fetch(`/api/projects/addUser?project=${this.$route.params.id}&user=${this.newUserEmail}`);
    },
  },
};
</script>
