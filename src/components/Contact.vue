<template>
  <div class="uk-height-1-1">
    <navbar></navbar>
    <div class="uk-section-default uk-section">
      <div class="uk-container">
        <h2>Send us a message</h2>
        <div class="uk-grid-margin uk-grid uk-grid-stack" uk-grid="">
          <div class="uk-width-3-5@m uk-first-column">
            <form>
              <fieldset class="uk-fieldset">
                <div class="uk-margin">
                  <label class="uk-form-label">Email</label>
                  <input class="uk-input" type="email" placeholder="example@gmail.com">
                </div>
  
                <div class="uk-margin">
                  <label class="uk-form-label">Subject</label>
                  <input class="uk-input" type="text" placeholder="e.g. Question about...">
                </div>
  
                <div class="uk-margin">
                  <label class="uk-form-label">Message</label>
                  <textarea class="uk-textarea" rows="5" placeholder="Enter your inquiry..."></textarea>
                </div>
  
                <div class="uk-margin uk-float-right" uk-margin>
                  <button class="uk-button uk-button-default">Submit</button>
                </div>
              </fieldset>
            </form>
          </div>
          <div class="uk-width-2-5@m">
            <div class="uk-card uk-card-default uk-card-body">
              <h3 class="uk-card-title">Contact Details</h3>
              <p>If you are interested in participating as a competitor or as a sponsor please send an email to <a href="mailto:tomas.marek@lazicc.com?Subject=Lazaridis%20International%20Case%20Competition" target="_top">tomas.marek@lazicc.com</a></p>
              <h4>Follow Us</h4>
              <a href="" class="uk-icon-button uk-margin-medium-right" uk-icon="icon: twitter"></a>
              <a href="" class="uk-icon-button  uk-margin-medium-right" uk-icon="icon: facebook"></a>
              <a href="" class="uk-icon-button uk-margin-medium-right" uk-icon="icon: google-plus"></a> 
              <a href="" class="uk-icon-button uk-margin-medium-right" uk-icon="icon: instagram"></a> 
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
    name: 'contact',
    components: {
      Navbar,
      Footnav
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

.uk-form-label {
  text-transform: capitalize;
}
  
</style>
