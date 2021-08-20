<template>
	<div class="header">
		<ul class="header-button-left">
			<li>Cancel</li>
		</ul>
		<ul class="header-button-right">
			<li v-if="step==1" @click="step++">
				Next
			</li>
			<li v-if="step==2" @click="publish">
				발행
			</li>
		</ul>
		<img src="./assets/logo.png" class="logo">
	</div>

	<!-- <h4>안녕 {{ $store.state.name }} 너는 {{ $store.state.age }} 살이구나</h4>
	<button @click="$store.commit('이름변경')">이름변경뿅</button> &nbsp;
	<button @click="$store.commit('나이증가')">나이증가뿅</button>

	<p>{{ $store.state.more }}</p>
	<button @click="$store.dispatch('getData')">Vuex 더보기버튼</button>

	<p>{{ name }} {{ age }} {{ likes }}</p> -->
	<Container @write="작성한글 = $event" :posts="posts" :step="step" :이미지="이미지" :selectedFilter="selectedFilter" />



	<div class="footer">
		<ul class="footer-button-plus">
			<input @change="upload" accept="image/*" type="file" id="file" class="inputfile">
			<label for="file" class="input-plus">+</label>
		</ul>
	</div>
</template>

<script>
import Container from './components/Container.vue'
import posting from './assets/Posting.js'
import axios from 'axios'
import {mapState} from 'vuex'

export default {
  name: "App",
  data() {
    return {
      posts : posting,
      moreClicked : 0,
      step : 3,
      이미지 : '',
			작성한글 : '',
      selectedFilter : '',
      카운터 : 0,
    }
  },
  mounted(){
    this.emitter.on('selectedFilter', (a)=>{
      this.selectedFilter = a;
      //console.log('이거요' + this.selectedFilter);
    });
  },
  components: {
    Container : Container,
  },
  computed : {
    name(){
      return this.$store.state.name
    },
    ...mapState(['name', 'age', 'likes']),
  }, 
  methods : {

    publish(){
      var 내게시물 = {
        name: "Kim Hyun",
        userImage: "https://placeimg.com/100/100/arch",
        postImage: this.이미지,
				likes: 36,
				date: "May 15",
				liked: false,
				content: this.작성한글,
				filter: this.selectedFilter,
      };
      this.posts.unshift(내게시물);
      this.step = 0;
    },
    more() {
      axios.get(`https://codingapple1.github.io/vue/more${this.moreClicked}.json`)
      .then((결과)=>{
        this.posts.push(결과.data);
        this.moreClicked++;
      })
    },
    upload(e){
      let 파일 = e.target.files;
      this.이미지 = URL.createObjectURL(파일[0]);
      console.log(this.이미지);
      this.step++;
    },
  },
};
</script>

<style>
body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
</style>
