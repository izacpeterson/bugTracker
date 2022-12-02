<template>
  <ul>
    <li v-for="chat in chats" :key="chat">
      <div class="chat" :class="chat['user'] == user['uid'] ? 'chat-end' : 'chat-start'">
        <div class="chat-header">{{ chat["name"] }}</div>
        <div class="chat-bubble">{{ chat["message"] }}</div>
      </div>
    </li>
  </ul>
  <form @submit.prevent="sendMessage">
    <input v-model="newMessage" type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
    <button class="btn">Send</button>
  </form>
</template>
<script lang="ts">
import io from "socket.io-client";
const socket = io();
import { getUser } from "../composables/firebase";
export default {
  data() {
    return {
      chats: new Array<any>(),
      newMessage: "",
      user: {
        uid: "",
      },
    };
  },
  async created() {
    socket.on("newMessage", (data) => {
      console.log(data);
      this.chats.push(data);
    });
    this.user = await getUser();
    this.getMessages();
  },
  methods: {
    async sendMessage() {
      let user = await getUser();
      this.user = user;
      let msg = {
        message: this.newMessage,
        user: user.uid,
        name: user.displayName,
        project: this.$route.params.id,
      };
      socket.emit("newMessage", msg);
      this.chats.push(msg);
      let response = await fetch(`/api/chats/add?message=${this.newMessage}&user=${user.uid}&name=${user.displayName}&project=${this.$route.params.id}`);
      let responseText = await response.text();
      console.log(responseText);
    },
    async getMessages() {
      let rawData = await fetch(`/api/chats/get?project=${this.$route.params.id}`);
      let jsonData = await rawData.json();
      this.chats = jsonData;
    },
  },
};
</script>
