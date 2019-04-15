<template>
  <div class="component-container">
    <div class="unwrap-button" @click.prevent="toogle($event)">
      <div class="text-button" v-html="$props.type"></div>
    </div>
    <div class="unwrap-container opened">
      <div class="flex-grid">
        <div class="col">
          <div id="names">
            <div v-for="(item, index) in data[$props.type]" @click.prevent="goToItem(index)" v-bind:class="{'name-item':true, 'active': index === itemActive }" :key="item.id">
              <div class="name-text" v-html="item.name"></div>
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
        <div class="col">col 3</div>
      </div>
    </div>
  </div>
</template>
<script>
import Flickity from 'flickity'
export default {
  name: 'unWrapper',
  props: ['type'],
  data () {
    return window.dataConfig
  },
  created () {
    this.opened = true
    this.itemActive = 0
    console.log(this.data[this.$props.type][0].name)
  },
  mounted () {
    this.splitInSpans()
    this.initCarousel()
  },
  methods: {
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
        pageDots: true
      })
      // vanilla JS
      _.flkty.on('change', function (index) {
        _.itemActive = index
        _.$forceUpdate()
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
.component-container{
  position: relative;
  padding: 0 15px;
  background-color: blue
}
.unwrap-button{
  height: 180px;
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
    font-size: 90px;
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
    max-height: 700px;
    transition: max-height 0.5s ease-in;
  }
}
.flex-grid{
  display: flex;
}
.col{
  flex: 1;
}
#names{
  height: 700px;
}
@media (max-width: 800px) {
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
  height: 80px;
  box-sizing: border-box;
  position: relative;
  cursor: pointer;
  &.active{
    background-color: $magenta;
    .name-text{
      font-weight: 600
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
  }
}
.img-item{
  position: absolute;
  width: 100%;
  height: 100%;
  background-size: cover;
  display: inline-block;
}
</style>
