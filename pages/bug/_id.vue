<template>
  <div>
    <h2>{{ bug.name }}</h2>
    <p>{{ bug.description }}</p>

    <div class="flex items-center">
      <div>Status:</div>
      <select v-model="bug.status" class="select select-sm">
        <option>new</option>
        <option>WIP</option>
        <option>Fixed</option>
      </select>
    </div>
    <!-- <pre>{{ bug }}</pre> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      bug: {},
    }
  },
  async created() {
    let rawData = await fetch(`/api/getBug/${this.$route.params.id}`)
    let jsonData = await rawData.json()
    this.bug = jsonData
  },
}
</script>
