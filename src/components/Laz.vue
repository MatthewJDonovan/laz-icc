<template>
  <div class="uk-height-1-1">
    <navbar></navbar>
    <div class="uk-section-default uk-section uk-section-large">
      <div class="uk-container">
        <div class="uk-grid-margin uk-grid uk-grid-stack" uk-grid="">
          <div class="uk-width-1-1@m uk-first-column">
            <h2 class="uk-width-xxlarge uk-margin-auto uk-text-center">Lazaradis School of Business and Economics</h2>
            <div class="uk-margin uk-margin-remove-top uk-width-xlarge uk-margin-auto uk-text-center">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis.</div>
          </div>
        </div>
      </div>
    </div>
    <div class="uk-cover-container uk-height-large" uk-height-viewport>
      <iframe uk-cover="automute: false" src="https://www.youtube.com/embed/VVtNV4BChAA?autoplay=1&loop=1&playlist=VVtNV4BChAA" width="640" height="500" frameborder="0" allowfullscreen></iframe>
    </div>
    <footnav></footnav>
  </div>
</template>

<script>
  import Footnav from './Footer.vue'
  import Navbar from './Navbar.vue'
  
  export default {
    name: 'laz',
    components: {
      Footnav,
      Navbar
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  
</style>
