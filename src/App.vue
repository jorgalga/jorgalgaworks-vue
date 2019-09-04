<template>
  <div id="app">
    <transition name="router-anim" v-on:before-leave="beforeLeave">
      <router-view/>
    </transition>
    <cmpCookies></cmpCookies>
    <cmpPopup></cmpPopup>
    <!--div ref="sharepopup" class="popup hidden">
      <div class="close" @click.prevent="closepopup('sharepopup')">
        <div class="line"></div>
        <div class="line"></div>
      </div>
      <div class="popup-container">
        <div class="title">SHARE WHITH<br>YOUR FRIENDS</div>
        <div class="share-links">
          <div class="link-item">
            <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fweunleash.com%2F">
              <span class="icon-facebook"></span>
            </a>
          </div>
          <div class="link-item">
            <a target="_blank" href="https://twitter.com/intent/tweet?text=Say%20hello%20to%20the%20craziest%20talent%20festival.%0Ahttp%3A%2F%2Fweunleash.com%2F">
              <span class="icon-twitter"></span>
            </a>
          </div>
          <div class="link-item">
            <a target="_blank" href="https://wa.me/?text=Say%20hello%20to%20the%20craziest%20talent%20festival.%0Ahttp%3A%2F%2Fweunleash.com%2F">
              <span class="icon-whatsapp"></span>
            </a>
          </div>
        </div>
        <div class="lines">
          <div class="line"><div class="line-fill"></div></div>
          <div class="line"><div class="line-fill"></div></div>
          <div class="line"><div class="line-fill"></div></div>
          <div class="line"><div class="line-fill"></div></div>
          <div class="line"><div class="line-fill"></div></div>
          <div class="line"><div class="line-fill"></div></div>
          <div class="line"><div class="line-fill"></div></div>
          <div class="line"><div class="line-fill"></div></div>
        </div>
        <div class="link"></div>
      </div>
    </div-->
  </div>
</template>
<script>
import cmpCookies from '@/components/CMP_cookies'
import cmpPopup from '@/components/CMP_popup'
export default {
  name: 'App',
  props: ['lang'],
  components: {
    'cmpCookies': cmpCookies,
    'cmpPopup': cmpPopup
  },
  data () {
    return {
      scaleR: 1,
      menuOpened: false,
      isMobile: window.innerWidth < window.dataConfig.mobile_width,
      clang: 'es'
    }
  },
  created () {
    var _ = this
    this.clang = this.$route.name.split('loc:')[1]
    _.data = window.dataConfig
    _.resizeHandler()
    window.addEventListener('resize', function () {
      _.isMobile = window.innerWidth < _.data.mobile_width
      _.resizeHandler()
    })
  },
  mounted () {
    let _ = this
    document.addEventListener('gotoTickets', function (e) {
      _.$router.push('tickets')
    }, false)
    document.addEventListener('openPopup', function (e) {
      _.$refs.sharepopup.classList.remove('hidden')
    }, false)
    var reg = _.getArgs(window.location.href).register
    var copyred = {
      en: {
        true: 'Registration has been completed successfully.',
        false: 'Registration could not be completed.'
      },
      es: {
        true: 'El registro ha sido completado con éxito.',
        false: 'El registro no se ha podido completar.'
      }
    }
    if (reg) {
      var customevent = new CustomEvent('OpenPopup', {detail: copyred[_.clang][reg]})
      setTimeout(function () {
        document.dispatchEvent(customevent)
      }, 2000)
    }
  },
  methods: {
    closepopup (id) {
      this.$refs[id].classList.add('hidden')
    },
    beforeLeave () {
    },
    openLink (link) {
      window.open(link, '_blank')
    },
    resizeHandler () {
      var w = Math.min(window.innerWidth, this.data.max_width)
      this.scaleR = Math.max(0.5, w / this.data.max_width)
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
    },
    getArgs (url) {
      // get query string from url (optional) or window
      var queryString = url ? url.split('?')[1] : window.location.search.slice(1)
      // we'll store the parameters here
      var obj = {}
      // if query string exists
      if (queryString) {
        // stuff after # is not part of query string, so get rid of it
        queryString = queryString.split('#')[0]
        // split our query string into its component parts
        var arr = queryString.split('&')
        for (var i = 0; i < arr.length; i++) {
          // separate the keys and the values
          var a = arr[i].split('=')
          // set parameter name and value (use 'true' if empty)
          var paramName = a[0]
          var paramValue = typeof (a[1]) === 'undefined' ? true : a[1]
          // (optional) keep case consistent
          paramName = paramName.toLowerCase()
          if (typeof paramValue === 'string') paramValue = paramValue.toLowerCase()
          // if the paramName ends with square brackets, e.g. colors[] or colors[2]
          if (paramName.match(/\[(\d+)?\]$/)) {
            // create key if it doesn't exist
            var key = paramName.replace(/\[(\d+)?\]/, '')
            if (!obj[key]) obj[key] = []
            // if it's an indexed array e.g. colors[2]
            if (paramName.match(/\[\d+\]$/)) {
              // get the index value and add the entry at the appropriate position
              var index = /\[(\d+)\]/.exec(paramName)[1]
              obj[key][index] = paramValue
            } else {
              // otherwise add the value to the end of the array
              obj[key].push(paramValue)
            }
          } else {
            // we're dealing with a string
            if (!obj[paramName]) {
              // if it doesn't exist, create property
              obj[paramName] = paramValue
            } else if (obj[paramName] && typeof obj[paramName] === 'string') {
              // if property does exist and it's a string, convert it to an array
              obj[paramName] = [obj[paramName]]
              obj[paramName].push(paramValue)
            } else {
              // otherwise add the property
              obj[paramName].push(paramValue)
            }
          }
        }
      }
      return obj
    }
  }
}
</script>

