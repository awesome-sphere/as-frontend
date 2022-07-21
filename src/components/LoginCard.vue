<template>
  <v-row align="center" style="min-height: 80vh">
    <v-col align-self="center">
      <v-card class="mx-auto glass-card px-6 py-4" max-width="450">
        <v-row>
          <v-flex
            class="justify-center align-center text-center align-content-center"
          >
            <v-card-title class="justify-center mx-auto dark-green--text">
              Welcome{{ isSignUp ? "" : " Back" }},</v-card-title
            >
          </v-flex>
        </v-row>
        <v-form ref="form" v-model="valid" class="mx-4">
          <v-row class="mt-3">
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
          <v-row v-if="isSignUp" class="mt-3">
            <v-text-field
              v-model="email"
              label="Email"
              outlined
              :rules="emailRules"
              rounded
              color="#225A6B"
              dense
              prepend-inner-icon="mdi-at"
            ></v-text-field>
          </v-row>
          <v-row :class="!isSignUp ? 'mb-1' : 'mt-3'">
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
              @keydown.enter="login"
            ></v-text-field>
          </v-row>
          <v-row v-if="isSignUp" class="mb-1">
            <v-text-field
              label="Confirm Password"
              outlined
              rounded
              ref="confirmPassword"
              v-model="confirmPassword"
              :rules="confirmPasswordRules.concat(passwordConfirmationRule)"
              color="#225A6B"
              dense
              prepend-inner-icon="mdi-lock-open"
              :append-icon="showConfirmPassword ? 'mdi-eye' : 'mdi-eye-off'"
              :type="showConfirmPassword ? 'text' : 'password'"
              @click:append="showConfirmPassword = !showConfirmPassword"
              @keydown.enter="login"
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
          >{{ isSignUp ? "Signup" : "Login" }}</v-btn
        >
        <v-spacer></v-spacer>
        <v-flex
          v-if="!isSignUp"
          class="justify-center align-center text-center align-content-center"
          ><v-card-text class="pa-1 my-auto mt-3" style="color: #787474"
            >Need an account?
            <router-link :to="{ name: 'SignUp' }" class="dark-green--text">
              Sign Up
            </router-link>
          </v-card-text>
        </v-flex>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import Vue from "vue";
import store from "@/store";

export default {
  name: "LoginCard",
  props: ["isSignUp"],
  data: () => ({
    username: "",
    usernameRules: [(v) => !!v || "Username is required"],
    email: "",
    emailRules: [
      (v) => !!v || "Email is required",
      (v) =>
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
        "E-mail must be valid",
    ],
    password: "",
    passwordRules: [
      (v) => !!v || "Password is required",
      (v) => v.length >= 8 || "Password must be at least 8 characters long",
    ],
    confirmPasswordRules: [],
    confirmPassword: "",
    showPassword: false,
    showConfirmPassword: false,
    valid: false,
  }),
  methods: {
    async login() {
      if (this.valid) {
        const response = await Vue.axios
          .post(this.isSignUp ? "authen/signup" : "/authen/login", {
            username: this.username,
            password: this.password,
            email: this.email,
          })
          .catch((err) => {
            this.$emit(
              "updateMessage",
              err?.response?.data?.message || "Server is down"
            );
            this.$emit("updateAlert", true);
          });
        if (!this.isSignUp && response && response.status === 200) {
          await store.dispatch("login", response.data);
          await this.$router.push("/");
        } else if (response && response.status === 200) {
          await this.$router.push("/login");
        }
      } else {
        this.$refs.form.validate();
      }
    },
  },
  computed: {
    passwordConfirmationRule() {
      return () =>
        this.password === this.confirmPassword || "Password must match";
    },
  },
  watch: {
    password() {
      if (this.isSignUp) {
        this.$refs.confirmPassword.validate();
      }
    },
  },
};
</script>

<style scoped src="../css/Login.css"></style>
