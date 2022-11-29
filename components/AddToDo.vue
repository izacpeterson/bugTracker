<template>
  <div
    class="fixed top-0 left-0 w-full h-full flex flex-col items-center backdrop-blur-3xl"
  >
    <h2 class="text-2xl">Add ToDo</h2>
    <p class="text-sm">{{ uuid }}</p>
    <div class="form-control w-full max-w-xs m-2">
      <label for="" class="label">
        <span class="label-text">ToDo</span>
      </label>
      <input
        v-model="todo.name"
        type="text"
        class="input input-bordered w-full max-w-xs"
      />
    </div>
    <button @click="addTodo" class="btn btn-primary m-2">Add ToDo</button>
    <button @click="$emit('close')" class="btn btn-error m-2">Cancel</button>
  </div>
</template>
<script>
export default {
  props: ['uuid'],
  data() {
    return {
      todo: {
        name: '',
        project: this.uuid,
      },
    }
  },
  methods: {
    addTodo() {
      var myHeaders = new Headers()
      myHeaders.append('Content-Type', 'application/json')

      var raw = JSON.stringify({
        name: this.todo.name,
        project: this.uuid,
      })

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
      }

      fetch('/api/addTodo', requestOptions)
        .then((response) => response.text())
        .then((result) => {
          console.log(result)
          this.$emit('close')
        })
        .catch((error) => console.log('error', error))
    },
  },
}
</script>
