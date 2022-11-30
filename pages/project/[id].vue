<template>
  <div>
    <main class="p-2">
      <h2 class="text-2xl">{{ project.name }}</h2>
      <p class="text-sm">{{ $route.params.id }}</p>

      <p>{{ project.description }}</p>
      <!-- <p>{{ project.owner }}</p> -->

      <button class="btn btn-primary" @click="reportVisible = !reportVisible">Report Bug</button>
      <div class="tabs w-full flex justify-evenly mb-4">
        <div href="" class="tab tab-bordered" :class="selectedTab == 'To Do' ? 'tab-active' : ''" @click="selectedTab = 'To Do'">To Do</div>
        <div class="tab tab-bordered" @click="selectedTab = 'Bugs'" :class="selectedTab == 'Bugs' ? 'tab-active' : ''">Bugs</div>
      </div>
      <ProjectBugList v-if="selectedTab == 'Bugs'" :projectUUID="this.$route.params.id" :projectName="project.name"></ProjectBugList>
      <ProjectTodoList v-if="selectedTab == 'To Do'" :projectUUID="this.$route.params.id"></ProjectTodoList>
      <ReportBug v-if="reportVisible" @close="reportVisible = !reportVisible" :uuid="project.uuid"></ReportBug>
    </main>
  </div>
</template>
<script>
export default {
  data() {
    return {
      project: {},
      reportVisible: false,
      selectedTab: "To Do",
    };
  },
  created() {
    fetch(`/api/getProject/${this.$route.params.id}`)
      .then((raw) => raw.json())
      .then((project) => {
        console.log("PROJECT", project);
        this.project = project[0];
      });
  },
};
</script>
