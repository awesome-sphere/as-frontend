<template>
  <v-container>
    <v-card class="mx-auto glass-card py-2 px-6" max-width="450">
      <v-row>
        <v-flex
          class="justify-center align-center text-center align-content-center"
        >
          <v-card-title class="justify-center mx-auto dark-green--text">
            Welcome back,</v-card-title
          >
        </v-flex>
      </v-row>
      <v-form ref="form" v-model="valid" lazy-validation class="mx-4">
        <v-row class="mt-1">
          <v-text-field
            v-model="username"
            label="Username"
            outlined
            :rules="usernameRules"
            rounded
            color="#225A6B"
            dense
            prepend-inner-icon="mdi-account-circle"
          ></v-text-field>
        </v-row>
        <v-row class="mb-1">
          <v-text-field
            label="Password"
            outlined
            rounded
            v-model="password"
            :rules="passwordRules"
            color="#225A6B"
            dense
            prepend-inner-icon="mdi-lock-open"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            :type="showPassword ? 'text' : 'password'"
            @click:append="showPassword = !showPassword"
          ></v-text-field>
        </v-row>
      </v-form>
      <v-btn
        type="submit"
        class="mx-auto my-2"
        rounded
        small
        block
        color="#225A6B"
        dark
        @click="login"
        >Login</v-btn
      >
      <v-spacer></v-spacer>
      <v-flex
        class="justify-center align-center text-center align-content-center"
        ><v-card-text class="pa-1 my-auto mt-3" style="color: #787474"
          >Need an account?
          <span class="dark-green--text">Sign Up</span></v-card-text
        ></v-flex
      >
    </v-card>
  </v-container>
</template>

<script>
import Vue from "vue";
import store from "@/store";

export default {
  name: "Login",
  data: () => ({
    username: "",
    usernameRules: [(v) => !!v || "Username is required"],
    password: "",
    passwordRules: [
      (v) => !!v || "Password is required",
      // (v) => v.length > 7 || "Password must be at least 8 characters",
    ],
    showPassword: false,
    valid: false,
  }),
  methods: {
    async login() {
      if (this.valid) {
        let result = await Vue.axios.post("/authen/login", {
          username: this.username,
          password: this.password,
        });
        await store.dispatch("login", result.data);
      }
      await this.$router.push("/");
    },
  },
};
</script>

<style scoped src="../css/Login.css"></style>
