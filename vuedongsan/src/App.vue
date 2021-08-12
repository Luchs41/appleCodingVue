<template>

  <transition name="fade">
    <Modal @closeModal="모달창열렸니=false" :원룸들="원룸들" :누른거="누른거" :모달창열렸니="모달창열렸니" />
  </transition>

  <div class="menu">
    <a v-for="(a, i) in 메뉴들" :key="i">{{ a }}</a>
  </div>
  
  <Discount v-if="showDiscount == true" :discountRate="discountRate" />

  <button @click="priceSort">가격순정렬</button>&nbsp;
  <button @click="priceReverseSort">가격역순정렬</button>&nbsp;
  <button @click="ABCSort">가나다순정렬</button>&nbsp;
  <br>
  <button @click="sortBack">되돌리기</button>
  <Card @openModal="모달창열렸니 = true; 누른거 = $event" :원룸들="원룸들" />

</template>

<script>

import data from './assets/oneroom.js'
import Discount from './discount.vue'
import Modal from './Modal.vue'
import Card from './Card.vue'

export default {
  name: 'App',
  data() {
    return {
      showDiscount : true, 
      원룸들오리지널 : [...data],
      누른거 : 0,
      원룸들 : data,
      모달창열렸니 : false,
      메뉴들 : ['Home', 'Shop', 'About'],
      products : ['역삼동원룸', '천호동원룸', '마포구원룸'],
      신고수 : [0,0,0],
      discountRate : 30,
    }
  },
  methods : {
    increase() {
      this.신고수++;
    },
    sortBack() {
      this.원룸들 = [...this.원룸들오리지널];
    },
    priceSort() {
      this.원룸들.sort(function(a,b){
        return a.price - b.price;
      }) 
    },
    priceReverseSort() {
      this.원룸들.sort(function(a, b){
        return b.price - a.price;
      })
    },
    ABCSort() {
      this.원룸들.sort(function(a,b){
        return a.title.localeCompare(b.title);
      })
    },
  },

  mounted() {
    let timerid = setInterval(()=>{
      this.discountRate--;
      if(this.discountRate == 0){
        clearInterval(timerid);
      }
    }, 1000)
  },


  components: {
    Discount : Discount,
    Modal : Modal,
    Card : Card,
  }
}
</script>

<style>
.fade-leave-from {
  opacity: 1;
}
.fade-leave-active {
  transition: all 1s;
}
.fade-leave-to {
  opacity: 0;
}

.fade-enter-from {
  transform: translateY(-1000px);
}
.fade-enter-active {
  transition: all 1s;
}
.fade-enter-to {
  transform: translateY(0px)
}

.discount {
  background: #eee;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}

body {
  margin : 0
}
div {
  box-sizing: border-box;
}
.black-bg {
  width : 100%; height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed; padding: 20px;
}
.white-bg {
  width: 100%; background: white;
  border-radius: 8px;
  padding: 20px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}

.menu a{
  color: white;
  padding: 10px;
}

.room-img {
  width: 100%;
  margin-top: 40px;
}


</style>
