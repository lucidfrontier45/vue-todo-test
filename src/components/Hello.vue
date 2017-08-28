<template>
  <div class="hello">
    <img src="../assets/logo.png">
    <h2>
      <router-link to="/todos">Watch Todos</router-link>
    </h2>
  </div>
</template>

<script>
export default {
  name: "hello",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
</style>
