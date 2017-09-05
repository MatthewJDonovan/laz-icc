<template>
  <div class="uk-height-1-1">
    <navbar></navbar>
    <div class="uk-cover-container uk-height-1-1" uk-height-viewport>
      <iframe uk-cover="automute: false" src="https://www.youtube.com/embed/dwlHeF2rPck?rel=0&autoplay=1&loop=1&playlist=dwlHeF2rPck" width="640" height="500" frameborder="0" allowfullscreen></iframe>
    </div>
    <div class="uk-section-default uk-section uk-section-large">
      <div class="uk-container">
        <div class="uk-grid-margin uk-grid uk-grid-stack" uk-grid="">
          <div class="uk-width-1-1@m uk-first-column">
            <h2 class="uk-width-xxlarge uk-margin-auto uk-text-center">About Waterloo</h2>
            <div class="uk-margin uk-margin-remove-top uk-width-5-6 uk-margin-auto uk-text-center">
              <p>{{waterloo}}</p>
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
        waterloo: 'Waterloo is located in Southern Ontario in the heart of Canada’s Technology Triangle. As a result, the city hosts numerous leading technology companies including, Google, Desire to Learn, Blackberry and Shopify. Aside from being the home of two of the country’s top universities, Waterloo is also the location of the Perimeter Institute of Theoretical Physics, the Institute for Quantum Computing as well as the Centre for International Governance Innovation.',
        activities: 'The city’s rich cultural diversity, Waterloo offers visitors a unique blend of intriguing restaurants, boutique stores, galleries and nightlife. There are many things to do in Waterloo and we encourage all competitors to reach out to their respective ambassadors to recommend activities in the Waterloo area.'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  
</style>
