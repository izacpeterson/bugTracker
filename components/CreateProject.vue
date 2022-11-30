<template>
  <div class="fixed top-0 left-0 w-full h-full flex flex-col items-center backdrop-blur-3xl">
    <h2>Create Project</h2>
    <div class="form-control w-full max-w-xs m-2">
      <label for="" class="label">
        <span class="label-text">Project Name</span>
      </label>
      <input v-model="project.name" type="text" class="input input-bordered w-full max-w-xs" />
    </div>
    <div class="form-control w-full max-w-xs m-2">
      <label for="" class="label">
        <span class="label-text">Description</span>
      </label>
      <textarea v-model="project.description" class="textarea textarea-bordered h-24"></textarea>
    </div>
    <button @click="createProject" class="btn btn-primary m-2">Create Project</button>
    <button @click="$emit('closeProjectModal')" class="btn btn-error m-2">Cancel</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: "",
      project: {
        name: "",
        owner: "",
        description: "",
      },
    };
  },
  methods: {
    async createProject() {
      this.project.owner = await getUser();
      console.log("owner", this.project.owner);

      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify(this.project);

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch("/api/createProject", requestOptions)
        .then((response) => response.text())
        .then((result) => {
          console.log(result);
          this.$router.push(`/project/${result}`);
        })
        .catch((error) => console.log("error", error));
    },
  },
};
</script>
