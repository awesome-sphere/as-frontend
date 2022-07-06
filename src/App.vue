<template>
  <v-app>
    <v-app-bar
      v-if="!$route.meta.hideAppBar"
      app
      color="#0f3742"
      elevate-on-scroll
    >
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
        <v-card class="mx-auto" max-width="344" outlined>
          <v-list-item three-line>
            <v-list-item-content>
              <div class="text-overline mb-4">Profile</div>
              <v-list-item-title class="text-h5 mb-1">
                PKinwza007
              </v-list-item-title>
              <v-list-item-subtitle
                >Greyhound divisely hello coldly
                fonwderfully</v-list-item-subtitle
              >
            </v-list-item-content>

            <v-list-item-avatar tile size="65">
              <v-avatar color="red" size="65">
                <span class="white--text text-h5">P</span>
              </v-avatar>
            </v-list-item-avatar>
          </v-list-item>

          <v-card-actions>
            <v-btn plain rounded color="#FFAB00"> View Profile </v-btn>
            <v-btn plain rounded color="#FFAB00"> History </v-btn>
          </v-card-actions>
        </v-card>
      </v-menu>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
// import $route from "eslint-plugin-vue/lib/rules/max-len";

export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>

<style src="./css/App.css"></style>
