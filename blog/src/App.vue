<template>
<nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <span class="navbar-brand mb-0 h1">Vuelog</span>
  </div>
</nav>
<div class="container mt-4">
  <h5>블로그라니께요</h5>
</div>
<List :블로그글="블로그글" />
</template>

<script>
import List from './components/List.vue'
import blog from './assets/blog.js'


export default {
  name: 'App',
  data(){
    return {
      블로그글 : blog,
    }
  },
  components: {
    List : List,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
