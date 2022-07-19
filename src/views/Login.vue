<template>
  <div>
    <v-container style="min-height: 80vh">
      <login-card
        @updateAlert="updateAlert"
        @updateMessage="updateMessage"
        :is-sign-up="false"
      ></login-card>
    </v-container>
    <v-container style="max-height: 1vh">
      <div class="circle-pos circle-1-pos">
        <div class="circle-container xl-circle">
          <div class="circle blue-circle"></div>
        </div>
      </div>
      <div class="circle-pos circle-2-pos">
        <div class="circle-container xs-circle">
          <div class="circle yellow-circle"></div>
        </div>
      </div>
      <!--   RIGHT BLUE   -->
      <div class="circle-pos circle-3-pos">
        <div class="circle-container s-circle">
          <div class="circle blue-circle"></div>
        </div>
      </div>
      <!-- LEFT YELLOW -->
      <div class="circle-pos circle-5-pos">
        <div class="circle-container m-circle">
          <div class="circle yellow-circle"></div>
        </div>
      </div>
      <!--   TOP YELLOW  -->
      <div class="circle-pos circle-6-pos">
        <div class="circle-container m-circle">
          <div class="circle yellow-circle"></div>
        </div>
      </div>
    </v-container>
    <v-snackbar :value="alert" absolute top color="#d94c55" right elevation="1">
      {{ message }}
    </v-snackbar>
  </div>
</template>

<script>
import LoginCard from "@/components/LoginCard";
export default {
  name: "Login",
  components: { LoginCard },
  data: () => ({
    alert: false,
    message: "",
  }),
  methods: {
    updateAlert(status) {
      this.alert = status;
    },
    updateMessage(message) {
      this.message = message;
    },
  },
  watch: {
    alert(newVal) {
      if (newVal) {
        setTimeout(() => {
          this.alert = 0;
        }, 4000);
      }
    },
  },
};
</script>

<style scoped src="../css/Circle.css"></style>
