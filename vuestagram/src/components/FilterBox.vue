<template>
	<div @click="fire" :class="`${filterName} filter-item`" :style="`background-image : url(${이미지})`">
		<slot />
	</div>
</template>

<script>
export default {
  name : 'Filterbox',
  methods : {
    fire(){
      this.emitter.emit('selectedFilter', this.filterName);
    }
  },
  props :{
    이미지 : String,
    filterName : String,
  },
}
</script>

<style>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color : white;
  background-size: cover;
  background-position : center;
}
</style>