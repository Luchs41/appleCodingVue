<template>
	<div style="padding : 10px">
		<h4>팔로워</h4>
		<input placeholder="🔍" @input="search($event.target.value)">
		<div v-for="(a, i) in follower" :key="i" class="post-header">
			<div class="profile" :style="`background-image : url(${follower
				[i].image})`"
			/>
			<span class="profile-name">{{ follower[i].name }}</span>
		</div>
	</div>
</template>

<script>
import { reactive, ref, toRefs } from '@vue/reactivity'
import axios from 'axios';
import { onMounted } from '@vue/runtime-core';
import {useStore} from 'vuex'


export default {
  name : 'Mypage',
  props : {
    one : Number,
  },
  setup(props){
    let { one } = toRefs(props);
    console.log(one.value);
    
    let store = useStore();
    console.log(store.state.name)
    let follower = ref([]);
    let originalFollower = ref([]);
    let test = reactive([]);
    onMounted(() => {
      axios.get('/follower.json').then( (a)=>{
        follower.value = a.data;
        originalFollower.value = [...a.data];
      })
    })
  
    function search(searchInput){
      console.log(searchInput);
      let newFollower = originalFollower.value.filter((a) => {
        return a.name.indexOf(searchInput) != -1;
      });
      follower.value = [...newFollower];
    }
    return {follower, test, search, }
  },
}
</script>

<style>

</style>