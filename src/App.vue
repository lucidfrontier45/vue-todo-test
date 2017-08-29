<template lang="pug">
  #app
    .app-header
      el-menu(:default-active="$route.fullPath" @select="handleSelect" mode="horizontal" router)
        el-menu-item(index="/") Top
        el-menu-item(index="/todos") Todos
    .app-main
      router-view
</template>

<script>
export default {
  name: "app",
}
</script>

<style lang="stylus">
#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  
  .app-main
    margin-top: 60px
</style>
