<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">My Vuelog</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
					<router-link to="/">홈으로</router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/list"><router-link to="/list"> Features</router-link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
				</li>
      </ul>
    </div>
  </div>
</nav>


<router-link to="/list">리스트</router-link> &nbsp;
<router-link to="/">홈으로</router-link>

<div class="mt-4">
<router-view :블로그글="블로그글"></router-view>
</div>
</template>

<script>
import blog from './assets/blog.js'


export default {
  name: 'App',
  data(){
    return {
      블로그글 : blog,
    }
  },
  components: {
  },
  
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
