<template>
  <div id="app">
    <!--div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/hello">Hello</router-link>
    </div-->
    <transition name="router-anim" v-on:before-leave="beforeLeave">
      <router-view/>
    </transition>
    <div ref="cookie" id="cookie-message" class="hidden">
      <div class="cookie-body">
        <div class="text" v-html="data.cookie_message"></div>
        <div @click.prevent="buttonHandler()" class="button">OK</div>
      </div>
    </div>
    <div ref="sharepopup" class="popup hidden">
      <div class="close" @click.prevent="closepopup('sharepopup')">
        <div class="line"></div>
        <div class="line"></div>
      </div>
      <div class="popup-container">
        <div class="title">SHARE WITH<br>YOUR FRIENDS</div>
        <div class="share-links">
          <div class="link-item">
            <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fweunleash.com%2F">
              <span class="icon-facebook"></span>
            </a>
          </div>
          <div class="link-item">
            <a target="_blank" href="https://twitter.com/intent/tweet?text=The%20world%E2%80%99s%20greatest%20and%20craziest%20talent%20festival%20is%20coming%20soon%20with%20incredible%20young%20entrepreneurs%20and%20artists%20located%20in%20the%20beautiful%20city%20of%20Madrid.%20Are%20you%20ready%20to%20UNLEASH%20your%20full%20potential%20and%20be%20transformed%3F%20%23WeUnleash19">
              <span class="icon-twitter"></span>
            </a>
          </div>
          <div class="link-item">
            <a target="_blank" href="https://wa.me/?text=The+world%E2%80%99s+greatest+and+craziest+talent+festival+is+coming+soon+with+incredible+young+entrepreneurs+and+artists+located+in+the+beautiful+city+of+Madrid.+Are+you+ready+to+UNLEASH+your+full+potential+and+be+transformed+by+powerful+speakers+and+energetic+artists%3F+%23WeUnleash19.%0Ahttp%3A%2F%2Fweunleash.com%2F">
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
    </div>
  </div>
</template>
<script>
export default {
  name: 'App',
  data () {
    return {
      scaleR: 1,
      menuOpened: false,
      isMobile: window.innerWidth < window.dataConfig.data.mobile_width
    }
  },
  created () {
    var _ = this
    _.data = window.dataConfig.data
    _.resizeHandler()
    window.addEventListener('resize', function () {
      _.isMobile = window.innerWidth < window.dataConfig.data.mobile_width
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
    if (_.getCookie('accepted') === '') {
      // console.log('no cookie')
      _.$refs.cookie.classList.remove('hidden')
    }
    // _.$refs.formdata.innerHTML = _.data.hubspot
  },
  methods: {
    closepopup (id) {
      this.$refs[id].classList.add('hidden')
    },
    beforeLeave () {
      // console.log('beforeleave')
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
    }
  }
}
</script>

<style scoped lang="scss">
@import 'scss/_vars.scss';
@import 'scss/_fonts.scss';
#app {
  display: inline-block;
  height: 100%;
  width: 100%;
  background-color: black;
}
#app.no-scroll{
  overflow-y: hidden;
  height: 100%
}
.popup{
  width: 100%;
  max-width: $pagewidth2;
  min-height: 100px;
  background-color: black;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%,-50%,0);
  border: 2px solid white;
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
      color: $magenta;
      text-align: center;
      font-family: 'space_monoregular';
      font-size: 24px;
      line-height: 1.3;
      padding: 15px;
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
        border: 2px solid $magenta;
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
          font-size: 20px;
          line-height: 1;
          display: inline-block;
          color:$magenta;
          top: 50%;
          left: 50%;
          position: absolute;
          transform: translate3d(-50%,-50%,0)
        }
        &:hover{
          background-color: $magenta;
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
#cookie-message{
  min-height: 100px;
  background-color: $magenta;
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
