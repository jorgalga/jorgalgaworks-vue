<template>
  <div id="page" ref="page" class="page">
    <unMenu></unMenu>
    <div class="page-content">
      <div class="page-background">
        <div class="page-background-container">
          <div class="square-magenta" v-bind:style="isMobile ? '' : 'height:'+250*scaleR+'px;width:'+40*scaleR+'px'"></div>
          <div class="circle t1" v-bind:style="isMobile ? '' : 'height:'+1100*scaleR+'px;width:'+1100*scaleR+'px'"></div>
          <div class="circle t2" v-bind:style="isMobile ? '' : 'height:'+1050*scaleR+'px;width:'+1050*scaleR+'px'"></div>
          <div class="circle t3" v-bind:style="isMobile ? '' : 'height:'+300*scaleR+'px;width:'+300*scaleR+'px'"></div>
        </div>
      </div>
      <unHomeinfo></unHomeinfo>
      <unQuestion type="home" qindex=0></unQuestion>
      <unVideo></unVideo>
      <unQuestion type="home" qindex=1></unQuestion>
      <unCountdown></unCountdown>
      <unFooter></unFooter>
    </div>
  </div>
</template>
<script>
import unMenu from '@/components/unMenu'
import unHomeinfo from '@/components/unHomeinfo'
import unQuestion from '@/components/unQuestion'
import unVideo from '@/components/unVideo'
import unCountdown from '@/components/unCountdown'
import unFooter from '@/components/unFooter'
export default {
  name: 'Home',
  props: ['id'],
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
  components: {
    'unMenu': unMenu,
    'unHomeinfo': unHomeinfo,
    'unQuestion': unQuestion,
    'unCountdown': unCountdown,
    'unVideo': unVideo,
    'unFooter': unFooter
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
.page-content{
  margin: 0 auto;
  max-width: 100%;
  position: relative;
  perspective: 1px
}
.page-background{
  top:50%;
  left: 50%;
  transform: translate3d(-50%,-50%,0);
  height: 100%;
  width: 100%;
  position: absolute;
  opacity: 1;
  .page-background-container{
    margin: 0 auto;
    max-width: $pagewidth;
    height: 100%;
    position: relative;
    overflow: hidden;
    .square-magenta{
      background-color: $magenta;
      position: absolute;
      top: 35%;
      right: 0;
    }
    .circle.t1{
      position: absolute;
      border-radius: 50%;
      border: 2px solid $magenta;
      top: 28%;
      right: 0;
      transform: translate3d(60%,0,0);
    }
    .circle.t2{
      position: absolute;
      border-radius: 50%;
      border: 2px solid white;
      top: 35%;
      left: 0;
      transform: translate3d(-25%,0,0);
    }
    .circle.t3{
      position: absolute;
      border-radius: 50%;
      border: 2px solid $magenta;
      background-color: $magenta;
      top: 77%;
      left: 0;
      transform: translate3d(-40%,0,0);
    }
  }
}
</style>
