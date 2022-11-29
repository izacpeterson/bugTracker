<template>
  <div>
    <ul>
      <li v-for="todo in todos" :key="todo.uuid">
        <div>{{ todo.name }}</div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: ['projectUUID'],
  data() {
    return {
      todos: [],
    }
  },
  async created() {
    let rawData = await fetch(`/api/getProjectTodos/${this.projectUUID}`)
    let todos = await rawData.json()
    console.log('todos', todos[0])
    this.todos = todos
  },
}
</script>