<style scoped lang="scss">
@import 'scss/_vars.scss';
@import 'scss/_fonts.scss';
// a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}:focus{outline:0}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:'';content:none}table{border-collapse:collapse;border-spacing:0}input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration,input[type=search]::-webkit-search-results-button,input[type=search]::-webkit-search-results-decoration{-webkit-appearance:none;-moz-appearance:none}input[type=search]{-webkit-appearance:none;-moz-appearance:none;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box}textarea{overflow:auto;vertical-align:top;resize:vertical}audio,canvas,video{display:inline-block;max-width:100%}audio:not([controls]){display:none;height:0}[hidden]{display:none}html{font-size:100%;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%}a:focus{outline:thin dotted}a:active,a:hover{outline:0}img{border:0;-ms-interpolation-mode:bicubic}figure{margin:0}form{margin:0}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{border:0;padding:0;white-space:normal}button,input,select,textarea{font-size:100%;margin:0;vertical-align:baseline}button,input{line-height:normal}button,select{text-transform:none}button,html input[type=button],input[type=reset],input[type=submit]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}input[type=checkbox],input[type=radio]{box-sizing:border-box;padding:0}input[type=search]{-webkit-appearance:textfield;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;box-sizing:content-box}input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration{-webkit-appearance:none}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}textarea{overflow:auto;vertical-align:top}table{border-collapse:collapse;border-spacing:0}button,html,input,select,textarea{color:#222}::-moz-selection{background:#b3d4fc;text-shadow:none}::selection{background:#b3d4fc;text-shadow:none}img{vertical-align:middle}fieldset{border:0;margin:0;padding:0}textarea{resize:vertical}.chromeframe{margin:.2em 0;background:#ccc;color:#000;padding:.2em 0}
#app {
  display: inline-block;
  height: 100%;
  width: 100%;
}
#app.no-scroll{
  overflow-y: hidden;
  height: 100%
}
/*
.popup{
  width: 100%;
  max-width: $pagewidth2;
  min-height: 100px;
  background-color: black;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%,-50%,0);
  border: 1px solid white;
  transition: 0.5s;
  opacity: 1;
  z-index: 999;
  @media (max-width: $break-mobile) {
    max-width: 80%;
  }
  &.hidden{
    pointer-events: none;
    opacity: 0;
    transform: translate3d(-50%,150%,0);
  }
  .close{
    height: 30px;
    width: 30px;
    top: 15px;
    right: 15px;
    position: absolute;
    transition: 0.25s;
    transition-delay: 0.25;
    cursor: pointer;
    &:hover{
      transform: rotate(-90deg);
      .line{
        &:nth-child(1){
          transform: translate3d(-50%,-50%,0) rotate(-45deg)
        }
        &:nth-child(2){
          transform: translate3d(-50%,-50%,0) rotate(45deg)
        }
      }
    }
    .line{
      height: 4px;
      width: 100%;
      background-color: white;
      position: absolute;
      top: 50%;
      left: 50%;
      transition: 0.5s;
      &:nth-child(1){
        transform: translate3d(-50%,-50%,0) rotate(45deg)
      }
      &:nth-child(2){
        transform: translate3d(-50%,-50%,0) rotate(-45deg)
      }
    }
  }
  .popup-container{
    max-width: 80%;
    margin: 30px auto;
    box-sizing: border-box;
    .title{
      text-align: center;
      font-family: 'space_monoregular';
      font-size: 24px;
      line-height: 1.3;
      padding: 15px;
      color: white;
    }
    .share-links{
      padding: 15px;
      text-align: center;
      .link-item{
        vertical-align: top;
        display: inline-block;
        width: 45px;
        height: 45px;
        margin-right: 15px;
        position: relative;
        cursor: pointer;
        transition: .25s;
        a{
          display: inline-block;
          width: 100%;
          height: 100%;
          position: relative
        }
        span{
          color: white;
          font-size: 20px;
          line-height: 1;
          display: inline-block;
          top: 50%;
          left: 50%;
          position: absolute;
          transform: translate3d(-50%,-50%,0)
        }
        &:hover{
          background-color: white;
          span{
            color: black;
          }
        }
      }
      .link-item:last-child{
        margin: 0;
        display: none;
        @media (max-width: $break-mobile) {
          display: inline-block;
        }
      }
    }
    .lines{
      margin: 15px 25% 0 25%;
      position: relative;
      .line{
        width: 100%;
        height: 2px;
        margin-bottom: 10px;
        .line-fill{
          background-color: white;
          width: 100%;
          height: 100%;
        }
        &.line:nth-child(1){
          .line-fill{
            transform: scaleX(1)
          }
        }
        &.line:nth-child(2){
          .line-fill{
            transform: scaleX(0.9)
          }
        }
        &.line:nth-child(3){
          .line-fill{
            transform: scaleX(0.8)
          }
        }
        &.line:nth-child(4){
          .line-fill{
            transform: scaleX(0.7)
          }
        }
        &.line:nth-child(5){
          .line-fill{
            transform: scaleX(0.6)
          }
        }
        &.line:nth-child(6){
          .line-fill{
            transform: scaleX(0.5)
          }
        }
        &.line:nth-child(7){
          .line-fill{
            transform: scaleX(0.4)
          }
        }
        &.line:nth-child(8){
          .line-fill{
            transform: scaleX(0.3)
          }
        }
      }
    }
    .link{
      padding: 15px
    }
  }
}
*/
.page{
  position: absolute;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  overflow-y: scroll;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
  &.no-scroll{
    overflow-y:hidden;
  }
}
.router-anim-enter-active{
  animation: coming 0.5s;
  animation-delay: 0.5s;
  opacity: 0;
}
.router-anim-leave-active{
  animation: going 0.5s;
}
@keyframes  coming {
  from {
    transform: translateY(-0);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
@keyframes  going {
  from {
    transform: translateX(0)
  }
  to {
    transform: translateY(0);
    opacity: 0;
  }
}
.cookie-message{
  min-height: 100px;
  background-color: grey;
  width: calc(100% - 17px);
  bottom: 0;
  left:0;
  position: fixed;
  transition: 1s;
  @media (max-width: $break-mobile) {
    width: 100%;
  }
  &.hidden{
    transform: translate3d(0,150%,0)
  }
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
</style>
