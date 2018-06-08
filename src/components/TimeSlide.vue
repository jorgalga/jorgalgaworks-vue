<template>
  <div class="hello">
    <div id="splash-screen" >
      <a v-on:click.prevent="hideSplash()" href class="btn">GO</a>
    </div>
    <div class="draggable-container">
      <div id="drag-1" class="draggable">
        <p class="bg-clip"> You can drag one element </p>
        <div v-html="currentText" class="text-container">
        </div>
      </div>
    </div>
    <div id="time-selector" class="slidecontainer">
      <div id="current-time" class="hour-container" v-bind:style="{ 'left': progress + '%' }">
        <p><span class="hour">{{ t_hour }}</span> : <span class="minutes"> {{ t_min }} </span> : <span class="seconds"> {{ t_sec }} </span></p>
      </div>
      <input type="range" min="0" v-bind:max="maxTime" v-bind:value="time" class="slider" id="myRange">
    </div>
    <div class="background-container">
      <div v-bind:id="'bg-block'+item.id"  v-for="item in images.slice().reverse()" class="background-block"  :key="item.id">
        <div class="loader"></div>
        <div class="background-full"></div>
        <div class="background-blur" v-bind:style="{ 'background-image': 'url(' + item.pathBlurred + ')' }"></div>
      </div>
    </div>
  </div>
