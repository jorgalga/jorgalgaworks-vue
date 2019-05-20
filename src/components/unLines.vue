<template>
  <div class="component-wrapper unlines">
  <div class="component-container" v-bind:style="'padding: 0 '+15*scaleR+'px'">
    <div id="line-pyramid" class="line-pyramid" v-bind:style="'height:'+450*scaleR+'px'" v-observe-visibility="visibilityChanged">
      <div class="line"><div class="line-fill"></div></div>
      <div class="line"><div class="line-fill"></div></div>
      <div class="line"><div class="line-fill"></div></div>
      <div class="line"><div class="line-fill"></div></div>
      <div class="line"><div class="line-fill"></div></div>
      <div class="line"><div class="line-fill"></div></div>
      <div class="line"><div class="line-fill"></div></div>
      <div class="line"><div class="line-fill"></div></div>
      <div class="line"><div class="line-fill"></div></div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'unLines',
  props: ['type'],
  data () {
    return {
      scaleR: 1
    }
  },
  created () {
    var _ = this
    _.data = window.dataConfig.data
    _.resizeHandler()
    window.addEventListener('resize', function () {
      _.resizeHandler()
    })
  },
  mounted () {
  },
  methods: {
    visibilityChanged: function (isVisible, entry) {
      if (entry.isIntersecting) {
        this.startLineAnimation(entry.target)
      }
    },
    startLineAnimation (el) {
      var lines = el.getElementsByClassName('line')
      for (let i = 0; i < lines.length; i++) {
        setTimeout(function () {
          lines[i].classList.add('displayed')
        }, i * 50 + 50)
      }
    },
    resizeHandler () {
      var w = Math.min(window.innerWidth, this.data.max_width)
      this.scaleR = Math.max(0.5, w / this.data.max_width)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../scss/_vars.scss';
.component-wrapper.unlines{
  width: 100%;
  background-color: darkgrey;
  background-color: black;
  .component-container{
    position: relative;
    max-width: $pagewidth;
    margin: 0 auto;
    background-color: black;
    box-sizing: border-box;
  }
}
.unlines{
  .line-pyramid{
    display: inline-block;
    width: 100%;
    .line{
      width: 100%;
      height: 1.5%;
      text-align: center;
      margin-top: 2.3%;
      transform: scaleX(0.1);
      opacity:0;
      transition: 0.5s;
      transition-delay: 0.5s;
      &.displayed{
        opacity: 1;
        transform: scaleX(1)
      }
      .line-fill{
        background-color: white;
        width: 100%;
        height: 100%;
        display: inline-block;
        border-radius: 25%;
      }
      &:nth-child(1){
        .line-fill{
          width: 100%;
          transform: scaleY(1);
          opacity: 1;
        }
      }
      &:nth-child(2){
        .line-fill{
          width: 90%;
          transform: scaleY(0.95);
          opacity: 0.95;
        }
      }
      &:nth-child(3){
        .line-fill{
          width: 80%;
          transform: scaleY(0.85);
          opacity: 0.85;
        }
      }
      &:nth-child(4){
        .line-fill{
          width: 70%;
          transform: scaleY(0.80);
          opacity: 0.80;
        }
      }
      &:nth-child(5){
        .line-fill{
          width: 60%;
          transform: scaleY(0.75);
          opacity: 0.75;
        }
      }
      &:nth-child(6){
        .line-fill{
          width: 50%;
          transform: scaleY(0.70);
          opacity: 0.70;
        }
      }
      &:nth-child(7){
        .line-fill{
          width: 40%;
          transform: scaleY(0.65);
          opacity: 0.65;
        }
      }
      &:nth-child(8){
        .line-fill{
          width: 30%;
          transform: scaleY(0.60);
          opacity: 0.60;
        }
      }
      &:nth-child(9){
        .line-fill{
          width: 20%;
          transform: scaleY(0.55);
          opacity: 0.55;
        }
      }
    }
  }
}
</style>
