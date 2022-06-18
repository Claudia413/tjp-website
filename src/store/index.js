import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showMobileMenu: false,
    showNotify: true,
    homePageData: {},
    aboutPageData: {},
    servicesPageData: {},
    teamPageData: {},
    newsPageData: {},
  },
  mutations: {
    SET_SHOW_MOBILE_MENU(state, payload) {
      state.showMobileMenu = payload
    },
    SET_SHOW_NOTIFY(state, payload) {
      state.showNotify = payload
    },
    SET_HOMEPAGE_DATA(state, payload) {
      state.homePageData = payload
    },
    SET_ABOUTPAGE_DATA(state, payload) {
      state.aboutPageData = payload
    },
    SET_SERVICESPAGE_DATA(state, payload) {
      state.servicesPageData = payload
    },
    SET_TEAMPAGE_DATA(state, payload) {
      state.teamPageData = payload
    },
    SET_NEWSPAGE_DATA(state, payload) {
      state.newsPageData = payload
    },
  },
  actions: {
    setMobileMenuState({ commit }) {
      if (this.state.showMobileMenu === false) {
        commit("SET_SHOW_MOBILE_MENU", true)
      } else {
        commit("SET_SHOW_MOBILE_MENU", false)
      }
    },
    setNotifyState({ commit }) {
      commit("SET_SHOW_NOTIFY", false)
    },
    setMobileMenuStateFalse({ commit }) {
      commit("SET_SHOW_MOBILE_MENU", false)
    },
    setHomePageData({ commit }, results) {
      commit("SET_HOMEPAGE_DATA", results)
    },
    setAboutPageData({ commit }, results) {
      commit("SET_ABOUTPAGE_DATA", results)
    },
    setServicesPageData({ commit }, results) {
      commit("SET_SERVICESPAGE_DATA", results)
    },
    setTeamPageData({ commit }, results) {
      commit("SET_TEAMPAGE_DATA", results)
    },
    setNewsPageData({ commit }, results) {
      commit("SET_NEWSPAGE_DATA", results)
    },
  },
  modules: {},
})
