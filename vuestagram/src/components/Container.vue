<template>
	<div v-if="step==0">
		<Post v-for="(a, i) in posts" :key="i" :posts="posts[i]" />
	</div>

	<!-- 필터선택페이지 -->
	<div v-if="step==1">
		<div :class="selectedFilter" class="upload-image" :style="`background-image:url(${이미지})`" />
		<div class="filters">
			<FilterBox :filterName="filterName[i]" :이미지="이미지" v-for="(a, i) in filterName" :key="i">
				{{ filterName[i] }}
			</FilterBox>
		</div>
	</div>
	
	<!-- 글작성페이지 -->
	<div v-if="step==2">
		<div :class="selectedFilter" class="upload-image" :style="{backgroundImage : `url(${이미지})`}" />
		<div class="write">
			<textarea class="write-box" @input="$emit('write', $event.target.value)">write!</textarea>
		</div>
	</div>
</template>

<script>
import Post from './Post.vue'
import FilterBox from './FilterBox.vue'
import filterName from '../assets/filter.js'
export default {
	name : 'Container',
	data(){
		return {
			filterName : filterName,
		}
	},
  components:{
    Post : Post,
		FilterBox : FilterBox,
  },
	props:{
		posts : Array,
		step : Number,
		이미지 : String,
		selectedFilter : String,
	},
	methods:{
		
	},
};
</script>

<style>
.upload-image{
width: 100%;
height: 450px;
background: cornflowerblue;
background-size : cover;
}
.filters{
overflow-x:scroll;
white-space: nowrap;
}
.filter-1 {
width: 100px;
height: 100px;
background-color: cornflowerblue;
margin: 10px 10px 10px auto;
padding: 8px;
display: inline-block;
color : white;
background-size: cover;
}
.filters::-webkit-scrollbar {
height: 5px;
}
.filters::-webkit-scrollbar-track {
background: #f1f1f1; 
}
.filters::-webkit-scrollbar-thumb {
background: #888; 
border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
background: #555; 
}
.write-box {
border: none;
width: 90%;
height: 100px;
padding: 15px;
margin: auto;
display: block;
outline: none;
}
</style>