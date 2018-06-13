<template>
  <div class="hello">
    <div id="splash-screen" >
      <a v-on:click.prevent="hideSplash()" href class="btn"><img src="/static/timeSlide/cla-loader.gif"></a>
    </div>
    <div id="home-container" class="home-container">
      <div class="full-logo"></div>
      <div class="init-content">
        <p><em>Un recorrido por el día a día de <b>Rodrigo</b> de la <b>Ganadería La Nava</b>. Uno de los integrantes de nuestra coperativa.</em></p>
        <p><em>Vente a <b>Asturias</b> y disfruta de <b>24 horas al natural</b></em></p>
        <div v-on:click.stop="expandHome()" id="more-info" class="cta-info"></div>
      </div>
      <div id="expanded-content" class="expanded-content">
        <p><em>Participa en</em></p>
        <p><img src="/static/timeSlide/insta.png"></p>
        <p><em>Con <b>tu momento más natural del día</b> y vente a disfrutar con nosotros</em></p>
        <p><img src="/static/timeSlide/hashtag.png"></p>
      </div>
    </div>
    <div id="draggable-container" class="draggable-container disabled">
      <div id="drag-1" class="draggable">
        <div class="full-logo"></div>
        <!--p class="bg-clip"><em>You can drag one element</em></p-->
        <div id="text-container">
          <div v-html="currentTitle" ></div>
          <div v-html="currentText" ></div>
        </div>
        <div id="cta-participa" class="cta-participa"></div>
        <div class="drag-info"></div>
      </div>
    </div>
    <div id="time-selector" class="slidecontainer">
      <div id="current-time" class="hour-container" v-bind:style="{ left: progress + '%' }">
        <div class="vertical-line"></div>
        <p><span class="hour">{{ t_hour }}</span> : <span class="minutes"><span class="nospacing" v-if="t_min < 10">0</span> {{ t_min }} </span> h<!--: <span class="seconds"> {{ t_sec }} </span>--></p>
      </div>
      <input type="range" min="0" v-bind:max="maxTime" v-bind:value="time" class="slider" id="myRange">
      <div v-on:click.prevent="prevHotspot()" id="time-prev" class="time-btn"><div class="prev-shape"></div></div>
      <div v-on:click.prevent="nextHotspot()" id="time-next" class="time-btn"><div class="next-shape"></div></div>
      <div class="bullets-container">
        <div v-for="item in images.slice().reverse()" class="bullet" v-bind:style="{left: 100 * item.initTime/maxTime + '%' }" :key="item.id" v-on:click.prevent="goToTime(item.initTime)">
        <div v-bind:id="'bullet-'+item.id" class="bullet-active"></div>
        </div>
      </div>
    </div>
    <div id="background-container" class="background-container">
      <div v-bind:id="'bg-block'+item.id" v-for="item in images.slice().reverse()" class="background-block" :key="item.id">
        <div class="loader"></div>
        <div class="background-full"></div>
        <div class="background-blur" v-bind:style="{ 'background-image': 'url(' + item.pathBlurred + ')' }"></div>
        <div class="bg-thumb"></div>
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
      currentTitle: '<h2>empty</h2>',
      currentText: '<p>empty</p>',
      currentBlock: 0,
      imagesLoaded: false,
      images: [
        {
          id: 1,
          initTime: 3600 * 0,
          endTime: 3600 * 1,
          pathBlurred: '/static/timeSlide/img01_blur.jpg',
          path: '/static/timeSlide/img01.jpg',
          title: '<h2>11:00H<br>VISITA DEL VETERINARIO</h2>',
          text: '<p><em>A las 11 Rodrigo comprueba con el veterinario el estado del nuevo miembro de la familia</em></p>'
        },
        {
          id: 2,
          initTime: 3600 * 1,
          endTime: 3600 * 2,
          pathBlurred: '/static/timeSlide/img02_blur.jpg',
          path: '/static/timeSlide/img02.jpg',
          title: '<h2>11:00H<brVISITA DEL VETERINARIO></h2>',
          text: '<p>Photo 2</p>'
        },
        {
          id: 3,
          initTime: 3600 * 2,
          endTime: 3600 * 3,
          pathBlurred: '/static/timeSlide/img03_blur.jpg',
          path: '/static/timeSlide/img03.jpg',
          title: '<h2>11:00H<brVISITA DEL VETERINARIO></h2>',
          text: '<p>Photo 3</p>'
        },
        {
          id: 4,
          initTime: 3600 * 3,
          endTime: 3600 * 4,
          pathBlurred: '/static/timeSlide/img04_blur.jpg',
          path: '/static/timeSlide/img04.jpg',
          title: '<h2>11:00H<brVISITA DEL VETERINARIO></h2>',
          text: '<p>Photo 4</p>'
        },
        {
          id: 5,
          initTime: 3600 * 4,
          endTime: 3600 * 5,
          pathBlurred: '/static/timeSlide/img05_blur.jpg',
          path: '/static/timeSlide/img05.jpg',
          title: '<h2>11:00H<brVISITA DEL VETERINARIO></h2>',
          text: '<p>Photo 5</p>'
        },
        {
          id: 6,
          initTime: 3600 * 5,
          endTime: 3600 * 6,
          pathBlurred: '/static/timeSlide/img06_blur.jpg',
          path: '/static/timeSlide/img06.jpg',
          title: '<h2>11:00H<brVISITA DEL VETERINARIO></h2>',
          text: '<p>Photo 6</p>'
        },
        {
          id: 7,
          initTime: 3600 * 6,
          endTime: 3600 * 23,
          pathBlurred: '/static/timeSlide/img07_blur.jpg',
          path: '/static/timeSlide/img07.jpg',
          title: '<h2>11:00H<br>VISITA DEL VETERINARIO</h2>',
          text: '<p><em>A las 11 Rodrigo comprueba con el veterinario el estado del nuevo miembro de la familia</em></p>'
        },
        {
          id: 8,
          initTime: 3600 * 23,
          endTime: 3600 * 24,
          pathBlurred: '/static/timeSlide/img01_blur.jpg',
          path: '/static/timeSlide/img01.jpg',
          title: '<h2>11:00H<brVISITA DEL VETERINARIO></h2>',
          text: '<p>Photo 8</p>'
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
    this.initHome()
    this.initTimeRange()
    this.initDraggable()
    this.initScrollDetector()
  },
  methods: {
    hideSplash () {
      document.getElementById('splash-screen').classList.add('hidden')
    },
    goToTime (t) {
      var _ = this
      var from = this.time
      var to = t + 3
      var duration = 1000
      var start = new Date().getTime()
      var timer = setInterval(function () {
        var time = new Date().getTime() - start
        var x = Math.trunc(easeInOutQuart(time, from, to - from, duration))
        _.time = x
        _.progress = _.time / _.maxTime * 100
        _.updateBgBlocks(_.time)
        _.updateHour()
        if (time >= duration) clearInterval(timer)
      }, 1000 / 60)
      function easeInOutQuart (t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b
        return -c / 2 * ((t -= 2) * t * t * t - 2) + b
      }
    },
    prevHotspot () {
      var _ = this
      var from = this.time
      var to
      if (this.currentBlock - 1 < 0) {
        to = 3
      } else {
        to = this.bgBlocks[this.currentBlock - 1].data.initTime + 3
      }
      var duration = 1000
      var start = new Date().getTime()
      var timer = setInterval(function () {
        var time = new Date().getTime() - start
        var x = Math.trunc(easeInOutQuart(time, from, to - from, duration))
        _.time = x
        _.progress = _.time / _.maxTime * 100
        _.updateBgBlocks(_.time)
        _.updateHour()
        if (time >= duration) clearInterval(timer)
      }, 1000 / 60)
      function easeInOutQuart (t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b
        return -c / 2 * ((t -= 2) * t * t * t - 2) + b
      }
    },
    nextHotspot () {
      // this.time = this.time + 3600
      var _ = this
      var from = this.time
      var to
      if (this.currentBlock + 1 >= this.bgBlocks.length) {
        to = 3
      } else {
        to = this.bgBlocks[this.currentBlock + 1].data.initTime + 3
      }
      var duration = 1000
      var start = new Date().getTime()
      var timer = setInterval(function () {
        var time = new Date().getTime() - start
        var x = Math.trunc(easeInOutQuart(time, from, to - from, duration))
        _.time = x
        _.progress = _.time / _.maxTime * 100
        _.updateBgBlocks(_.time)
        _.updateHour()
        if (time >= duration) clearInterval(timer)
      }, 1000 / 60)
      function easeInOutQuart (t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b
        return -c / 2 * ((t -= 2) * t * t * t - 2) + b
      }
    },
    initTimeRange () {
      var _ = this
      var slider = document.getElementById('myRange')
      slider.oninput = function () {
        // console.log(this.value/1000)
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
    expandHome () {
      document.getElementById('more-info').classList.add('hidden')
      setTimeout(function () {
        document.getElementById('more-info').style.display = 'none'
        document.getElementById('expanded-content').classList.add('displayed')
      }, 400)
      setTimeout(function () {
        document.getElementById('expanded-content').classList.remove('displayed')
        setTimeout(function () {
          document.getElementById('more-info').style.display = 'inline-block'
          requestAnimationFrame(function () {
            document.getElementById('more-info').classList.remove('hidden')
          })
        }, 400)
      }, 5000)
    },
    initHome () {
      var removed = false
      document.getElementById('home-container').addEventListener('click', function (e) {
        e.stopPropagation()
      })
      document.addEventListener('click', function (e) {
        if (!removed) {
          removed = true
          document.getElementById('home-container').classList.add('hidden')
          document.getElementById('draggable-container').classList.remove('disabled')
        }
      })
      setTimeout(function () {
        if (!removed) {
          removed = true
          document.getElementById('home-container').classList.add('hidden')
          document.getElementById('draggable-container').classList.remove('disabled')
        }
      }, 20000)
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
            /*
            var textEl = event.target.querySelector('p')
            textEl && (textEl.textContent =
              'moved a distance of ' +
              (Math.sqrt(Math.pow(event.pageX - event.x0, 2) +
              Math.pow(event.pageY - event.y0, 2) | 0))
                .toFixed(2) + 'px')
            */
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
    initScrollDetector () {
      var _ = this
      document.getElementById('app').addEventListener('mousewheel', function (event) {
        _.time = _.time + Math.trunc(event.deltaY)
        _.progress = _.time / _.maxTime * 100
        _.updateBgBlocks(_.time)
        _.updateHour()
      })
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
      this.bgBlocksSorted = []
      var il = pivot - 1
      var ir = pivot + 1
      this.bgBlocksSorted.push(this.bgBlocks[pivot])
      while (il >= 0 || ir < this.bgBlocks.length) {
        if (ir < this.bgBlocks.length) {
          this.bgBlocksSorted.push(this.bgBlocks[ir])
          ir++
        }
        if (il >= 0) {
          this.bgBlocksSorted.push(this.bgBlocks[il])
          il--
        }
      }
    },
    loadFullsizeImages () {
      var _ = this
      let i = 0
      function loadImage () {
        let toload = new Image()
        toload.onload = function () {
          _.bgBlocksSorted[i].imageData = toload
          _.bgBlocksSorted[i].fadeFullSize()
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
        toload.src = _.bgBlocksSorted[i].data.path
      }
      loadImage()
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700,700i,800,800i');
.hello{
  background-color: black;
  height: 100%;
  width: 100vw;
}
.btn{
  background: transparent;
  color: #2973fb;
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
  background-color: #2973fb;
  transition: 1s;
  transform: translate3d(0,0,0);
  opacity: 1;
}
#splash-screen.hidden{
  transform: translate3d(-100%,0,0);
  opacity: 0.25;
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
.home-container{
  position: absolute;
  z-index: 950;
  width: 340px;
  height: calc(100% - 140px);
  overflow-y: hidden;
  left: 50%;
  transform: translate3d(-50%,0,0);
  font-size: 24px;
  font-size: 2.3vmin;
  font-family: 'Open Sans', sans-serif;
  color: white;
  text-shadow: 0px 0px 10px grey;
  transition: 1s;
  opacity: 1;
}
.home-container.hidden {
  transform: translate3d(-50%,-50%,0);
  opacity: 0;
  pointer-events: none;
}
.home-container p{
  margin-bottom: 1.5vmin;
  line-height: 1.25;
}
.home-container .cta-info{
  margin: 1.15vmin 0;
  display: inline-block;
  box-sizing: border-box;
  width: 325px;
  height: 79px;
  background-image: url('/static/timeSlide/cta-info.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
  transition: 0.3s;
  opacity: 1;
  transform: translate3d(0,0,0);
  position: relative;
  margin: 0 auto;
  cursor: pointer;
}
.home-container .cta-info.hidden{
  opacity: 0;
  transform: translate3d(0,-100%,0);
}
.expanded-content{
  transition: 0.3s;
  opacity: 0;
  transform: translate3d(0,80px,0);
  position: relative
}
.expanded-content.displayed {
  opacity: 1;
  transform: translate3d(0,0,0);
}
.full-logo{
  margin: 60px 0 1.15vmin;
  display: inline-block;
  width: 100%;
  height: 273px;
  box-sizing: border-box;
  background-image: url('/static/timeSlide/full-logo.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
.draggable-container{
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 900;
  transition: 1s;
  font-size: 2.3vmin;
  font-family: 'Open Sans', sans-serif;
  color: white;
  text-shadow: 0px 0px 10px grey;
  -webkit-user-select: none;  /* Chrome all / Safari all */
  -moz-user-select: none;     /* Firefox all */
  -ms-user-select: none;      /* IE 10+ */
  user-select: none;
}
.draggable-container.disabled {
  pointer-events: none;
  opacity: 0;
}

#drag-1 {
  width: 340px;
  min-height: 6.5em;
  margin: 0;
  padding-bottom: 60px;
  display: inline-block;
  background-color: #66aacc22;
  color: white;
  -webkit-transform: translate(0px, 0px);
          transform: translate(0px, 0px);
}
#text-container {
  max-width: 98%;
  margin: 0 auto;
}
.cta-participa{
  margin: 1.15vmin 0;
  display: inline-block;
  box-sizing: border-box;
  width: 325px;
  height: 79px;
  background-image: url('/static/timeSlide/cta-participa.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
  transition: 0.3s;
  opacity: 1;
  transform: translate3d(0,0,0);
  position: relative;
  margin: 0 auto;
  cursor: pointer;
}
.drag-info{
  width: 340px;
  height: 73px;
  background-image: url('/static/timeSlide/drag-info.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  margin: 0 auto;
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
  transition: 2s;
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
  transition: 1s;
}
.background-full.loaded{
  opacity: 1
}
#time-selector{
  position: absolute;
  bottom: 60px;
  left: 5%;
  z-index: 1000;
}
.slidecontainer {
  width: 90%;
  height: 20px;
}
.hour-container{
  border-radius: 4px;
  background: white;
  position: absolute;
  transform: translate3d(-50%,-58px,0);
  left: 0;
  min-width: 100px;
}
.hour-container p{
  margin: 6px 10px;
  color: grey;
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  font-weight: 800;
  letter-spacing: 1px;
}
.vertical-line{
  position: absolute;
  height: 100%;
  width: 1px;
  top: 0;
  left: 50%;
  transform: translate3d(-50%,100%,0);
  background-color: white;
}
.slider {
  -webkit-appearance: none;
  width: 100%;
  height: 10px;
  border-radius: 5px;
  background-color: transparent;
  background-image: url('/static/timeSlide/linepattern.png');
  background-size: 3px 2px;
  background-position: center;
  background-repeat: repeat-x;
  opacity: 0.8;
  outline: none;
  -webkit-transition: .2s;
  transition: opacity .2s;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%,-50%,0)
}

.slider:hover {
  opacity: 1;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 100px;
  height: 70px;
  cursor: pointer;
  background-color: #0008;
  position: relative;
  top: -34px;
}

.slider::-moz-range-thumb {
  width: 100px;
  height: 50px;
  cursor: pointer;
  background-color: transparent;
  position: relative;
  transform: translate3d(0,-34px,0);
  border: 0;
}
.time-btn{
  opacity: 1;
  width: 40px;
  height: 40px;
  position: absolute;
  cursor: pointer;
}
#time-next{
  top: 0;
  right: 0;
  transform: translate3d(150%, -8px,0) scale(0.9);
  transition: 0.3s
}
#time-next:hover{
  transform: translate3d(150%, -8px,0) scale(1.0);
}
#time-prev{
  top: 0;
  left: 0;
  transform: translate3d(-175%, -8px, 0) scale(0.9);
  transition: 0.3s
}
#time-prev:hover{
  transform: translate3d(-175%, -8px, 0) scale(1.0)
}
.prev-shape{
  background-color: white;
  top: 0;
  left: 0;
  display: inline-block;
  width: 100%;
  height: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%, 0 50%, 20% 50%, 65% 80%, 65% 20%, 20% 50%, 0 50%);
  border-radius: 50%;
}
.next-shape{
  background-color: white;
  top: 0;
  left: 0;
  display: inline-block;
  width: 100%;
  height: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 50%, 80% 50%, 35% 20%, 35% 80%,80% 50%, 100% 50%, 100% 100%, 0 100%);
  border-radius: 50%;
}
.bullets-container{
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  pointer-events: none;
}
.bullet{
  height: 10px;
  width: 10px;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  transform: translate3d(-50%,-50%,0);
  background-color: white;
  transition: 0.3s;
  cursor: pointer;
  pointer-events: all;
}
.bullet:hover{
  transform: translate3d(-50%,-50%,0) scale(1.25);
}
.bullet-active{
  position: absolute;
  top: 50%;
  left: 50%;
  width: 18px;
  height: 18px;
  transform: translate3d(-50%,-50%,0) scale(0.2);
  border: 1px solid white;
  border-radius: 50%;
  transition: 0.3s;
}
.bullet-active.displayed{
  transform: translate3d(-50%,-50%,0) scale(1);
}
.nospacing{
  letter-spacing: -1px;
}
</style>
