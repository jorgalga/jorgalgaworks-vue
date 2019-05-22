<template>
  <div ref="cookie" class="component-wrapper cookies">
    <div class="component-container">
      <div class="cookie-message">
        <div class="cookie-body">
          <div class="text" v-html="data.cookie_message"></div>
          <div @click.prevent="buttonHandler()" class="button">OK</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CMP_cookies',
  props: ['test'],
  data () {
    return {
      scaleR: 1,
      isMobile: window.innerWidth < window.dataConfig.mobile_width
    }
  },
  created () {
    var _ = this
    _.data = window.dataConfig
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
.component-wrapper.cookies{
  width: 100%;
  position: relative;
  background-color: black;
  display: inline-block;
  .component-container{
    position: relative;
    max-width: 100%;
    margin: 0 auto;
    box-sizing: border-box;
    min-height: 100px;
  }
  .cookie-message{
    min-height: 100px;
    background-color: grey;
    width: calc(100% - 17px);
    width: 100%;
    transition: 1s;
    .cookie-body{
      width: 100%;
      max-width: $pagewidth;
      min-height: 10%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate3d(-50%,-50%,0);
      .text{
        padding-right: 100px;
        line-height: 1.3;
        @media (max-width: $break-mobile) {
          font-size: 12px;
        }
      }
      .button{
        padding: 15px 8px;
        background-color: black;
        display: inline-block;
        color: white;
        font-family: 'space_monoregular';
        min-width: 75px;
        text-align: center;
        position: absolute;
        right: 0;
        top: 50%;
        transform: translate3d(0,-50%,0) scale(0.95);
        cursor: pointer;
        transition: 0.25s;
        &:hover{
          transform: translate3d(0,-50%,0) scale(1.0);
        }
        @media (max-width: $break-mobile) {
          right: 10px;
        }
      }
    }
  }
}
</style>
