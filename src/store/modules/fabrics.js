const state = {
  fabrics: [
    {
      id: 1,
      color: "Amber",
      description: "Amber colored ALLDAY couch",
      thumb: require("@/assets/product-images/sofa-amber-fabric-thumb.jpg"),
      image: require("@/assets/product-images/sofa-amber.jpg")
    },
    {
      id: 2,
      color: "Charcoal",
      description: "Charcoal colored ALLDAY couch",
      thumb: require("@/assets/product-images/sofa-charcoal-fabric-thumb.jpg"),
      image: require("@/assets/product-images/sofa-charcoal.jpg")
    },
    {
      id: 3,
      color: "Red",
      description: "Red colored ALLDAY couch",
      thumb: require("@/assets/product-images/sofa-red-fabric-thumb.jpg"),
      image: require("@/assets/product-images/sofa-red.jpg")
    }
  ]
};

const getters = {
  allFabrics: state => state.fabrics,
  // thisFabricColor: state => state.fabrics.filter(color => this.color === color)
};

const actions = {};

const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations
};
