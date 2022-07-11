<template>
  <v-container class="pb-0">
    <v-row class="mx-6">
      <v-col md="4">
        <v-card-text
          style="font-size: large; font-weight: normal; color: #535353"
        >
          Card number</v-card-text
        >
      </v-col>
      <v-col class="mr-5">
        <v-text-field
          v-model="cardNumber"
          hide-details
          color="#225A6B"
          label="•••• •••• •••• ••••"
          persistent-hint
          required
          clearable
          outlined
          dense
          single-line
          solo
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row class="mx-6">
      <v-col md="4">
        <v-card-text
          style="font-size: large; font-weight: normal; color: #535353"
        >
          Cardholder name</v-card-text
        >
      </v-col>
      <v-col class="mr-5">
        <v-text-field
          v-model="fullName"
          color="#225A6B"
          label="John Doe"
          persistent-hint
          required
          clearable
          outlined
          dense
          single-line
          solo
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row class="mx-6">
      <v-col md="4">
        <v-card-text
          style="font-size: large; font-weight: normal; color: #535353"
        >
          Expiry date</v-card-text
        >
      </v-col>
      <v-col class="mr-5">
        <v-menu
          ref="menu"
          v-model="menu"
          :close-on-content-click="false"
          :return-value.sync="date"
          transition="scale-transition"
          max-width="290px"
          min-width="auto"
          offset-overflow
          ><template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="date"
              color="#225A6B"
              prepend-inner-icon="mdi-calendar"
              required
              clearable
              outlined
              dense
              single-line
              solo
              readonly
              filled
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="date"
            no-title
            type="month"
            scrollable
            color="#225A6B"
            light
          >
            <v-spacer></v-spacer>
            <v-btn text color="#225A6B" @click="menu = false"> Cancel </v-btn>
            <v-btn text color="#225A6B" @click="$refs.menu.save(date)">
              OK
            </v-btn>
          </v-date-picker>
        </v-menu>
      </v-col>
    </v-row>
    <v-row class="mx-6">
      <v-col md="4">
        <v-card-text
          style="font-size: large; font-weight: normal; color: #535353"
        >
          CVC</v-card-text
        >
      </v-col>
      <v-col class="mr-5">
        <v-text-field
          v-model="cvc"
          color="#225A6B"
          label="•••"
          persistent-hint
          required
          clearable
          outlined
          dense
          single-line
          solo
        ></v-text-field>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "CreditCardInfo",

  data: () => ({
    email: "",
    fullName: "",
    cardNumber: "",
    date: new Date().toISOString().substr(0, 7),
    menu: false,
    cvc: "",
  }),
};
</script>

<style scoped></style>
