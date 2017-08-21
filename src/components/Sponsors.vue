<template>
  <div class="uk-height-1-1">
    <navbar></navbar>
    <div class="uk-section-secondary uk-section uk-section-medium">
      <div class="uk-grid-margin uk-grid uk-grid-stack" uk-grid="">
        <div class="uk-width-1-1@m uk-first-column">
          <h1 class="uk-text-center uk-heading-primary">
            Sponsors </h1>
        </div>
      </div>
    </div>
    <div class="uk-section-default uk-section uk-section-medium">
      <div class="uk-container">
        <h2 class="uk-h2 uk-heading-line">
          <span>Platinum Sponsors</span>
        </h2>
        <div class="uk-margin-medium-top">
          <ul class="uk-flex-center" uk-tab>
            <li class="uk-active"><a href="#">Company 1</a></li>
            <li><a href="#">Company 2</a></li>
            <li><a href="#">Company 3</a></li>
          </ul>
        </div>
        <div class="uk-width-1-1 uk-align-center">
          <img class="uk-align-center" src="../assets/company_placeholder.png" height="250" width="250">
        </div>
        <div class="uk-margin uk-width-xlarge uk-margin-auto uk-text-center">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
          sem. Nulla consequat massa quis enim.
        </div>
      </div>
    </div>
    <div class="uk-section-default uk-section uk-section-medium">
      <div class="uk-container">
        <h2 class="uk-h2 uk-heading-line">
          <span>Gold Sponsors</span>
        </h2>
        <div class="uk-margin-medium-top">
          <ul class="uk-flex-center" uk-tab>
            <li class="uk-active"><a href="#">Company 1</a></li>
            <li><a href="#">Company 2</a></li>
            <li><a href="#">Company 3</a></li>
          </ul>
        </div>
        <div class="uk-width-1-1 uk-align-center">
          <img class="uk-align-center" src="../assets/company_placeholder.png" height="250" width="250">
        </div>
        <div class="uk-margin uk-width-xlarge uk-margin-auto uk-text-center">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
          sem. Nulla consequat massa quis enim.
        </div>
      </div>
    </div>
    <div class="uk-section-default uk-section uk-section-medium">
      <div class="uk-container">
        <h2 class="uk-h2 uk-heading-line">
          <span>Silver Sponsors</span>
        </h2>
        <div class="uk-margin-medium-top">
          <ul class="uk-flex-center" uk-tab>
            <li class="uk-active"><a href="#">Company 1</a></li>
            <li><a href="#">Company 2</a></li>
            <li><a href="#">Company 3</a></li>
          </ul>
        </div>
        <div class="uk-width-1-1 uk-align-center">
          <img class="uk-align-center" src="../assets/company_placeholder.png" height="250" width="250">
        </div>
        <div class="uk-margin uk-width-xlarge uk-margin-auto uk-text-center">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
          sem. Nulla consequat massa quis enim.
        </div>
      </div>
    </div>
    <div class="uk-section-default uk-section uk-section-medium">
      <div class="uk-container">
        <h2 class="uk-h2 uk-heading-line">
          <span>Bronze Sponsors</span>
        </h2>
        <div class="uk-margin-medium-top">
          <ul class="uk-flex-center" uk-tab>
            <li class="uk-active"><a href="#">Company 1</a></li>
            <li><a href="#">Company 2</a></li>
            <li><a href="#">Company 3</a></li>
          </ul>
        </div>
        <div class="uk-width-1-1 uk-align-center">
          <img class="uk-align-center" src="../assets/company_placeholder.png" height="250" width="250">
        </div>
        <div class="uk-margin uk-width-xlarge uk-margin-auto uk-text-center">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
          sem. Nulla consequat massa quis enim.
        </div>
      </div>
    </div>
    <div class="uk-section-default uk-section uk-section-medium">
      <div class="uk-container">
        <div class="uk-grid-margin uk-grid uk-grid-stack" uk-grid="">
          <div class="uk-width-1-1@m uk-first-column">
            <h2 class="uk-margin-medium uk-text-center">
              Become a sponsor
            </h2>
            <div class="uk-margin uk-width-xlarge uk-margin-auto uk-text-center">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim.
            </div>
            <div class="uk-margin-medium uk-text-center">
              <router-link class="el-content uk-button uk-button-default" to="contact" title="Contact">Contact</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footnav></footnav>
  </div>
</template>

<script>
  import Footnav from './Footer.vue'
  import Navbar from './Navbar.vue'
  
  export default {
    name: 'sponsors',
    components: {
      Footnav,
      Navbar
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  
</style>
