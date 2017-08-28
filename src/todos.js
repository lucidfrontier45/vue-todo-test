export const todos = []

export function addTodo(msg) {
  const id = todos.length
  todos.push({
    id,
    msg,
    completed: false
  })
}

export function toggleTodo(id) {
  todos[id]["completed"] = !todos[id]["completed"]
}

addTodo("first todo")