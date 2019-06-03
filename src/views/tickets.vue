<template>
  <div id="page" class="page">
    <div class="page-content">
      <div class="page-background">
        <div class="page-background-container">
          <div class="line t1" v-bind:style="isMobile ? '' : 'height:'+2*scaleR+'px;width:'+100+'%'"></div>
          <div class="line t2" v-bind:style="isMobile ? '' : 'width:'+2*scaleR+'px;height:'+100+'%'"></div>
          <div class="square t1" v-bind:style="isMobile ? '' : 'height:'+400*scaleR+'px;width:'+50*scaleR+'px'"></div>
          <div class="circle t2" v-bind:style="isMobile ? '' : 'height:'+1400*scaleR+'px;width:'+1400*scaleR+'px'"></div>
          <div class="circle t3" v-bind:style="isMobile ? '' : 'height:'+300*scaleR+'px;width:'+300*scaleR+'px'"></div>
        </div>
      </div>
      <unMenu></unMenu>
      <unTickets></unTickets>
      <unFooter class="footer"></unFooter>
    </div>
  </div>
</template>
<script>
import unMenu from '@/components/unMenu'
import unTickets from '@/components/unTickets'
import unFooter from '@/components/unFooter'
export default {
  name: 'Tickets',
  props: ['id'],
  data () {
    return {
      scaleR: 1,
      isMobile: window.innerWidth < window.dataConfig.data.mobile_width
    }
  },
  components: {
    'unMenu': unMenu,
    'unTickets': unTickets,
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
  max-width: $pagewidth;
  max-width: 100%;
  height: 100vh;
}

.page-background{
  top:50%;
  left: 50%;
  transform: translate3d(-50%,-50%,0);
  height: 100%;
  width: 100%;
  position: absolute;
  opacity: 0.75;
  .page-background-container{
    margin: 0 auto;
    max-width: $pagewidth;
    height: 100%;
    position: relative;
    overflow: hidden;
    .line.t1{
      background-color: white;
      position: absolute;
      top: 50%;
      left: 0;
    }
    .line.t2{
      background-color: white;
      position: absolute;
      top: 0%;
      left: 90%;
    }
    .square.t1{
      background-color: white;
      position: absolute;
      top: 42%;
      left: 81%;
    }
    .circle.t2{
      position: absolute;
      border-radius: 50%;
      border: 2px solid $magenta;
      top: 25%;
      right: 0;
      transform: translate3d(50%,0,0);
      opacity: 1;
    }
    .circle.t3{
      position: absolute;
      border-radius: 50%;
      border: 2px solid $magenta;
      background-color: $magenta;
      top: 25%;
      left: 0;
      transform: translate3d(-60%,0,0);
      opacity: 1;
    }
  }
}
</style>
