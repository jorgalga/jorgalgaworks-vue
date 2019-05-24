<template>
  <div class="component-wrapper cmpform">
    <div class="page-title" v-bind:style="isMobile ? 'font-size:20px' : 'font-size:'+360*scaleR+'px'" v-html="data.copy[clang].form_ptitle">
    </div>
    <div class="component-container">
      <div class="logo" v-bind:style="isMobile ? '' : 'height:' + 77*scaleR+'px; margin-top:'+23*scaleR+'px'"></div>
      <div class="form-container" v-bind:style="isMobile ? '' : 'margin-top:'+0*scaleR+'px'">
        <form v-bind:style="isMobile ? '' : 'max-width:'+550*scaleR+'px'">
          <input type="text" name="firstname" placeholder="<nombre>">
          <input type="text" name="lastname" placeholder="<email>">
          <input type="text" name="lastname" placeholder="<twitter>">
          <br><br><br><br>
          <input @click.prevent="sendform()" class="submit" type="submit" value="> GO">
        </form>
      </div>
      <div class="scroll-container">
        <div class="chevron"></div>
        <div class="chevron"></div>
        <div class="chevron"></div>
        <span class="text" v-html="data.copy[clang].make_scroll"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CMP_form',
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
    },
    sendform () {
      var jsonvar = {
        UsuarioHackathon: {
          name: 'usuario_demo2',
          mail: 'demo22@hackathon.com',
          motivation: '',
          codewars: '',
          twitter: '',
          github: '',
          score: 0
        }
      }
      var xhttp = new XMLHttpRequest()
      xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
          console.log(this.responseText)
        }
      }
      xhttp.open('POST', 'https://www.onesaitplatform.online/api-manager/server/api/v1/hackathon-event/', true)
      xhttp.setRequestHeader('X-OP-APIKey', 'd028185e6b5f481e9e1153d0babc067e')
      xhttp.send(JSON.stringify(jsonvar))
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../scss/_vars.scss';
@import '../scss/_fonts.scss';
.component-wrapper.cmpform{
  width: 100%;
  background-color: $blue;
  transition: 1s;
  position: relative;
  .component-container{
    max-width: $pagewidth;
    margin: 0 auto;
    box-sizing: border-box;
    // background-color: #00000011;
    min-height: 100vh;
    position:relative;
    .logo{
      background: url('#{$staticpath}static/minsait/images/logo.png');
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      height: 77px;
      width: 100%;
      display: inline-block;
    }
    .form-container{
      min-height: 100px;
      // background-color: #ffffff11;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate3d(-50%,-50%,0);
      width: 50%;
      form{
        margin: 0 auto;
        input{
          width: 100%;
          display: inline-block;
          box-sizing: border-box;
          border: 0;
          background-color: $darkblue;
          font-family: 'SohoGothicPro-Light';
          color: white;
          font-size: 22px;
          line-height: 1;
          padding: 7px;
          margin-bottom: 30px;
          &.submit{
            background: white;
            color: $darkblue;
            width: 20%;
            cursor: pointer;
            font-weight: 800;
            font-family: 'SohoGothicPro-Medium';
          }
          &::placeholder{
            color: white;
            font-size: 22px;
            line-height: 1;
          }
        }
      }
    }
  }
  .page-title{
    color: white;
    font-size: 460px;
    font-family: 'SohoGothicPro-Light';
    line-height: 0.9;
    position: absolute;
    transform-origin: top left;
    transform: rotate(90deg) translate3d(0,-100%,0);
    z-index: 999;
    top:0;
    left: 0;
  }
}
.scroll-container {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate3d(-50%,0,0);
  width: 28px;
  height: 88px;
  .chevron {
    position: absolute;
    width: 28px;
    height: 4px;
    opacity: 0;
    transform: scale3d(0.5, 0.5, 0.5);
    animation: move 3s ease-out infinite;
  }
  .chevron:first-child {
    animation: move 3s ease-out 1s infinite;
  }
  .chevron:nth-child(2) {
    animation: move 3s ease-out 2s infinite;
  }
  .chevron:before,
  .chevron:after {
    content: ' ';
    position: absolute;
    top: 0;
    height: 100%;
    width: 51%;
    background: #fff;
  }

  .chevron:before {
    left: 0;
    transform: skew(0deg, 30deg);
  }

  .chevron:after {
    right: 0;
    width: 50%;
    transform: skew(0deg, -30deg);
  }

  @keyframes move {
    25% {
      opacity: 1;

    }
    33% {
      opacity: 1;
      transform: translateY(30px);
    }
    67% {
      opacity: 1;
      transform: translateY(40px);
    }
    100% {
      opacity: 0;
      transform: translateY(55px) scale3d(0.5, 0.5, 0.5);
    }
  }
  .text {
    display: block;
    font-size: 16px;
    color: #fff;
    opacity: .25;
    animation: pulse 2s linear alternate infinite;
    font-family: 'SohoGothicPro-Light';
    width: 200px;
    text-align: center;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate3d(-50%,-100%,0)
  }

  @keyframes pulse {
    to {
      opacity: 1;
    }
  }
}
</style>
