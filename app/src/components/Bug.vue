<template>
  <div class="flex m-4 bg-gray-100 dark:bg-zinc-800 drop-shadow">
    <div class="flex flex-col w-full px-4 py-1">
      <div class="flex w-full justify-between">
        <span>{{ bug }}</span>
        <span>{{ timestamp }}</span>
      </div>
      <span class="px-2">{{ description }}</span>
      <span class="text-xs text-right text-gray-500">{{ uuid }}</span>
    </div>
    <select @change="changeStatus" v-model="bugStatus" name="" id="" class="bg-gray-100 dark:bg-zinc-800">
      <option value="new">new</option>
      <option value="wip">wip</option>
      <option value="fixed">fixed</option>
    </select>
  </div>
</template>
<script>
export default {
  props: ["bug", "description", "timestamp", "uuid", "status"],
  data() {
    return {
      bugStatus: this.status,
    };
  },
  methods: {
    async changeStatus() {
      console.log(this.status);
      console.log(this.uuid);

      console.log(this.bugStatus);
      let url = `/api/status?uuid=${this.uuid}&status=${this.bugStatus}`;
      console.log(url);
      let response = await fetch(url);
      let responseText = await response.text();
      console.log(responseText);

      this.$emit("refresh", this.uuid, this.bugStatus);
    },
  },
};
</script>
