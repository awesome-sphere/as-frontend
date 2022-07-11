<template>
  <v-container>
    <div class="mb-10">
      <v-stepper :value="e1" class="mt-12">
        <v-stepper-header>
          <v-stepper-step step="1" color="#00838F" :complete="e1 > 1">
            Select Time Slot
          </v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step step="2" color="#00838F" :complete="e1 > 2">
            Select Seat
          </v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step step="3" color="#00838F" :complete="e1 > 3">
            Payment
          </v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step step="4" color="#00838F"> Finish </v-stepper-step>
        </v-stepper-header>
      </v-stepper>
    </div>
    <booking v-if="e1 === 2"></booking>
    <payment v-if="e1 === 3"></payment>
  </v-container>
</template>

<script>
import Booking from "@/components/Booking";
import Payment from "@/components/Payment";

export default {
  name: "Movie",
  components: { Booking, Payment },
  data() {
    return {
      e1: 2,
      // steps: 2,
    };
  },
};
</script>

<style src="../css/Movie.css"></style>
