<template>
  <div class="component-wrapper unmap">
    <div class="component-container" v-bind:style="'padding:'+200*scaleR+'px 0;'">
      <div class="map-top-info" v-html="data.page_content.space.mapinfo" v-bind:style="'font-size:'+60*scaleR+'px'"></div>
      <div class="google-map" v-bind:style="'height:'+850*scaleR+'px'">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1519.0282668723032!2d-3.726353042563173!3d40.4075983690519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4227e0cfc190d1%3A0x42806168adfbfbff!2sTeatro+Goya+Multiespacio!5e0!3m2!1ses!2ses!4v1555877702552!5m2!1ses!2ses&zoom=10" width="100%" height="100%" frameborder="0" style="border:0" allowfullscreen></iframe>
      </div>
      <div class="map-top-info" v-html="data.page_content.space.mapinfo" v-bind:style="'font-size:'+60*scaleR+'px'"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'unMap',
  props: ['test'],
  data () {
    return {
      scaleR: 1,
      isMobile: window.innerWidth < window.dataConfig.data.mobile_width
    }
  },
  created () {
    var _ = this
    _.data = window.dataConfig.data
    _.resizeHandler()
    window.addEventListener('resize', function () {
      _.resizeHandler()
      _.isMobile = window.innerWidth < window.dataConfig.data.mobile_width
    })
  },
  mounted () {
  },
  methods: {
    resizeHandler () {
      var w = Math.min(window.innerWidth, this.data.max_width)
      this.scaleR = Math.max(0.5, w / this.data.max_width)
      this.scaleR = Math.min(this.scaleR, (this.data.max_width_limit / this.data.max_width))
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../scss/_vars.scss';
.component-wrapper.unmap{
  width: 100%;
  background-color: darkgrey;
  .component-container{
    position: relative;
    max-width: 100%;
    margin: 0 auto;
    background-color: black;
    box-sizing: border-box;
    .google-map{
      -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
      filter: grayscale(100%);
      display: inline-block;
      width: 100%;
      height: 100%;
      box-sizing: border-box;
    }
    .map-top-info{
      color: $magenta;
      font-family: 'space_monoregular';
      max-width: $pagewidth;
      margin: 0 auto;
      text-align: center;
      letter-spacing: -2px
    }
  }
}
</style>
