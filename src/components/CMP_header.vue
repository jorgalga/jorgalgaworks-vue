<template>
  <div id="cmpheader" class="component-wrapper cmpheader">
    <div class="component-container" v-bind:style="isMobile ? '' : 'height: '+300*scaleR+'px'">
      <div v-bind:style="isMobile ? '' : 'width: '+300*scaleR+'px; height:'+150*scaleR+'px'" class="logo"></div>
      <div class="copy-logo" v-html="data.copy[clang].logo_copy" v-bind:style="isMobile ? 'font-size:20px' : 'font-size:'+24*scaleR+'px'"></div>
    </div>
    <div class="component-container triangle" v-bind:style="isMobile ? '' : 'height: '+100*scaleR+'px'">
    </div>
  </div>
</template>

<script>
export default {
  name: 'CMP_header',
  props: ['test'],
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
    _.resizeHandler()
    window.addEventListener('resize', function () {
      _.isMobile = window.innerWidth < _.data.mobile_width
      _.resizeHandler()
    })
  },
  mounted () {
  },
  methods: {
    resizeHandler () {
      var w = Math.min(window.innerWidth, this.data.max_width)
      this.scaleR = Math.max(this.data.mobile_width / this.data.max_width, w / this.data.max_width)
      this.scaleR = Math.min(this.scaleR, (this.data.max_width_limit / this.data.max_width))
      console.log(this.scaleR)
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
  .component-container{
    max-width: $pagewidth;
    max-width: 100%;
    margin: 0 auto;
    box-sizing: border-box;
    position:relative;
    background-color: #6ac7b1;
    text-align: center;
    .logo{
      background-image: url('#{$staticpath}static/minsait/images/logoMinsait.jpg');
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      display: inline-block;
    }
    .copy-logo{
      color: white;
      font-family: 'SohoGothicPro-Regular';
      text-align: center;
    }
    &.triangle{
      clip-path: polygon(0 0, 100% 0, 0 100%);
    }
  }
}
</style>
