<template>
  <div class="component-wrapper unvideo" v-bind:style="isMobile ? '' : 'height:'+1300*scaleR+'px;'">
    <div class="component-container parallax__layer parallax__layer--base" v-bind:style="isMobile ? 'padding: 15px;' : 'padding:0 '+15*scaleR+'px;'">
      <div class="video-block" v-bind:style="isMobile ? 'height:70vw; margin-bottom:30px;' : 'height:'+525*scaleR+'px;margin-bottom:'+240*scaleR+'px'">
        <div class="video-container">
          <div id="video1"></div>
          <div id="video1-button" @click.prevent="removeLayer1('video1-button')"></div>
          <!--iframe width="100%" height="100%" src="https://www.youtube.com/embed/VJsadfep5Js?rel=0&modestbranding=1&autohide=1&showinfo=0&controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe-->
        </div>
        <div class="lines-container" v-observe-visibility="visibilityChanged">
          <div class="line-wrapper"><div class="line"></div></div><!--
          --><div class="line-wrapper"><div class="line"></div></div><!--
          --><div class="line-wrapper"><div class="line"></div></div><!--
          --><div class="line-wrapper"><div class="line"></div></div><!--
          --><div class="line-wrapper"><div class="line"></div></div><!--
          --><div class="line-wrapper"><div class="line"></div></div><!--
          --><div class="line-wrapper"><div class="line"></div></div><!--
          --><div class="line-wrapper"><div class="line"></div></div><!--
          --><div class="line-wrapper"><div class="line"></div></div><!--
          --><div class="line-wrapper"><div class="line"></div></div>
        </div>
      </div>
      <div class="video-block inverted" v-bind:style="'height:'+525*scaleR+'px;'">
        <div class="video-container">
          <div id="video2"></div>
          <div id="video2-button" @click.prevent="removeLayer2('video2-button')"></div>
          <!--iframe width="100%" height="100%" src="https://www.youtube.com/embed/90JX9TfzTnY?rel=0&modestbranding=1&autohide=1&showinfo=0&controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe-->
        </div>
        <div class="lines-container" v-observe-visibility="visibilityChanged">
           <div class="line-wrapper"><div class="line"></div></div><!--
          --><div class="line-wrapper"><div class="line"></div></div><!--
          --><div class="line-wrapper"><div class="line"></div></div><!--
          --><div class="line-wrapper"><div class="line"></div></div><!--
          --><div class="line-wrapper"><div class="line"></div></div><!--
          --><div class="line-wrapper"><div class="line"></div></div><!--
          --><div class="line-wrapper"><div class="line"></div></div><!--
          --><div class="line-wrapper"><div class="line"></div></div><!--
          --><div class="line-wrapper"><div class="line"></div></div><!--
          --><div class="line-wrapper"><div class="line"></div></div>
        </div>
      </div>
    </div>
    <!--div class="background-container parallax__layer parallax__layer--back" >
      <div class="square-magenta"></div>
    </div-->
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
    var _ = this
    function tryInit () {
      if (window.YTapi) {
        _.youtubeAPI()
      } else {
        setTimeout(function () {
          tryInit()
        }, 50)
      }
    }
    tryInit()
  },
  methods: {
    resizeHandler () {
      var w = Math.min(window.innerWidth, this.data.max_width)
      this.scaleR = Math.max(0.5, w / this.data.max_width)
      this.scaleR = Math.min(this.scaleR, (this.data.max_width_limit / this.data.max_width))
    },
    visibilityChanged (isVisible, entry) {
      if (isVisible && !entry.target.classList.contains('displayed')) {
        entry.target.classList.add('displayed')
      }
    },
    removeLayer1 (id) {
      document.getElementById(id).classList.add('clicked')
      this.player1.playVideo()
    },
    removeLayer2 (id) {
      document.getElementById(id).classList.add('clicked')
      this.player2.playVideo()
    },
    youtubeAPI () {
      let _ = this
      _.player1 = new window.YT.Player('video1', {
        height: '100%',
        width: '100%',
        videoId: 'VJsadfep5Js',
        playerVars: {
          showinfo: false,
          rel: 0,
          modestbranding: true
        }
      })
      _.player2 = new window.YT.Player('video2', {
        height: '100%',
        width: '100%',
        videoId: '90JX9TfzTnY',
        playerVars: {
          showinfo: false,
          rel: 0,
          modestbranding: true
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only  margin-bottom: 30px;-->
<style scoped lang="scss">
@import '../scss/_vars.scss';
.component-wrapper.unvideo{
  width: 100%;
   @media (max-width: $break-mobile) {
     margin-bottom: 30px;
   }
  .component-container{
    position: relative;
    max-width: $pagewidth;
    margin: 0 auto;
    box-sizing: border-box;
    position: relative;
    #video1-button,  #video2-button{
      position: absolute;
      width: 100%;
      height: 100%;
      top:0;
      background-image: url('#{$staticpath}static/unleash/videot.png');
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      transition:0.25s;
      opacity: 0;
      cursor: pointer;
      z-index: 999;
      &:hover{
        transform: scale(1.05);
        opacity: 0;
      }
      &.clicked{
        opacity: 0;
        pointer-events: none;
      }
      @media (max-width: $break-mobile) {
        opacity: 0;
      }
    }
    .video-block {
      position:relative;
      &.inverted{
        .video-container{
          left: 40%;
          @media (max-width: $break-mobile) {
            left: 0;
          }
        }
        .lines-container{
          left: 0;
          transform: scaleX(-1) scaleY(0.5);
          &.displayed{
            transform: scaleX(-1) scaleY(1);
            @media (max-width: $break-mobile) {
              display: none;
            }
          }
          .line-wrapper{
            .line{
              transform-origin: center top;
            }
          }
          @media (max-width: $break-mobile) {
            display: none;
          }
        }
      }
    }
    .video-container {
      position:absolute;
      top:0;
      left:0;
      height: 100%;
      width: 60%;
      display: inline-block;
      box-sizing: border-box;
      background-color: black;
      @media (max-width: $break-mobile) {
        width: 100%;
      }
    }
    .lines-container{
      position:absolute;
      top: 0;
      left: 60%;
      height: 100%;
      width: 40%;
      text-align: center;
      transform: scaleY(0.5);
      transition: 0.5s;
      transition-delay: .25s;
      &.displayed{
        transform: scaleY(1);
        @media (max-width: $break-mobile) {
          display: none;
        }
      }
      .line-wrapper{
        width: 10%;
        height: 100%;
        display: inline-block;
        vertical-align: top;
        position: relative;
        .line{
          width: 4%;
          height: 100%;
          background-color: white;
          position: absolute;
          transform-origin: center bottom;
          left: 50%;
        }
        &:nth-child(1){
          .line{
            transform: translate3d(-50%,0,0) scaleY(1)
          }
        }
        &:nth-child(2){
          .line{
            transform: translate3d(-50%,0,0) scaleY(0.95)
          }
        }
        &:nth-child(3){
          .line{
            transform: translate3d(-50%,0,0) scaleY(0.9)
          }
        }
        &:nth-child(4){
          .line{
            transform: translate3d(-50%,0,0) scaleY(0.85)
          }
        }
        &:nth-child(5){
          .line{
            transform: translate3d(-50%,0,0) scaleY(0.8)
          }
        }
        &:nth-child(6){
          .line{
            transform: translate3d(-50%,0,0) scaleY(0.75)
          }
        }
        &:nth-child(7){
          .line{
            transform: translate3d(-50%,0,0) scaleY(0.7)
          }
        }
        &:nth-child(8){
          .line{
            transform: translate3d(-50%,0,0) scaleY(0.65)
          }
        }
        &:nth-child(9){
          .line{
            transform: translate3d(-50%,0,0) scaleY(0.6)
          }
        }
        &:nth-child(10){
          .line{
            transform: translate3d(-50%,0,0) scaleY(0.55)
          }
        }
      }
    }
  }
  .background-container{
    .square-magenta{
      width: 500px;
      height: 500px;
      position: absolute;
      top: 50%;
      left: 50%;
      background-color: $magenta;
    }
  }
}
</style>
