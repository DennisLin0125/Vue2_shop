import Vue from "vue";
import Vuex from "vuex";
// 使用插件
Vue.use(Vuex);

import { homeStore } from "./home";
import { searchStore } from "./search";

//建立並揭露store
export default new Vuex.Store({
  modules: {
    homeStore,
    searchStore,
  },
});
