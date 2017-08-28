<template>
  <div>
    <div>
      <input type="text"
             v-model="input"></input>
      <button @click="handleAdd">Add</button>
      <select v-model="mode">
        <option label="All"
                value="all"></option>
        <option label="Completed"
                value="completed"></option>
        <option label="Incomplete"
                value="incomplete"></option>

      </select>
    </div>
    <ul>
      <li v-for="todo in filteredTodos"
          :key="todo.id">
        <button @click="() => handleToggle(todo.id)">
          <span v-if="todo.completed">
            restore
          </span>
          <span v-else>
            done
          </span>
        </button>
        {{todo.msg}}

      </li>
    </ul>
  </div>
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

<style>
ul {
  margin-left: 0;
  padding-left: 0;
  transform: translateX(50%);
  text-align: left;
  list-style-position: inside;
}
</style>
