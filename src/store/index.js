import { createStore } from 'vuex'

export default createStore({
  state: {
    user: null,
    boatsType: [
      // { value: null, text: "Type de bateau" },
      { value: "Voilier", text: "Voilier" },
      { value: "Bateau à moteur", text: "Bateau à moteur" },
      { value: "Catamaran", text: "Catamaran" },
      { value: "Semi-rigide", text: "Semi-rigide" },
    ],
    boats: [
      {
        name: "voilier",
        prix: 150,
        type: "voilier",
        description:
          "Louez votre voilier à un particulier ou un loueur professionnel.",
        imgUrl: "http://www.evasion-yachting.com/site/images/normal/Bateaux-Bavaria-Voiliers-Cruiser-34,-Easy-9.75878e3bbdcb4d.jpg",
      },


      {
        name: "bateau a moteur",
        prix: 360,
        type: "bateau à moteur",
        description:
          "La location de bateau à moteur entre particuliers et à un professionnel n’a jamais été aussi simple.",
        imgUrl: "https://images.unsplash.com/photo-1538422497454-081f9b0edf0c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80",

      },
      {
        name: "catamaran",
        prix: 180,
        type: "catamaran",
        description:
          "Louez votre Catamaran à un particulier ou un loueur professionnel.",
        imgUrl: "https://images.unsplash.com/photo-1581271164789-7c97932822d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",

      },
      {
        name: "semi-rigide",
        prix: 250,
        type: "semi-rigide",
        description:
          "Louez votre Semi-rigide à un particulier ou un loueur professionnel.",
        imgUrl: "https://www.accostagelocation.fr/public/img/big/LOCATIONBATEAUPORQUEROLLESjpg_5c6669b98745f.jpg",

      },
    ],
    destinations: [
      { name: "paris", description: "Paris Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", imgUrl: "https://image.freepik.com/free-photo/beautiful-wide-shot-eiffel-tower-paris-surrounded-by-water-with-ships-colorful-sky_181624-5118.jpg" },
      { name: "marseille", description: "Marseille Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", imgUrl: "https://image.freepik.com/free-photo/luxury-big-yacht-stay-sea-around-island-background-sky_8353-6005.jpg" },
      { name: "hyères", description: "Hyères Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", imgUrl: "https://image.freepik.com/free-photo/overhead-aerial-drone-shot-different-sized-boats-docked-close-each-other-near-pier_181624-9211.jpg" },
      { name: "porto-vecchio", description: "Porto-Vecchio Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", imgUrl: "https://image.freepik.com/free-photo/pileh-blue-lagoon-phi-phi-island-thailand_231208-1487.jpg" },
      { name: "cannes", description: "Cannes Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", imgUrl: "https://image.freepik.com/free-photo/three-trendy-european-friends-sitting-boat-having-lunch-drinking-champagne-expressing-joy-pleasure-every-year-they-book-tickets-warm-countries-winter_176420-15425.jpg" },
      { name: "la rochelle", description: "La Rochelle Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", imgUrl: "https://image.freepik.com/free-photo/sailboat-freedom-sunset-white-romantic_1253-358.jpg" },
      { name: "cassis", description: "Cassis Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", imgUrl: "https://image.freepik.com/free-photo/perfect-view-kelingking-beach-nusa-penida-island-indonesia_231208-1540.jpg" },
      { name: "martinique", description: "Martinique Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", imgUrl: "https://image.freepik.com/free-photo/sailboat-medeteranian-sea_158595-6253.jpg" },
    ],
  },
  getters: {
    currentUser(state) {
      return state.user;
    }
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user
    }
  },
  actions: {
    setUser({ commit }, user) {
      commit("SET_USER", user)
    }
  },
  modules: {
  }
})
