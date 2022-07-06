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

      <v-tabs color="#FFD54F" dark right>
        <v-tab>Movies</v-tab>
        <v-tab>About</v-tab>
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
          @set-info="setInfo"
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
    username: "Guest",
    isLoggedIn: false,
    email: "Not Yet Logged In",
    enableBackground: true,
  }),
  methods: {
    setInfo() {
      this.username = store.state.username || "Guest";
      this.isLoggedIn = store.state.isLoggedIn;
      this.email = store.state.email || "Not Yet Logged In";
    },
  },
  created() {
    console.log("1", this.isLoggedIn);
    this.setInfo();
    console.log("2", this.isLoggedIn);
  },
};
</script>

<style src="./css/App.css"></style>
