<template>
  <div class="component-wrapper unquestion">
    <div class="component-container" v-bind:style="'height:'+data.page_content[$props.type].ftheight*scaleR+'px;padding:0 '+15*scaleR+'px'">
      <div class="gradient"></div>
      <div ref="canvasCnt" class="tags-container"></div>
    </div>
  </div>
</template>
<script>
import {ThreeRain} from '../lib/ThreeRain'
export default {
  name: 'unFloatingTags',
  props: ['type'],
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
    this.initPhysics()
  },
  methods: {
    resizeHandler () {
      var w = Math.min(window.innerWidth, this.data.max_width)
      this.scaleR = Math.max(0.5, w / this.data.max_width)
      this.scaleR = Math.min(this.scaleR, (this.data.max_width_limit / this.data.max_width))
    },
    initPhysics () {
      this.rain = new ThreeRain(this.$refs.canvasCnt, this.data.rains_elements[this.$props.type])
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../scss/_vars.scss';
.component-wrapper.unquestion{
  width: 100%;
  background-color: black;
  .component-container{
    position: relative;
    max-width: $pagewidth;
    margin: 0 auto;
    background-color: black;
    box-sizing: border-box;
    .gradient{
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 999;
      background-image: linear-gradient(to bottom, black, transparent 15%, transparent 85%, black);
      pointer-events: none;
    }
    .tags-container{
      background-color: black;
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      display: inline-block;
    }
  }
}
</style>
