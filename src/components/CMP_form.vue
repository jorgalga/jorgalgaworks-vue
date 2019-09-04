<template>
  <div class="component-wrapper cmpform">
    <div ref="response"  class="response">
      <div class="response-body">
        <div ref="copy-response" class="copy" v-html="response_msg"></div>
        <div @click.prevent="buttonHandler()" ref="copy-btn-response" class="btn" v-html="response_btn"></div>
      </div>
    </div>
    <div class="component-container">
      <div ref="splash" class="splash-spiner">
        <div class="spiner-icon"></div>
      </div>
      <div class="form-container" v-bind:style="isMobile ? '' : 'margin-top:'+0*scaleR+'px'">
        <p v-html="data.copy[clang].form_fisrtP"></p>
        <form v-bind:style="isMobile ? 'font-size:'+15*1+'px;' : 'max-width:'+640+'px; font-size:'+18*1+'px;'">
          <label v-observe-visibility="fadeInElement" for="firstname" v-html="data.copy[clang].form_name"></label>
          <input v-observe-visibility="fadeInElement" ref="form-name" type="text" name="firstname" placeholder="">
          <label v-observe-visibility="fadeInElement" for="email" v-html="data.copy[clang].form_email"></label>
          <input v-observe-visibility="fadeInElement" ref="form-email" type="email" name="email" placeholder="">
          <label v-observe-visibility="fadeInElement" for="twitter" v-html="data.copy[clang].form_twitter"></label>
          <input v-observe-visibility="fadeInElement" ref="form-twitter" type="text" name="twitter" placeholder="">
          <div class="check-container">
            <input v-observe-visibility="fadeInElement" ref="checkOK" type="checkbox" class="check-bases">
            <label v-observe-visibility="fadeInElement" class="check-bases" v-html="data.copy[clang].form_check_bases"></label>
          </div>
          <br>
          <div class="input-wrapper submit-m">
            <input v-observe-visibility="fadeInElement" @click.prevent="sendform()" class="submit" type="submit" v-bind:value="data.copy[clang].form_inputvalue" v-bind:style="isMobile ? '' : 'font-size:'+15*1+'px;padding: 15px '+30*1+'px'">
          </div>
        </form>
      </div>
    </div>
    <div class="contact-block triangle" v-bind:style="isMobile ? 'height: '+50*1+'px' : 'height: '+100*scaleR+'px'">
    </div>
    <div class="contact-block" v-bind:style="isMobile ? 'font-size:15px' : 'font-size:'+18*1+'px;height: '+300*1+'px'">
      <div class="contact-element">
        <p v-bind:style="isMobile ? '' : 'margin-bottom: '+45*scaleR+'px'" v-html="data.copy[clang].form_contact"></p>
        <a href="mailto:platformrevolution@minsait.com" target="_blank" class="btn white" v-bind:style="isMobile ? 'padding: 10px 20px' : 'padding:15px '+30*1+'px'" v-html="data.copy[clang].form_contact_btn"></a>
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
      clang: 'es',
      response_msg: 'test',
      response_btn: 'test button'
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
    /*
    var _ = this
    window.addEventListener('click', function (e) {
      if (_.$refs.response.classList.contains('displayed')) {
        if (!_.$refs.response.classList.contains(e.target)) {
          _.$refs.response.classList.remove('displayed')
        }
      }
    })
    */
  },
  methods: {
    resizeHandler () {
      var w = Math.min(window.innerWidth, this.data.max_width)
      this.scaleR = Math.max(this.data.mobile_width / this.data.max_width, w / this.data.max_width)
      this.scaleR = Math.min(this.scaleR, (this.data.max_width_limit / this.data.max_width))
      // console.log(this.scaleR)
    },
    resetform () {
      this.$refs['form-name'].value = ''
      this.$refs['form-email'].value = ''
      this.$refs['form-twitter'].value = ''
    },
    buttonHandler () {
      if (this.$refs.response.classList.contains('err-400')) {
        clearTimeout(this.timeout)
        window.location.href = '/#/external'
      } else {
        this.$refs.response.classList.remove('displayed')
      }
    },
    sendform () {
      var _ = this
      var acopy = {
        es: 'Para poder participar debes aceptar las bases.',
        en: 'To participate you must accept the rules.'
      }
      _.$refs.splash.classList.add('displayed')
      if (!_.$refs.checkOK.checked) {
        _.$refs.splash.classList.add('displayed')
        // alert(acopy[_.clang])
        var customevent = new CustomEvent('OpenPopup', {detail: acopy[_.clang]})
        setTimeout(function () {
          document.dispatchEvent(customevent)
        }, 100)
        _.$refs.splash.classList.remove('displayed')
        return
      }
      var jsonvar = {
        UsuarioHackathon: {
          name: _.$refs['form-name'].value,
          mail: _.$refs['form-email'].value,
          motivation: '',
          codewars: '',
          twitter: _.$refs['form-twitter'].value,
          github: '',
          score: 0
        }
      }
      var xhttp = new XMLHttpRequest()
      xhttp.onreadystatechange = function () {
        let status = this.status
        _.resetform()
        if (this.readyState === 4 && status === 200) { // User allowed to register
          _.$data.response_msg = _.data.copy[_.clang].responses['code_' + status].response_msg
          _.$data.response_btn = _.data.copy[_.clang].responses['code_' + status].response_btn
          _.$refs.splash.classList.remove('displayed')
          _.$refs.response.classList.add('displayed')
        }
        if (this.readyState === 4 && (status === 400 || status === 406)) { // User NOT valid or already registered
          _.$refs.response.classList.add('error')
          _.$refs.response.classList.add('err-' + status)
          setTimeout(function () {
            _.$refs.splash.classList.remove('displayed')
            _.$refs.response.classList.add('displayed')
            // (_.data.copy[_.clang].response_msg_error)
            _.$data.response_msg = _.data.copy[_.clang].responses['code_' + status].response_msg
            _.$data.response_btn = _.data.copy[_.clang].responses['code_' + status].response_btn
            _.timeout = setTimeout(function () {
              if (_.$refs.response.classList.contains('displayed')) {
                _.$refs.response.classList.remove('displayed')
              }
            }, 10000)
          }, 500)
        }
      }
      _.$refs.response.classList.remove('error')
      _.$refs.response.classList.remove('err-400')
      _.$refs.response.classList.remove('err-406')
      xhttp.open('POST', 'https://www.onesaitplatform.online/gravitee/gateway/hackathon-event/v1/', true)
      xhttp.setRequestHeader('X-OP-APIKey', 'd028185e6b5f481e9e1153d0babc067e')
      xhttp.setRequestHeader('Accept', 'application/json')
      xhttp.setRequestHeader('Content-type', 'application/json')
      xhttp.send(JSON.stringify(jsonvar))
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
.component-wrapper.cmpform{
  width: 100%;
  background-color: #f7f7f7;
  transition: 1s;
  position: relative;
  overflow-y: hidden;
  .response{
    position: absolute;
    width: 100%;
    background-color: #88cc66;
    color: $darkblue;
    font-family: 'SohoGothicPro-Regular';
    text-align: center;
    font-size: 18px;
    transition: 0.5s;
    transform: translateY(-100%);
    z-index: 500;
    &.error{
      background-color: #e99e9f;
      .response-body{
        .btn{
        @media (min-width: $break-mobile) {
            &:hover{
              color: #e99e9f;
              background-color: white;
            }
          }
        }
      }
    }
    &.displayed{
      transform: translateY(0);
    }
    .copy{
      margin-bottom: 30px;
    }
    .response-body{
      margin: auto;
      max-width: $pagewidth;
      padding: 50px 0;
      .btn{
        padding: 10px 30px;
        border: 1px solid white;
        color: white;
        cursor: pointer;
        @media (min-width: $break-mobile) {
          &:hover{
            color: #88cc66;
            background-color: white;
          }
        }
      }
    }
  }
  .splash-spiner{
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #ffffffcc;
    z-index: 100;
    opacity: 0;
    pointer-events: none;
    transition: 0.5s;
    &.displayed{
      opacity: 1;
      pointer-events: initial;
    }
    .spiner-icon{
      position: absolute;
      width: 100px;
      height: 100px;
      top: 50%;
      left: 50%;
      transform: translate3d(-50%,-50%,0);
      background: url('#{$staticpath}static/minsait/images/loading.gif');
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
    }
  }
  .btn{
    display: inline-block;
    text-decoration: none;
    font-size: 15px;
    &.white{
      border: 1px solid white;
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
    max-width: 100%;
    margin: 0 auto;
    box-sizing: border-box;
    // background-color: #00000011;
    min-height: 66vh;
    position:relative;
    @media (max-width: $break-mobile) {
      min-height: 75vh;
      margin-bottom: 30px;
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
      max-width: 600px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate3d(-50%,-50%,0);
      width: 50%;
      p{
        font-family: 'SohoGothicPro-Light';
        text-align: center;
        font-size: 18px;
        color: $darkblue;
        margin-bottom: 60px;
      }
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
          transition: 0.5s;
          opacity: 0;
          transform: translate3d(0,100%,0);
          &.fadedIn{
            opacity: 1;
            transform: translate3d(0,0,0)
          }
          &:nth-child(3){
            transition-delay: 0.1s;
          }
          &:nth-child(5){
            transition-delay: 0.2s;
          }
          &.check-bases{
            width: initial;
            text-align: right;
            display: inline-block;
            font-size: 12px !important;
            /deep/ a{
              color:$softblue;
            }
            /deep/ a:visited{
              color:soft$blue;
            }
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
          border: 1px solid $darkblue;
          font-family: 'SohoGothicPro-Light';
          color: $darkblue;
          line-height: 1;
          padding: 7px;
          margin-bottom: 30px;
          transition: 0.5s;
          opacity: 0;
          transform: translate3d(0,100%,0);
          &.fadedIn{
            opacity: 1;
            transform: translate3d(0,0,0)
          }
          &:nth-child(4){
            transition-delay: 0.2s;
          }
          &:nth-child(6){
            transition-delay: 0.4s;
          }
          &.check-bases{
            width: initial;
          }
          &.submit{
            -webkit-appearance: none;
            border-radius: 0;
            border: 1px solid #6ac7b1;
            color: #6ac7b1;
            width: initial;
            cursor: pointer;
            font-family: 'SohoGothicPro-Regular';
            margin: 0 auto;
            display: inline-block;
            transition: 0.5s;
            opacity: 0;
            transform: translate3d(0,100%,0);
            &.fadedIn{
              opacity: 1;
              transform: translate3d(0,0,0)
            }
            @media (max-width: $break-mobile) {
              padding: 10px 20px;
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
