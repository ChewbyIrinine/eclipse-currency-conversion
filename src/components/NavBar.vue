<template>
  <nav class="navbar is-success" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <RouterLink to="/" class="navbar-item is-size-4 is-family-monospace">
        eclipse-currency-conversion
      </RouterLink>
    </div>
    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-end">
        <RouterLink to="/" class="navbar-item" active-class="is-active"> Home </RouterLink>
        <RouterLink to="/about" class="navbar-item" active-class="is-active"> About </RouterLink>
      </div>
    </div>
  </nav>
</template>
