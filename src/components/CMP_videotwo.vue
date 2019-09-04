<template>
  <div id="cmpvideo" class="component-wrapper cmpvideo" v-bind:style="isMobile ? '' : 'margin-top: -'+0*scaleR+'px'">
    <div class="component-container" v-bind:style="isMobile ? '' : 'padding: 0'">
      <div class="page-title" v-bind:style="isMobile ? 'font-size:50px' : 'font-size:'+70*1+'px; margin-bottom:'+45*scaleR+'px'" v-html="data.copy[clang].video_ptitle2">
      </div>
      <div class="video-container" v-bind:style="isMobile ? 'height:'+476*scaleR+'px' : 'height:'+846*scaleR+'px'">
        <!--div class="icon-video" v-bind:style="isMobile ? 'height:'+150*scaleR+'px;width:'+150*scaleR+'px' : 'height:'+200*scaleR+'px;width:'+200*scaleR+'px'"></div-->
        <div id="player"></div>
      </div>
      <div class="pd-container withtext">
        <div class="page-description"  v-html="data.copy[clang].video_description2">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CMP_videotwo',
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
    var _ = this
    this.clang = this.$route.name.split('loc:')[1]
    _.resizeHandler()
    window.addEventListener('resize', function () {
      _.isMobile = window.innerWidth < _.data.mobile_width
      _.resizeHandler()
    })
  },
  mounted () {
    var _ = this
    setTimeout(function () {
      _.checkYT()
    }, 1000)
  },
  methods: {
    resizeHandler () {
      var w = Math.min(window.innerWidth, this.data.max_width)
      this.scaleR = Math.max(this.data.mobile_width / this.data.max_width, w / this.data.max_width)
      this.scaleR = Math.min(this.scaleR, (this.data.max_width_limit / this.data.max_width))
      // console.log(this.scaleR)
    },
    checkYT () {
      var _ = this
      if (window.YTapi === true) {
        console.log('videoTWO YT ready')
        _.YTplayer2 = new window.YT.Player('player', {
          height: '100%',
          width: '100%',
          playerVars: {rel: 0},
          videoId: 'AwLoe7_Lo_s'
        })
      } else {
        // console.log('we go!!')
        setTimeout(function () {
          _.checkYT()
        }, 100)
      }
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../scss/_vars.scss';
@import '../scss/_fonts.scss';
.component-wrapper.cmpvideo{
  width: 100%;
  background-color: white;
  transition: 1s;
  position: relative;
  z-index: 80;
  .component-container{
    max-width: $pagewidth;
    max-width: 100%;
    margin: 0 auto;
    box-sizing: border-box;
    position:relative;
    background-color: white;
    .video-container{
      width: 100%;
      max-width: $pagewidth;
      margin: 0 auto;
      background-color: #e8e8e8;
      position: relative;
      z-index: 90;
      @media (max-width: $break-mobile) {
        margin: 10px;
        width: initial;
      }
      .icon-video{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate3d(-50%,-50%,0);
        background-image: url('#{$staticpath}static/minsait/images/icon-vplay.png');
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
      }
    }
  }

  .page-title{
    color: $blue;
    font-family: 'PlayfairDisplay-Regular';
    line-height: 1;
    text-align: center;
    max-width: $pagewidth;
    margin: 0 auto;
    /deep/ span{
      font-size: 40px;
    }
    @media (max-width: $break-mobile) {
      text-align: center;
      margin: 100px 10px 0 10px;
      /deep/ span{
        font-size: 23px;
      }
    }
  }
  .pd-container{
    width: 100%;
    margin: 0 auto;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    &.triangle{
      clip-path: polygon(0 25%, 100% 0, 100% 100%, 0 100%);
    }
    &.withtext{
      height: 200px;
      @media (max-width: $break-mobile) {
        height: unset;
      }
    }
  }
  .page-description{
    font-family: 'PlayfairDisplay-Regular';
    color: $blue;
    text-align: center;
    max-width: $pagewidth;
    font-size: 40px;
    line-height: 1.3;
    display: inline-block;
    /deep/  p{
      margin: 10px;
      padding-top: 30px;
    }
    @media (max-width: $break-mobile) {
      font-size: 23px;
       padding: 45px 10px 0;
    }
  }
}
</style>
