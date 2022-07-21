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
            <show-time
              @selectTimeSlot="getSelectedTimeSlot"
              :date-slots="dateSlot"
              :time-slots="timeSlotList"
              :loading="loadingTimeSlot"
            ></show-time>
          </v-stepper-content>
          <v-stepper-content step="2">
            <booking
              :movieName="movieName"
              :theater="theater"
              :timeSlot="timeSlot"
              :time-slot-id="timeSlotId"
              @submitSelectedSeat="getSelectedSeat"
            ></booking>
          </v-stepper-content>
          <v-stepper-content step="3">
            <payment
              :loading="loadingPayment"
              @sendPayment="submitPayment"
            ></payment>
          </v-stepper-content>
          <v-stepper-content step="4">
            <v-col align="center" justify="center">
              <p class="title-page">Payment Successful!</p>
              <p class="sub-title-page">
                Thank you for your payment! The following is your ticket. Hope
                you have a great time at AS CINEMA!
              </p>
            </v-col>
            <ticket
              :movieName="movieName"
              :theater="theater"
              :timeSlot="timeSlot"
              :selectedSeat="selectedSeat"
            ></ticket>
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
      {{ errorMessage }}
    </v-snackbar>
    <v-row class="justify-end">
      <v-btn
        v-if="e1 === 1"
        outlined
        rounded
        color="#175769"
        elevation="0"
        class="mr-4"
        :to="{ name: 'MovieInfo', params: { id: $route.params.id } }"
      >
        Cancel
      </v-btn>
      <v-btn
        v-else
        outlined
        rounded
        color="#175769"
        elevation="0"
        class="mr-4"
        @click="previousStep"
      >
        Previous
      </v-btn>
      <v-btn
        v-if="e1 === 4"
        dark
        rounded
        color="#175769"
        elevation="0"
        :to="{ name: 'AllMovies' }"
      >
        Done
      </v-btn>
    </v-row>
  </v-container>
</template>

<script>
import ShowTime from "@/components/ShowTime";
import Booking from "@/components/Booking";
import Payment from "@/components/Payment";
import Ticket from "../components/Ticket.vue";
import Vue from "vue";
import store from "@/store";

export default {
  name: "Movie",
  components: { ShowTime, Booking, Payment, Ticket },
  data() {
    return {
      e1: 1,
      movieName: "N/A",
      theater: null,
      timeSlot: null,
      timeSlotId: 0,
      selectedSeat: [],
      alertToggle: false,
      dateSlot: [],
      timeSlotList: [],
      errorMessage: "",
      loadingTimeSlot: false,
      loadingPayment: false,
    };
  },
  created() {
    this.getMovieDetail();
    this.getTimeSlot();
  },
  beforeDestroy() {
    this.cancelOrder();
  },
  watch: {
    alertToggle(newVal) {
      if (newVal) {
        setTimeout(() => {
          this.alertToggle = false;
        }, 6000);
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
    async cancelOrder() {
      let config = {
        headers: {
          Authorization: store.state.webToken,
        },
      };
      await Vue.axios
        .post(
          "/payment/cancel-order",
          {
            theater_id: this.theater,
            seat_id: this.selectedSeat,
            time_slot_id: this.timeSlotId,
          },
          config
        )
        .catch(() => {
          this.errorMessage =
            "Server is currently down. Please please for a moment";
          this.alertToggle = true;
          this.loadingPayment = false;
        });
    },
    async submitPayment() {
      if (store.state.webToken === "") {
        this.errorMessage = "Please login before making payment";
        this.alertToggle = true;
      } else {
        this.loadingPayment = true;
        let config = {
          headers: {
            Authorization: store.state.webToken,
          },
        };
        let result = await Vue.axios
          .post(
            "/payment/pay",
            {
              theater_id: this.theater,
              seat_id: this.selectedSeat,
              time_slot_id: this.timeSlotId,
            },
            config
          )
          .catch(() => {
            this.errorMessage =
              "Server is currently down. Please please for a moment";
            this.alertToggle = true;
            this.loadingPayment = false;
          });
        let messageFromBackend = result.data.message || result.data.error;
        if (messageFromBackend !== undefined) {
          this.errorMessage = messageFromBackend;
          this.alertToggle = true;
        } else {
          this.nextStep();
        }
        this.loadingPayment = false;
      }
    },
    async getMovieDetail() {
      let result = await Vue.axios.get(
        "/movie/get-movie/" + this.$route.params.id
      );
      this.movieName = result.data.movie.title;
    },
    async getTimeSlot() {
      this.loadingTimeSlot = true;
      let result = await Vue.axios.post("/booking/get-time-slots", {
        movie_id: parseInt(this.$route.params.id),
      });
      this.dateSlot = result.data.date_slot || [];
      for (let i = 0; i < this.dateSlot.length; i++) {
        this.dateSlot[i] = new Date(this.dateSlot[i]);
      }
      this.dateSlot = this.dateSlot.sort((a, b) => Number(a) - Number(b));
      this.timeSlotList = result.data.time_slots || [];
      for (let i = 0; i < this.timeSlotList.length; i++) {
        this.timeSlotList[i].time = new Date(this.timeSlotList[i].time);
      }
      this.loadingTimeSlot = false;
    },
    getSelectedSeat(selectedSeatData) {
      if (!selectedSeatData.is_error) {
        if (selectedSeatData.selected_seat.length !== 0) {
          this.selectedSeat = selectedSeatData.selected_seat;
          this.nextStep();
        } else {
          this.alertToggle = true;
          this.errorMessage = "Please select at least one seat";
        }
      } else {
        this.alertToggle = true;
        this.errorMessage = selectedSeatData.error_message;
      }
    },
    getSelectedTimeSlot(timeSlot) {
      this.theater = timeSlot.theaterID;
      this.timeSlot = timeSlot.time;
      this.timeSlotId = timeSlot.time_slot_id;
      this.nextStep();
    },
  },
};
</script>

<style scoped>
.v-stepper__header {
  box-shadow: none;
}
</style>
