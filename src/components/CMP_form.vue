<template>
  <div class="component-wrapper cmpform">
    <div class="component-container">
      <div class="form-container" v-bind:style="isMobile ? '' : 'margin-top:'+0*scaleR+'px'">
        <form v-bind:style="isMobile ? 'font-size:'+15*1+'px;' : 'max-width:'+640+'px; font-size:'+21*1+'px;'">
          <label for="firstname">Nombre:</label>
          <input type="text" name="firstname" placeholder=""><br>
          <label for="email">Email:</label>
          <input type="text" name="email" placeholder=""><br>
          <label for="twitter">Twitter:</label>
          <input type="text" name="twitter" placeholder=""><br>
          <div class="check-container">
            <input type="checkbox" class="check-bases">
            <label class="check-bases">Acepto las bases legales de la competición</label>
          </div>
          <br>
          <div class="input-wrapper">
            <input @click.prevent="sendform()" class="submit" type="submit" value="Deja huella" v-bind:style="isMobile ? '' : 'font-size:'+25*1+'px;padding:'+15*1+'px'">
          </div>
        </form>
      </div>
    </div>
    <div class="contact-block triangle" v-bind:style="isMobile ? 'height: '+50*1+'px' : 'height: '+100*scaleR+'px'">
    </div>
    <div class="contact-block" v-bind:style="isMobile ? 'font-size:15px' : 'font-size:'+25*1+'px;height: '+300*1+'px'">
      <div class="contact-element">
        <p v-bind:style="isMobile ? '' : 'margin-bottom: '+45*scaleR+'px'">Si aun tienes dudas:</p>
        <a href="https://www.minsait.com/es/contacto" target="_blank" class="btn white" v-bind:style="isMobile ? 'padding: 5px 10px' : 'padding: '+15*1+'px'">Contacta con nosotros</a>
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
          console.log('RESPONSE')
          console.log(this.responseText)
        }
      }
      // encodeURIComponent('demo22@hackathon.com')
      console.log(encodeURIComponent('demo22@hackathon.com'))
      xhttp.open('POST', 'https://www.onesaitplatform.online/gravitee/gateway/hackathon-event/v1/user/', true)
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
  background-color: #f7f7f7;
  transition: 1s;
  position: relative;
  .btn{
    display: inline-block;
    text-decoration: none;
    &.white{
      border: 2px solid white;
      color: white;
      &:hover{
        background-color: white;
        color: #6ac7b1;
        cursor: pointer;
      }
    }
  }
  .contact-block{
    background-color: #6ac7b1;
    position: relative;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    &.triangle{
      clip-path: polygon(0 100%, 100% 0, 100% 100%);
    }
    .contact-element{
      color: white;
      font-family: 'SohoGothicPro-Regular';
      text-align: center;
      @media (max-width: $break-mobile) {
        margin: 30px 0 45px 0;
      }
    }
  }
  .component-container{
    max-width: $pagewidth;
    margin: 0 auto;
    box-sizing: border-box;
    // background-color: #00000011;
    min-height: 66vh;
    position:relative;
    @media (max-width: $break-mobile) {
      min-height: 75vh
    }
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
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate3d(-50%,-50%,0);
      width: 50%;
      @media (max-width: $break-mobile) {
        width: 80%;
      }
      form{
        margin: 0 auto;
        .check-container{
          width: 100%;
          text-align: right;
          @media (max-width: $break-mobile) {
            text-align: left;
          }
        }
        label{
          width: 20%;
          color: $darkblue;
          font-family: 'SohoGothicPro-Light';
          display: inline-block;
          box-sizing: border-box;
          position: relative;
          text-align: right;
          padding-right: 20px;
          &.check-bases{
            width: initial;
            text-align: right;
            display: inline-block;
            font-size: 16px !important;
            @media (max-width: $break-mobile) {
              text-align: left;
              padding: 0;
              font-size: 12px !important;
            }
          }
        }
        .input-wrapper{
          text-align: center;
        }
        input{
          width: 75%;
          display: inline-block;
          box-sizing: border-box;
          position: relative;
          border: 0;
          background-color: transparent;
          border: 2px solid $darkblue;
          font-family: 'SohoGothicPro-Light';
          color: white;
          line-height: 1;
          padding: 7px;
          margin-bottom: 30px;
          &.check-bases{
            width: initial;
          }
          &.submit{
            border: 2px solid #6ac7b1;
            color: #6ac7b1;
            width: initial;
            cursor: pointer;
            font-family: 'SohoGothicPro-Regular';
            margin: 0 auto;
            display: inline-block;
            @media (max-width: $break-mobile) {
              padding: 5px 10px;
              background-color: #6ac7b1;
              color: white;
              font-size: 15px;
            }
            &:hover{
              background-color: #6ac7b1;
              color: white;
            }
          }
          &::placeholder{
            color: white;
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
    line-height: 1;
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
    font-size: 15px;
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
