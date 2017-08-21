<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

import Navbar from '@/components/Navbar.vue'
import Footnav from '@/components/Footer.vue'

export default {
  name: 'app',
  components: {
    Navbar,
    Footnav
  }
}
</script>



<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100vh;
}
</style>
