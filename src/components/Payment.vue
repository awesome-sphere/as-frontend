<template>
  <v-container class="mx-auto" max-width="300">
    <v-card class="mx-auto" outlined max-width="800">
      <v-card-title>Payment</v-card-title>
      <v-card-subtitle>Price: 400 Baht</v-card-subtitle>
      <v-card flat>
        <v-card-title class="pb-0">
          <p style="font-size: 16px">Select your payment method</p>
        </v-card-title>
        <v-card-actions class="pt-0">
          <v-radio-group row hide-details class="mt-0 pt-0 mb-4">
            <v-btn
              @click="
                creditDialog = !creditDialog;
                mobileBankingDialog = false;
              "
              style="z-index: 4"
              class="mx-5 my-1"
              outlined
              color="#225A6B"
              rounded
            >
              <v-radio value="credit" color="#225A6B">
                <span slot="label">Credit/Debit</span>
              </v-radio>
            </v-btn>
            <v-btn
              @click="
                creditDialog = false;
                mobileBankingDialog = !mobileBankingDialog;
              "
              style="z-index: 4"
              class="mx-5 my-1"
              outlined
              color="#225A6B"
              rounded
            >
              <v-radio value="mobileBank" color="#225A6B">
                <span slot="label">Mobile Banking</span>
              </v-radio>
            </v-btn>
          </v-radio-group>
        </v-card-actions>
        <!--   Credit Card -->
        <v-card class="mx-8 mb-7" v-if="creditDialog" flat color="#f7f7f5">
          <v-card-subtitle>
            <v-icon>mdi-credit-card</v-icon>
            <span class="ml-3">Credit/Debit Card Information</span>
          </v-card-subtitle>
          <CreditCardInfo></CreditCardInfo>
        </v-card>
        <!--   Mobile Banking -->
        <v-card
          class="mx-8 mb-7"
          v-if="mobileBankingDialog"
          flat
          color="#f7f7f5"
        >
          <v-card-subtitle>
            <v-icon>mdi-cellphone</v-icon>
            <span class="ml-3">Mobile Banking Information</span>
          </v-card-subtitle>
          <v-img
            max-height="300"
            max-width="300"
            :src="require('../assets/qr.jpg')"
            class="mx-auto"
            alt="QR code payment"
          />
        </v-card>
      </v-card>
      <v-card-actions>
        <v-btn
          color="#175769"
          class="ml-auto mr-2"
          rounded
          dark
          elevation="0"
          style="z-index: 4"
          @click="submitPayment()"
          >Confirm</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import CreditCardInfo from "./CreditCardInfo";

export default {
  components: { CreditCardInfo },
  data: () => ({
    credit: false,
    cardNumber: "",
    creditDialog: false,
    mobileBankingDialog: false,
    mobileBanking: false,
  }),

  methods: {
    submitPayment() {
      this.$emit("sendPayment", true);
    },
  },
};
</script>

<style></style>