</template>
<script>
import interact from 'interactjs'
import {BgBlock} from '../lib/BgBlock'
export default {
  name: 'TimeSlide',
  data () {
    return {
      time: 0,
      maxTime: 86400,
      progress: this.time / this.maxTime * 100,
      dragging: false,
      t_hour: 0,
      t_min: 0,
      t_sec: 0,
      bgBlocks: [],
      currentText: '<p>empty</p>',
      imagesLoaded: false,
      images: [
        {
          id: 1,
          initTime: 3600 * 0,
          endTime: 3600 * 1,
          pathBlurred: '/static/timeSlide/img01_blur.jpg',
          path: '/static/timeSlide/img01.jpg',
          text: '<p>Al contrario del pensamiento popular, el texto de Lorem Ipsum no es simplemente texto aleatorio. Tiene sus raices en una pieza cl´sica de la literatura del Latin, que data del año 45 antes de Cristo, haciendo que este adquiera mas de 2000 años de antiguedad. Richard McClintock, un profesor de Latin de la Universidad de Hampden-Sydney en Virginia, encontró una de las palabras más oscuras de la lengua del latín, "consecteur", en un pasaje de Lorem Ipsum, y al seguir leyendo distintos textos del latín, descubrió la fuente indudable. Lorem Ipsum viene de las secciones 1.10.32 y 1.10.33 de "de Finnibus Bonorum et Malorum" (Los Extremos del Bien y El Mal) por Cicero, escrito en el año 45 antes de Cristo. Este libro es un tratado de teoría de éticas, muy popular durante el Renacimiento. La primera linea del Lorem Ipsum, "Lorem ipsum dolor sit amet..", viene de una linea en la sección 1.10.32</p>'
        },
        {
          id: 2,
          initTime: 3600 * 1,
          endTime: 3600 * 2,
          pathBlurred: '/static/timeSlide/img02_blur.jpg',
          path: '/static/timeSlide/img02.jpg',
          text: '<p>Photo 2</p>'
        },
        {
          id: 3,
          initTime: 3600 * 2,
          endTime: 3600 * 3,
          pathBlurred: '/static/timeSlide/img03_blur.jpg',
          path: '/static/timeSlide/img03.jpg',
          text: '<p>Photo 3</p>'
        },
        {
          id: 4,
          initTime: 3600 * 3,
          endTime: 3600 * 4,
          pathBlurred: '/static/timeSlide/img04_blur.jpg',
          path: '/static/timeSlide/img04.jpg',
          text: '<p>Photo 4</p>'
        },
        {
          id: 5,
          initTime: 3600 * 4,
          endTime: 3600 * 5,
          pathBlurred: '/static/timeSlide/img05_blur.jpg',
          path: '/static/timeSlide/img05.jpg',
          text: '<p>Photo 5</p>'
        },
        {
          id: 6,
          initTime: 3600 * 5,
          endTime: 3600 * 23,
          pathBlurred: '/static/timeSlide/img06_blur.jpg',
          path: '/static/timeSlide/img06.jpg',
          text: '<p>Photo 6</p>'
        },
        {
          id: 7,
          initTime: 3600 * 23,
          endTime: 3600 * 24,
          pathBlurred: '/static/timeSlide/img01_blur.jpg',
          path: '/static/timeSlide/img01.jpg',
          text: '<p>Photo 7</p>'
        }
      ]
    }
  },
  beforeMount () {
    // console.log('befout mounting init the bgBlocks objects')
    var d = new Date()
    this.time = d.getHours() * 60 * 60 + d.getMinutes() * 60 + d.getSeconds()
    for (var i = 0; i < this.images.length; i++) {
      this.bgBlocks.push(new BgBlock(i, this.images[i]))
    }
  },
  mounted () {
    this.initTimeRange()
    this.initDraggable()
  },
  methods: {
    hideSplash () {
      document.getElementById('splash-screen').classList.add('hidden')
    },
    initTimeRange () {
      var _ = this
      var slider = document.getElementById('myRange')
      slider.oninput = function () {
        // console.log(this.value/1000)
        console.log()
        _.time = this.value
        _.progress = _.time / _.maxTime * 100
        _.updateBgBlocks(_.time)
        _.updateHour()
      }
      slider.onmousedown = function () {
        _.dragging = true
      }
      slider.onmouseup = function () {
        _.dragging = false
      }
      setInterval(function () {
        if (_.time < _.maxTime && !_.dragging) {
          _.time++
          _.progress = _.time / _.maxTime * 100
          _.updateBgBlocks(_.time)
          _.updateHour()
        }
        if (_.time >= _.maxTime) {
          _.time = 0
        }
      }, 1000)
    },
    initDraggable () {
      // target elements with the "draggable" class
      interact('.draggable')
        .draggable({
          // enable inertial throwing
          inertia: true,
          // keep the element within the area of it's parent
          restrict: {
            restriction: 'parent',
            endOnly: true,
            elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
          },
          // enable autoScroll
          autoScroll: true,
          // call this function on every dragmove event
          onmove: dragMoveListener,
          // call this function on every dragend event
          onend: function (event) {
            var textEl = event.target.querySelector('p')
            textEl && (textEl.textContent =
              'moved a distance of ' +
              (Math.sqrt(Math.pow(event.pageX - event.x0, 2) +
              Math.pow(event.pageY - event.y0, 2) | 0))
                .toFixed(2) + 'px')
          }
        })
      function dragMoveListener (event) {
        var target = event.target
        // keep the dragged position in the data-x/data-y attributes
        var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
        var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy
        // translate the element
        target.style.webkitTransform =
        target.style.transform =
          'translate(' + x + 'px, ' + y + 'px)'
        // update the posiion attributes
        target.setAttribute('data-x', x)
        target.setAttribute('data-y', y)
      }
      // this is used later in the resizing and gesture demos
      window.dragMoveListener = dragMoveListener
    },
    updateBgBlocks (time) {
      for (var i = 0; i < this.bgBlocks.length; i++) {
        this.bgBlocks[i].update(time, this)
      }
    },
    updateHour () {
      this.t_hour = Math.trunc(this.time / (60 * 60))
      this.t_min = Math.trunc((this.time - (this.t_hour * 60 * 60)) / 60)
      this.t_sec = this.time - (this.t_hour * 60 * 60) - this.t_min * 60
    },
    sortBlocks (pivot) {
      console.log(this.time)
      var sorted = []
      var il = pivot - 1
      var ir = pivot + 1
      sorted.push(this.bgBlocks[pivot])
      while (il >= 0 || ir < this.bgBlocks.length) {
        if (ir < this.bgBlocks.length) {
          sorted.push(this.bgBlocks[ir])
          ir++
        }
        if (il >= 0) {
          sorted.push(this.bgBlocks[il])
          il--
        }
      }
      console.log(sorted)
      this.bgBlocks = sorted
    },
    loadFullsizeImages () {
      var _ = this
      let i = 0
      function loadImage () {
        let toload = new Image()
        toload.onload = function () {
          _.bgBlocks[i].imageData = toload
          _.bgBlocks[i].fadeFullSize()
          if (i === 0) {
            setTimeout(function () {
              _.hideSplash()
            }, 1000)
          }
          if (i !== _.images.length - 1) {
            i++
            loadImage()
          }
        }
        // console.log(_.images[i].path)
        toload.src = _.bgBlocks[i].data.path
      }
      loadImage()
    }
  }
}
</script>

