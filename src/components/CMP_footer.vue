<template>
  <div class="component-wrapper cmpfooter">
    <div class="wrapper">
      <div class="component-container" v-bind:style="isMobile ? '' : 'height:'+200*scaleR+'px'" >
        <div class="col">
          <div class="col-cont"><p>OneSait Platform®</p></div>
        </div>
        <div class="col">
          <div class="col-cont"><p>Reglas del juego</p></div>
        </div>
        <div class="col">
          <div class="col-cont"><a href="" class="link-footer"><span class="icon-twitter"></span></a></div>
        </div>
      </div>
    </div>
    <div class="fterminal triangle" v-bind:style="isMobile ? 'height:'+50*1+'px' : 'height:'+100*scaleR+'px'">
    </div>
    <div class="component-container2 subline">
      <div class="logo"></div>
      <div class="left-copy" v-html="data.copy[clang].menu_left_copy"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CMP_footer',
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
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../scss/_vars.scss';
@import '../scss/_fonts.scss';
.component-wrapper.cmpfooter{
  width: 100%;
  transition: 1s;
  position: relative;
  background-color: white;
  .fterminal{
    background-color: $darkblue;
    &.triangle{
      clip-path: polygon(0 0, 100% 0, 0 100%);
    }
  }
  .wrapper{
    background-color: $darkblue;
  }
  .component-container{
    background-color: $darkblue;
    max-width: $pagewidth;
    margin: 0 auto;
    box-sizing: border-box;
    // background-color: #00000011;
    min-height: 100px;
    position:relative;
    display: flex;
    color: white;
    font-family: 'SohoGothicPro-Light';
    @media (max-width: $break-mobile) {
      min-height: 180px;
      display: block;
    }
    .col{
      flex-grow: 1;
      flex-basis: 0;
      position: relative;
      @media (max-width: $break-mobile) {
        flex: 0 0 auto;
        height: 60px;
        width: 100%;
        text-align: center;
        p{
          font-size: 15px;
        }
      }
      &:nth-child(2){
        .col-cont{
          text-align: center;
        }
      }
      &:nth-child(3){
        .col-cont{
          text-align: right;
          @media (max-width: $break-mobile) {
            text-align: center;
          }
        }
      }
    }
    .col-cont{
      position: absolute;
      width: 100%;
      top:50%;
      transform: translate3d(0,-50%,0);
      p{
        margin: 0;
      }
    }
  }
  .link-footer{
    background-color: $softblue;
    text-decoration: none;
    border-radius: 50%;
    display: inline-block;
    transition: 0.5s;
    position: relative;
    &:hover{
      transform: scale(1.1) rotateY(360deg);
      background-color:white;
      span{
      }
    }
    span{
      color:$darkblue;
      font-size: 30px;
      line-height: 1;
      margin: 12px;
      display: inline-block;
      position: relative;
    }
  }
  .logo{
    background-image: url('#{$staticpath}static/minsait/images/logoMinsait2.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    height: 80%;
    width: 200px;
    position: absolute;
    top: 50%;
    transform: translate3d(15px,-50%,0);
    @media (max-width: $break-mobile) {
      width: 100px;
      height: 40%;
      transform: translate3d(0,-50%,0);
      left: 10px;
    }
  }
  .component-container2{
    max-width: $pagewidth;
    margin: 0 auto;
    box-sizing: border-box;
    position:relative;
    transition: 0.5s;
    height: 100px;
    @media (max-width: $break-mobile) {
      height: 80px;
      &:nth-child(2){
        height: unset;
        transition: 0.5s;
        background-color: white;
        max-height: 350px;
        overflow: hidden;
        &.hidden{
           max-height: 0;
        }
      }
    }
  }
  .left-copy{
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate3d(0,-50%,0);
    font-size: 15px;
    padding: 15px;
    font-family: 'SohoGothicPro-Regular';
    color: $darkblue;
    @media (max-width: $break-mobile) {
      padding: 10px;
    }
  }
}
</style>
