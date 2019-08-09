<template>
  <div id="cmpinfo" class="component-wrapper cmpinfo">
    <div class="component-container" v-bind:style="isMobile ? '' : 'padding: '+100*scaleR+'px 0;'">
      <!-- div class="video-container" v-bind:style="isMobile ? '' : 'height:'+840*scaleR+'px'">
      </div -->
      <div class="page-title" v-bind:style="isMobile ? 'font-size:80px' : 'font-size:'+200*scaleR+'px'" v-html="data.copy[clang].info_ptitle">
      </div>
      <div class="page-description" v-bind:style="isMobile ? 'font-size:15px' : ''" v-html="data.copy[clang].info_description">
      </div>
      <div class="info-container" v-bind:style="isMobile ? 'height:'+800*1+'px;' : 'height:'+400*scaleR+'px; margin: '+0*scaleR+'px 0;'">
        <div class="info-item" v-for="item in data.copy[clang].infoitems" :key="item.order">
          <div class="info-item-container">
            <!-- div class="order" v-bind:style="isMobile ? 'font-size:20px' : 'font-size:'+28*scaleR+'px'">{{item.order}}</div -->
            <div class="icon-image" v-bind:style="isMobile ? 'height:'+200*scaleR+'px;' : 'height:'+128*scaleR+'px;'"></div>
            <div class="title" v-html="item.title" v-bind:style="isMobile ? 'font-size:20px' : 'font-size:'+23*1+'px'"></div>
            <div class="description" v-html="item.description" v-bind:style="isMobile ? 'font-size:15px' : 'font-size:'+18*1+'px'"></div>
          </div>
        </div>
      </div>
      <div class="final-claim">
        <p>Solo Tú puedes ser developer de Minsait,<br>puedes dejar huella.</p>
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
  background-color: white;
  transition: 1s;
  position: relative;
  .component-container{
    max-width: $pagewidth;
    margin: 0 auto;
    box-sizing: border-box;
    position:relative;
    background-color: white;
    .video-container{
      width: 100%;
      background-color: $darkblue;
    }
    .info-container{
      width: 100%;
      display: inline-block;
      position: relative;
      .info-item{
        position: absolute;
        width: 25%;
        height: 100%;
        display: inline-block;
        box-sizing: border-box;
        border: 0;
        color: $blue;
        @media (max-width: $break-mobile) {
          width: 100%;
          height: 200px;
          display: block;
          position: relative;
        }
        .info-item-container{
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate3d(-50%,-50%,0);
          width: 85%;
          text-align: center;
          .icon-image{
            width: 100%;
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
          }
          .order{
            line-height: 0.9;
          }
          .title{
            font-family: 'SohoGothicPro-Medium';
            display: inline-block;
          }
          .description {
            font-family: 'SohoGothicPro-Regular';
          }
        }
        &:nth-child(1){
          top:0;
          left: 0;
          .icon-image{
            background-image: url('#{$staticpath}static/minsait/images/icon1.jpg');
          }
          .info-item-container{
            transform: translate3d(-50%,-50%,0)
          }
          @media (max-width: $break-mobile) {
            top: unset;
            left: unset;
          }
        }
        &:nth-child(2){
          top:0;
          left: 25%;
          .icon-image{
            background-image: url('#{$staticpath}static/minsait/images/icon2.jpg');
          }
          .info-item-container{
            transform: translate3d(-50%,-50%,0)
          }
          @media (max-width: $break-mobile) {
            top: unset;
            left: unset;
          }
        }
        &:nth-child(3){
          top: 0;
          left: 50%;
          .icon-image{
            background-image: url('#{$staticpath}static/minsait/images/icon3.jpg');
          }
          .info-item-container{
            transform: translate3d(-50%,-50%,0)
          }
          @media (max-width: $break-mobile) {
            top: unset;
            left: unset;
          }
        }
        &:nth-child(4){
          top: 0%;
          left: 75%;
          .icon-image{
            background-image: url('#{$staticpath}static/minsait/images/icon4.jpg');
          }
          .info-item-container{
            transform: translate3d(-50%,-50%,0)
          }
          @media (max-width: $break-mobile) {
            top: unset;
            left: unset;
          }
        }
      }
    }
  }
  .page-title{
    color: $blue;
    font-family: 'PlayfairDisplay-Regular';
    line-height: 0.9;
    text-align: center;
    @media (max-width: $break-mobile) {
      text-align: center;
      margin-top: 30px;
      margin-left: 10px;
    }
  }
  .page-description, .final-claim{
    font-family: 'SohoGothicPro-Regular';
    color: $blue;
    text-align: center;
    max-width: 75%;
    margin: 0 auto;
    font-size: 23px;
    @media (max-width: $break-mobile) {
      display: block;
      max-width: 100%;
      margin: 15px;
      /deep/  p{
        margin: 0;
        padding: 30px 0 0 0;
      }
    }
  }
}
</style>
