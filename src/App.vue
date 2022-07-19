<template style="z-index: -2">
  <v-app>
    <v-app-bar app color="#0f3742" elevate-on-scroll>
      <div class="d-flex align-center ml-2">
        <v-btn plain to="/" icon fab>
          <v-img
            alt="AS Logo"
            class="shrink mr-2 logo-style"
            contain
            :src="require('./assets/logo.png')"
            transition="scale-transition"
          />
        </v-btn>
        <v-btn plain to="/">
          <span class="name-title">AS Cinema</span>
        </v-btn>
      </div>

      <v-spacer></v-spacer>

      <v-tabs color="#FFD54F" dark right optional>
        <v-tab to="/all-movies">Movies</v-tab>
        <v-tab to="/about">About</v-tab>
      </v-tabs>
      <v-menu bottom min-width="200px" open-on-hover offset-y right offset-x>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-avatar size="48">
              <v-icon color="white">mdi-account</v-icon>
            </v-avatar>
          </v-btn>
        </template>
        <profile-card
          :email="this.email"
          :username="this.username"
          :is-logged-in="this.isLoggedIn"
        ></profile-card>
      </v-menu>
      <v-switch
        v-model="enableBackground"
        color="#FFD54F"
        hide-details
      ></v-switch>
    </v-app-bar>
    <div class="background-page">
      <v-main>
        <router-view />
      </v-main>
      <div v-if="enableBackground">
        <em v-for="n in 10" v-bind:key="n"></em>
      </div>
    </div>
  </v-app>
</template>

<script>
import store from "@/store";
import ProfileCard from "@/components/ProfileCard";
// import $route from "eslint-plugin-vue/lib/rules/max-len";

export default {
  name: "App",
  components: { ProfileCard },
  data: () => ({
    enableBackground: true,
  }),
  computed: {
    username() {
      return store.state.username || "Guest";
    },
    isLoggedIn() {
      return store.state.isLoggedIn || false;
    },
    email() {
      return store.state.email || "Not Yet Logged In";
    },
  },
};
</script>

<style src="./css/App.css"></style>
