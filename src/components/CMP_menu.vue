<template>
  <div class="component-wrapper cmpmenu">
    <div class="component-container" v-bind:style="isMobile ? '' : 'height:'+120*scaleR+'px'" >
      <div ref="menucontainer" class="menu-container hidden" v-bind:style="isMobile ? '' : 'height:'+60*scaleR+'px;width:'+440*scaleR+'px;padding-top:'+120*scaleR+'px;'">
        <div  v-for="item in data.copy[clang].menuitems" :key="item.id" class="menu-item" v-bind:style="isMobile ? '' : 'margin-top:'+0*scaleR+'px;height:'+85*scaleR+'px;'">
          <div class="menu-item-text">
            <div class="arrow" v-bind:style="isMobile ? '' : 'font-size:'+38*scaleR+'px'">></div>
            <div class="text"  v-bind:style="isMobile ? '' : 'font-size:'+20*scaleR+'px;left:'+10*scaleR+'px;'" v-html="item.text"></div>
          </div>
        </div>
      </div>
      <div class="lang-selector" v-bind:style="isMobile ? '' : 'right:'+220*scaleR+'px;height:'+60*scaleR+'px;width:'+220*scaleR+'px'">
        <div class="text-button" v-bind:style="isMobile ? '' : 'font-size:'+22*scaleR+'px; letter-spacing:'+4*scaleR+'px'"><a @click.prevent="toggleLang('es')" ref="link-es" href="" class="lang-link">ES</a> | <a @click.prevent="toggleLang('en')" ref="link-en" href="" class="lang-link">EN</a></div>
      </div>
      <div @click.prevent="toggleMenu()" class="menu-button" v-bind:style="isMobile ? '' : 'height:'+60*scaleR+'px;width:'+220*scaleR+'px'">
        <div class="text-button" v-bind:style="isMobile ? '' : 'font-size:'+22*scaleR+'px; letter-spacing:'+4*scaleR+'px'" v-html="data.copy[clang].menubtn"></div>
        <div ref="burguer" class="burguer"  v-bind:style="isMobile ? '' : 'height:'+25*scaleR+'px;width:'+35*scaleR+'px'">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CMP_menu',
  props: ['test'],
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
    console.log(this.$route.params.lang)
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
    this.$refs['link-' + this.clang].classList.add('active')
  },
  methods: {
    resizeHandler () {
      var w = Math.min(window.innerWidth, this.data.max_width)
      this.scaleR = Math.max(this.data.mobile_width / this.data.max_width, w / this.data.max_width)
      this.scaleR = Math.min(this.scaleR, (this.data.max_width_limit / this.data.max_width))
    },
    toggleMenu () {
      if (this.menuOpened) {
        this.menuOpened = false
        this.$refs.burguer.classList.remove('opened')
        this.$refs.menucontainer.classList.add('hidden')
      } else {
        this.menuOpened = true
        this.$refs.burguer.classList.add('opened')
        this.$refs.menucontainer.classList.remove('hidden')
      }
    },
    toggleLang (to) {
      window.location.href = '/#' + this.$route.fullPath.replace(this.clang, to)
      location.reload()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../scss/_vars.scss';
@import '../scss/_fonts.scss';
.component-wrapper.cmpmenu{
  width: 100%;
  transition: 1s;
  position: absolute;
  z-index: 999;
  .component-container{
    max-width: $pagewidth;
    margin: 0 auto;
    box-sizing: border-box;
    min-height: 100px;
    position:relative;
    font-family: 'SohoGothicPro-Light';
    .lang-selector{
      position: absolute;
      display: inline-block;
      top: 50%;
      transform: translate3d(0,-50%,0);
      .text-button{
        position: absolute;
        top: 50%;
        left: 55%;
        transform: translate3d(-25%,-50%,0);
        color: white;
        .lang-link{
          color: white;
          text-decoration: none;
          &.active{
            font-family: 'SohoGothicPro-Medium';
          }
          &:hover{
            text-decoration: underline;
          }
        }
      }
    }
    .menu-container{
      position: absolute;
      display: inline-block;
      top: 50%;
      transform: translate3d(0,-50%,0);
      right: 0;
      &.hidden{
        .menu-item{
          transform: translate3d(100%,0,0);
          opacity: 0;
          pointer-events: none;
        }
      }
      .menu-item{
        background-color: #ff8ba4;
        width: 100%;
        transition: 0.5s;
        position: relative;
        cursor:pointer;
        &:hover{
          background-color:  #ffaacc;
          transition-delay: 0s !important;
          transition: 0.25s;
          transform: translate3d(-3%,0,0)
        }
        .menu-item-text{
          position: absolute;
          width: 80%;
          height: 50%;
          top:50%;
          left: 50%;
          transform: translate3d(-50%,-50%,0);
          font-family: 'SohoGothicPro-Light';
          color: #111111;
          .arrow{
            position: absolute;
            top:50%;
            transform: translate3d(-100%,-50%,0)
          }
          .text{
            position: absolute;
            top:50%;
            transform: translate3d(0,-50%,0)
          }
        }
        &:nth-child(2){
          transition-delay: 0.1s;
        }
        &:nth-child(3){
          transition-delay: 0.15s;
        }
        &:nth-child(4){
          transition-delay: 0.2s;
        }
        &:nth-child(5){
          transition-delay: 0.25s;
        }
      }
    }
    .menu-button{
      background-color: white;
      display: inline-block;
      position: absolute;
      right: 0;
      top: 50%;
      transform: translate3d(0,-50%,0);
      transition: 0.25s;
      &:hover{
        transform: translate3d(0,-50%,0) scale(1.05);
      }
      cursor: pointer;
      .text-button{
        position: absolute;
        top: 50%;
        left: 33%;
        transform: translate3d(-50%,-50%,0)
      }
      .burguer{
        position: absolute;
        right: 10%;
        top: 50%;
        transform: translate3d(0,-50%,0);
        .line{
          height: 15%;
          width: 100%;
          background-color: black;
          position:absolute;
          left: 0;
          transition: 0.5s;
        }
        .line:nth-child(1) {
          top:0;
        }
        .line:nth-child(2) {
          top:50%;
          transform: translate3d(0,-50%,0)
        }
        .line:nth-child(3) {
          top:50%;
          transform: translate3d(0,-50%,0)
        }
        .line:nth-child(4) {
          bottom: 0;
        }
        &.opened{
          .line:nth-child(1), .line:nth-child(4) {
            opacity: 0;
          }
          .line:nth-child(2) {
            transform: translate3d(0,-50%,0) rotate(45deg)
          }
          .line:nth-child(3) {
            transform: translate3d(0,-50%,0) rotate(-45deg)
          }
        }
      }
    }
  }
}
</style>
