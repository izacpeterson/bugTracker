<script setup>
import { getUser } from "../functions/firebaseSetup";
</script>
<template>
  <div class="bg-black/50 backdrop-blur fixed top-0 w-full h-full flex flex-col items-center justify-center">
    <form v-if="!submitted" @submit.prevent="submitBug" action="" class="w-full flex flex-col items-center justify-center">
      <h3 class="text-white">Report a bug</h3>
      <input v-model="bug" type="text" name="bug" placeholder="Bug" class="m-2 w-1/4" />
      <textarea v-model="description" type="text" name="description" placeholder="Description" class="m-2 w-1/4 h-1/4" />
      <span>
        <input type="submit" value="Submit" class="m-2 p-2 bg-primary text-white" />
        <button @click="$emit('closePopup')" class="m-2 p-2 bg-primary text-white">Cancel</button>
      </span>
    </form>
    <div v-if="submitted" class="flex flex-col items-center justify-center text-white w-full">
      <h3>Thank you!</h3>
      <p>Thank you for submitting a bug report. It has been received. You may close this popup</p>
      <button @click="$emit('closePopup')" class="m-2 p-2 bg-primary text-white">Close</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      bug: "",
      description: "",
      uid: "",
      submitted: false,
    };
  },
  methods: {
    submitBug() {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        bug: this.bug,
        description: this.description,
        uid: this.uid,
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch("http://localhost:8082/api/report", requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));

      this.submitted = true;
    },
  },
  created() {
    getUser((user) => {
      this.uid = user.uid;
    });
  },
};
</script>
