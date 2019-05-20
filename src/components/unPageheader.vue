<template>
  <div class="component-wrapper unpageheader">
  <div class="component-container" v-bind:style="'padding: 0 '+15*scaleR+'px'">
    <div class="top-info" v-bind:style="'height:'+150*scaleR+'px'">
      <div class="claim-text" v-html="data.page_content[$props.type].claim" v-bind:style="'font-size:'+24*scaleR+'px'">
      </div>
    </div>
    <div class="marquee" v-bind:style="'height:'+480*scaleR+'px'">
      <div class="marquee-gradient"></div>
      <div class="marquee-container" v-bind:style="'font-size:'+480*scaleR+'px'">
        <marquee-text>
          {{data.page_names[$props.type]}}&nbsp;
        </marquee-text>
      </div>
    </div>
    <div class="page-breadcum" v-bind:style="isMobile ? 'display:none;' : 'font-size:'+36*scaleR+'px'">
      {{data.page_content[$props.type].breadcum}}
    </div>
    <div id="line-pyramid" class="line-pyramid" v-bind:style="isMobile ? 'margin-top: -100px;height:'+100+'px' : 'height:'+350*scaleR+'px'" v-observe-visibility="visibilityChanged">
      <div class="line"><div class="line-fill"></div></div>
      <div class="line"><div class="line-fill"></div></div>
      <div class="line"><div class="line-fill"></div></div>
      <div class="line"><div class="line-fill"></div></div>
      <div class="line"><div class="line-fill"></div></div>
      <div class="line"><div class="line-fill"></div></div>
      <div class="line"><div class="line-fill"></div></div>
      <div class="line"><div class="line-fill"></div></div>
    </div>
    <div class="page-intro" v-bind:style="isMobile ? 'min-height:'+300*scaleR+'px' : 'height:'+550*scaleR+'px'">
      <div class="page-intro-container">
          <div v-if="data.page_content[$props.type].title" class="page-intro-title" v-bind:style="isMobile ? 'font-size:30px;' : 'font-size:'+90*scaleR+'px'" v-html="data.page_content[$props.type].title">
          </div>
          <div v-if="data.page_content[$props.type].description" class="page-intro-description" v-bind:style="isMobile ? 'font-size:12px;' :'font-size:'+36*scaleR+'px;padding-top:'+24*scaleR+'px'" v-html="data.page_content[$props.type].description">
          </div>
          <div v-if="data.page_content[$props.type].showlogo" v-bind:style="isMobile ? 'height:'+175*scaleR+'px' : 'height:'+275*scaleR+'px'" class="logo-trivu"></div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import MarqueeText from 'vue-marquee-text-component'
export default {
  name: 'unPageheader',
  props: ['type'],
  data () {
    return {
      scaleR: 1,
      isMobile: window.innerWidth < window.dataConfig.data.mobile_width
    }
  },
  created () {
    let _ = this
    _.data = window.dataConfig.data
    _.resizeHandler()
    window.addEventListener('resize', function () {
      _.isMobile = window.innerWidth < window.dataConfig.data.mobile_width
      _.resizeHandler()
    })
  },
  mounted () {
  },
  components: {
    MarqueeText
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
      this.scaleR = Math.min(this.scaleR, (this.data.max_width_limit / this.data.max_width))
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../scss/_vars.scss';
.component-wrapper.unpageheader{
  width: 100%;
  background-color: darkgrey;
  background-color: black;
  padding-top: 126px;
  @media (max-width: $break-mobile) {
    padding-top: 50px;
  }
  .component-container{
    position: relative;
    max-width: $pagewidth;
    margin: 0 auto;
    background-color: black;
    box-sizing: border-box;
  }
}
.unpageheader{
  .top-info{
    position: relative;
    .claim-text{
      position: absolute;
      top: 50%;
      transform: translate3d(0,-50%,0);
      font-family: 'overpassregular';
      color: $magenta;
      line-height: 1.3;
      font-weight: 100;
    }
  }
  .marquee{
    color: white;
    position: relative;
    .marquee-gradient{
      position: absolute;
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
      z-index: 2;
      background-image: linear-gradient(to right, black, transparent 15%, transparent 85%, black);
    }
    .marquee-container{
      font-family: 'overpass_blackregular';
      font-weight: 100;
      text-transform: uppercase;
      position: absolute;
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
      z-index: 1;
      line-height: 1;
    }
  }
  .page-breadcum{
    font-family: 'space_monoregular';
    color: white;
  }
  .line-pyramid{
    @media (max-width: $break-mobile) {
      transform-origin: center bottom;
      transform: scaleY(1.5)
    }
    .line{
      width: 100%;
      height: 1.5%;
      text-align: center;
      margin-top: 2.3%;
      transform: scaleX(0.1);
      opacity:0;
      transition: 0.5s;
      transition-delay: 0.5s;
      @media (max-width: $break-mobile) {
        text-align: right;
      }
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
          width: 20%;
          transform: scaleY(0.6);
          opacity: 0.6;
        }
      }
      &:nth-child(2){
        .line-fill{
          width: 30%;
          transform: scaleY(0.65);
          opacity: 0.65;
        }
      }
      &:nth-child(3){
        .line-fill{
          width: 40%;
          transform: scaleY(0.7);
          opacity: 0.7;
        }
      }
      &:nth-child(4){
        .line-fill{
          width: 50%;
          transform: scaleY(0.75);
          opacity: 0.75;
        }
      }
      &:nth-child(5){
        .line-fill{
          width: 60%;
          transform: scaleY(0.80);
          opacity: 0.80;
        }
      }
      &:nth-child(6){
        .line-fill{
          width: 70%;
          transform: scaleY(0.85);
          opacity: 0.85;
        }
      }
      &:nth-child(7){
        .line-fill{
          width: 80%;
          transform: scaleY(0.9);
          opacity: 0.9;
        }
      }
      &:nth-child(8){
        .line-fill{
          width: 90%;
          transform: scaleY(0.95);
          opacity: 0.95;
        }
      }
    }
  }
  .page-intro{
    background-color: white;
    position: relative;
    .page-intro-container{
      position: absolute;
      display: inline-block;
      // min-height: 50%;
      width: 100%;
      top: 50%;
      left: 50%;
      transform: translate3d(-50%,-50%,0);
      text-align: center;
      color: black;
      box-sizing: border-box;
      @media (max-width: $break-mobile) {
        position: initial;
        transform: unset;
        padding: 30px 15px;
      }
      .page-intro-title {
        font-family: 'space_monoregular';
        width:100%;
        margin: 0 auto
      }
      .page-intro-description{
        font-family: 'overpassregular';
        width: 65%;
        margin: 0 auto;
        line-height: 1.3;
        @media (max-width: $break-mobile) {
          width: 100%;
          padding: 15px 0;
        }
      }
      .logo-trivu{
        width: 100%;
        height: 100%;
        display:inline-block;
        position: absolute;
        top:50%;
        left:0;
        background-image: url('#{$staticpath}static/unleash/images/trivu.png');
        background-repeat: no-repeat;
        background-size: contain;
        background-position:center;
        transform: translate3d(0,-50%,0);
      }
    }
  }
}
</style>
