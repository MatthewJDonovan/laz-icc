<template>
  <div class="uk-section-muted uk-section">
    <div class="uk-container">
      <div class="uk-grid-large uk-grid-margin-large uk-grid" uk-grid>
        <div class="uk-width-expand@l uk-width-1-2@m uk-first-column">
          <div class="uk-margin">
            <img src="../assets/logo.png" class="el-image">
          </div>
        </div>
        <div class="uk-width-expand@l uk-width-1-2@m">
          <h2 class="uk-h5">CONTACT</h2>
          <ul class="uk-list">
            <li class="el-item">Email: <a href="mailto:tomas.marek@lazicc.com?Subject=Lazaridis%20International%20Case%20Competition" target="_top">tomas.marek@lazicc.com</a></li>
          </ul>
        </div>
        <div class="uk-width-expand@l uk-width-1-2@m">
          <h2 class="uk-h5">SOCIAL</h2>
          <ul class="uk-list">
            <li class="el-item">Facebook</li>
            <li class="el-item">Twitter</li>
            <li class="el-item">Instagram</li>
          </ul>
        </div>
        <div class="uk-width-expand@l uk-width-1-2@m">
          <div class="uk-margin uk-text-right">
            <a href="#" uk-totop uk-scroll class="uk-totop uk-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="20" viewBox="0 0 15 20" ratio="1">
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'footnav'
}
</script>

<style scoped>

.middle-row {
  height: 10vh;
  background-color: #d8d8d8;
}
.bottom-row {
  width: 100vw;
  height: 5vh;
  background-color: #a8a8a8;
  color: #d8d8d8;
  text-align: left;
  padding-left: 15px;

}
</style>
