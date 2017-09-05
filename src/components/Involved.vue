<template>
  <div class="uk-height-1-1 uk-position-relative">
    <navbar></navbar>
    <div class="uk-section-secondary uk-section uk-section-large">
      <div class="uk-grid-margin uk-grid uk-grid-stack" uk-grid="">
        <div class="uk-width-1-1@m uk-first-column">
          <h1 class="uk-text-center uk-heading-primary">GET INVOLVED</h1>
        </div>
      </div>
    </div>
    <div class="uk-section-default uk-section uk-section-medium">
      <div class="uk-grid-margin uk-grid uk-grid-stack" uk-grid="">
        <div class="uk-width-1-1@m uk-first-column">
          <h2 class="uk-width-xxlarge uk-margin-auto uk-text-center">Volunteering Information</h2>
          <div class="uk-margin uk-margin-remove-top uk-width-5-6 uk-margin-auto uk-text-center">
            <p>Hiring information for volunteer positions will be posted shortly. For further information send us a message.</p>
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
  
</style>
