<template>
  <v-container>
    <div class="background-circle-left"></div>
    <div class="background-circle-right"></div>
    <v-row style="height: 80vh">
      <v-col align-self="center">
        <v-img
          max-width="450px"
          class="ml-auto"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4424790/Mirror.png"
          alt="404 Image"
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="rgb(15,55,66)"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-col>
      <v-col align-self="center">
        <p class="title-page">Something went wrong here...</p>
        <p class="sub-title-page">
          We can't find the page you're looking for. Check out top navigation
          bar or go to home page.
        </p>
        <v-btn rounded elevation="0" color="#175769" dark to="/">
          <v-icon class="mr-1">mdi-home</v-icon>
          Home
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "NotFound",
};
</script>

<style src="../css/NotFound.css"></style>
