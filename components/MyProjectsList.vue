<template>
  <div>
    <h2 class="text-xl">My Projects</h2>
    <ul>
      <li v-for="project in $store.state.projects" :key="project.uuid">
        <nuxt-link :to="'/project/' + project.uuid">{{
          project.name
        }}</nuxt-link>
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
