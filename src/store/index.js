import Vue from "vue";
import Vuex from "vuex";
import fabrics from "./modules/fabrics"

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    fabrics
  }
});
