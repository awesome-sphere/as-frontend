<template>
  <v-container>
    <div class="mb-10">
      <v-stepper :value="e1" class="mt-12">
        <v-stepper-header>
          <v-stepper-step step="1"> Select Time Slot </v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step step="2"> Select Seat </v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step step="3"> Payment </v-stepper-step>
        </v-stepper-header>
      </v-stepper>
    </div>
    <Booking v-if="e1 === 2"></Booking>
  </v-container>
</template>

<script>
import Booking from "@/components/Booking";
export default {
  name: "Movie",
  components: {Booking},
  data() {
    return {
      e1: 2,
      // steps: 2,
    };
  },
};
</script>

<style src="../css/Movie.css"></style>
