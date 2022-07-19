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
            <show-time @selectTimeSlot="getSelectedTimeSlot"></show-time>
          </v-stepper-content>
          <v-stepper-content step="2">
            <booking
              :movieName="movieName"
              :theater="theater"
              :timeSlot="timeSlot"
              @submitSelectedSeat="getSelectedSeat"
            ></booking>
          </v-stepper-content>
          <v-stepper-content step="3">
            <payment></payment>
          </v-stepper-content>
          <v-stepper-content step="4">
            <v-col align="center" justify="center">
              <p class="title-page">Payment Successful!</p>
              <p class="sub-title-page">
                Thank you for your payment! The following is your ticket. Hope you have a great time at AS CINEMA!
              </p>
            </v-col>
            <ticket></ticket>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </div>
    <v-snackbar
      :value="alertToggle"
      absolute
      top
      color="#d94c55"
      right
      elevation="1"
    >
      Please select at least one seat
    </v-snackbar>
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
      e1: 1,
      movieName: "Thor: Love and Thunder",
      theater: 1,
      timeSlot: "13:00",
      selectedSeat: [],
      alertToggle: false,
    };
  },
  watch: {
    alertToggle(newVal) {
      if (newVal) {
        setTimeout(() => {
          this.alertToggle = false;
        }, 4000);
      }
    },
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
    getSelectedSeat(selectedSeatData) {
      if (selectedSeatData.length !== 0) {
        this.selectedSeat = selectedSeatData;
        this.nextStep();
      } else {
        console.log("pass");
        this.alertToggle = true;
      }
    },
    getSelectedTimeSlot(timeSlot) {
      this.theater = timeSlot.theaterID;
      this.timeSlot = timeSlot.time;
    },
  },
};
</script>

<style scoped>
.v-stepper__header {
  box-shadow: none;
}
</style>
