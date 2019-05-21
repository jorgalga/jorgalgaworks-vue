<template>
  <div class="component-wrapper unwrapper" v-bind:class="$props.flipped">
    <div class="component-container " v-bind:style="'padding: 0 '+15*scaleR+'px'">
      <div class="unwrap-button" @click.prevent="toogle($event)" v-bind:style="'height:'+160*scaleR+'px'">
        <div ref="txtbtn" class="text-button" v-html="$props.type" v-bind:style="'letter-spacing:'+20*scaleR+'px;font-size:'+48*scaleR+'px'"></div>
      </div>
      <div ref="wcontainer" class="unwrap-container">
        <div class="flex-grid">
          <div class="col names">
            <div id="names" v-bind:style="'height:'+850*scaleR+'px'">
              <div v-for="(item, index) in data[$props.type]" @click.prevent="goToItem(index)" v-bind:class="{'name-item':true, 'active': index === itemActive }" v-bind:style="'height:'+80*scaleR+'px'" :key="item.id">
                <div class="name-text" v-html="item.name" v-bind:style="'font-size:'+36*scaleR+'px'"></div>
              </div>
            </div>
          </div>
          <div class="col">
            <div ref="myCarousel" class="main-carousel">
              <div v-for="item in data[$props.type]" class="carousel-cell" :key="item.index">
                <div class="img-item" v-bind:style="'background-image: url('+data.img_src + item.img+')'"></div>
              </div>
            </div>
          </div>
          <div class="col info">
            <transition name="router-anim" mode="out-in">
                <div class="info-item-container" v-bind:style="isMobile ? 'padding:15px' :'padding:'+15*scaleR+'px'" :key="data[$props.type][itemActive].id">
                  <div class="social-container" v-bind:style="'padding:'+15*scaleR+'px'">
                    <div v-for="item in data[$props.type][itemActive].social" class="social-link" v-bind:style="'width:'+60*scaleR+'px;height:'+60*scaleR+'px;margin-right:'+15*scaleR+'px;border:'+3*scaleR+'px solid white'" :key="item.id">
                      <a v-bind:href="item.url" target="_blank"><span v-bind:class="item.class"></span></a>
                    </div>
                  </div>
                  <div class="name-container" v-html="data[$props.type][itemActive].name" v-bind:style="'font-size:'+60*scaleR+'px;padding:'+15*scaleR+'px'"></div>
                  <div class="description-container" v-html="isMobile ? data[$props.type][itemActive].description_short : data[$props.type][itemActive].description" v-bind:style="isMobile ? 'font-size:'+32*scaleR+'px;' : 'font-size:'+24*scaleR+'px;padding:'+15*scaleR+'px'"></div>
                </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Flickity from 'flickity'
