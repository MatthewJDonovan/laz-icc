<template>
  <div class="uk-height-1-1">
    <navbar></navbar>
    <div class="uk-background-cover uk-height-large uk-panel uk-flex uk-flex-center uk-flex-middle uk-background-bottom-center laz-image"></div>
    <div class="uk-section-default uk-section uk-section-medium uk-margin-medium-top">
      <div class="uk-grid-margin uk-grid uk-grid-stack" uk-grid="">
        <div class="uk-width-1-1@m uk-first-column">
          <h2 class="uk-width-xxlarge uk-margin-auto uk-text-center">Competition Rules</h2>
          <div class="uk-margin uk-margin-remove-top uk-width-2-3 uk-margin-auto uk-text-center">
            <iframe src="https://drive.google.com/file/d/1yQbVvEXfwpJsk-pmmbtgP4Ko0JLV2iJB/preview" width="800" height="2000"></iframe>
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
    name: 'rules',
    components: {
      Footnav,
      Navbar
    },
    data () {
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.laz-image {
    background-image: url("../assets/rules.jpg");
    background-color: #999;
    background-blend-mode: multiply;
    background-position: top;
}
.video-js {
  height: 100%;
  width: 100%;
}
</style>
