<template>
  <div ref="cmppopup" class="component-wrapper popup">
    <div class="component-container">
      <div class="popup">
        <div @click.prevent="closepopup()" class="popup-close">
          <span></span>
          <span></span>
        </div>
        <div class="popup-body" v-html="pcopy"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CMP_popup',
  props: ['test'],
  data () {
    return {
      scaleR: 1,
      isMobile: window.innerWidth < window.dataConfig.mobile_width,
      data: window.dataConfig,
      clang: 'es',
      pcopy: 'hola mundo',
      gohome: false
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
    this.initListener()
  },
  methods: {
    resizeHandler () {
      var w = Math.min(window.innerWidth, this.data.max_width)
      this.scaleR = Math.max(this.data.mobile_width / this.data.max_width, w / this.data.max_width)
      this.scaleR = Math.min(this.scaleR, (this.data.max_width_limit / this.data.max_width))
    },
    initListener () {
      var _ = this
      document.addEventListener('OpenPopup', function (e) {
        console.log(e)
        _.$data.pcopy = e.detail
        _.$refs.cmppopup.classList.add('fadein')
      })
      document.addEventListener('OpenPopup_home', function (e) {
        console.log(e)
        _.$data.pcopy = e.detail
        _.$refs.cmppopup.classList.add('fadein')
        _.gohome = true
      })
      // window.location.href = '/#/'
    },
    closepopup () {
      var _ = this
      _.$refs.cmppopup.classList.remove('fadein')
      if (_.gohome === true) {
        _.gohome = false
        setTimeout(function () {
          window.location.href = '/#/'
        }, 500)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../scss/_vars.scss';
@import '../scss/_fonts.scss';
.component-wrapper.popup{
  width: 100%;
  height: 100%;
  background-color: #00000000;
  transition: 1s;
  position: absolute;
  z-index: 9000;
  top:0;
  left: 0;
  transition: 0.5s;
  pointer-events: none;
  &.fadein{
    background-color: #00000055;
    pointer-events: all;
    .component-container{
      transform: translate3d(-50%,-50%,0);
      opacity: 1;
    }
  }
  .component-container{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%,50%,0);
    opacity: 0;
    max-width: 500px;
    width: 100%;
    box-sizing: border-box;
    background-color: transparent;
    transition: 0.5s;
    padding: 30px;
    display: inline-block;
    .popup{
      padding: 100px 15px 60px 15px;
      background-color: $blue;
      box-sizing: border-box;
      position: relative;
      .popup-close{
        width: 40px;
        height: 40px;
        position: absolute;
        right: 15px;
        top: 15px;
        cursor: pointer;
        &:hover{
          @media (min-width: $break-mobile) {
            span{
              &:nth-child(1){
                transform: translate3d(-50%,-50%,0) rotate(-45deg)
              }
              &:nth-child(2){
                transform: translate3d(-50%,-50%,0) rotate(-315deg)
              }
            }
          }
        }
        span{
          width: 100%;
          height: 3px;
          display: inline-block;
          position: absolute;
          top: 50%;
          left: 50%;
          background-color: white;
          transition: 0.25s;
          &:nth-child(1){
            transform: translate3d(-50%,-50%,0) rotate(45deg) scale(0.85)
          }
          &:nth-child(2){
            transform: translate3d(-50%,-50%,0) rotate(-45deg) scale(0.85)
          }
        }
      }
      .popup-body{
        color: white;
        text-align: center;
        font-size: 15px;
        font-family: 'SohoGothicPro-Regular';
      }
    }
  }
}
</style>
