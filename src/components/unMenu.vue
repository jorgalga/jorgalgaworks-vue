<template>
  <div class="component-wrapper unmenu">
    <div class="gradient-menu"></div>
    <router-link to="/tickets">
    <div class="tickets-left" v-bind:style="isMobile ? 'padding:'+0*scaleR+'px 0 0 0' : 'padding:'+35*scaleR+'px 10px 0 0'">
      <div id="ticket-menu" class="ticket-image"></div>
      <div class="share-link" @click.prevent="openPopup()"><span class="icon-share2"></span></div>
      <div class="tickets-amount"  v-bind:style="isMobile ? 'margin: 0;' : 'margin-top:'+10*scaleR+'px'"></div>
    </div>
    </router-link>
    <div class="component-container" v-bind:style="isMobile ? '' : 'font-size:'+18*scaleR+'px'">
      <div id="nav">
        <router-link id="home-desktop" v-bind:style="'padding:'+45*scaleR+'px'" to="/">{{data.page_names.home}}<span class="underline-container"><span class="underline"></span></span></router-link>
        <router-link id="speakers-desktop" v-bind:style="'padding:'+45*scaleR+'px'" to="/speakers">{{data.page_names.speakers}}<span class="underline-container"><span class="underline"></span></span></router-link>
        <router-link v-bind:style="'padding:'+45*scaleR+'px'" to="/space">{{data.page_names.space}}<span class="underline-container"><span class="underline"></span></span></router-link>
        <!--router-link v-bind:style="'padding:'+45*scaleR+'px'" to="/agenda">{{data.page_names.agenda}}<span class="underline-container"><span class="underline"></span></span></router-link-->
        <router-link id="partners-desktop" v-bind:style="'padding:'+45*scaleR+'px'" to="/partners">{{data.page_names.partners}}<span class="underline-container"><span class="underline"></span></span></router-link>
        <router-link id="organizers-desktop" v-bind:style="'padding:'+45*scaleR+'px'" to="/organizers">{{data.page_names.organizers}}<span class="underline-container"><span class="underline"></span></span></router-link>
      </div>
      <router-link to="/">
        <div id='logo'  v-bind:style="isMobile ? '' : 'left:'+15*scaleR+'px;width:'+150*scaleR+'px;height:'+50*scaleR+'px'"></div>
      </router-link>
      <div ref="menuMobile" class="menu-bg-mobile">
        <div class="links-container">
          <div>
             <router-link id="home-mobile" to="/">{{data.page_names.home}}<span class="underline-container"><span class="underline"></span></span></router-link>
          </div>
          <div>
            <router-link id="speakers-mobile" to="/speakers">{{data.page_names.speakers}}<span class="underline-container"><span class="underline"></span></span></router-link>
          </div>
          <div>
            <router-link v-bind:style="'padding:'+45*scaleR+'px'" to="/space">{{data.page_names.space}}<span class="underline-container"><span class="underline"></span></span></router-link>
          </div>
          <div>
            <router-link id="partners-mobile" v-bind:style="'padding:'+45*scaleR+'px'" to="/partners">{{data.page_names.partners}}<span class="underline-container"><span class="underline"></span></span></router-link>
          </div>
          <div>
            <router-link id="organizers-mobile" v-bind:style="'padding:'+45*scaleR+'px'" to="/organizers">{{data.page_names.organizers}}<span class="underline-container"><span class="underline"></span></span></router-link>
          </div>
          <router-link id="ticket-menu-mobile" to="/tickets" style="display:block;">
            <div  v-bind:style="'margin:15px 0 15px 0;'" class="ticket-black">
            </div>
          </router-link>
          <div class="share-links">
            <div class="link-item">
              <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fweunleash.com%2F">
                <span class="icon-facebook"></span>
              </a>
            </div>
            <div class="link-item">
              <a href="https://twitter.com/intent/tweet?text=Say%20hello%20to%20the%20craziest%20talent%20festival.%0Ahttp%3A%2F%2Fweunleash.com%2F">
                <span class="icon-twitter"></span>
              </a>
            </div>
            <div class="link-item">
              <a target="_blank" href="https://wa.me/?text=Say%20hello%20to%20the%20craziest%20talent%20festival.%0Ahttp%3A%2F%2Fweunleash.com%2F">
                <span class="icon-whatsapp"></span>
              </a>
            </div>
        </div>
        </div>
      </div>
      <div ref="burguer" id='burguer-menu' @click.prevent="toggleMenu()">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'unMenu',
  props: ['test'],
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
  },
  methods: {
    openLink (link, type) {
      window.open(link, type)
    },
    openPopup () {
      var customevent = new Event('openPopup')
      document.dispatchEvent(customevent)
    },
    resizeHandler () {
      var w = Math.min(window.innerWidth, this.data.max_width)
      this.scaleR = Math.max(0.5, w / this.data.max_width)
      this.scaleR = Math.min(this.scaleR, (this.data.max_width_limit / this.data.max_width))
    },
    toggleMenu () {
      if (this.menuOpened) {
        this.menuOpened = false
        this.$refs.menuMobile.classList.remove('opened')
        this.$refs.burguer.classList.remove('opened')
        document.getElementById('page').classList.remove('no-scroll')
      } else {
        this.menuOpened = true
        this.$refs.menuMobile.classList.add('opened')
        this.$refs.burguer.classList.add('opened')
        document.getElementById('page').classList.add('no-scroll')
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../scss/_vars.scss';
.component-wrapper.unmenu{
  width: calc(100% - 17px);
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  display: inline-block;
  box-sizing: border-box;
  @media (max-width: $break-mobile) {
    width: 100%;
    background-color: black;
  }
  .gradient-menu{
    width: 100%;
    height: 100%;
    position: absolute;
    background-image: linear-gradient(to bottom, black, black 95%, transparent 100%);
  }
  .component-container{
    position: relative;
    max-width: $pagewidth;
    margin: 0 auto;
    box-sizing: border-box;
    @media (max-width: $break-mobile) {
      height: 60px;
    }
  }
}

#nav{
  z-index: 9999;
  line-height: 1;
  font-family: 'overpassregular';
  text-align: right;
  padding-right: 100px;
  @media (max-width: $break-mobile) {
    padding: initial;
    display: none;
  }
  a{
    display: inline-block;
    text-decoration: none;
    color: $fontcolor;
    cursor: pointer;
  }
  a:visited{
    color: $fontcolor;
  }
  a:hover{
    // color: black;
    // background-color: white;
    .underline-container .underline{
      transform: scaleX(1)
    }
  }
  .underline-container{
    height: 2px;
    width: 100%;
    display: inline-block;
    .underline{
      background-color: #FF00FF;
      height: 100%;
      width: 100%;
      display: inline-block;
      transition: 0.25s;
      transform: scaleX(0);
      transform-origin: top left;
    }
  }
}
#logo{
  cursor: pointer;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate3d(0,-50%,0);
  background-image: url('#{$staticpath}static/unleash/logo-unleash-blanco.png');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center left;
  @media (max-width: $break-mobile) {
    height: 30px;
    width: 90px;
    left: 2%;
  }
}
.menu-bg-mobile{
  position: fixed;
  top:0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #FF00FF;
  z-index: 990;
  transition: 0.5s;
  transform: translate3d(100%,0,0);
  &.opened{
    transform: translate3d(0,0,0)
  }
  .links-container{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%,-50%,0);
    min-height: 10%;
    min-width: 80%;
    text-align: center;
    div{
      padding: 15px;
    }
    div.ticket-black{
      background-image: url('#{$staticpath}static/unleash/images/ticket_white.png');
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      height: 85px;
      width: 100%;
      display: inline-block;
      box-sizing: border-box;
      padding: 0;
    }
    a{
      font-family: 'overpass_blackregular';
      color: white;
      font-size: 21px;
      line-height: 1;
      text-decoration: none;
    }
    a:visited{
      color: white;
    }
    a:hover{
      .underline-container .underline{
        transform: scaleX(1)
      }
    }
    .share-links{
      padding: 15px;
      text-align: center;
      .link-item{
        vertical-align: top;
        display: inline-block;
        width: 30px;
        height: 30px;
        margin-right: 15px;
        border: 2px solid white;
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
          color: white;
          top: 50%;
          left: 50%;
          position: absolute;
          transform: translate3d(-50%,-50%,0)
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
  }
}
#burguer-menu {
  display: none;
  @media (max-width: $break-mobile) {
    display: inline-block;
    height: 30px;
    width: 35px;
    position: absolute;
    top: 50%;
    right: 2%;
    transform: translate3d(0,-50%,0);
    z-index: 999;
    .line{
      height: 17%;
      width: 100%;
      background-color: white;
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

.tickets-left{
  min-width: 100px;
  display: inline-block;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate3d(0,0,0);
  z-index: 9999;
  cursor: pointer;
  @media (max-width: $break-mobile) {
    transform: translate3d(-50%,-50%,0);
    top: 50%;
  }
  .ticket-image{
    background-image: url('#{$staticpath}static/unleash/images/ticket.png');
    background-repeat: no-repeat;
    background-size: contain;
    width: 100px;
    height: 30px;
    display: inline-block;
  }
  .share-link{
    display: inline-block;
    height: 30px;
    width: 30px;
    float: right;
    position: relative;
    span{
      position: absolute;
      display: inline-block;
      font-size: 20px;
      line-height: 1;
      top: 50%;
      left: 50%;
      transform: translate3d(-50%,-50%,0);
      color: $magenta;
      transition: .25s;
    }
    &:hover{
      span{
        transform: translate3d(-50%,-50%,0) scale(1.1);
      }
    }
  }
  .tickets-amount{
    display: none;
    font-family: 'overpassregular';
    color: $magenta;
    @media (max-width: $break-mobile) {
      position: absolute;
      top:50%;
      transform: translate3d(-125%,-50%,0)
    }
  }
}
</style>
