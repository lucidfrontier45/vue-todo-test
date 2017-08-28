import Vue from "vue"
import Router from "vue-router"
import Hello from "@/components/Hello"
import Todos from "@/components/Todos"


Vue.use(Router)

export default new Router({
  routes: [{
    path: "/",
    name: "Hello",
    component: Hello
  }, {
    path: "/todos",
    name: "todos",
    component: Todos
  }]
})