<style scoped>
.hello{
  background-color: black;
  height: 100vh;
  width: 100vw;
}
.btn{
  background: black;
  color: white;
  text-decoration: none;
  padding: 20px;
  display: inline-block;
  font-weight: 800;
  border-radius: 4px;
  position: absolute;
  transform: translate3d(-50%,-50%,0);
  position: absolute;
  top: 50%;
  left: 50%;
}
#splash-screen{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1100;
  background-color: white;
  transition: 1s;
  will-change: transform;
  transform: translate3d(0,0,0)
}
#splash-screen.hidden{
  transform: translate3d(-100%,0,0)
}
.loader{
  position: absolute;
  width: 50px;
  height: 50px;
  z-index: 100;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%,-50%,0);
  background-image: url('/static/timeSlide/loading_spinner.gif');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.5;
  transition: 0.5s;
}
.loader.hidden {
  opacity: 0;
}
.draggable-container{
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 900;
}
#drag-1 {
  width: 30%;
  height: 30%;
  min-height: 6.5em;
  margin: 0;
  display: inline-block;
  background-color: #33ccaadd;
  color: white;
  border-radius: 0.75em;
  padding: 4%;
  overflow-y: scroll;
  -webkit-transform: translate(0px, 0px);
          transform: translate(0px, 0px);
}
.bg-clip {

}

#drag-me::before {
  content: "#" attr(id);
  font-weight: bold;
}

.background-container{
  width: 100%;
  height: 100%;
}
.background-block{
  height: 100%;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  opacity: 1;
  opacity: 0;
  transition: 1s;
  will-change: opacity;
}
.background-block.on-top {
  z-index: 100;
}
.background-block.faded-out {
  opacity: 0
}
.background-blur, .background-full{
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  will-change: transform;
  transform: translate3d(0,0,0);
  filter: blur(1px);
  position: absolute;
  top: 0;
  left: 0;
}
.background-blur{
  z-index: 10;
}
.background-full{
  z-index: 20;
  opacity: 0;
  will-change: opacity;
  transition: 2s;
}
.background-full.loaded{
  opacity: 1
}
#time-selector{
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translate3d(-50%,0,0);
  z-index: 1000;
}
.slidecontainer {
  width: 90%;
}
.hour-container{
  border-radius: 4px;
  background: white;
  position: absolute;
  transform: translate3d(-45%,-150%,0);
  left: 0;
  min-width: 125px
}
.hour-container p{
  margin: 10px 20px;
  color: grey;
}
.slider {
  -webkit-appearance: none;
  width: 100%;
  height: 10px;
  border-radius: 5px;
  background: #d3d3d3aa;
  outline: none;
  -webkit-transition: .2s;
  transition: opacity .2s;
}

.slider:hover {
  opacity: 1;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: white;
  cursor: pointer;
}

.slider::-moz-range-thumb {
  width: 25px;
  height: 25px;
  background: #4CAF50;
  cursor: pointer;
}
</style>
