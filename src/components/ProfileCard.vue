<template>
  <v-card class="mx-auto" max-width="344" outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">Profile</div>
        <v-list-item-title class="text-h5 mb-1">
          {{ this.username }}
        </v-list-item-title>
        <v-list-item-subtitle>{{ this.email }}</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar tile size="65">
        <v-avatar color="red" size="65">
          <span class="white--text text-h5">{{
            this.username[0].toUpperCase()
          }}</span>
        </v-avatar>
      </v-list-item-avatar>
    </v-list-item>

    <v-card-actions v-if="this.isLoggedIn">
      <v-btn plain rounded color="#FFAB00"> View Profile </v-btn>
      <v-btn plain rounded color="#FFAB00" @click="dummyLogout"> Logout </v-btn>
    </v-card-actions>
    <v-card-actions v-else>
      <v-btn plain rounded color="#FFAB00" @click="login"> Login </v-btn>
      <v-btn plain rounded color="#FFAB00" to="/signup"> Sign Up </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import store from "@/store";

export default {
  name: "ProfileCard",
  props: ["username", "email", "isLoggedIn"],
  methods: {
    async login() {
      await this.$router.push("/login");
    },
    // FIXME: This is a dummy logout function.
    async dummyLogout() {
      await store.dispatch("logout");
    },
  },
};
</script>

<style scoped></style>
