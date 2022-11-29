<template>
  <div>
    <h2 class="text-xl">My Projects</h2>
    <ul>
      <li v-for="project in projects" :key="project.uuid">
        <nuxt-link :to="'/project/' + project.uuid">{{
          project.name
        }}</nuxt-link>
      </li>
    </ul>
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
    // getUser().then((user) => {
    //   console.log('User', user)
    //   fetch(`/api/getMyProjects/${user}`)
    //     .then((raw) => raw.json())
    //     .then((projects) => {
    //       console.log(projects)
    //     })
    // })
    let user = await getUser()
    let rawData = await fetch(`/api/getMyProjects/${user}`)
    let projects = await rawData.json()
    this.projects = projects
  },
}
</script>
