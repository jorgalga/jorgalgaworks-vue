<template>
  <div id="cmpheader" class="component-wrapper cmpheader" v-bind:class="$props.type">
    <div class="component-container" >
      <div class="logo"></div>
      <div class="copy-logo" v-html="data.copy[clang].logo_copy"></div>
    </div>
    <div class="component-container triangle" >
    </div>
  </div>
</template>

<script>
export default {
  name: 'CMP_header',
  props: ['type'],
  data () {
    return {
      scaleR: 1,
      isMobile: window.innerWidth < window.dataConfig.mobile_width,
      data: window.dataConfig,
      clang: 'es'
    }
  },
  created () {
    if (this.$route.params.lang) {
      this.clang = this.$route.params.lang
    }
    var _ = this
    // _.resizeHandler()
    window.addEventListener('resize', function () {
      _.isMobile = window.innerWidth < _.data.mobile_width
      // _.resizeHandler()
    })
  },
  mounted () {
  },
  methods: {
    resizeHandler () {
      var w = Math.min(window.innerWidth, this.data.max_width)
      this.scaleR = Math.max(this.data.mobile_width / this.data.max_width, w / this.data.max_width)
      this.scaleR = Math.min(this.scaleR, (this.data.max_width_limit / this.data.max_width))
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../scss/_vars.scss';
@import '../scss/_fonts.scss';
.component-wrapper.cmpheader{
  width: 100%;
  background-color: $blue;
  background-color: transparent;
  transition: 1s;
  position: relative;
  z-index: 90;
  margin-top: -1px;
  @media (max-width: $break-mobile) {
    margin-top: 80px;
  }
  &.pinky{
    .component-container{
      background-color: #fde3d4;
      .copy-logo{
        display: none;
      }
      .logo{
        background-image: url('#{$staticpath}static/minsait/images/logoMinsaitPink.jpg');
      }
    }
  }
  &.whity{
    .component-container{
      background-color: white;
      .copy-logo{
        display: none;
      }
      .logo{
        background-image: url('#{$staticpath}static/minsait/images/logoMinsaitWhite.jpg');
      }
      &.triangle{
        display: none;
      }
    }
  }
  .component-container{
    max-width: $pagewidth;
    max-width: 100%;
    margin: 0 auto;
    display: block;
    background-color: #6ac7b1;
    text-align: center;
    .logo{
      background-image: url('#{$staticpath}static/minsait/images/logoMinsait.jpg');
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      display: inline-block;
      width: 300px;
      height: 150px;
      margin: 30px;
      @media (max-width: $break-mobile) {
        width: 150px;
        height: 75px;
        margin: 10px;
      }
    }
    .copy-logo{
      color: white;
      font-family: 'SohoGothicPro-Light';
      text-align: center;
      line-height: 1.3;
      font-size: 23px;
      padding: 15px;
      max-width: $pagewidth;
      margin: 0 auto;
      @media (max-width: $break-mobile) {
        padding: 10px;
        font-size: 15px;
      }
    }
    &.triangle{
      clip-path: polygon(0 0, 100% 0, 0 100%);
      margin-top: -1px;
      height: 100px;
      @media (max-width: $break-mobile) {
        height: 50px;
      }
    }
  }
}
</style>
