<template>
  <div class="component-wrapper unfooter">
    <div class="component-container">
      <div class="ribbon"></div>
      <div class="top-footer">
      </div>
      <footer v-bind:style="isMobile ? '' : 'height:'+200*scaleR+'px'">
        <div class="flex-grid" v-bind:style="isMobile ? '' : 'font-size:'+24*scaleR+'px;padding:'+15*scaleR+'px'">
          <div class="col">
            <div class='seal' v-bind:style="isMobile ? 'width:100px; height:50px;' : 'width:'+100*scaleR+'px;height:'+100*scaleR+'px; margin-bottom:'+40*scaleR+'px'"></div>
            <div class='logo' v-bind:style="isMobile ? 'width:100px; height:50px;' : 'width:'+150*scaleR+'px;height:'+50*scaleR+'px; margin-bottom:'+40*scaleR+'px'"></div>
            <div class="flex-grid">
              <div class="col">
                Unleash 2019
              </div>
              <div class="col">
                Trivu
              </div>
              <div class="col empty"></div>
            </div>
          </div>
          <div class="col main-col">
            <div class="flex-grid bottom-links"  v-bind:style="isMobile ? '' : 'height:'+50*scaleR+'px; margin-bottom:'+40*scaleR+'px'">
                <div class="col ta-center">
                  <a @click.prevent="openPopup($event)" target="_blank">Contact</a>
                </div>
                 <div class="col ta-center">
                  <a v-bind:href="data.privacypolicy" target="_blank">Privacy Policy</a>
                 </div>
                <div class="col ta-center">
                    <a v-bind:href="data.cookiespolicy" target="_blank">Cookies policy</a>
                 </div>
                  <div class="col ta-center">
                    <a v-bind:href="data.termsandconditions" target="_blank">Terms and Conditions</a>
                 </div>
             </div>
             <div class="flex-grid">
              <div class="col ta-center">
                <a class="black" href="https://www.wearetrivu.com">www.wearetrivu.com</a>
              </div>
             </div>
          </div>
          <div class="col">
            <div class="social-links">
              <div class='sicon' v-bind:style="isMobile ? 'width:45px;height:45px;' : 'width:'+75*scaleR+'px;height:'+75*scaleR+'px; margin-left:'+15*scaleR+'px'">
                <a id="footer-tw" href="https://twitter.com/wearetrivu?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank"><span v-bind:style="isMobile ? '' : 'font-size:'+32*scaleR+'px;'" class="icon-twitter"></span></a>
              </div>
              <div class='sicon' v-bind:style="isMobile ? 'width:45px;height:45px' : 'width:'+75*scaleR+'px;height:'+75*scaleR+'px; margin-left:'+15*scaleR+'px'">
                <a id="footer-ig" href="https://www.instagram.com/wearetrivu/?hl=es" target="_blank"><span v-bind:style="isMobile ? '' : 'font-size:'+32*scaleR+'px;'" class="icon-instagram"></span></a>
              </div>
              <div class='sicon' v-bind:style="isMobile ? 'width:45px;height:45px' : 'width:'+75*scaleR+'px;height:'+75*scaleR+'px; margin-left:'+15*scaleR+'px'">
                <a id="footer-in" href="https://www.linkedin.com/company/wearetrivu/" target="_blank"><span v-bind:style="isMobile ? '' : 'font-size:'+32*scaleR+'px;'" class="icon-linkedin2"></span></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'unFooter',
  props: ['test'],
  data () {
    return {
      scaleR: 1,
      isMobile: window.innerWidth < window.dataConfig.data.mobile_width
    }
  },
  created () {
    let _ = this
    _.data = window.dataConfig.data
    _.resizeHandler()
    window.addEventListener('resize', function () {
      _.isMobile = window.innerWidth < window.dataConfig.data.mobile_width
      _.resizeHandler()
    })
  },
  mounted () {
    document.addEventListener('openPopupContact', function (e) {
      // _.$refs.formpopup.classList.remove('hidden')
      document.getElementById('formpopup').classList.remove('hidden')
      document.getElementsByClassName('page')[0].style.overflowY = 'hidden'
      setTimeout(function () {
        window.formPopOpen = true
      }, 1000)
    }, false)
    document.getElementById('formclose').addEventListener('click', function () {
      document.getElementById('formpopup').classList.add('hidden')
      document.getElementsByClassName('page')[0].style.overflowY = ''
      delete window.formPopOpen
    })
  },
  methods: {
    resizeHandler () {
      var w = Math.min(window.innerWidth, this.data.max_width)
      this.scaleR = Math.max(this.data.mobile_width / this.data.max_width, w / this.data.max_width)
      this.scaleR = Math.min(this.scaleR, (this.data.max_width_limit / this.data.max_width))
    },
    openPopup () {
      var customevent = new Event('openPopupContact')
      document.dispatchEvent(customevent)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../scss/_vars.scss';
@import '../scss/_fonts.scss';
.component-wrapper.unfooter{
  width: 100%;
  position: relative;
  background-color: black;
  display: inline-block;
  .ribbon{
    position: absolute;
    width: 25vh;
    height: 25vh;
    max-width: 150px;
    max-height: 150px;
    opacity: 0.95;
    mix-blend-mode: normal;
    right: 0;
    bottom: 0;
    z-index: 999;
    background-image: url('#{$staticpath}static/unleash/images/ribbon.png');
    background-repeat: no-repeat;
    background-size: contain;
    @media (max-width: $break-mobile) {
      width: 18vh;
      height: 18vh;
    }
  }
  .component-container{
    position: relative;
    max-width: 100%;
    margin: 0 auto;
    box-sizing: border-box;
    padding-top: 60px;
    @media (max-width: $break-mobile) {
      padding-top: 30px;
    }
  }
  a{
    text-decoration: none;
    color: white;
    &.black{
      color: black;
    }
    &:hover{
      text-decoration: underline;
    }
  }
  .flex-grid{
    display: flex;
    box-sizing: border-box;
    max-width: $pagewidth;
    margin: 0 auto;
    &.bottom-links{
      a{
        color: white;
        text-decoration: none;
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100%;
        transform: translate3d(-50%,-50%,0);
      }
    }
  }
  .col{
    flex-grow: 1;
    flex-basis: 0;
    position: relative;
    text-align: left;
    &.ta-center{
      text-align:center;
      a{
        cursor: pointer;
      }
    }
    &.main-col{
      min-width: 60%;
      .flex-grid{
        display: inline-block;
        box-sizing: border-box;
        text-align: center;
        width: 100%;
        .col{
          display: inline-block;
          box-sizing: border-box;
          a{
            position: initial;
            display: inline-block;
            transform: unset;
            padding: 10px;
            box-sizing: border-box;
          }
        }
      }
    }
    @media (max-width: $break-mobile) {
       text-align:center;
    }
  }
  .top-footer{
    background-image: url('#{$staticpath}static/unleash/SprayPaint2.png');
    background-size: 100% 100%;
    width: 100%;
    min-height: 80px;
    transform: translate3d(0,2px,0)
  }
  footer{
    width: 100%;
    background-color: $magenta;
    font-family: 'overpassregular';
    font-weight: 100;
    .logo{
      background-image: url('#{$staticpath}static/unleash/logo-unleash-blanco.png');
      background-repeat: no-repeat;
      background-size: contain;
      display: inline-block;
      @media (max-width: $break-mobile) {
        background-position: center;
        display: inline-block;
      }
    }
    .seal{
      background-image: url('#{$staticpath}static/unleash/images/sello_evento_recomendado.png');
      background-repeat: no-repeat;
      background-size: contain;
      display: inline-block;
      position: absolute;
      transform: translate3d(-100%,-25%,0);
      @media (max-width: $break-mobile) {
        background-position: center;
        display: inline-block;
        transform: translate3d(-80%,12.5%,0);
      }
    }
    .social-links{
      text-align: right;
      .sicon{
        border: 2px solid white;
        margin-left: 15px;
        display: inline-block;
        box-sizing: border-box;
        position: relative;
        a{
          position: absolute;
          width: 100%;
          height: 100%;
          display: inline-block;
          left: 0;
          top:0;
          text-align: center;
          &:hover{
            background-color: white;
            span{
              color:$magenta;
            }
          }
          span{
            pointer-events: none;
            color: white;
            line-height: 1;
            display: inline-block;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate3d(-50%,-50%,0)
          }
        }
      }
    }
  }
  @media (max-width: $break-mobile) {
    .flex-grid{
      display: inline-block;
      width: 100%;
      .col{
        width: 100%;
        min-height: 24px;
        display: inline-block;
        .logo{
          padding-bottom: 15px;
        }
      }
    }
    footer{
      .col.empty{
        display: none;
      }
      .social-links{
        text-align: center;
        padding: 15px 0 30px 0;
      }
    }
  }
}
</style>
