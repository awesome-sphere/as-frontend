<template>
  <v-container>
    <div class="mb-10">
      <v-stepper :value="e1" flat>
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
        <v-stepper-items>
          <v-stepper-content step="1">
            <show-time></show-time>
          </v-stepper-content>
          <v-stepper-content step="2">
            <booking></booking>
          </v-stepper-content>
          <v-stepper-content step="3">
            <payment></payment>
          </v-stepper-content>
          <v-stepper-content step="4">
            <ticket></ticket>
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
import ShowTime from "@/components/ShowTime";
import Booking from "@/components/Booking";
import Payment from "@/components/Payment";
import Ticket from "../components/Ticket.vue";

export default {
  name: "Movie",
  components: { ShowTime, Booking, Payment, Ticket },
  data() {
    return {
      e1: 2,
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

<style scoped>
.v-stepper__header {
  box-shadow: none;
}
</style>
