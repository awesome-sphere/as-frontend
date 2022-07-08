<template>
  <v-container>
    <p>This is booking page</p>
    <v-row>
      <v-col>
        <v-card elevation="0" outlined min-height="700" class="pa-5">
          <v-row>
            <v-col v-for="seat in seats" v-bind:key="seat.id" cols="1">
              <v-btn plain icon :disabled="disableButton(seat.status)">
                <v-icon :color="getSeatColor(seat.status)"
                  >mdi-sofa-single</v-icon
                >
              </v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col>
        <v-card elevation="0" outlined min-height="700"> </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Vue from "vue";

export default {
  name: "Booking",

  data() {
    return {
      seats: [],
    };
  },

  created() {
    this.getAllSeats();
  },

  methods: {
    async getAllSeats() {
      let result = await Vue.axios.post("/seating/get-all-seats", {
        theater_id: 2,
        time_slot_id: 2,
      });
      this.seats = result.data.seats_info;
      console.log(this.seats);
    },

    getSeatColor(status) {
      if (status === "AVAILABLE") {
        return "blue";
      }
      return "";
    },

    disableButton(status) {
      return status !== "AVAILABLE";
    },
  },
};
</script>

<style scoped></style>