export default {
  name: 'unWrapper',
  props: ['type', 'flipped', 'classopened'],
  data () {
    return {
      scaleR: 1,
      isMobile: window.innerWidth < window.dataConfig.data.mobile_width,
      itemActive: 0,
      opened: false
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
    if (this.$props.classopened) {
      this.$refs.wcontainer.classList.add('opened')
      this.opened = true
    }
    this.splitInSpans()
    this.initCarousel()
    this.$forceUpdate()
  },
  methods: {
    resizeHandler () {
      var w = Math.min(window.innerWidth, this.data.max_width)
      this.scaleR = Math.max(this.data.mobile_width / this.data.max_width, w / this.data.max_width)
      this.scaleR = Math.min(this.scaleR, (this.data.max_width_limit / this.data.max_width))
    },
    splitInSpans () {
      // console.log(this.$refs.txtbtn.innerHTML)
      var txt = this.$refs.txtbtn.innerHTML
      var res = ''
      for (var i = 0; i < txt.length; i++) {
        res += '<span class="ll-container"><span class="letter">' + txt[i] + '</span><span class="line"></span></span>'
      }
      this.$refs.txtbtn.innerHTML = res
    },
    freezeInteraction (el, time) {
      el.classList.add('freeze')
      setTimeout(function () {
        el.classList.remove('freeze')
      }, time)
    },
    toogle ($event) {
      // console.log('click')
      var el = $event.target
      if (this.opened) {
        this.opened = false
        this.$refs.wcontainer.classList.remove('opened')
        this.freezeInteraction(el, 500)
      } else {
        this.opened = true
        this.$refs.wcontainer.classList.add('opened')
        this.freezeInteraction(el, 500)
      }
    },
    initCarousel () {
      let _ = this
      _.flkty = new Flickity(_.$refs.myCarousel, {
        // options
        cellAlign: 'left',
        contain: true,
        pageDots: true
      })
      // vanilla JS
      _.flkty.on('change', function (index) {
        _.itemActive = index
        // _.$forceUpdate()
      })
    },
    goToItem (index) {
      this.flkty.select(index)
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../scss/_vars.scss';
.component-wrapper.unwrapper{
  width: 100%;
  background-color: darkgrey;
  background-color: white;
  .component-container{
    position: relative;
    max-width: $pagewidth;
    margin: 0 auto;
    background-color: white;
    box-sizing: border-box;
  }
  &.inverse{
    .col:nth-child(1){
      order:3;
    }
    .col:nth-child(2){
      order:2;
    }
    .col:nth-child(3){
      order:1;
    }
  }
}
.unwrapper {
  .unwrap-button{
    background-color: black;
    cursor: pointer;
    position: relative;
    transition: 0;
    &.freeze{
      pointer-events: none;
    }
    .text-button{
      position: absolute;
      top:50%;
      left: 50%;
      transform: translate3d(-50%,-50%,0);
      color: white;
      font-family: 'space_monoregular';
      line-height: 1;
      font-weight: 100;
      text-transform: uppercase;
      @media (max-width: $break-mobile) {
        text-align: center;
        width: 100%;
      }
      /deep/ .ll-container{
        position: relative;
        display: inline-block;
        .letter{
          text-align: center;
          position: relative;
          transition: 0.3s;
          display: inline-block;
        }
        .line{
          position: absolute;
          height: 2px;
          width: 60%;
          display: inline-block;
          background-color: black;
          background-color: #FF00FF;
          bottom: 0;
          left: 0;
          transform-origin: center left;
          transform: scaleX(0);
          transition: 0.15s;
        }
        &:hover{
          @media (min-width: $break-mobile) {
            .letter{
              transform: translate3d(0,-25%,0)
            }
            .line{
              transform: scaleX(1);
            }
          }
        }
      }
    }
    &:hover{
      @media (min-width: $break-mobile) {
        background-color: white;
        .text-button{
          color: black;
        }
      }
    }
  }
  .unwrap-container{
    background-color: white;
    overflow: hidden;
    max-height: 0;
    transition: max-height 0.5s ease-out;
    &.opened{
      max-height: 850px;
      transition: max-height 0.5s ease-in;
    }
  }
  .flex-grid{
    display: flex;
    border: 1px solid  darkgrey;
    box-sizing: border-box;
  }
  .col{
    flex-grow: 1;
    flex-basis: 0;
  }
  .col:nth-child(1){
    @media (max-width: $break-mobile) {
      display: none;
    }
  }
  .col:nth-child(2){
    @media (max-width: $break-mobile) {
    }
  }
  .col:nth-child(3){
    background-color: $magenta
  }
  @media (max-width: $break-mobile) {
    .flex-grid{
      display: block;
    }
  }
  .main-carousel{
    height: 100%;
    @media (max-width: $break-mobile) {
      height: 60vh;
    }
  }
  .carousel-cell{
    width: 100%;
    height: 100%;
  }
  .name-item{
    width: 100%;
    box-sizing: border-box;
    position: relative;
    cursor: pointer;
    &.active{
      background-color: $magenta;
      .name-text{
        font-weight: 600;
      }
    }
    .name-text{
      color: black;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate3d(-50%,-50%,0);
      text-transform: uppercase;
      font-family: 'space_monoregular';
      pointer-events: none;
      width: 90%;
      text-align: center;
      font-weight: 100;
    }
  }
  .img-item{
    position: absolute;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    display: inline-block;
    // min-height: 70vh;
  }
  .router-anim-enter-active{
    animation: coming 0.5s;
    opacity: 0;
  }
  .router-anim-leave-active{
    animation: going 0.5s;
  }
  .info-item-container{
    width: 100%;
    box-sizing: border-box;
  }
  .social-container{
     @media (max-width: $break-mobile) {
       text-align: center;
     }
    .social-link{
      display: inline-block;
      box-sizing: border-box;
      border-radius: 50%;
      position: relative;
      span{
        display: inline-block;
        font-size: 12px;
        color: white;
        line-height: 1;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate3d(-50%,-50%,0)
      }
    }
  }
  .name-container{
    line-height: 1.3;
    font-family: 'space_monoregular';
    text-transform: uppercase;
    font-weight: 600;
    color: white;
    @media (max-width: $break-mobile) {
      text-align: center;
    }
  }
  .description-container{
    font-family: 'overpassregular';
    color: black;
    line-height: 1.3;
    @media (max-width: $break-mobile) {
      // display: none;
    }
  }
}

@keyframes  coming {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes  going {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>
