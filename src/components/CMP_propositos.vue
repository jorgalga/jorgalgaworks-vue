<template>
  <div id="cmpheader" class="component-wrapper cmppropositos" v-bind:class="$props.type">
    <div class="component-container" >
      <div v-observe-visibility="fadeInElement" class="proposito-block" v-for="item in data.copy[clang].props_items" :key="item.id">
        <div class="left-icons">
          <div class="icon" v-for="itemB in item.icon_items" :key="itemB.id" v-bind:style="'background-image:url(static/minsait/images/propositos/'+itemB.src+')'">
            <div v-if="itemB.txt" class="icon-txt" style="position: absolute" v-html="itemB.txt"></div>
          </div>
        </div>
        <div class="right-text">
          <div class="title-prop" v-html="item.title"></div>
          <div class="desc-prop" v-html="item.description"></div>
        </div>
      </div>
      <div class="trust-block">
        <div class="trust-title" v-html="data.copy[clang].props_trust_title"></div>
        <div class="trust-items" >
          <div class="trust-icon" v-for="item in data.copy[clang].trust_items" :key="item.id" v-bind:style="'background-image:url(static/minsait/images/trust/'+item.src+')'">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CMP_propositos',
  props: ['type'],
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
    // _.resizeHandler()
    window.addEventListener('resize', function () {
      _.isMobile = window.innerWidth < _.data.mobile_width
      // _.resizeHandler()
    })
  },
  mounted () {
  },
  methods: {
    resizeHandler () {
      var w = Math.min(window.innerWidth, this.data.max_width)
      this.scaleR = Math.max(this.data.mobile_width / this.data.max_width, w / this.data.max_width)
      this.scaleR = Math.min(this.scaleR, (this.data.max_width_limit / this.data.max_width))
    },
    fadeInElement (isVisible, entry) {
      if (isVisible) {
        if (!entry.target.classList.contains('fadedIn')) {
          entry.target.classList.add('fadedIn')
        }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../scss/_vars.scss';
@import '../scss/_fonts.scss';
.component-wrapper.cmppropositos{
  width: 100%;
  background-color: $blue;
  background-color: transparent;
  transition: 1s;
  position: relative;
  z-index: 90;
  margin-top: -1px;
  @media (max-width: $break-mobile) {
    margin-top: 60px;
  }
  .component-container{
    max-width: $pagewidth;
    margin: 0 auto;
    display: block;
    text-align: center;
    .proposito-block{
      min-height: 100px;
      background-color: aliceblue;
      background-color: #40c7b511;
      display: flex;
      align-items: top;
      padding: 30px 10px 45px 10px;
      margin-bottom: 50px;
      transition: 0.5s;
      opacity: 0;
      transform: translate3d(0,50%,0);
      &.fadedIn{
        opacity: 1;
        transform: translate3d(0,0,0);
        .right-text{
          opacity: 1;
          transform: translate3d(0,0,0)
        }
      }
      @media (max-width: $break-mobile) {
        // display: block;
        margin: 15px;
        flex-direction: column-reverse
      }
      .left-icons{
        display: inline-block;
        width: 50%;
        height: 100%;
        @media (max-width: $break-mobile) {
          width: 100%;
        }
        .icon{
          width: 100px;
          height: 75px;
          margin: 30px 20px;
          background-repeat: no-repeat;
          background-position: center;
          background-size: contain;
          display: inline-block;
          position: relative;
          /deep/ .icon-txt{
            bottom: 0;
            left:50%;
            width: 200px;
            transform: translate3d(-50%,200%,0);
            font-size:14px;
            color: #449988;
            opacity: 0.8;
            font-family: 'SohoGothicPro-Regular' !important;
          }
        }
      }
      .right-text{
        display: inline-block;
        width: 50%;
        height: 100%;
        padding: 50px 15px 50px 0;
        transition: 0.5s;
        transition-delay: 0.1s;
        opacity: 0;
        transform: translate3d(0,50%,0);
        @media (max-width: $break-mobile) {
          width: 100%;
          box-sizing: border-box;
          padding: 15px;
        }
        .title-prop{
          font-family: 'SohoGothicPro-Medium';
          font-size: 23px;
          margin-bottom: 15px;
          text-align: left;
          font-size: 1.3;
        }
        .desc-prop{
          font-family: 'SohoGothicPro-Regular';
          text-align: left;
          font-size: 1.3;
          @media (max-width: $break-mobile) {
            font-size: 15px;
          }
        }
      }
    }
    .trust-block{
      padding-bottom: 120px;
      .trust-title{
        font-family: 'PlayfairDisplay-Regular';
        color: $blue;
        text-align: center;
        max-width: $pagewidth;
        font-size: 40px;
        line-height: 1.3;
        display: inline-block;
        padding: 25px 0 75px;
      }
      .trust-items{
        display: flex;
        flex-flow: row wrap;
        justify-content: space-around;
        max-width: 650px;
        margin: 0 auto;
        .trust-icon{
          margin: 20px;
          width: 150px;
          height: 150px;
          background-repeat: no-repeat;
          background-position: center;
          background-size: contain;
        }
      }
    }
  }
}
</style>
