<template>
  <div>
    <ul class="flex flex-col justify-center items-center">
      <div>To Do List</div>
      <!-- <button @click="newTodo = true" class="btn btn-sm btn-primary">New</button> -->
      <label for="my-modal" class="btn">new todo</label>
      <li v-for="(todo, index) in todos" :key="todo['uuid']">
        <div class="flex items-center m-4">
          <div :class="todo['status'] == 'New' ? '' : 'line-through'">{{ todo["name"] }}</div>
          <font-awesome-icon @click="updateTodo(index)" :icon="todo['status'] == 'New' ? 'fa-solid fa-check' : 'fa-solid fa-rotate-left'" class="m-2 text-success" />
          <font-awesome-icon icon="fa-solid fa-trash" class="m-2 text-error" />
        </div>
        <!-- <div v-if="todo['status'] == 'Done'" class="flex items-center m-4">
          <div class="line-through">{{ todo["name"] }}</div>
          <font-awesome-icon @click="updateTodo(index)" icon="fa-solid fa-rotate-left" class="m-2 text-success" />
          <font-awesome-icon icon="fa-solid fa-trash" class="m-2 text-error" />
        </div> -->
      </li>
    </ul>
  </div>

  <!-- NEW BUG -->
  <input type="checkbox" id="my-modal" class="modal-toggle" />
  <div class="modal">
    <div class="modal-box">
      <div class="form-control w-full max-w-xs">
        <label class="label">
          <span class="label-text">To Do:</span>
        </label>
        <input v-model="newTodo" type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
      </div>

      <div class="modal-action">
        <label for="my-modal" class="btn" @click="addTodo">Yay!</label>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { getUser } from "../composables/firebase";
export default {
  data() {
    return {
      todos: new Array<any>(),
      newTodo: "",
    };
  },
  created() {
    this.getTodos();
  },
  methods: {
    async getTodos() {
      let rawData = await fetch(`/api/todos/project/${this.$route.params.id}`);
      let jsonData = await rawData.json();
      this.todos = jsonData;
    },
    async updateTodo(id: number) {
      this.todos[id].status = this.todos[id].status == "New" ? "Done" : "New";
      await fetch(`/api/todos/update?uuid=${this.todos[id].uuid}&status=${this.todos[id].status}`);
    },
    async addTodo() {
      let newTodo = await fetch(`/api/todos/add?name=${this.newTodo}&project=${this.$route.params.id}`);
      let newUUID = await newTodo.text();
      console.log(newUUID);

      this.todos.push({ name: this.newTodo, uuid: newUUID, status: "New" });

      this.newTodo = "";
    },
  },
};
</script>
