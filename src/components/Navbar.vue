<template>
  <div>
    <div class="tm-header-mobile uk-hidden@m">
      <nav class="uk-navbar-container uk-navbar" uk-navbar="">
        <div class="uk-navbar-left">
          <a class="uk-navbar-toggle" href="#tm-mobile" uk-toggle="">
            <button uk-navbar-toggle-icon="" class="uk-navbar-toggle-icon uk-icon"></button>
          </a>
        </div>
        <div class="uk-navbar-center">
          <a class="uk-navbar-item uk-logo"></a>
        </div>
      </nav>
      <div id="tm-mobile" uk-offcanvas="" mode="slide" overlay="" class="uk-offcanvas">
        <div class="uk-offcanvas-bar">
          <div class="uk-offcanvas-close" uk-close></div>
          <div class="uk-child-width-1-1 uk-grid uk-grid-stack" uk-grid="">
            <div>
              <div class="uk-panel">
                <ul class="uk-nav uk-nav-default">
                  <li class=" menu-item-home"><router-link :to="{ path: '/'}">HOME</router-link></li>
                  <li class="uk-parent"><router-link to="laz">ABOUT US</router-link>
                    <ul class="uk-nav-sub">
                      <li><router-link to="rules">Competition Rules</router-link></li>
                      <li><router-link to="schedule">Competition Schedule</router-link></li>
                      <li><router-link to="laz">Lazaridis School of Business & Economics</router-link></li>
                      <li class="uk-nav-divider"></li>
                      <li><router-link to="ontario">Waterloo & Surrounding Area</router-link></li>
                    </ul>
                  </li>
                  <li><router-link to="sponsors">SPONSORS</router-link></li>
                  <li><router-link to="involved">GET INVOLVED</router-link></li>
                  <li><router-link to="contact">CONTACT US</router-link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <nav class="uk-navbar-container uk-visible@m uk-visible@s" uk-navbar="offset: 0; delay-hide: 0">
      <div class="uk-navbar-left">
        <router-link :to="{ path: '/'}" class="uk-navbar-item uk-logo"></router-link>
      </div>
      <div class="uk-navbar-right">
        <ul class="uk-navbar-nav">
          <li class="uk-parent"><router-link to="laz">ABOUT US</router-link>
            <div class="uk-navbar-dropdown">
              <ul class="uk-nav uk-navbar-dropdown-nav">
                <li><router-link to="rules">Competition Rules</router-link></li>
                <li><router-link to="schedule">Competition Schedule</router-link></li>
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
  </div>
</template>

<script>
export default {
  name: "navbar"
};
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
