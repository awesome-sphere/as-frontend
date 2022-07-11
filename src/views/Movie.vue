<template>
  <v-container>
    <div class="mb-5">
      <v-stepper :value="e1" class="mt-12" elevation="0">
        <v-stepper-header>
          <v-stepper-step :complete="e1 > 1" step="1">
            Select Time Slot
          </v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step :complete="e1 > 2" step="2">
            Select Seat
          </v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step :complete="e1 > 3" step="3"> Payment </v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step step="4"> Finish </v-stepper-step>
        </v-stepper-header>
        <v-stepper-items>
          <v-stepper-content step="1">
            <show-time></show-time>
          </v-stepper-content>
          <v-stepper-content step="2">
            <booking></booking>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </div>
    <v-row class="justify-end">
      <v-btn
        outlined
        rounded
        color="#175769"
        elevation="0"
        class="mr-4"
        @click="previousStep"
      >
        Previous
      </v-btn>
      <v-btn dark rounded color="#175769" elevation="0" @click="nextStep">
        Next
      </v-btn>
    </v-row>
  </v-container>
</template>

<script>
import Booking from "@/components/Booking";
import ShowTime from "@/components/ShowTime";
export default {
  name: "Movie",
  components: { ShowTime, Booking },
  data() {
    return {
      e1: 1,
      // steps: 2,
    };
  },

  methods: {
    nextStep() {
      if (this.e1 < 4) {
        this.e1 += 1;
      }
    },
    previousStep() {
      if (this.e1 > 1) {
        this.e1 -= 1;
      }
    },
  },
};
</script>

<style src="../css/Movie.css"></style>
