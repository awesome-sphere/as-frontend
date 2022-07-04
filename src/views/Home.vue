<template>
  <div class="background-welcome-page">
    <v-row class="mx-5">
      <v-col cols="4">
        <IsometricNavBar></IsometricNavBar>
      </v-col>
      <v-col>
        <v-carousel
          height="300"
          delimiter-icon="mdi-minus"
          hide-delimiter-background
        >
          <v-carousel-item v-for="(color, i) in colors" :key="color">
            <v-sheet :color="color" height="100%" tile>
              <v-row class="fill-height" align="center" justify="center">
                <div class="text-h2">Slide {{ i + 1 }}</div>
              </v-row>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
    <em v-for="n in 10" v-bind:key="n"></em>
  </div>
</template>

<script>
import IsometricNavBar from "@/components/IsometricNavBar";

export default {
  name: "Home",

  data() {
    return {
      colors: ["primary", "secondary", "yellow darken-2", "red", "orange"],
    };
  },
  components: {
    IsometricNavBar,
  },
};
</script>

<style src="../css/Home.css"></style>
