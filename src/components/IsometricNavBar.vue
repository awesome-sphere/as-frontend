<template>
  <div class="div-content">
    <ul class="isometric-template">
      <li style="--z-index: 5" class="isometric-menu">
        <router-link style="color: #e0e0e0" to="/about" class="title-nav"
          >Home</router-link
        >
      </li>
      <li style="--z-index: 4" class="isometric-menu">
        <router-link style="color: #e0e0e0" to="/about" class="title-nav"
          >About</router-link
        >
      </li>
      <li style="--z-index: 3" class="isometric-menu">
        <router-link style="color: #e0e0e0" to="/all-movies" class="title-nav"
          >Movies</router-link
        >
      </li>
      <li style="--z-index: 2" class="isometric-menu">
        <router-link style="color: #e0e0e0" to="/about" class="title-nav"
          >Theater</router-link
        >
      </li>
      <li style="--z-index: 1" class="isometric-menu">
        <router-link style="color: #e0e0e0" to="/booking" class="title-nav"
          >Booking</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "IsometricNavBar",
};
</script>

<style src="../css/IsometricNavBar.css"></style>
