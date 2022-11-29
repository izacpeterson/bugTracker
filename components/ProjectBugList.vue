<template>
  <div>
    <ul class="mt-6">
      <nuxt-link
        :to="'/bug/' + bug.uuid"
        v-for="bug in $store.state.bugs"
        :key="bug.uuid"
        class="card bg-neutral text-neutral-content shadow-xl m-2"
      >
        <div class="card-body">
          <div class="card-title">
            {{ bug.name }}
            <div class="badge badge-primary">{{ bug.status }}</div>
          </div>
          <!-- <div>{{ bug.description }}</div> -->
        </div>
      </nuxt-link>
    </ul>
  </div>
</template>
<script>
export default {
  props: ['projectUUID'],
  data() {
    return {
      bugs: [],
    }
  },
  created() {
    console.log(this.projectUUID)
    fetch(`/api/getProjectBugs/${this.projectUUID}`)
      .then((raw) => raw.json())
      .then((bugs) => {
        console.log(bugs[0])
        this.bugs = bugs
        this.$store.commit('set_bugs', bugs)
      })
  },
}
</script>
