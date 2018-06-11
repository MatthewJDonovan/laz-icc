<template>
  <div class="uk-height-1-1">
    <navbar></navbar>
    <div class="uk-background-cover uk-height-large uk-panel uk-flex uk-flex-center uk-flex-middle uk-background-bottom-center waterloo-image"></div>
    <div class="uk-section-default uk-section uk-section-medium">
      <div class="uk-container">
        <div class="uk-grid-margin uk-grid uk-grid-stack" uk-grid="">
          <div class="uk-width-1-1@m uk-first-column">
            <h2 class="uk-width-xxlarge uk-margin-auto uk-text-center">Waterloo & Surrounding Area</h2>
            <div class="uk-margin uk-margin-remove-top uk-width-5-6 uk-margin-auto uk-text-center">
              <p>{{waterloo}}</p>
              <p>{{universities}}</p>
              <p>{{activities}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="uk-section-default uk-section uk-section-muted">
      <div class="uk-container">
        <div class="uk-grid-margin uk-grid uk-grid-stack" uk-grid="">
          <div class="uk-width-1-1@m uk-first-column">
            <h2 class="uk-width-xxlarge uk-margin-auto uk-text-center">Accommodation Information</h2>
            <div class="uk-margin uk-margin-remove-top uk-width-5-6 uk-margin-auto uk-text-center">
              <p>{{accommodation}} <a href="https://www.marriott.com/hotels/travel/ykfdw-delta-hotels-waterloo/" target="_blank">Marriott Hotel, Waterloo</a></p>
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
        data-setup='{ "techOrder": ["youtube"], "sources": [{ "type": "video/youtube", "src": "https://www.youtube.com/watch?v=lhNx2kPIFG8"}] }'>
      </video>
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
        waterloo: 'Waterloo is a city uniquely situated only an hour’s drive away from Canada’s largest city, Toronto and one of the Seven Wonders of the World, Niagara Falls. It is the “Silicon Valley of the North” and is the home of numerous leading technology companies such as Google, BlackBerry and Shopify.',
        universities: 'Waterloo boasts a diverse population that ranges from thousands of students that attend Wilfrid Laurier University and the University of Waterloo. The city’s rich cultural diversity offers visitors a unique blend of intriguing restaurants, boutique stores, galleries and nightlife. The German roots of the city are demonstrated through the city’s Oktoberfest, the largest one located outside of Germany.',
        activities: 'There are many things to do in Waterloo and we encourage all competitors to reach out to their respective ambassadors to recommend activities in the Waterloo area.',
        accommodation: 'All delegates and faculty advisors will be staying in the conveniently located Delta Waterloo throughout the week. The hotel is located 4 minutes from the university and is near many food and entertainment options in the Waterloo area. For more information about the hotel, its various amenities as well as photos of the rooms, feel free to visit their website: '
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.waterloo-image {
    background-image: url("../assets/waterloo_bg.png");
    background-color: #999;
    background-blend-mode: multiply;
}
  .video-js {
    height: 100%;
    width: 100%;
  }
</style>
