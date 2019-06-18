<template>
  <div ref="page" class="page">
    <unMenu></unMenu>
    <div class="page-content" ref="pgcnt">
      <div class="page-background">
        <div class="page-background-container">
          <!-- div ref="sq1" class="square-magenta" v-bind:style="isMobile ? '' : 'height:'+250*scaleR+'px;width:'+40*scaleR+'px'"></div>
          <div ref="cr1" class="circle t1" v-bind:style="isMobile ? '' : 'height:'+1100*scaleR+'px;width:'+1100*scaleR+'px'"></div>
          <div ref="cr2" class="circle t2" v-bind:style="isMobile ? '' : 'height:'+1050*scaleR+'px;width:'+1050*scaleR+'px'"></div>
          <div ref="cr3" class="circle t3" v-bind:style="isMobile ? '' : 'height:'+300*scaleR+'px;width:'+300*scaleR+'px'"></div>
          <div ref="cr4" class="circle t4" v-bind:style="isMobile ? '' : 'height:'+300*scaleR+'px;width:'+300*scaleR+'px'"></div -->
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
import unSpray from '@/components/unSpray'
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
      isMobile: window.innerWidth < window.dataConfig.data.mobile_width,
      ratio: 0
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
    'unSpray': unSpray,
    'unQuestion': unQuestion,
    'unCountdown': unCountdown,
    'unVideo': unVideo,
    'unFooter': unFooter
  },
  mounted () {
    // console.log('mounted!! home')
    var _ = this
    this.el = _.$refs.page
    this.pg = _.$refs.pgcnt
    this.el.addEventListener('scroll', function () {
      _.scrolling()
    })
    this.scrolling()
  },
  methods: {
    resizeHandler () {
      var w = Math.min(window.innerWidth, this.data.max_width)
      this.scaleR = Math.max(0.5, w / this.data.max_width)
      this.scaleR = Math.min(this.scaleR, (this.data.max_width_limit / this.data.max_width))
    },
    scrolling () {
      // console.log(this.ratio)
      this.ratio = this.el.scrollTop / (this.pg.offsetHeight - this.el.clientHeight)
      /*
      this.$refs.sq1.style.transform = 'translate3d(0,' + Math.round((0.35 * this.pg.offsetHeight) - 500 * (0.35 - this.ratio)) + 'px,0)'
      this.$refs.cr1.style.transform = 'translate3d(60%,' + Math.round((0.28 * this.pg.offsetHeight) - 250 * (0.28 - this.ratio)) + 'px,0)'
      this.$refs.cr2.style.transform = 'translate3d(-25%,' + Math.round((0.35 * this.pg.offsetHeight) - 200 * (0.35 - this.ratio)) + 'px,0)'
      this.$refs.cr3.style.transform = 'translate3d(-40%,' + Math.round((0.77 * this.pg.offsetHeight) - 400 * (0.77 - this.ratio)) + 'px,0)'
      this.$refs.cr4.style.transform = 'translate3d(50%,' + Math.round((0.58 * this.pg.offsetHeight) - 1000 * (0.58 - this.ratio)) + 'px,0)'
      */
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
    .square-magenta{
      background-color: $magenta;
      position: absolute;
      // top: 35%;
      right: 0;
      transform: translate3d(0,0,0);
    }
    .circle.t1{
      position: absolute;
      border-radius: 50%;
      border: 1px solid $magenta;
      // top: 28%;
      right: 0;
      transform: translate3d(60%,0,0);
    }
    .circle.t2{
      position: absolute;
      border-radius: 50%;
      border: 1px solid white;
      // top: 35%;
      left: 0;
      transform: translate3d(-25%,0,0);
    }
    .circle.t3{
      position: absolute;
      border-radius: 50%;
      border: 1px solid $magenta;
      background-color: $magenta;
      // top: 77%;
      left: 0;
      transform: translate3d(-40%,0,0);
    }
    .circle.t4{
      position: absolute;
      border-radius: 50%;
      border: 1px solid white;
      // top: 58%;
      right: 0;
      transform: translate3d(50%,0,0);
    }
  }
}
</style>
