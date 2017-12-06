<template>
  <div class="uk-height-1-1">
    <navbar></navbar>
    <div class="uk-section-secondary uk-section uk-section-large">
      <div class="uk-grid-margin uk-grid uk-grid-stack" uk-grid="">
        <div class="uk-width-1-1@m uk-first-column">
          <h1 class="uk-text-center uk-heading-primary">
            SPONSORS </h1>
        </div>
      </div>
    </div>
    <div class="uk-section-default uk-section uk-section-xsmall uk-margin-top">
      <div class="uk-container">
        <h2 class="uk-h2 uk-heading-line">
          <span>Platinum Sponsors</span>
        </h2>
        <div class="uk-margin-small-top">
          <ul class="uk-flex-center" uk-tab>
            <li class="uk-active"><a href="#">COMING SOON</a></li>
          </ul>
        </div>
        <div class="uk-width-1-1 uk-align-center">
          <img class="uk-align-center" src="../assets/company_placeholder.png" height="200" width="200">
        </div>
        <div class="uk-margin uk-width-xlarge uk-margin-auto uk-text-center">
          Apply to become a Gold sponsor!
        </div>
      </div>
    </div>
    <div class="uk-section-default uk-section uk-section-xsmall">
      <div class="uk-container">
        <h2 class="uk-h2 uk-heading-line">
          <span>Gold Sponsors</span>
        </h2>
        <div class="uk-margin-small-top">
          <ul class="uk-flex-center" uk-tab>
            <li class="uk-active"><a href="#">DESIRE 2 LEARN</a></li>
          </ul>
        </div>
        <div class="uk-width-1-1 uk-align-center">
          <div class="sponsor-image" v-on:click="toSite('https://www.d2l.com')"></div>
        </div>
        <div class="uk-margin uk-width-xlarge uk-margin-auto uk-text-center">
          We are pleased to announce a platinum partnership with Desire 2 Learn, a leading educational platform currently headquartered in Kitchener-Waterloo.
        </div>
      </div>
    </div>
    <div class="uk-section-default uk-section uk-section-xsmall">
      <div class="uk-container">
        <h2 class="uk-h2 uk-heading-line">
          <span>Silver Sponsors</span>
        </h2>
        <div class="uk-margin-small-top">
          <ul class="uk-flex-center" uk-tab>
            <li class="uk-active"><a href="#">COMING SOON</a></li>
          </ul>
        </div>
        <div class="uk-width-1-1 uk-align-center">
          <img class="uk-align-center" src="../assets/company_placeholder.png" height="200" width="200">
        </div>
        <div class="uk-margin uk-width-xlarge uk-margin-auto uk-text-center">
          Apply to become a Silver sponsor!
        </div>
      </div>
    </div>
    <div class="uk-section-default uk-section uk-section-xsmall">
      <div class="uk-container">
        <h2 class="uk-h2 uk-heading-line">
          <span>Bronze Sponsors</span>
        </h2>
        <div class="uk-margin-small-top">
          <ul class="uk-flex-center" uk-tab>
            <li class="uk-active"><a href="#">COMING SOON</a></li>
          </ul>
        </div>
        <div class="uk-width-1-1 uk-align-center">
          <img class="uk-align-center" src="../assets/company_placeholder.png" height="200" width="200">
        </div>
        <div class="uk-margin uk-width-xlarge uk-margin-auto uk-text-center">
          Apply to become a Bronze sponsor!
        </div>
      </div>
    </div>
    <div class="uk-section-default uk-section uk-section-medium uk-background-muted">
      <div class="uk-container">
        <div class="uk-grid-margin uk-grid uk-grid-stack" uk-grid="">
          <div class="uk-width-1-1@m uk-first-column">
            <h2 class="uk-margin-medium uk-text-center">
              Become a sponsor
            </h2>
            <div class="uk-margin uk-width-2-3 uk-margin-auto uk-text-center">
              The Lazaridis International Case Competition seeks to strengthen its partnerships within the Kitchener-Waterloo community and beyond. We are currently looking to strengthening our current partnerships and building new relationships with leading organizations across Canada. If you are interested in sponsoring the competition we encourage you to reach out to us via email at <a href="mailto:tomas.marek@lazicc.com?Subject=Lazaridis%20International%20Case%20Competition" target="_top">tomas.marek@lazicc.com</a> or <a href="mailto:jordan.hanser@lazicc.com?Subject=Lazaridis%20International%20Case%20Competition" target="_top">jordan.hanser@lazicc.com</a>
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
    },
    methods: {
      toSite: function (url) {
        var win = window.open(url, '_blank')
        win.focus()
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

.sponsor-image {
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url('../assets/d2l_logo.png');
  max-width: 33%;
  height: 200px;
  margin-left: auto;
  margin-right: auto;
  cursor: pointer;
}

</style>
