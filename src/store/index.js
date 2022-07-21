import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  actions: {
    login({ commit }, user) {
      commit("setUsername", user.username);
      commit("setIsLoggedIn", true);
      commit("setIsAdmin", user["is_admin"]);
      commit("setWebToken", user.token);
      commit("setEmail", user.email);
    },
    logout({ commit }) {
      commit("setUsername", "");
      commit("setIsLoggedIn", false);
      commit("setIsAdmin", false);
      commit("setWebToken", "");
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
      state.webToken = "Bearer " + webToken;
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
    isAdmin: false,
    email: "",
  },
  modules: {},
});
