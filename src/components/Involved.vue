<template>
  <div class="uk-height-1-1 uk-position-relative">
    <navbar></navbar>
    <div class="uk-section-default uk-section uk-section-medium uk-margin-large-top">
      <div class="uk-container">
        <div uk-grid>
          <div class="uk-width-1-5 uk-text-left"></div>
          <div class="uk-width-3-5 uk-text-center">
            <h1>SPONSORSHIP</h1>
            <p>As a corporate partner of the Lazaridis International Case Conference, there are many ways to get involved and receive value. Whether you are looking to recruit from a pool of top international talent, establish both local and international brand recognition with tomorrow’s future leaders, or become case subjects with regards to tech innovation & strategy, this conference serves as an excellent opportunity to engage with the international community. During this week-long tech conference, schools from across the world will be coming together to hear what you have to say. Educate, learn, and engage with the Lazaridis International Case Conference.</p>
            <router-link class="el-content uk-button uk-button-default" to="contact" title="Contact">Contact</router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="uk-section-muted uk-section uk-section-medium">
      <div class="uk-container">
        <div uk-grid>
          <div class="uk-width-1-5 uk-text-left"></div>
          <div class="uk-width-3-5 uk-text-center">
            <h1>COMPETING</h1>
            <p>Learn, network, compete and explore the Silicon Valley of the North. We promise a week of valuable insights, a chance to connect with other top students from around the world and some fun visiting Niagara Falls, Oktoberfest and other highlights of southern Ontario.  Applications are now open - send us an email to apply.</p>
            <a class="el-content uk-button uk-button-default" href="https://drive.google.com/uc?export=download&id=1ah1eZ76uXEAhyYH_LOqwOmmHGIQwiynW" download>Information Package</a>
          </div>
        </div>
      </div>
    </div>
    <div class="uk-section-default uk-section uk-section-medium">
      <div class="uk-container">
        <div uk-grid>
          <div class="uk-width-1-5 uk-text-left"></div>
          <div class="uk-width-3-5 uk-text-center">
            <h1>VOLUNTEERING</h1>
            <p>More information about how to get involved in organizing the competition will be posted shortly. For further information send us a message.</p>
            <router-link class="el-content uk-button uk-button-default" to="contact" title="Contact">Contact</router-link>
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
    name: 'involved',
    data () {

    },
    components: {
      Footnav,
      Navbar
    },
    methods: {
      openPdf() {
        window.open('/src/assets/invitations.pdf')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
