<template>
	<div v-for="(a, i) in 블로그글" :key="i">
		<router-link :to="{path: '/detail/'+i}">{{블로그글[i].title}}</router-link>
		<p>{{블로그글[i].date}}</p>
		<p>{{블로그글[i].content}}</p>
	</div>
	
</template>

<script>
export default {
	name : 'List',
	props: {
		블로그글 : Array,
	},
}
</script>

<style>

</style>