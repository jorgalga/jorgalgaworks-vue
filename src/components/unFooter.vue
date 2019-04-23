<template>
  <div class="component-wrapper unfooter">
    <div class="component-container">
      <div class="top-footer">
      </div>
      <footer v-bind:style="isMobile ? '' : 'height:'+200*scaleR+'px'">
        <div class="flex-grid" v-bind:style="isMobile ? '' : 'font-size:'+24*scaleR+'px;padding:'+15*scaleR+'px'">
          <div class="col">
            <div class='logo' v-bind:style="isMobile ? '' : 'width:'+150*scaleR+'px;height:'+50*scaleR+'px; margin-bottom:'+40*scaleR+'px'"></div>
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
          <div class="col">
            <div class="flex-grid bottom-links"  v-bind:style="isMobile ? '' : 'height:'+50*scaleR+'px; margin-bottom:'+40*scaleR+'px'">
                <div class="col">
                  <a href="" target="_blank">Corporate</a>
                </div>
                <div class="col">
                  <a href="" target="_blank">Contact</a>
                </div>
                 <div class="col">
                  <a href="" target="_blank">Legal advice</a>
                 </div>
             </div>
             <div class="flex-grid">
              <div class="col">
                www.wearetrivu.com
              </div>
             </div>
          </div>
          <div class="col">
            <div class="social-links">
              <div class='icon' v-bind:style="isMobile ? '' : 'width:'+75*scaleR+'px;height:'+75*scaleR+'px; margin-bottom:'+40*scaleR+'px'"></div>
              <div class='icon' v-bind:style="isMobile ? '' : 'width:'+75*scaleR+'px;height:'+75*scaleR+'px; margin-bottom:'+40*scaleR+'px'"></div>
              <div class='icon' v-bind:style="isMobile ? '' : 'width:'+75*scaleR+'px;height:'+75*scaleR+'px; margin-bottom:'+40*scaleR+'px'"></div>
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
  },
  methods: {
    resizeHandler () {
      var w = Math.min(window.innerWidth, this.data.max_width)
      this.scaleR = Math.max(this.data.mobile_width / this.data.max_width, w / this.data.max_width)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../scss/_vars.scss';
.component-wrapper.unfooter{
  width: 100%;
  position: relative;
  background-color: black;
  display: inline-block;
  .component-container{
    position: relative;
    max-width: 100%;
    margin: 0 auto;
    box-sizing: border-box;
    padding-top: 60px;
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
        transform: translate3d(-50%,-50%,0)
      }
    }
  }
  .col{
    flex-grow: 1;
    flex-basis: 0;
    position: relative;
    text-align: center;
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
    }
    .social-links{
      text-align: right;
      .icon{
        border: 2px solid white;
        margin-left: 15px;
        display: inline-block;
        box-sizing: border-box;
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
      }
    }
    footer{
      .col.empty{
        display: none;
      }
      .social-links{
        text-align: center;
        .icon{
          height: 15px;
          width: 15px;
        }
      }
    }
  }
}
</style>
