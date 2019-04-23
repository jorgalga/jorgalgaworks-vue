<template>
  <div class="component-wrapper unwrappersimple" v-bind:class="$props.flipped">
    <div class="white-band" v-bind:style="'height:'+160*scaleR+'px'"></div>
    <div class="component-container " v-bind:style="'max-width:'+(data.max_width - 30)*scaleR+'px'">
      <div class="unwrap-button" @click.prevent="toogle($event)" v-bind:style="'height:'+160*scaleR+'px'">
        <div class="text-button" v-html="$props.type" v-bind:style="'font-size:'+48*scaleR+'px'"></div>
      </div>
      <div class="unwrap-container opened">
        <div class="flex-grid">
          <!--div class="col">
            <div id="names" v-bind:style="'height:'+900*scaleR+'px'">
              <div v-for="(item, index) in data[$props.type]" @click.prevent="goToItem(index)" v-bind:class="{'name-item':true, 'active': index === itemActive }" v-bind:style="'height:'+80*scaleR+'px'" :key="item.id">
                <div class="name-text" v-html="item.name" v-bind:style="'font-size:'+36*scaleR+'px'"></div>
              </div>
            </div>
          </div-->
          <div class="col">
            <div ref="myCarousel" class="main-carousel">
              <div v-for="item in data[$props.type]" class="carousel-cell" :key="item.index">
                <div class="img-item" v-bind:style="'background-image: url('+data.img_src + item.img+')'"></div>
              </div>
            </div>
          </div>
          <div class="col">
            <transition name="router-anim" mode="out-in">
                <div class="info-item-container" v-bind:style="'height:'+850*scaleR+'px;padding:'+15*scaleR+'px'" :key="data[$props.type][itemActive].id">
                  <div class="social-container" v-bind:style="'padding:'+15*scaleR+'px'">
                    <div v-for="item in data[$props.type][itemActive].social" class="social-link" v-bind:style="'width:'+50*scaleR+'px;height:'+50*scaleR+'px;margin-right:'+15*scaleR+'px;border:'+3*scaleR+'px solid white'" :key="item.id">
                    </div>
                  </div>
                  <div class="name-container" v-html="data[$props.type][itemActive].name" v-bind:style="'font-size:'+60*scaleR+'px;padding:'+15*scaleR+'px'"></div>
                  <div class="description-container" v-html="data[$props.type][itemActive].description" v-bind:style="'font-size:'+24*scaleR+'px;padding:'+15*scaleR+'px'"></div>
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
  name: 'unWrappersimple',
  props: ['type', 'flipped'],
  data () {
    return {
      scaleR: 1,
      itemActive: 0
    }
  },
  created () {
    let _ = this
    _.data = window.dataConfig.data
    _.opened = true
    _.resizeHandler()
    window.addEventListener('resize', function () {
      _.resizeHandler()
    })
  },
  mounted () {
    this.splitInSpans()
    this.initCarousel()
  },
  methods: {
    resizeHandler () {
      var w = Math.min(window.innerWidth, this.data.max_width)
      this.scaleR = Math.max(0.5, w / this.data.max_width)
    },
    splitInSpans () {
      console.log(this.$props.type)
    },
    freezeInteraction (el, time) {
      el.classList.add('freeze')
      setTimeout(function () {
        el.classList.remove('freeze')
      }, time)
    },
    toogle ($event) {
      var el = $event.target
      if (this.opened) {
        this.opened = false
        el.nextElementSibling.classList.remove('opened')
        this.freezeInteraction(el, 500)
      } else {
        this.opened = true
        el.nextElementSibling.classList.add('opened')
        this.freezeInteraction(el, 500)
      }
    },
    initCarousel () {
      let _ = this
      _.flkty = new Flickity(_.$refs.myCarousel, {
        // options
        cellAlign: 'left',
        contain: true,
        pageDots: false,
        prevNextButtons: false
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
.component-wrapper.unwrappersimple{
  width: 100%;
  background-color: black;
  position: relative;
  .white-band{
    background-color: white;
    position: absolute;
    width: 100%;
  }
  .component-container{
    position: relative;
    /*max-width: $pagewidth;*/
    margin: 0 auto;
    background-color: black;
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
.unwrappersimple {
  .unwrap-button{
    background-color: black;
    cursor: pointer;
    position: relative;
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
      pointer-events: none;
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
    border: none solid darkgrey;
    box-sizing: border-box;
  }
  .col{
    flex-grow: 0;
  }
  .col:nth-child(1){
    flex-basis: 66.6%;
  }
  .col:nth-child(2){
    flex-basis: 33.3%;
    background-color: $magenta
  }
  @media (max-width: $break-mobile) {
    .flex-grid{
      display: block;
    }
  }
  .main-carousel{
    height: 100%;
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
    background-position: center top;
    display: inline-block;
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
    .social-link{
      display: inline-block;
      box-sizing: border-box;
      border-radius: 50%;
    }
  }
  .name-container{
    line-height: 1.3;
    font-family: 'space_monoregular';
    text-transform: uppercase;
    font-weight: 600;
    color: white;
  }
  .description-container{
    font-family: 'overpassregular';
    color: black;
    line-height: 1.3;
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
