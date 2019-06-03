<template>
  <div ref="page" class="page">
    <unMenu></unMenu>
    <div ref="pgcnt" class="page-content">
      <div class="page-background">
        <div class="page-background-container">
          <div ref="sq1" class="square-magenta" v-bind:style="isMobile ? '' : 'height:'+250*scaleR+'px;width:'+40*scaleR+'px'"></div>
          <div ref="cr1" class="circle t1" v-bind:style="isMobile ? '' : 'height:'+1100*scaleR+'px;width:'+1100*scaleR+'px'"></div>
          <div ref="cr2" class="circle t2" v-bind:style="isMobile ? '' : 'height:'+800*scaleR+'px;width:'+800*scaleR+'px;left:-'+scaleR*100+'px'"></div>
          <div ref="cr3" class="circle t3" v-bind:style="isMobile ? '' : 'height:'+900*scaleR+'px;width:'+900*scaleR+'px;left:-'+scaleR*100+'px'"></div>
          <div ref="cr4" class="circle t4" v-bind:style="isMobile ? '' : 'height:'+1000*scaleR+'px;width:'+1000*scaleR+'px;left:-'+scaleR*100+'px'"></div>
          <div ref="cr5" class="circle t5" v-bind:style="isMobile ? '' : 'height:'+1100*scaleR+'px;width:'+1100*scaleR+'px;left:-'+scaleR*100+'px'"></div>
          <div ref="cr6" class="circle t6" v-bind:style="isMobile ? '' : 'height:'+1200*scaleR+'px;width:'+1200*scaleR+'px;left:-'+scaleR*100+'px'"></div>
          <div ref="cr7" class="circle t7" v-bind:style="isMobile ? '' : 'height:'+1300*scaleR+'px;width:'+1300*scaleR+'px;left:-'+scaleR*100+'px'"></div>
          <div ref="cr8" class="circle t8" v-bind:style="isMobile ? '' : 'height:'+1400*scaleR+'px;width:'+1400*scaleR+'px;left:-'+scaleR*100+'px'"></div>
          <div ref="cr9" class="circle t9" v-bind:style="isMobile ? '' : 'height:'+1500*scaleR+'px;width:'+1500*scaleR+'px;left:-'+scaleR*100+'px'"></div>
        </div>
      </div>
      <unPageheader type="speakers"></unPageheader>
      <unWrapper type="speakers" classopened="opened"></unWrapper>
      <unWrapper type="artists" classopened="opened" flipped="inverse"></unWrapper>
      <unWrappersimple type="host" classopened="opened"></unWrappersimple>
      <unQuestion type="speakers" qindex="0"></unQuestion>
      <unFooter></unFooter>
    </div>
  </div>
</template>
<script>
import unMenu from '@/components/unMenu'
import unPageheader from '@/components/unPageheader'
import unWrapper from '@/components/unWrapper'
import unWrappersimple from '@/components/unWrappersimple'
import unQuestion from '@/components/unQuestion'
import unFooter from '@/components/unFooter'
export default {
  name: 'Speakers',
  props: ['id'],
  data () {
    return {
      scaleR: 1,
      isMobile: window.innerWidth < window.dataConfig.data.mobile_width,
      ratio: 0
    }
  },
  components: {
    'unMenu': unMenu,
    'unPageheader': unPageheader,
    'unWrapper': unWrapper,
    'unWrappersimple': unWrappersimple,
    'unQuestion': unQuestion,
    'unFooter': unFooter
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
    console.log('mounted!! speakers')
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
      console.log(this.ratio)
      this.ratio = this.el.scrollTop / (this.pg.offsetHeight - this.el.clientHeight)
      this.$refs.sq1.style.transform = 'translate3d(0,' + Math.round((0.35 * this.pg.offsetHeight) - 500 * (0.35 - this.ratio)) + 'px,0)'
      this.$refs.cr1.style.transform = 'translate3d(100%,' + Math.round((0.18 * this.pg.offsetHeight) - 500 * (0.28 - this.ratio)) + 'px,0)'
      /*
      this.$refs.cr2.style.transform = 'translate3d(-50%,' + Math.round((0.85 * this.pg.offsetHeight) - 250 * (0.85 - this.ratio)) + 'px,0)' */
      this.$refs.cr2.style.top = Math.round((0.92 * this.pg.offsetHeight) - 100 * (0.92 - this.ratio)) + 'px'
      this.$refs.cr3.style.top = Math.round((0.92 * this.pg.offsetHeight) - 250 * (0.92 - this.ratio)) + 'px'
      this.$refs.cr4.style.top = Math.round((0.92 * this.pg.offsetHeight) - 400 * (0.92 - this.ratio)) + 'px'
      this.$refs.cr5.style.top = Math.round((0.92 * this.pg.offsetHeight) - 550 * (0.92 - this.ratio)) + 'px'
      this.$refs.cr6.style.top = Math.round((0.92 * this.pg.offsetHeight) - 700 * (0.92 - this.ratio)) + 'px'
      this.$refs.cr7.style.top = Math.round((0.92 * this.pg.offsetHeight) - 850 * (0.92 - this.ratio)) + 'px'
      this.$refs.cr8.style.top = Math.round((0.92 * this.pg.offsetHeight) - 1000 * (0.92 - this.ratio)) + 'px'
      this.$refs.cr9.style.top = Math.round((0.92 * this.pg.offsetHeight) - 1150 * (0.92 - this.ratio)) + 'px'
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
.component-wrapper.unquestion{
  background-color: black;
}
.page-background{
  top:50%;
  left: 50%;
  transform: translate3d(-50%,-50%,0);
  height: 100%;
  width: 100%;
  position: absolute;
  opacity: 1;
  /*z-index: 10000;*/
  pointer-events: none;
  overflow: hidden;
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
      left: 0;
      transform: translate3d(-50%,0,0);
    }
    .circle.t2, .circle.t3, .circle.t4, .circle.t5, .circle.t6, .circle.t7, .circle.t8, .circle.t9{
      position: absolute;
      border-radius: 50%;
      border: 1px solid $magenta;
      // top: 28%;
      left: -20vw !important;
      transform: translate3d(-50%,-50%,0);
    }
  }
}
</style>
