import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    showMobileMenu: false,
  },
  mutations: {
    SET_SHOW_MOBILE_MENU(state, payload) {
      state.showMobileMenu = payload;
    },
  },
  actions: {
    setMobileMenuState({ commit }) {
      if (this.state.showMobileMenu === false) {
        commit("SET_SHOW_MOBILE_MENU", true);
      } else {
        commit("SET_SHOW_MOBILE_MENU", false);
      }
    },
    setMobileMenuStateFalse({ commit }) {
      commit("SET_SHOW_MOBILE_MENU", false);
    },
  },
  modules: {},
});
