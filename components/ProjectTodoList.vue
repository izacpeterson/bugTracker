<template>
  <div class="flex flex-col justify-center">
    <button class="btn btn-primary btn-sm" @click="todoVisible = !todoVisible">New ToDo</button>
    <select v-model="viewTodo" class="select select-sm m-2">
      <option>All</option>
      <option>New</option>
      <option>Done</option>
    </select>
    <ul>
      <li v-for="(todo, index) in todos" :key="todo.uuid">
        <div v-if="todo.status == 'new' && (viewTodo == 'New' || viewTodo == 'All')" class="flex items-center justify-between w-2/3 m-auto">
          <div>{{ todo.name }}</div>
          <div>
            <font-awesome-icon v-if="todo.status == 'new'" @click="update(todo.uuid, todo.status, index)" icon="fa-solid fa-check" class="m-2 text-primary" />
            <font-awesome-icon icon="fa-solid fa-trash" class="m-2 text-error" />
          </div>
        </div>
        <div v-if="todo.status == 'done' && (viewTodo == 'Done' || viewTodo == 'All')" class="flex items-center justify-between w-2/3 m-auto">
          <div class="line-through">{{ todo.name }}</div>
          <div>
            <font-awesome-icon @click="update(todo.uuid, todo.status, index)" icon="fa-solid fa-rotate-left" class="m-2 text-primary" />
            <font-awesome-icon icon="fa-solid fa-trash" class="m-2 text-error" />
          </div>
        </div>
      </li>
    </ul>
    <AddToDo v-if="todoVisible" @close="getTodos" :uuid="projectUUID"></AddToDo>
  </div>
</template>
<script>
export default {
  props: ["projectUUID"],
  data() {
    return {
      todos: [],
      todoVisible: false,
      viewTodo: "All",
    };
  },
  async created() {
    this.getTodos();
  },
  methods: {
    async update(uuid, status, index) {
      console.log(uuid, status, index);

      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      status = status == "done" ? "new" : "done";
      var raw = JSON.stringify({
        uuid: uuid,
        status: status,
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch("http://localhost:3000/api/updateTodo", requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));

      this.todos[index].status = status;
    },
    async getTodos() {
      this.todoVisible = false;
      let rawData = await fetch(`/api/getProjectTodos/${this.projectUUID}`);
      let todos = await rawData.json();
      console.log("todos", todos[0]);
      this.todos = todos;
    },
  },
};
</script>
