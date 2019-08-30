<template>
  <div class="component-wrapper cmpmenutwo" v-bind:class="$props.type">
    <div class="component-container subline">
      <div ref="burguer" class="toggle" @click.prevent="toggleMenu()">
        <div class="toggle-center">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>
      </div>
      <div class="logo" @click.prevent="goTo2('/')"></div>
      <div class="left-copy" v-html="data.copy[clang].menu_left_copy"></div>
    </div>
    <div ref="menucontainer" class="component-container hidden">
      <nav>
        <ul>
          <li><router-link v-bind:to="'/' + clang" v-html="data.copy[clang].menu_links.home"></router-link></li>
          <li><router-link v-bind:to="'/reglas/' + clang" v-html="data.copy[clang].menu_links.rules"></router-link></li>
          <li><router-link to="/proposito">Propósito</router-link></li>
          <li><router-link v-bind:to="'/ranking/' + clang" v-html="data.copy[clang].menu_links.ranking"></router-link></li>
          <!--li><router-link v-bind:to="'/webex/' + clang" v-html="data.copy[clang].menu_links.webex"></router-link></li-->
          <li><a target="_blank" v-bind:href="data.webex_url" v-html="data.copy[clang].menu_links.webex"></a></li>
          <li><a target="_blank" href="mailto:platformrevolution@minsait.com" v-html="data.copy[clang].menu_links.contact"></a></li>
          <li><a target="_blank" href="https://blog.onesaitplatformrevolution.com/" v-html="data.copy[clang].menu_links.blog"></a></li>
        </ul>
      </nav>
      <div class="lang-selector" v-bind:style="isMobile ? '' : 'e'">
        <div class="text-button" v-bind:style="isMobile ? '' : ''"><a @click.prevent="toggleLang('es')" ref="link-es" href="" class="lang-link">ES</a> | <a @click.prevent="toggleLang('en')" ref="link-en" href="" class="lang-link">EN</a></div>
      </div>
      <div class="btn white participa" @click.prevent="goTo('/?participa')" v-html="data.copy[clang].menuparticipabtn"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CMP_menutwo',
  props: ['type'],
  data () {
    return {
      scaleR: 1,
      isMobile: window.innerWidth < window.dataConfig.mobile_width,
      data: window.dataConfig,
      clang: 'es',
      menuOpened: false
    }
  },
  created () {
    var _ = this
    // _.resizeHandler()
    this.clang = this.$route.name.split('loc:')[1]
    window.addEventListener('resize', function () {
      _.isMobile = window.innerWidth < _.data.mobile_width
      // _.resizeHandler()
    })
  },
  mounted () {
    // this.$refs['link-' + this.clang].classList.add('active')
    this.getParams(window.location.href)
  },
  methods: {
    getParams (url) {
      if (url.split('?')[1] === 'participa') {
        setTimeout(function () {
          console.log('scrollTO')
          document.getElementsByClassName('page')[0].scrollTo(0, document.getElementsByClassName('cmpform')[0].offsetTop)
        }, 1000)
      }
    },
    resizeHandler () {
      var w = Math.min(window.innerWidth, this.data.max_width)
      this.scaleR = Math.max(this.data.mobile_width / this.data.max_width, w / this.data.max_width)
      this.scaleR = Math.min(this.scaleR, (this.data.max_width_limit / this.data.max_width))
    },
    goTo2 (site) {
      window.location.href = '/#' + site
    },
    goTo (site) {
      if (document.getElementsByClassName('home').length > 0) {
        // move scroll only
        console.log('GO')
        document.getElementsByClassName('page')[0].scrollTo(0, document.getElementsByClassName('cmpform')[0].offsetTop)
      } else {
        console.log('to Site')
        window.location.href = '/#' + site
      }
    },
    toggleMenu () {
      if (this.menuOpened) {
        this.menuOpened = false
        this.$refs.burguer.classList.remove('opened')
        this.$refs.menucontainer.classList.add('hidden')
        document.getElementById('page').style.overflowY = ''
      } else {
        this.menuOpened = true
        this.$refs.burguer.classList.add('opened')
        this.$refs.menucontainer.classList.remove('hidden')
        document.getElementById('page').style.overflowY = 'hidden'
      }
    },
    toggleLang (to) {
      var fpath = this.$route.fullPath.replace('/es', '')
      fpath = fpath.replace('/en', '')
      if (fpath === '/') {
        window.location.href = '/#' + fpath + '' + to
        // location.reload()
        this.$router.go()
      } else {
        console.log(fpath)
        window.location.href = '/#' + fpath + '/' + to
        // location.reload()
        this.$router.go()
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../scss/_vars.scss';
@import '../scss/_fonts.scss';
.component-wrapper.cmpmenutwo{
  width: 100%;
  transition: 1s;
  z-index: 999;
  background-color: #6ac7b1;
  &.pinky{
    background-color: #fde3d4;
    .component-container.subline{
      border-bottom: 1px solid $darkblue;
      @media (max-width: $break-mobile) {
        border-bottom: none;
      }
    }
    .component-container nav ul li a{
      color: $darkblue;
      @media (min-width: $break-mobile) {
        border-bottom: 1px solid #fde3d4;
      }
      &:hover{
        @media (min-width: $break-mobile) {
          color: white;
          border-bottom: 1px solid white;
        }
      }
    }
    .btn.white{
      color: $darkblue;
      border: 1px solid $darkblue;
      &:hover{
        @media (min-width: $break-mobile) {
          background-color: $darkblue;
          color: #fde3d4;
        }
      }
    }
    .lang-selector{
      .text-button{
        color: $darkblue;
        .lang-link{
          color: $darkblue;
        }
      }
    }
  }
  &.whity{
    background-color: white;
    .component-container.subline{
      @media (min-width: $break-mobile) {
        border-bottom: 1px solid $darkblue;
      }
      @media (max-width: $break-mobile) {
        border-bottom: none;
      }
    }
    .component-container nav ul li a{
      color: $darkblue;
      border-bottom: 1px solid white;
      &:hover{
        @media (min-width: $break-mobile) {
          color: #6ac7b1;
          border-bottom: 1px solid #6ac7b1;
        }
      }
    }

    .btn.white{
      color: $darkblue;
      border: 1px solid $darkblue;
      &:hover{
        @media (min-width: $break-mobile) {
          background-color: $darkblue;
          color: white;
        }
      }
    }
    .lang-selector{
      .text-button{
        color: $darkblue;
        .lang-link{
          color: $darkblue;
        }
      }
    }
  }
  @media (max-width: $break-mobile) {
    position: fixed;
  }
  .btn{
    font-size: 15px;
    border: 1px solid black;
    display: inline-block;
    line-height: 1;
    padding: 10px 30px;
    font-family: 'SohoGothicPro-Regular';
    cursor: pointer;
    &.participa{
      right: 15px;
      top: 50%;
      position: absolute;
      transform: translate3d(0,-50%,0);
      @media (min-width: $break-mobile) {
        &:hover{
          background-color: white;
          color: $softblue;
        }
      }
      @media (max-width: $break-mobile) {
        display: none;
      }
    }
    &.white{
      color: white;
      border: 1px solid white;
    }
  }
  .component-container{
    max-width: $pagewidth;
    margin: 0 auto;
    box-sizing: border-box;
    position:relative;
    transition: 0.5s;
    height: 65px;
    @media (max-width: $break-mobile) {
      height: 80px;
      &:nth-child(2){
        height: unset;
        transition: 0.5s;
        background-color: white;
        max-height: 400px;
        overflow: hidden;
        &.hidden{
           max-height: 0;
        }
      }
    }
    &.subline{
      border-bottom: 1px solid white;
      @media (max-width: $break-mobile) {
        border-bottom: none;
      }
    }
    .left-copy{
      position: absolute;
      right: 0;
      top: 50%;
      transform: translate3d(0,-50%,0);
      font-size: 15px;
      padding: 15px;
      font-family: 'SohoGothicPro-Regular';
      color: $darkblue;
      @media (max-width: $break-mobile) {
        padding: 10px;
      }
    }
    .toggle{
      display: none;
      @media (max-width: $break-mobile) {
        display: inline-block;
        width: 45px;
        height: 45px;
        top: 50%;
        left: 10px;
        position: absolute;
        transform: translateY(-50%);
        &.opened{
          .toggle-center .line{
            &:nth-child(1){
              opacity:0;
            }
            &:nth-child(2){
              transform: rotate(45deg)
            }
            &:nth-child(3){
              transform: rotate(-45deg)
            }
            &:nth-child(4){
              opacity:0;
            }
          }
        }
        .toggle-center{
          width: 26px;
          height: 16px;
          top: 50%;
          left: 50%;
          transform: translate3d(-50%,-50%,0);
          position: absolute;
          cursor: pointer;
          .line{
            height: 3px;
            width: 100%;
            background-color: #777;
            position: absolute;
            transition: 0.25s;
            &:nth-child(1){
              top:0;
            }
            &:nth-child(2){
              top:50%;
            }
            &:nth-child(3){
              top:50%;
            }
            &:nth-child(4){
              top:100%;
            }
          }
        }
      }
    }
    .logo{
      background-image: url('#{$staticpath}static/minsait/images/logoMinsait2.png');
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      height: 26px;
      width: 130px;
      position: absolute;
      top: 50%;
      transform: translate3d(15px,-50%,0);
      cursor: pointer;
      @media (max-width: $break-mobile) {
        width: 100px;
        height: 40%;
        transform: translate3d(0,-50%,0);
        left: 65px;
      }
    }
    nav{
      display: block;
      height: 100%;
      display: flex;
      align-items: center;
      padding: 0 15px;
      ul{
        display: inline-block;
        margin: 0;
        padding: 0;
        @media (max-width: $break-mobile) {
          display: block;
          width: 100%;
        }
        li{
          width: auto;
          padding: 0;
          position: static;
          margin-right: 45px;
          display: inline-block;
          list-style-type: none;
          a{
            font-size: 15px;
            padding: 15px 0;
            font-family: 'SohoGothicPro-Regular';
            color: white;
            display: inline-block;
            text-decoration: none;
            border-bottom: 1px solid #6ac7b1;
            @media (max-width: $break-mobile) {
              border-bottom: none;
            }
            &:hover{
              @media (min-width: $break-mobile) {
                border-bottom: 1px solid white;
                color: $darkblue;
              }
            }
          }
        }
      }
      @media (max-width: $break-mobile) {
        // display: none;
        ul {
          li{
            margin-right: 0;
            display: block;
            border-bottom: 1px solid rgba(161,160,156,0.2);
            a{
              color: $darkblue;
            }
          }
        }
      }
    }
  }

  .lang-selector{
    position: absolute;
    display: inline-block;
    top: 50%;
    right: 150px;
    transform: translate3d(0,-50%,0);
    padding: 8px 20px;
    line-height: 1.3;
    font-family: 'SohoGothicPro-Medium';
    @media (max-width: $break-mobile) {
      position: relative;
      transform: initial;
      right: initial;
      padding: 15px 0;
      border-bottom: 1px solid grey;
      display: block;
    }
    .text-button{
      color: white;
      @media (max-width: $break-mobile) {
        color:$darkblue;
      }
      .lang-link{
        color: white;
        text-decoration: none;
        padding: 0 15px;
        @media (max-width: $break-mobile) {
          color: black;
        }
        &.active{
          font-family: 'SohoGothicPro-Medium';
        }
        &:hover{
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
