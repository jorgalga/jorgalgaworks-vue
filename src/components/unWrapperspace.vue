<template>
  <div class="component-wrapper unwrapperspace" v-bind:class="$props.configclass">
    <div class="white-band" v-bind:style="'height:'+160*scaleR+'px'"></div>
    <div class="component-container " v-bind:style="'max-width:'+(data.max_width - 30)*scaleR+'px'">
      <div class="unwrap-button" @click.prevent="toogle($event)" v-bind:style="'height:'+160*scaleR+'px'">
        <div class="text-button" v-html="data[$props.type].title" v-bind:style="'font-size:'+48*scaleR+'px'"></div>
      </div>
      <div class="unwrap-container opened">
        <div class="flex-grid" v-bind:style="'height:'+850*scaleR+'px;background-image: url('+data.img_src+data[$props.type].map+')'">
          <div class="col">
          </div>
          <div class="col" v-bind:style="'padding:'+15*scaleR+'px'">
            <div ref="myCarousel" class="main-carousel">
              <div v-for="item in data[$props.type].items" class="carousel-cell" :key="item.index">
                <div class="img-item" v-bind:style="'background-image: url('+data.img_src + item.img+')'"></div>
              </div>
            </div>
            <div class="prev-next-container" v-bind:style="'height:'+90*scaleR+'px'">
              <div @click.prevent="flkPrev()" class="prev button">
                <div class="element">←</div>
              </div>
              <div @click.prevent="flkNext()" class="next button">
                <div class="element">→</div>
              </div>
            </div>
            <div class="text-container" v-html="data[$props.type].text" v-bind:style="'margin-top:'+60*scaleR+'px;font-size:'+24*scaleR+'px'"></div>
          </div>
          <div class="col">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Flickity from 'flickity'
export default {
  name: 'unWrapperspace',
  props: ['type', 'configclass'],
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
      console.log()
      this.scaleR = Math.max(this.data.mobile_width / this.data.max_width, w / this.data.max_width)
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
        pageDots: true,
        prevNextButtons: false,
        freeScroll: true,
        wrapAround: true
      })
      // vanilla JS
      _.flkty.on('change', function (index) {
        _.itemActive = index
        // _.$forceUpdate()
      })
    },
    goToItem (index) {
      this.flkty.select(index)
    },
    flkPrev () {
      this.flkty.previous(true)
    },
    flkNext () {
      this.flkty.next(true)
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../scss/_vars.scss';
.component-wrapper.unwrapperspace{
  width: 100%;
  background-color: white;
  .white-band{
    background-color: white;
    position: absolute;
    width: 100%;
  }
  .component-container{
    position: relative;
    max-width: $pagewidth;
    margin: 0 auto;
    background-color: white;
    box-sizing: border-box;
  }
  &.darked{
    background-color: black;
    .component-container{
      background-color: black;
    }
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
.unwrapperspace {
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
    border: 1px solid  darkgrey;
    box-sizing: border-box;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  .col{
    flex-grow: 1;
    flex-basis: 0;
    margin: 0;
  }
  .col:nth-child(1){
  }
  .col:nth-child(2){
    flex-grow: 3;
    // margin: 15px;
    background-color: white;
  }
  .col:nth-child(3){
  }
  .prev-next-container{
    position: relative;
    .button{
      border: 1px solid darkgrey;
      height: 100%;
      width: 50%;
      box-sizing: border-box;
      display: inline-block;
      position: absolute;
      transition: 0.25s;
      cursor: pointer;
      &:hover{
        background-color: $magenta;
        color: white;
      }
      .element{
        position: absolute;
        font-size: 20px;
        height: 20px;
        width:20px;
        top: 50%;
        left: 50%;
        transform: translate3d(-50%,-50%,0) scaleY(2)
      }
      &.prev{
        left: 0;
      }
      &.next{
        left: 50%;
      }
    }
  }
  .text-container{
    font-family: 'overpassregular';
    color: black;
    line-height: 1.3;
    text-align: center;
  }
  @media (max-width: $break-mobile) {
    .flex-grid{
      display: block;
    }
  }
  .main-carousel{
    height: 60%;
  }
  .carousel-cell{
    width: 100%;
    height: 100%;
  }
  .img-item{
    position: absolute;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
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
