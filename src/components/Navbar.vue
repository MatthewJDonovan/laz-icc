<template>
  <nav class="uk-navbar-container" uk-navbar="offset: 0; delay-hide: 0">
    <div class="uk-navbar-left">
      <router-link :to="{ path: '/'}" class="uk-navbar-item uk-logo"></router-link>
    </div>
    <div class="uk-navbar-right">
      <ul class="uk-navbar-nav">
        <li class="uk-parent"><a href="">ABOUT US</a>
          <div class="uk-navbar-dropdown">
            <ul class="uk-nav uk-navbar-dropdown-nav">
              <li><router-link to="competition">The Competition</router-link></li>
              <li><router-link to="laz">Lazaridis School of Business & Economics</router-link></li>
            </ul>
          </div>
        </li>
        <li class="uk-parent"><router-link to="sponsors">SPONSORS</router-link></li>
        <li class="uk-parent"><a href="">GET INVOLVED</a></li>
        <li class="uk-parent"><router-link to="contact">CONTACT US</router-link></li>
        <li><a href=""></a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'navbar'
}
</script>

<style scoped>

.uk-logo {
  background-image: url("../assets/logo.png");
  background-size: cover;
  width: 300px;
}
</style>
