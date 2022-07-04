<template>
  <v-container class="div-content">
    <ul class="isometric-template">
      <li style="--z-index: 4" class="isometric-menu">
        <span class="title-nav">Home</span>
      </li>
      <li style="--z-index: 3" class="isometric-menu">
        <span class="title-nav">About</span>
      </li>
      <li style="--z-index: 2" class="isometric-menu">
        <span class="title-nav">Movies</span>
      </li>
      <li style="--z-index: 1" class="isometric-menu">
        <span class="title-nav">Theater</span>
      </li>
    </ul>
  </v-container>
</template>

<script>
export default {
  name: "IsometricNavBar",
};
</script>

<style src="../css/IsometricNavBar.css"></style>
