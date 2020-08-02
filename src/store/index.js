import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    fabric: [
      {
        id: 1,
        color: "Amber",
        description: "Amber colored ALLDAY couch",
        image: require("@/assets/product-images/sofa-amber.jpg")
      },
      {
        id: 2,
        color: "Charcoal",
        description: "Charcoal colored ALLDAY couch",
        image: require("@/assets/product-images/sofa-charcoal.jpg")
      },
      {
        id: 3,
        color: "Red",
        description: "Red colored ALLDAY couch",
        image: require("@/assets/product-images/sofa-red.jpg")
      }
    ],
    currentFabric: []
  },
  actions: {
    setCurrentFabric(state, payload) {
      state.currentFabric = payload;
    }
  },
  getters: {
    getFabricByColor: state => state.currentFabric
  }
});
