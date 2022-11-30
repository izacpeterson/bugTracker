<template>
  <div>
    <ul class="mt-6">
      <div v-for="bug in bugs" :key="bug.uuid" class="collapse border border-base-300 bg-base-100 rounded-box m-2" tabindex="0">
        <div class="collapse-title text-xl font-medium">
          {{ bug.name }}
          <!-- <div class="badge badge-primary">{{ bug.status }}</div> -->
        </div>
        <div class="collapse-content">
          <p>{{ bug.description }}</p>
          <div class="btn-group">
            <span class="btn btn-primary">Done</span>
            <span class="btn btn-error">Delete</span>
          </div>
        </div>
      </div>
    </ul>
  </div>
</template>
<script>
export default {
  props: ["projectUUID"],
  data() {
    return {
      bugs: [],
    };
  },
  created() {
    console.log(this.projectUUID);
    fetch(`/api/getProjectBugs/${this.projectUUID}`)
      .then((raw) => raw.json())
      .then((bugs) => {
        console.log(bugs[0]);
        this.bugs = bugs;
      });
  },
};
</script>
