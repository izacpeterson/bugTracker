<template>
  <div class="fixed top-0 left-0 w-full h-full flex flex-col items-center backdrop-blur-3xl">
    <h2 class="text-2xl">Report Bug</h2>
    <p class="text-sm">{{ uuid }}</p>
    <div class="form-control w-full max-w-xs m-2">
      <label for="" class="label">
        <span class="label-text">Bug</span>
      </label>
      <input v-model="bug.name" type="text" class="input input-bordered w-full max-w-xs" />
    </div>
    <div class="form-control w-full max-w-xs m-2">
      <label for="" class="label">
        <span class="label-text">Description</span>
      </label>
      <textarea v-model="bug.description" class="textarea textarea-bordered h-24"></textarea>
    </div>
    <button @click="reportBug" class="btn btn-primary m-2">Report Bug</button>
    <button @click="$emit('close')" class="btn btn-error m-2">Cancel</button>
  </div>
</template>
<script>
export default {
  props: ["uuid"],
  data() {
    return {
      bug: {
        name: "",
        description: "",
        project: this.uuid,
      },
    };
  },
  methods: {
    reportBug() {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        name: this.bug.name,
        description: this.bug.description,
        project: this.uuid,
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch("/api/reportBug", requestOptions)
        .then((response) => response.text())
        .then((result) => {
          console.log(result);
          this.$emit("close");
        })
        .catch((error) => console.log("error", error));
    },
  },
};
</script>
