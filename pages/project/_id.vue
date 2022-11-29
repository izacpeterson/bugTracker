<template>
  <div>
    <main class="p-2">
      <h2 class="text-2xl">{{ project.name }}</h2>
      <p>{{ project.description }}</p>
      <p>{{ project.owner }}</p>
      <!-- {{ $route.params.id }} -->
      <button class="btn btn-primary" @click="reportVisible = !reportVisible">
        Report Bug
      </button>
      <ProjectBugList
        :projectUUID="this.$route.params.id"
        :projectName="project.name"
      ></ProjectBugList>
      <ReportBug
        v-if="reportVisible"
        @close="reportVisible = !reportVisible"
        :uuid="project.uuid"
      ></ReportBug>
    </main>
  </div>
</template>
<script>
export default {
  data() {
    return {
      project: {},
      reportVisible: false,
    }
  },
  beforeCreate() {
    fetch(`/api/getProject/${this.$route.params.id}`)
      .then((raw) => raw.json())
      .then((project) => {
        console.log(project)
        this.project = project[0]
      })
  },
}
</script>
