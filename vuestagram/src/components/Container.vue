<template>
	<div>
		<Post v-for="(a, i) in posts" :key="i" :posts="posts[i]" />
		<!-- <Post :posts="posts[0]" />
		<Post :posts="posts[1]" />
		<Post :posts="posts[2]" /> -->
	</div>
</template>

<script>
import Post from './Post.vue'
export default {
	name : 'Container',
  components:{
    Post : Post,
  },
	props:{
		posts : Array,
	}
};
</script>

<style>
</style>