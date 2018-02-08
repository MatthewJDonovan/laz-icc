<template>
  <div class="uk-height-1-1">
    <navbar></navbar>
    <div class="uk-section-default uk-section uk-section-medium">
      <div class="uk-container">
        <div class="tm-header-placeholder uk-margin-remove-adjacent"></div>
        <div class="uk-grid-margin uk-grid uk-grid-stack" uk-grid="">
          <div class="uk-width-1-1@m uk-first-column">
            <h1 class="uk-heading-primary">SPONSORS</h1>
          </div>
        </div>
      </div>
    </div>
    <div class="uk-section-default uk-section uk-section-large uk-padding-remove-top">
      <div class="uk-container">
        <div class="uk-grid-margin uk-grid uk-grid-stack" uk-grid="">
          <div class="uk-width-1-1@m uk-first-column">
            <h2 class="uk-h2 uk-heading-bullet"><span>Gold Sponsors</span></h2>
          </div>
        </div>
        <div class="uk-grid-margin uk-grid" uk-grid="">
          <div class="uk-width-expand@m uk-width-1-2@s uk-first-column">
            <div class="uk-margin uk-panel uk-text-center">
              <img src="../assets/d2l_logo.png" class="el-image " alt="">
              <div class="el-content">We are pleased to announce a gold partnership with D2L, a leading educational platform headquartered in Kitchener-Waterloo.</div>
            </div>
            <div>
              <ul class="uk-subnav uk-margin-remove-bottom uk-subnav-divider uk-flex-center" uk-margin="">
                <li class="el-item uk-first-column">
                  <a class="el-link" href="https://www.d2l.com" target="_blank" >Website</a>
                </li>
                <li class="el-item">
                  <a class="el-link" href="https://twitter.com/D2L" target="_blank" >Twitter</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="uk-width-expand@m uk-width-1-2@s">
          </div>
          <div class="uk-width-expand@m uk-width-1-2@s">
          </div>
          <div class="uk-width-expand@m uk-width-1-2@s">
          </div>
        </div>
      </div>
    </div>
        <div class="uk-section-default uk-section uk-section-large uk-padding-remove-top">
      <div class="uk-container">
        <div class="uk-grid-margin uk-grid uk-grid-stack" uk-grid="">
          <div class="uk-width-1-1@m uk-first-column">
            <h2 class="uk-h2 uk-heading-bullet"><span>Silver Sponsors</span></h2>
          </div>
        </div>
        <div class="uk-grid-margin uk-grid" uk-grid="">
          <div class="uk-width-expand@m uk-width-1-2@s uk-first-column">
            <div class="uk-margin uk-panel uk-text-center">
              <img src="../assets/company_placeholder.png" class="el-image" alt="">
              <div class="el-content">Apply now to become a Silver Sponsor!</div>
            </div>
          </div>
          <div class="uk-width-expand@m uk-width-1-2@s">
          </div>
          <div class="uk-width-expand@m uk-width-1-2@s">
          </div>
          <div class="uk-width-expand@m uk-width-1-2@s">
          </div>
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
              The Lazaridis International Case Competition seeks to strengthen its partnerships within the Kitchener-Waterloo community and beyond. We are currently looking to strengthen and build our current partnerships and building new relationships with leading organizations
              across Canada. If you are interested in sponsoring the competition we encourage you to reach out to us via email at <a href="mailto:tomas.marek@lazicc.com?Subject=Lazaridis%20International%20Case%20Competition" target="_top">tomas.marek@lazicc.com</a>            or <a href="mailto:jordan.hanser@lazicc.com?Subject=Lazaridis%20International%20Case%20Competition" target="_top">jordan.hanser@lazicc.com</a>
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
  import Footnav from "./Footer.vue";
  import Navbar from "./Navbar.vue";
  export default {
    name: "sponsors",
    components: {
      Footnav,
      Navbar
    },
    methods: {
      toSite: function(url) {
        var win = window.open(url, "_blank");
        win.focus();
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .sponsor-image {
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    background-image: url("../assets/d2l_logo.png");
    max-width: 33%;
    height: 200px;
    margin-left: auto;
    margin-right: auto;
    cursor: pointer;
  }
</style>
