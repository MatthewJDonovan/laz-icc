<template>
  <div class="uk-height-1-1">
    <navbar></navbar>
    <div class="uk-section-default uk-section uk-section-medium">
      <div class="uk-container">
        <div class="uk-grid-margin uk-grid uk-grid-stack" uk-grid="">
          <div class="uk-width-1-1@m uk-first-column">
            <h2 class="uk-width-xxlarge uk-margin-auto uk-text-center">About Waterloo</h2>
            <div class="uk-margin uk-margin-remove-top uk-width-5-6 uk-margin-auto uk-text-center">
              <p>{{universities}}</p>
              <p>{{activities}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="uk-cover-container uk-height-1-1" uk-height-viewport>
      <video 
        id="vid1"
        class="video-js vjs-default-skin vjs-big-play-centered"
        controls
        data-setup='{ "techOrder": ["youtube"], "sources": [{ "type": "video/youtube", "src": "https://www.youtube.com/watch?v=dwlHeF2rPck"}] }'>
      </video>
    </div>
    <div class="uk-section-default uk-section uk-section-medium uk-section-muted">
      <div class="uk-container">
        <div class="uk-grid-margin uk-grid uk-grid-stack" uk-grid="">
          <div class="uk-width-1-1@m uk-first-column">
            <h2 class="uk-width-xxlarge uk-margin-auto uk-text-center">Waterloo Universities</h2>
            <div class="uk-margin uk-margin-remove-top uk-width-5-6 uk-margin-auto uk-text-center">
              <p>{{universities}}</p>
              <p>{{activities}}</p>
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
    name: 'ontario',
    components: {
      Footnav,
      Navbar
    },
    data () {
      return {
        waterloo: 'Waterloo is located in Southern Ontario, a short drive from both Toronto and Niagara Falls; two gems of Ontario. The city is located in the heart of Canada’s Technology Triangle and as a result hosts numerous leading technology companies including, Google, Desire to Learn, Blackberry and Shopify. Academic strength in the area is shown in the two universities as well as institutes such as the Perimeter Institute, the Institute for Quantum Computing and Communitech.',
        universities: 'Waterloo also boasts a diverse population that ranges from thousands of students that attend Wilfrid Laurier University and the University of Waterloo while being ten minutes away from St. Jacobs with its large Mennonite community. The German roots of Waterloo are demonstrated through the city’s Oktoberfest, the largest one located outside of Germany. The city’s rich cultural diversity offers visitors a unique blend of intriguing restaurants, boutique stores, galleries and nightlife.',
        activities: 'There are many things to do in Waterloo and we encourage all competitors to reach out to their respective ambassadors to recommend activities in the Waterloo area.'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .video-js {
    height: 100%;
    width: 100%;
  }
</style>
