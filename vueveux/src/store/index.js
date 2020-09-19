import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userName: "John Deere",
    userAge: 70,
    friendsList: ["Bob Cat", "Catter Pillar", "Case 250"]
  },
  mutations: {
    changeUserAge(state, data){
      state.userAge = data;
    }
  },
  actions: {
    updateLater: function(context){
      setTimeout(function(){ context.commit("changeUserAge", 50)}, 5000)
    }
  },
  getters:{
    lousdUserName: function(state){
      return state.userName.toUpperCase();
    }
  },
  modules: {}
});
