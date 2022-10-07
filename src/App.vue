<template>
  <NavBar />
  <div class="container is-max-desktop px-2 py-4">
    <RouterView />
  </div>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue';
</script>

<style lang="scss">
@import "../node_modules/bulma/css/bulma.min.css";
</style>
