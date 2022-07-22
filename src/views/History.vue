<template>
  <v-container>
    <div class="content mb-5">
      <h1>Booking History</h1>
    </div>
    <template>
      <v-data-table
        v-show="!loading"
        :headers="headers"
        :items="history"
        :items-per-page="5"
        class="elevation-1"
      ></v-data-table>
    </template>

    <v-row align="center" justify="center">
      <v-progress-circular
        v-show="loading"
        :size="70"
        :width="7"
        color="teal"
        indeterminate
        class="my-16"
      ></v-progress-circular>
    </v-row>
  </v-container>
</template>

<script>
import Vue from "vue";
import store from "@/store";

export default {
  data() {
    return {
      headers: [
        { text: "Title", value: "title" },
        { text: "Location", value: "location" },
        { text: "Theater", value: "theater_id" },
        { text: "Seat No.", value: "seat_id" },
        { text: "Date", value: "date" },
        { text: "Time", value: "time" },
        { text: "Duration (m)", value: "duration" },
      ],
      history: [],
      loading: false,
    };
  },

  created() {
    this.getHistory();
  },

  methods: {
    async getHistory() {
      this.loading = true;
      let config = {
        headers: {
          Authorization: store.state.webToken,
        },
      };
      let result = await Vue.axios.get("/authen/get-hist", config);
      this.history = result.data.history.map((hist) => hist.booking);
      this.loading = false;
    },
  },
};
</script>

<style>
.content h1 {
  vertical-align: middle;
  font-family: "Poppins", sans-serif;
  color: #0f3742;
  font-size: 3em;
  font-weight: 500;
  line-height: 1.4em;
}
</style>
