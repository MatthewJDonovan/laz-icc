<template>
  <div class="uk-height-1-1 uk-position-relative">
    <navbar></navbar>
    <div class="uk-section-secondary uk-section uk-section-large">
      <div class="uk-grid-margin uk-grid uk-grid-stack" uk-grid="">
        <div class="uk-width-1-1@m uk-first-column">
          <h1 class="uk-text-center uk-heading-primary">THE COMPETITION</h1>
        </div>
      </div>
    </div>
    <div class="uk-section-default uk-section uk-section-medium">
      <div class="uk-grid-margin uk-grid uk-grid-stack" uk-grid="">
        <div class="uk-width-1-1@m uk-first-column">
          <h2 class="uk-width-xxlarge uk-margin-auto uk-text-center">Lazaridis International Case Competition</h2>
          <div class="uk-margin uk-margin-remove-top uk-width-1-2 uk-margin-auto uk-text-center">
            <p>{{about}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="uk-section-default uk-section uk-section-medium uk-background-muted">
      <div class="uk-grid-margin uk-grid uk-grid-stack" uk-grid="">
        <div class="uk-width-1-1@m uk-first-column">
          <h2 class="uk-width-xxlarge uk-margin-auto uk-text-center">Schedule</h2>
          <div class="uk-margin uk-margin-remove-top uk-width-1-2 uk-margin-auto uk-text-center">
            <p>{{schedule}}</p>
            <a class="el-content uk-button uk-button-default" href='https://drive.google.com/uc?authuser=0&id=0B1vRwM0N8kv1UURhS193RGVsLTg&export=download' target="_blank">Download Schedule</a>
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
    name: 'competition',
    data () {
      return {
        about: 'The competition will feature teams of four from around the world that will compete in two closed book cases which will be 3 hours each as well as a 24 hour case. The cases will be focus on technology to leverage the unique entrepreneurial and innovative ecosystem in which the business school operates in. We are incredibly proud to present the opportunity for the best and brighter students from around the world to compete in the tech hub that we call home: Waterloo, Ontario.',
        schedule: 'Below is a schedule of the inaugural Lazaridis International Case Competition that will include participants arriving on Sunday and participating in a variety of cases and activities to learn about what Waterloo and the surrounding areas have to offer.'
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
  
</style>
