<template>
  <div>
    <!-- <Tutorial /> -->
    <button v-if="!user" @click="signIn" class="btn btn-primary">
      Sign in with google
    </button>
    <div v-if="user">
      <button @click="projectModal = true" class="btn btn-primary">
        New Project
      </button>
      <MyProjectsList></MyProjectsList>
    </div>
    <CreateProject
      v-if="projectModal"
      :user="user"
      @closeProjectModal="projectModal = false"
    ></CreateProject>
  </div>
</template>

<script>
import { googleSignIn, getUser } from '../assets/functions/firebase.js'
export default {
  data() {
    return {
      user: '',
      projectModal: false,
    }
  },
  async mounted() {
    console.log(this.user)
    this.user = await getUser()
    this.$store.commit('set_user', this.user)
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
