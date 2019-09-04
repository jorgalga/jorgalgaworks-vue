<template>
  <div id="cmpinfo" class="component-wrapper cmpreglas">
    <div class="component-container" >
      <div class="page-title" v-bind:style="isMobile ? 'font-size:50px' : 'font-size:'+70*1+'px'" v-html="data.copy[clang].reglas_ptitle">
      </div>
      <div class="fterminal triangle" v-bind:style="isMobile ? 'height:'+50*1+'px' : 'height:'+100*scaleR+'px'">
      </div>
      <div class="reglas-container">
        <div class="regla-item" v-for="item in data.copy[clang].reglas_items" :key="item.id">
          <div class="regla-title" v-html="item.title"></div>
          <div class="regla-body" v-html="item.text"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CMP_reglas',
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
.component-wrapper.cmpreglas{
  width: 100%;
  background-color: $blue;
  background-color: white;
  transition: 1s;
  position: relative;
  .component-container{
    max-width: $pagewidth;
    max-width: 100%;
    margin: 0 auto;
    box-sizing: border-box;
    position:relative;
    background-color: white;
  }
  .page-title{
    color: $blue;
    font-family: 'PlayfairDisplay-Regular';
    line-height: 0.9;
    text-align: left;
    max-width: $pagewidth;
    margin: 0 auto;
    padding: 0 10px;
    box-sizing: border-box;
    @media (max-width: $break-mobile) {
      text-align: center;
    }
  }
  .fterminal{
    background-color: #bce2da;
    &.triangle{
      clip-path: polygon(0 100%, 100% 0, 100% 100%);
    }
  }
  .reglas-container{
    min-height: 300px;
    background-color: #bce2da;
    padding: 100px 45px;
    @media (max-width: $break-mobile) {
      padding: 10px;
    }
    .regla-item{
      max-width: 640px;
      padding: 30px;
      margin: 0 auto;
      .regla-title{
        font-size: 23px;
        color: $darkblue;
        font-family: 'SohoGothicPro-Medium';
        margin-bottom: 15px;
        @media (max-width: $break-mobile) {
          font-size: 15px;
        }
      }
      .regla-body{
        color: $darkblue;
        font-size: 18px;
        line-height: 1.3;
        font-family: 'SohoGothicPro-Regular';
        @media (max-width: $break-mobile) {
          font-size: 15px;
        }
        /deep/ p{
          margin: 0;
          margin-bottom: 15px;
        }
        /deep/ ol li{
          line-height: 1.3;
        }
        /deep/ a{
          color:$darkblue;
           font-family: 'SohoGothicPro-Medium';
          &:visited{
            color:$darkblue;
          }
        }
      }
    }
  }
}
</style>
