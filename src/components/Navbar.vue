<template>
  <nav class="uk-navbar-container" uk-navbar="offset: 0; delay-hide: 0">
    <div class="uk-navbar-left">
      <router-link :to="{ path: '/'}" class="uk-navbar-item uk-logo"></router-link>
    </div>
    <div class="uk-navbar-right">
      <ul class="uk-navbar-nav">
        <li class="uk-parent"><router-link to="laz">ABOUT US</router-link>
          <div class="uk-navbar-dropdown">
            <ul class="uk-nav uk-navbar-dropdown-nav">
              <li><router-link to="laz">Lazaridis School of Business & Economics</router-link></li>
              <li><router-link to="ontario">Waterloo & Surrounding Area</router-link></li>
            </ul>
          </div>
        </li>
        <li class="uk-parent"><router-link to="sponsors">SPONSORS</router-link></li>
        <li class="uk-parent"><router-link to="involved">GET INVOLVED</router-link></li>
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
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 300px;
  margin-left: 20px;
}
</style>
