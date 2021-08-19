import axios from 'axios';
import { createStore } from 'vuex';

const store = createStore({
  state(){
    return {
      name : 'kim',
      age : 20,
      likes : 20,
      isLiked : false,
      more : {},
    }
  },
  mutations :{
    setMore(state, data){
      state.more = data;
    },
    좋아용(state){
      if(state.isLiked == false){ state.likes++; state.isLiked = true;}
      else if (state.isLiked == true){ state.likes--; state.isLiked = false;}
      
    },
    이름변경(state){
      state.name = 'park';
    },
    나이증가(state){
      state.age++;
    }
  },
  actions: {
    getData(context){
      axios.get('https://codingapple1.github.io/vue/more0.json').then( (a)=>{
        console.log(a.data);
        context.commit('setMore', a.data);
      })
    },
  }

})

export default store