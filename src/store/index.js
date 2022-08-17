import Vuex from "vuex";
import Vue from "vue";
import todoslist from "./modules/todoslist";

// Load Vuex
Vue.use(Vuex);

// Create Store
export default new Vuex.Store({
  modules: {
    todoslist,
  },
});
