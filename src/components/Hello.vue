<template>
  <div class="hello uk-height-1-1">
    <navbar></navbar>
    <div class="uk-background-cover uk-height-1-1 uk-panel uk-flex uk-flex-center uk-flex-middle laz-image">
      <div class="uk-flex uk-flex-column uk-width-1-1 uk-flex-center">
        <h1> {{msg}} </h1>
        <div class="uk-flex uk-width-1-1 uk-flex-center">
          <div class="uk-grid-small uk-child-width-auto" uk-grid uk-countdown="date: 2018-10-08T05:00:00+00:00">
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
    <div class="uk-section-default uk-section uk-section-medium">
      <div class="uk-container">
        <div class="uk-grid-margin uk-grid uk-grid-stack" uk-grid="">
          <div class="uk-width-1-1@m uk-first-column">
            <h3 class="uk-width-xxlarge uk-margin-auto uk-text-center uk-heading-line"><span>“Work hard, play hard”…..in the Silicon Valley of the North</span></h3>
            <div class="uk-margin uk-width-2-3 uk-margin-auto uk-text-center">{{section1_1}}<br></br>{{section1_2}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="uk-section-laz uk-section uk-section-medium">
      <div class="uk-container">
        <div class="uk-grid-margin uk-grid uk-grid-stack" uk-grid="">
          <div class="uk-width-1-1@m uk-first-column">
            <h2 class="uk-width-xxlarge uk-margin-auto uk-text-center"><span>A unique competition: Learning while competing</span></h2>
            <div class="uk-margin uk-width-2-3 uk-margin-auto uk-text-center">
              <div class="uk-grid uk-grid-margin uk-margin-medium-top">
                <div class="uk-width-1-3">
                  <span class="fa fa-4x fa-book"></span>
                  <h3 class="action-title">LEARNING</h3>
                </div>
                <div class="uk-width-1-3">
                  <span class="fa fa-4x fa-trophy"></span>
                  <h3 class="action-title">COMPETING</h3>
                </div>
                <div class="uk-width-1-3">
                  <span class="fa fa-4x fa-handshake-o"></span>
                  <h3 class="action-title">NETWORKING</h3>
                </div>
              </div>
            </div>
            <div class="uk-margin uk-width-4-5 uk-margin-auto uk-text-center">{{section2_1}}<br></br>{{section2_2}}<br></br>{{section2_3}}<br></br>{{section2_4}}</div>
            <div class="uk-margin-medium uk-text-center">
              <router-link class="uk-button uk-button-default uk-text-white" to="contact" title="Learn More About Us">Learn More About Us</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="uk-section-default uk-section uk-section-medium">
      <div class="uk-container">
        <div class="uk-grid-margin uk-grid uk-grid-stack" uk-grid="">
          <h2 class="uk-width-1-5 uk-margin-auto uk-text-center uk-heading-bullet"><span>SCHEDULE</span></h2>
          <div class="uk-width-4-5 uk-margin-auto uk-text-center">
            <div class="schedule uk-background-contain uk-height-large uk-panel uk-flex uk-flex-center uk-flex-middle"></div>
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
    data() {
      return {
        msg: 'THE LAZARIDIS CASE CONFERENCE BEGINS IN',
        section1_1: 'Laurier’s Lazaridis School of Business & Economics is the business program of Wilfrid Laurier University. Located in Waterloo, Ontario – roughly one hour from Toronto, it is one of Canada’s largest and most selective business schools.  We are ranked as one of the top six comprehensive universities in Canada.',
        section1_2: 'Waterloo is the “Silicon Valley of the North” - many leading companies such as Google, BlackBerry and Shopify are located here.  We are uniquely positioned to deliver a competition that will focus on a key driver of change– technology.',
        section2_1: 'The best international competition teams have two qualities: competition experience and insightful knowledge of how industries are changing and the latest tools that can create competitive advantage.',
        section2_2: 'Sponsors, case subjects and guest speakers will share information on how technology is changing industries and strategies as well as the tools that can be harnessed to achieve business objectives. Examples of case topics are technology companies seeking recommendations on growth, or non-technology companies that want you to recommend technology tools, i.e. ecommerce strategies.',
        section2_3: 'Participating in our competition in October will therefore give you the edge in subsequent competitions.',
        section2_4: 'In addition, you will have the opportunity to network with some of the leading and most interesting companies in the technology industry, visit one of the seven wonders of the world (Niagara Falls) and perhaps even spend some time walking around the top of the CN Tower in Toronto.'
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
    .uk-countdown-number,
    .uk-countdown-label,
    .uk-countdown-separator,
    h1 {
      color: #fff;
    }
  }
  
  .schedule {
    background-image: url("../assets/schedule.png");
  }
  
  .uk-section-laz {
    color: #fff;
    background-color: #887DAC;
    h2,
    h3 {
      color: white;
    }
    .action-title {
      margin-top: 1rem;
    }
    .uk-text-white {
      color: white;
      border-color: white;
    }
  }
</style>
