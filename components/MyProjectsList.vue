<template>
  <div>
    <h2 class="text-xl">My Projects</h2>
    <ul>
      <li
        v-for="project in $store.state.projects"
        :key="project.uuid"
        class="card bg-base-100 mb-10 mx-10"
      >
        <div class="items-center text-center">
          <nuxt-link
            :to="'/project/' + project.uuid"
            class="text-xl font-bold"
            >{{ project.name }}</nuxt-link
          >
          <p>{{ project.description }}</p>
          <div class="flex justify-evenly">
            <span class="badge">Bugs: 0</span>
            <span class="badge">ToDos: 0</span>
          </div>
        </div>
      </li>
    </ul>
    <!-- {{ $store.state.projects }} -->
  </div>
</template>
<script>
import { getUser } from '../assets/functions/firebase'
export default {
  data() {
    return {
      projects: [],
    }
  },
  async created() {
    this.getProjects()
  },
  methods: {
    async getProjects() {
      let user = await getUser()
      let rawData = await fetch(`/api/getMyProjects/${user}`)
      let projects = await rawData.json()
      this.projects = projects
      // this.$store.state.projects = projects
      this.$store.commit('set_projects', projects)
    },
  },
}
</script>
