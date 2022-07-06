import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  actions: {
    login({ commit }, user) {
      commit("setUsername", user.username);
      commit("setIsLoggedIn", true);
      commit("setIsAdmin", user.isAdmin);
      commit("setWebToken", user.token);
      commit("setUserId", user.userId);
      commit("setEmail", user.email);
    },
    logout({ commit }) {
      commit("setUsername", "");
      commit("setIsLoggedIn", false);
      commit("setIsAdmin", false);
      commit("setWebToken", "");
      commit("setUserId", "");
      commit("setEmail", "");
    },
  },
  mutations: {
    setUsername(state, username) {
      state.username = username;
    },
    setIsLoggedIn(state, isLoggedIn) {
      state.isLoggedIn = isLoggedIn;
    },
    setWebToken(state, webToken) {
      state.webToken = webToken;
    },
    setUserId(state, userId) {
      state.userId = userId;
    },
    setIsAdmin(state, isAdmin) {
      state.isAdmin = isAdmin;
    },
    setEmail(state, email) {
      state.email = email;
    },
  },
  state: {
    username: "",
    isLoggedIn: false,
    webToken: "",
    userId: -1,
    isAdmin: false,
    email: "",
  },
  modules: {},
});
