<template>
  <div>
    <!-- <Tutorial /> -->
    <button @click="signIn" class="btn btn-primary">Sign in with google</button>
    <CreateProject :user="user"></CreateProject>
  </div>
</template>

<script>
import { googleSignIn, getUser } from '../assets/functions/firebase.js'
export default {
  data() {
    return {
      user: '',
    }
  },
  mounted() {
    console.log(this.user)
    this.user = getUser()
  },
  methods: {
    signIn() {
      googleSignIn()
    },
  },
}
</script>
<!-- <script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
})
</script> -->
