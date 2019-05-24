<template>
  <div id="cmpinfo" class="component-wrapper cmpinfo">
    <div class="page-title" v-bind:style="isMobile ? 'font-size:20px' : 'font-size:'+360*scaleR+'px'" v-html="data.copy[clang].info_ptitle">
    </div>
    <div class="component-container">
      <div class="video-container" v-bind:style="isMobile ? '' : 'height:'+840*scaleR+'px'">
      </div>
      <div class="info-container" v-bind:style="isMobile ? '' : 'height:'+900*scaleR+'px; margin: '+100*scaleR+'px 0;'">
        <div class="info-item" v-for="item in data.copy[clang].infoitems" :key="item.order">
          <div class="info-item-container">
            <div class="order" v-bind:style="isMobile ? 'font-size:20px' : 'font-size:'+220*scaleR+'px'"><span class="hash" v-bind:style="isMobile ? 'font-size:20px' : 'font-size:'+110*scaleR+'px'">#</span>{{item.order}}</div>
            <div class="title" v-html="item.title" v-bind:style="isMobile ? 'font-size:20px' : 'font-size:'+38*scaleR+'px'"></div>
            <div class="description" v-html="item.description" v-bind:style="isMobile ? 'font-size:20px' : 'font-size:'+28*scaleR+'px'"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CMP_info',
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
.component-wrapper.cmpinfo{
  width: 100%;
  background-color: $blue;
  transition: 1s;
  position: relative;
  .component-container{
    max-width: $pagewidth;
    margin: 0 auto;
    box-sizing: border-box;
    background-color: #00000011;
    min-height: 100vh;
    position:relative;
    .video-container{
      width: 100%;
      background-color: $darkblue;
    }
    .info-container{
      width: 100%;
      background-color: #00000011;
      display: inline-block;
      position: relative;
      .info-item{
        position: absolute;
        width: 50%;
        height: 50%;
        display: inline-block;
        box-sizing: border-box;
        border: 0;
        color: white;
        font-family: 'SohoGothicPro-Light';
        .info-item-container{
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate3d(-50%,-50%,0);
          width: 45%;
          .hash{
            font-size: 110px;
            line-height: 0.9;
            position: relative;
            transform: translate3d(0,-25%,0);
            display: inline-block;
          }
          .order{
            line-height: 0.9;
            position: absolute;
            left: 0;
            top: 0;
            transform: translate3d(-100%,-50%,0)
          }
          .description{
            position: relative;
            transform: translate3d(10%,0,0)
          }
        }
        &:nth-child(1){
          top:0;
          left: 0;
          .info-item-container{
            transform: translate3d(-25%,-50%,0)
          }
        }
        &:nth-child(2){
          top:0;
          left: 50%;
          .info-item-container{
            transform: translate3d(-25%,50%,0)
          }
        }
        &:nth-child(3){
          top:50%;
          left: 0;
          .info-item-container{
            transform: translate3d(0,-50%,0)
          }
        }
        &:nth-child(4){
          top:50%;
          left: 50%;
          .info-item-container{
            transform: translate3d(-25%,75%,0)
          }
        }
      }
    }
  }
  .page-title{
    color: white;
    font-size: 460px;
    font-family: 'SohoGothicPro-Light';
    line-height: 0.9;
    position: absolute;
    transform-origin: top right;
    transform: rotate(-90deg) translate3d(-50%,-100%,0);
    z-index: 999;
    top:0;
    right: 0;
  }
}
</style>
