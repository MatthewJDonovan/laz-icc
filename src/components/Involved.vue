<template>
  <div class="uk-height-1-1 uk-position-relative">
    <navbar></navbar>
<div class="uk-background-cover uk-height-large uk-panel uk-flex uk-flex-center uk-flex-middle deal-image"></div>
    <div class="uk-section-default uk-section uk-section-medium">
      <div class="uk-grid-margin uk-grid uk-grid-stack" uk-grid="">
        <div class="uk-width-1-1@m uk-first-column">
          <h2 class="uk-width-xxlarge uk-margin-auto uk-text-center">SPONSORSHIP INFORMATION</h2>
          <div class="uk-margin uk-margin-remove-top uk-width-5-6 uk-margin-auto uk-text-center">
            <p>Sponsorship information for the competition positions will be posted shortly. For further information send us a message.</p>
          </div>
          <div class="uk-margin-small uk-text-center">
            <router-link class="el-content uk-button uk-button-default" to="contact" title="Contact">Contact</router-link>
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
    name: 'involved',
    data () {
      return {}
    },
    components: {
      Footnav,
      Navbar
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.deal-image {
    background-image: url("../assets/deal_bg.jpg");
    background-color: #999;
    background-blend-mode: multiply;
}
</style>
