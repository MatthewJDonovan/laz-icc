<template>
  <div class="hello uk-height-1-1">
  <navbar></navbar>
    <div class="uk-background-cover uk-height-1-1 uk-panel uk-flex uk-flex-center uk-flex-middle laz-image">
      <div class="uk-flex uk-flex-column uk-width-1-1 uk-flex-center">
        <h1> {{msg}} </h1>
        <div class="uk-flex uk-width-1-1 uk-flex-center">
          <div class="uk-grid-small uk-child-width-auto" uk-grid uk-countdown="date: 2018-08-23T01:53:19+00:00">
            <div>
              <div class="uk-countdown-number uk-countdown-days"></div>
              <div class="uk-countdown-label uk-margin-small uk-text-center uk-visible@s">DAYS</div>
            </div>
            <div class="uk-countdown-separator">:</div>
            <div>
              <div class="uk-countdown-number uk-countdown-hours"></div>
              <div class="uk-countdown-label uk-margin-small uk-text-center uk-visible@s">HOURS</div>
            </div>
            <div class="uk-countdown-separator">:</div>
            <div>
              <div class="uk-countdown-number uk-countdown-minutes"></div>
              <div class="uk-countdown-label uk-margin-small uk-text-center uk-visible@s">MINUTES</div>
            </div>
            <div class="uk-countdown-separator">:</div>
            <div>
              <div class="uk-countdown-number uk-countdown-seconds"></div>
              <div class="uk-countdown-label uk-margin-small uk-text-center uk-visible@s">SECONDS</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="uk-section-default uk-section uk-section-large">
      <div class="uk-container">
        <div class="uk-grid-margin uk-grid uk-grid-stack" uk-grid="">
          <div class="uk-width-1-1@m uk-first-column">
            <h2 class="uk-width-xxlarge uk-margin-auto uk-text-center">Welcome to the Lazaridis International Case Competition</h2>
            <div class="uk-margin uk-width-2-3 uk-margin-auto uk-text-center">{{about_comp}}</div>
            <div class="uk-margin-medium uk-text-center">
              <router-link to="competition" class="el-content uk-button uk-button-text" title="Learn more about us">Learn more about us</router-link>
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
    name: 'hello',
    data () {
      return {
        msg: 'THE LAZARIDIS CASE CONFERENCE BEGINS IN',
        about_comp: 'In October of 2018, Wilfrid Laurier University will host its first ever international case competition. The cases will be focused on the technology industry, highlighting Waterloo’s rapidly growing tech start-up community.'
      }
    },
    components: {
      Footnav,
      Navbar
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  h1,
  h2 {
    font-weight: normal;
    text-align: center;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    display: inline-block;
    margin: 0 10px;
  }
  
  .laz-image {
    background-image: url("../assets/lazhall.jpg");
    background-color: #999;
    background-blend-mode: multiply;
    .uk-countdown-number, .uk-countdown-label, .uk-countdown-separator, h1 {
      color: #fff;
    }
  }
</style>
