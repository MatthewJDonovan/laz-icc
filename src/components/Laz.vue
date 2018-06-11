<template>
  <div class="uk-height-1-1">
    <navbar></navbar>
    <div class="uk-background-cover uk-height-large uk-panel uk-flex uk-flex-center uk-flex-middle uk-background-bottom-center laz-image"></div>
    <div class="uk-section-default uk-section uk-section-medium uk-margin-medium-top">
      <div class="uk-grid-margin uk-grid uk-grid-stack" uk-grid="">
        <div class="uk-width-1-1@m uk-first-column">
          <h2 class="uk-width-xxlarge uk-margin-auto uk-text-center">Lazaradis School of Business and Economics</h2>
          <div class="uk-margin uk-margin-remove-top uk-width-2-3 uk-margin-auto uk-text-center">
            <p>{{about}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="uk-section-muted uk-section uk-section-medium uk-background-muted">
      <div class="uk-grid-margin uk-grid uk-grid-stack" uk-grid="">
        <div class="uk-width-1-1@m uk-first-column">
          <h3 class="uk-margin-auto uk-width-2-3">Lazaridis School Quick Facts</h3>
          <div class="uk-margin uk-margin-remove-top uk-width-2-3 uk-margin-auto">
            <ul class="uk-list uk-list-bullet">
              <li v-for="fact in facts">{{ fact }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="uk-cover-container uk-height-1-1" uk-height-viewport>
      <video 
        id="vid1"
        class="video-js vjs-default-skin vjs-big-play-centered"
        controls
        data-setup='{ "techOrder": ["youtube"], "sources": [{ "type": "video/youtube", "src": "https://www.youtube.com/watch?v=fYDfqY1-2BY&feature=youtu.be"}] }'>
      </video>
    </div>
    <footnav></footnav>
  </div>
</template>
<script>
  import Footnav from './Footer.vue'
  import Navbar from './Navbar.vue'
  import videojs from 'video.js'
  
  export default {
    name: 'laz',
    components: {
      Footnav,
      Navbar
    },
    data () {
      return {
        about: 'Wilfrid Laurier University’s Lazaridis School of Business & Economics is one of Canada’s largest and most selective business schools. Led by Micheal J. Kelly, the Lazaridis School of Business & Economics has an outstanding reputation for creating exceptional leaders, and our alumni are at the head of many major Canadian corporations, including BMO, Kellogg’s Canada, Nestlé Canada, Toshiba Canada and many other firms.',
        laz_hall: 'In May of 2017, the Lazaridis School of Business & Economics unveiled the new Business & Economics building, Lazaridis Hall in Waterloo Ontario, Canada. We are pleased to announce that the Lazaridis International Case Competition will utilize the features and functionality of the building.',
        facts: ['One of Canada’s largest and selective business schools with 140 full time faculty, 60 part time faculty and 6,000 students', 'One of only 5% of the world’s 13,000 business programs that is accredited by the International Association to Advance Collegiate Schools of Business (AACSB)', 'Home to Canada’s largest business degree co-op program', 'Seven-time champions of the “School of the Year” award at the JDCC (Jeux de Commerce Central) Competition, one of Canada’s most prestigious business case competitions', 'More gold medals in the Chartered Accountants Uniform Final Examination (UFE, now CFE) than any other Canadian university', 'Over 100 new enterprises have been created through Laurier LaunchPad, which brings students, alumni, faculty members and community partners together to share skills and experience', 'o	Recently placed first at the University of Navarra International Case Competition and second at the McGill Management International Competition, two world class international case competitions', 'Linkedin ranks Laurier as #2 for marketers, #2 for investment bankers and #4 for finance professionals in Canada, in terms of landing a great job after graduation']
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.laz-image {
    background-image: url("../assets/laz_bg.jpg");
    background-color: #999;
    background-blend-mode: multiply;
    background-position: top;
}
.video-js {
  height: 100%;
  width: 100%;
}
</style>
