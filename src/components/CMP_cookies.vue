<template>
  <div ref="cookie" class="component-wrapper cookies hidden">
    <div class="component-container">
      <div class="cookie-message">
        <div class="cookie-body">
          <div class="text" v-html="data.copy[clang].cookie_message"></div>
          <div @click.prevent="buttonHandler()" class="button">OK</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CMP_cookies',
  props: ['test', 'lang'],
  data () {
    return {
      scaleR: 1,
      isMobile: window.innerWidth < window.dataConfig.mobile_width,
      clang: 'es'
    }
  },
  created () {
    if (this.$route.params.lang) {
      this.clang = this.$route.params.lang
    }
    var _ = this
    _.data = window.dataConfig
    _.resizeHandler()
    window.addEventListener('resize', function () {
      _.isMobile = window.innerWidth < _.data.mobile_width
      _.resizeHandler()
    })
  },
  mounted () {
    var _ = this
    if (_.getCookie('accepted') === '') {
      setTimeout(function () {
        _.$refs.cookie.classList.remove('hidden')
      }, 1000)
    }
  },
  methods: {
    resizeHandler () {
      var w = Math.min(window.innerWidth, this.data.max_width)
      this.scaleR = Math.max(this.data.mobile_width / this.data.max_width, w / this.data.max_width)
      this.scaleR = Math.min(this.scaleR, (this.data.max_width_limit / this.data.max_width))
    },
    getCookie (cname) {
      var name = cname + '='
      var decodedCookie = decodeURIComponent(document.cookie)
      var ca = decodedCookie.split(';')
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i]
        while (c.charAt(0) === ' ') {
          c = c.substring(1)
        }
        if (c.indexOf(name) === 0) {
          return c.substring(name.length, c.length)
        }
      }
      return ''
    },
    setCookie (cname, cvalue, exdays) {
      var d = new Date()
      d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000))
      var expires = 'expires=' + d.toUTCString()
      document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/'
    },
    buttonHandler () {
      this.setCookie('accepted', '1', 7)
      this.$refs.cookie.classList.add('hidden')
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
  width: calc(100% - 17px);
  position: absolute;
  background-color: white;
  display: inline-block;
  bottom: 0;
  left: 0;
  transition: 1s;
  &.hidden{
    transform: translate3d(0,100%,0)
  }
  .component-container{
    position: relative;
    max-width: 100%;
    margin: 0 auto;
    box-sizing: border-box;
  }
  .cookie-message{
    min-height: 150px;
    background-color: $darkblue;
    width: calc(100% - 17px);
    width: 100%;
    .cookie-body{
      width: 100%;
      max-width: $pagewidth;
      min-height: 10%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate3d(-50%,-50%,0);
      font-family: 'SohoGothicPro-Light';
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
