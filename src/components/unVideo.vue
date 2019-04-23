<template>
  <div class="component-wrapper unvideo">
    <div class="component-container" v-bind:style="'padding:0 '+15*scaleR+'px;'">
      <div class="video-block" v-bind:style="'height:'+525*scaleR+'px;margin-bottom:'+80*scaleR+'px'">
        <div class="video-container">
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
      <div class="video-block inverted" v-bind:style="'height:'+550*scaleR+'px;'">
        <div class="video-container"> </div>
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
  },
  methods: {
    resizeHandler () {
      var w = Math.min(window.innerWidth, this.data.max_width)
      this.scaleR = Math.max(0.5, w / this.data.max_width)
    },
    visibilityChanged (isVisible, entry) {
      if (isVisible && !entry.target.classList.contains('displayed')) {
        entry.target.classList.add('displayed')
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../scss/_vars.scss';
.component-wrapper.unvideo{
  width: 100%;
  .component-container{
    position: relative;
    max-width: $pagewidth;
    margin: 0 auto;
    background-color: black;
    box-sizing: border-box;
    .video-block {
      position:relative;
      &.inverted{
        .video-container{
          left: 40%;
        }
        .lines-container{
          left: 0;
          transform: scaleX(-1) scaleY(0.5);
          &.displayed{
            transform: scaleX(-1) scaleY(1);
          }
          .line-wrapper{
            .line{
              transform-origin: center top;
            }
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
      background-color: white;
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
}
</style>
