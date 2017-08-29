<template lang="pug">
  el-card.box-card.todo-app
    div(slot="header" class="clearfix")
      el-input.todo-input(type="text" v-model="input" placeholder="what to do?")
      el-button(@click="handleAdd" type="primary") Add
      br
      span Filter
      el-select(v-model="mode")
        el-option(label="All" value="all")
        el-option(label="Completed" value="completed")
        el-option(label="Incomplete" value="incomplete")

    ul
      li(v-for="todo in filteredTodos" :key="todo.id")
        el-button.toggle-btn(v-if="todo.completed" @click="() => handleToggle(todo.id)") restore
        el-button.toggle-btn(v-else type="success" icon="check" @click="() => handleToggle(todo.id)") done
        | {{todo.msg}}
</template>

<script>
import { addTodo, todos, toggleTodo } from "../todos"

function filterTodos(todos, mode) {
  if (mode === "all") {
    return todos
  } else if (mode === "completed") {
    return todos.filter(todo => todo.completed)
  } else {
    return todos.filter(todo => !todo.completed)
  }
}

export default {
  data: function() {
    return {
      input: "",
      mode: "incomplete",
      todos
    }
  },
  methods: {
    handleAdd: function() {
      const v = this.input.trim()
      if (v.length > 0) {
        addTodo(v)
        this.input = ""
      }
    },
    handleToggle: function(idx) {
      toggleTodo(idx)
    }
  },
  computed: {
    filteredTodos: function() {
      return filterTodos(this.todos, this.mode)
    }
  }
}
</script>

<style scoped lang="stylus">

span
  margin-right 10px

ul 
  margin-left 40%
  padding-left 0
  text-align left
  list-style-position inside

li
  margin-bottom 5px

.toggle-btn
  margin-right 10px

.todo-app
  margin 0% 10%

.todo-input
  max-width  600px
  margin 10px
</style>
