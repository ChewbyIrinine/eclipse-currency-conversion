<template>
  <nav class="navbar is-success" role="navigation" aria-label="main navigation">
    <div class="container is-max-desktop px-2">
      <div class="navbar-brand">
        <RouterLink to="/" class="navbar-item is-size-4 is-family-monospace">
          eclipse-currency-conversion
        </RouterLink>
        <button
          :class="{ 'is-active': showMobileNav }"
          class="navbar-burger"
          @click="showMobileNav = !showMobileNav"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </div>
      <div id="navbarBasicExample" class="navbar-menu" :class="{ 'is-active': showMobileNav }">
        <div class="navbar-end">
          <RouterLink
            to="/"
            class="navbar-item"
            active-class="is-active"
            @click="showMobileNav = false"
          >
            Currencies List
          </RouterLink>
          <RouterLink
            to="/converter"
            class="navbar-item"
            active-class="is-active"
            @click="showMobileNav = false"
          >
            Converter
          </RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';

const showMobileNav = ref(false);
</script>

<style lang="scss" scoped>
@media screen and (max-width: 1023px) {
  .navbar-menu {
    position: absolute;
    left: 0;
    width: 100%;
  }
}
</style>
