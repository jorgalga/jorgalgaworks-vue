<template>
  <div class="hello">
    <div id="splash-screen" >
      <a v-on:click.prevent="hideSplash()" href class="btn"><img src="/static/timeSlide/cla-loader.gif"></a>
    </div>
    <div id="share-container" class="share-container">
      <div id="share-btn" v-on:click.stop="expandShare()" class="share-icon share">
      </div>
      <div id="share-fb" class="share-icon fb">
        <a target="_blank" href="http://facebook.com/"></a>
      </div>
      <div id="share-tw" class="share-icon tw">
        <a target="_blank" href="https://twitter.com/"></a>
      </div>
      <div id="share-wh" class="share-icon wh">
        <a target="_blank" href="https://www.whatsapp.com/"></a>
      </div>
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
        <div v-on:click.stop="toggleContent()" id="drag-toggle"></div>
      </div>
    </div>
    <div id="time-selector" class="slidecontainer">
      <div id="current-time" class="hour-container" v-bind:style="{ left: progress + '%' }">
        <div class="vertical-line"></div>
        <p><span class="hour">{{ t_hour }}</span> : <span class="minutes"><span class="nospacing" v-if="t_min < 10">0</span> {{ t_min }} </span> h<!--: <span class="seconds"> {{ t_sec }} </span>--></p>
      </div>
      <input type="range" min="0" v-bind:max="maxTime" v-bind:value="time" class="slider" id="myRange">
      <!--div v-on:click.prevent="prevHotspot()" id="time-prev" class="time-btn"><div class="prev-shape"></div></div>
      <div v-on:click.prevent="nextHotspot()" id="time-next" class="time-btn"><div class="next-shape"></div></div-->
      <div class="bullets-container">
        <div v-for="item in images.slice().reverse()" class="bullet" v-bind:style="{left: 100 * item.initTime/maxTime + '%' }" :key="item.id" v-on:click.prevent="goToTime(item.initTime)">
          <div v-bind:id="'bullet-'+item.id" class="bullet-active"></div>
          <div class="thumbnail" v-bind:style="{ 'background-image': 'url(' + item.pathThumb + ')' }">
            <div class="thumb-text" v-html="item.textThumb"></div>
          </div>
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
      <div id="camdetail1"></div>
      <div id="camdetail2"></div>
    </div>
  </div>
</template>
<script>
import interact from 'interactjs'
import {BgBlock} from '../lib/BgBlock'
import {WheelEventCB} from '../lib/WheelEventCB'
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
      shareopened: false,
      images: [
        {
          id: 1,
          initTime: 3600 * 0,
          endTime: 3600 * 1,
          textThumb: '<p><b>13:00</b> | Preparar silos</p>',
          pathThumb: '/static/timeSlide/img01_thumb.jpg',
          pathBlurred: '/static/timeSlide/img01_blur.jpg',
          path: '/static/timeSlide/img01.jpg',
          title: '<h2>11:00H<br>VISITA DEL VETERINARIO</h2>',
          text: '<p><em>A las 11 Rodrigo comprueba con el veterinario el estado del nuevo miembro de la familia</em></p>'
        },
        {
          id: 2,
          initTime: 3600 * 1,
          endTime: 3600 * 2,
          textThumb: '<p><b>13:00</b> | Preparar silos</p>',
          pathThumb: '/static/timeSlide/img01_thumb.jpg',
          pathBlurred: '/static/timeSlide/img02_blur.jpg',
          path: '/static/timeSlide/img02.jpg',
          title: '<h2>11:00H<brVISITA DEL VETERINARIO></h2>',
          text: '<p>Photo 2</p>'
        },
        {
          id: 3,
          initTime: 3600 * 2,
          endTime: 3600 * 3,
          textThumb: '<p><b>13:00</b> | Preparar silos</p>',
          pathThumb: '/static/timeSlide/img01_thumb.jpg',
          pathBlurred: '/static/timeSlide/img03_blur.jpg',
          path: '/static/timeSlide/img03.jpg',
          title: '<h2>11:00H<brVISITA DEL VETERINARIO></h2>',
          text: '<p>Photo 3</p>'
        },
        {
          id: 4,
          initTime: 3600 * 3,
          endTime: 3600 * 4,
          textThumb: '<p><b>13:00</b> | Preparar silos</p>',
          pathThumb: '/static/timeSlide/img01_thumb.jpg',
          pathBlurred: '/static/timeSlide/img04_blur.jpg',
          path: '/static/timeSlide/img04.jpg',
          title: '<h2>11:00H<brVISITA DEL VETERINARIO></h2>',
          text: '<p>Photo 4</p>'
        },
        {
          id: 5,
          initTime: 3600 * 4,
          endTime: 3600 * 5,
          textThumb: '<p><b>13:00</b> | Preparar silos</p>',
          pathThumb: '/static/timeSlide/img01_thumb.jpg',
          pathBlurred: '/static/timeSlide/img05_blur.jpg',
          path: '/static/timeSlide/img05.jpg',
          title: '<h2>11:00H<brVISITA DEL VETERINARIO></h2>',
          text: '<p>Photo 5</p>'
        },
        {
          id: 6,
          initTime: 3600 * 5,
          endTime: 3600 * 6,
          textThumb: '<p><b>13:00</b> | Preparar silos</p>',
          pathThumb: '/static/timeSlide/img01_thumb.jpg',
          pathBlurred: '/static/timeSlide/img06_blur.jpg',
          path: '/static/timeSlide/img06.jpg',
          title: '<h2>11:00H<brVISITA DEL VETERINARIO></h2>',
          text: '<p>Photo 6</p>'
        },
        {
          id: 7,
          initTime: 3600 * 6,
          endTime: 3600 * 23,
          textThumb: '<p><b>13:00</b> | Preparar silos</p>',
          pathThumb: '/static/timeSlide/img01_thumb.jpg',
          pathBlurred: '/static/timeSlide/img07_blur.jpg',
          path: '/static/timeSlide/img07.jpg',
          title: '<h2>11:00H<br>VISITA DEL VETERINARIO</h2>',
          text: '<p><em>A las 11 Rodrigo comprueba con el veterinario el estado del nuevo miembro de la familia</em></p>'
        },
        {
          id: 8,
          initTime: 3600 * 23,
          endTime: 3600 * 24,
          textThumb: '<p><b>13:00</b> | Preparar silos</p>',
          pathThumb: '/static/timeSlide/img01_thumb.jpg',
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
    function deviceOS () {
      var useragent = navigator.userAgent

      if (useragent.match(/Android/i)) {
        return 'android'
      } else if (useragent.match(/webOS/i)) {
        return 'webos'
      } else if (useragent.match(/iPhone/i)) {
        return 'iphone'
      } else if (useragent.match(/iPod/i)) {
        return 'ipod'
      } else if (useragent.match(/iPad/i)) {
        return 'ipad'
      } else if (useragent.match(/Windows Phone/i)) {
        return 'windows phone'
      } else if (useragent.match(/SymbianOS/i)) {
        return 'symbian'
      } else if (useragent.match(/RIM/i) || useragent.match(/BB/i)) {
        return 'blackberry'
      } else {
        return false
      }
    }
    this.device = deviceOS()
    this.initHome()
    this.initTimeRange()
    this.initDraggable()
    this.initScrollDetector()
    if (!this.device && window.innerWidth > 600) {
      this.initMouseMoveDetector()
    }
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
        var x = Math.floor(easeInOutQuart(time, from, to - from, duration))
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
        var x = Math.floor(easeInOutQuart(time, from, to - from, duration))
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
        var x = Math.floor(easeInOutQuart(time, from, to - from, duration))
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
      /*
      setTimeout(function () {
        if (!removed) {
          removed = true
          document.getElementById('home-container').classList.add('hidden')
          document.getElementById('draggable-container').classList.remove('disabled')
        }
      }, 20000)
      */
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
      var wheel = new WheelEventCB()
      wheel.init()
      window.addWheelListener(document.getElementById('background-container'), function (event) {
        event.preventDefault()
        if (event.deltaY < 0) {
          _.time = Math.max(0, parseInt(_.time) + Math.floor(event.deltaY))
          if (_.time === 0) {
            _.time = _.maxTime - 1
          }
        } else {
          _.time = Math.min(_.maxTime, parseInt(_.time) + Math.floor(event.deltaY))
        }
        _.progress = _.time / _.maxTime * 100
        _.updateBgBlocks(_.time)
        _.updateHour()
      })
    },
    initMouseMoveDetector () {
      var el = document.getElementById('app')
      el.addEventListener('mousemove', function (e) {
        var x = -1 * ((e.clientX / el.offsetWidth * 10) - 5) * 0.4
        var y = -1 * ((e.clientY / el.offsetHeight * 10) - 5) * 0.4
        var x1 = x * 0.5
        var y1 = y * 0.5
        var bb = document.getElementsByClassName('bb-visible')[0]
        if (bb) {
          console.log(x)
          bb.getElementsByClassName('background-full')[0].style.transform = 'translate3d(' + x + '%,' + y + '%,0) scale(1.1)'
          document.getElementById('camdetail1').style.transform = 'translate3d(' + x1 + '%,' + y1 + '%,0)'
          document.getElementById('camdetail2').style.transform = 'translate3d(' + x1 + '%,' + y1 + '%,0)'
        }
      })
    },
    updateBgBlocks (time) {
      for (var i = 0; i < this.bgBlocks.length; i++) {
        this.bgBlocks[i].update(time, this)
      }
    },
    updateHour () {
      this.t_hour = Math.floor(this.time / 3600) // 60 * 60
      this.t_min = Math.floor((this.time - (this.t_hour * 3600)) / 60)
      this.t_sec = this.time - (this.t_hour * 3600) - this.t_min * 60
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
    },
    toggleContent () {
      console.log('vlicked')
      var el = document.getElementById('drag-toggle')
      if (hasClass(el, 'hidden')) {
        el.classList.remove('hidden')
        document.getElementById('cta-participa').classList.remove('hidden')
        document.getElementById('text-container').classList.remove('hidden')
        document.getElementById('drag-1').classList.remove('compact')
      } else {
        el.classList.add('hidden')
        document.getElementById('cta-participa').classList.add('hidden')
        document.getElementById('text-container').classList.add('hidden')
        document.getElementById('drag-1').classList.add('compact')
      }
      function hasClass (element, cls) {
        return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1
      }
    },
    expandShare () {
      var el = document.getElementById('share-btn')
      if (!this.shareopened) {
        this.shareopened = true
        el.classList.add('close')
        document.getElementById('share-fb').classList.add('displayed')
        document.getElementById('share-tw').classList.add('displayed')
        document.getElementById('share-wh').classList.add('displayed')
      } else {
        this.shareopened = false
        el.classList.remove('close')
        document.getElementById('share-fb').classList.remove('displayed')
        document.getElementById('share-tw').classList.remove('displayed')
        document.getElementById('share-wh').classList.remove('displayed')
      }
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
  -webkit-transform: translate3d(-50%,-50%,0);
  -moz-transform: translate3d(-50%,-50%,0);
  -ms-transform: translate3d(-50%,-50%,0);
  -o-transform: translate3d(-50%,-50%,0);
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
  -webkit-transform: translate3d(0,0,0);
  -moz-transform: translate3d(0,0,0);
  -ms-transform: translate3d(0,0,0);
  -o-transform: translate3d(0,0,0);
  transform: translate3d(0,0,0);
  opacity: 1;
}
#splash-screen.hidden{
  -webkit-transform:  translate3d(-100%,0,0);
  -moz-transform: translate3d(-100%,0,0);
  -ms-transform: translate3d(-100%,0,0);
  -o-transform: translate3d(-100%,0,0);
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
#share-container{
  position: absolute;
  z-index: 970;
  top: 40px;
  left: 40px;
  box-sizing: border-box;
  display: inline-block;
  transform-origin: top left;
  transform: scale(0.5)
}
.share-icon{
  display: inline-block;
  height: 128px;
  width: 128px;
  margin-right: 80px;
  box-sizing: border-box;
  vertical-align: top;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  cursor: pointer;
}
.share-icon a{
  display: inline-block;
  width: 100%;
  height: 100%;
}

.share-icon.fb{
  background-size: 128px;
  background: url('/static/timeSlide/shares/fb-sprite.png');
  animation: like-gif steps(85) 2s infinite both;
  animation-play-state: paused;
}
.share-icon.fb:hover{
  animation-play-state: initial;
}
.share-icon.tw{
  background-size: 128px;
  background: url('/static/timeSlide/shares/tw-sprite.png');
  animation: like-gif steps(85) 2s infinite both;
  animation-play-state: paused;
}
.share-icon.tw:hover{
  animation-play-state: initial;
}
.share-icon.wh{
  background-size: 128px;
  background: url('/static/timeSlide/shares/wh-sprite.png');
  animation: like-gif steps(85) 2s infinite both;
  animation-play-state: paused;
  display: none;
}
.share-icon.wh:hover{
  animation-play-state: initial;
}
@keyframes like-gif {
  0% {
    background-position: 0%;
  }
  100% {
    background-position: 100%;
  }
}
.share-icon.share{
  background-size: 128px;
  background: url('/static/timeSlide/shares/share_sprite.png');
  animation: like-gif steps(85) 2s infinite both;
  display: none;
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
  position: relative;
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
  pointer-events: none;
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
  overflow: hidden;
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
  transform: translate3d(0,0,0) scale(1.1);
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
  width: 90%;
  height: 20px;
  transform-origin: bottom left;
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
  position:relative;
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
@media only screen and (max-width: 600px) {

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
.slider::-moz-range-track{
  background-image: url('/static/timeSlide/linepattern.png');
  background-size: 3px 2px;
  background-position: center;
  background-repeat: repeat-x;
}

.slider:hover {
  opacity: 1;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 40px;
  height: 80px;
  border-radius: 6px;
  cursor: pointer;
  background-color: #0000000;
  position: relative;
}

.slider::-moz-range-thumb {
  width: 40px;
  height: 80px;
  border-radius: 6px;
  cursor: pointer;
  background-color: transparent;
  position: relative;
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
.thumbnail{
  background-color: black;
  position: absolute;
  width: 364px;
  height: 160px;
  background-size: cover;
  top: 0;
  left: 0;
  transform: translate3d(0, calc(-100% - 50px), 0) scale(0.9);
  opacity: 0;
  transition: 0.6s;
  pointer-events: none;
}
.thumbnail.to-right{
  transform: translate3d(-50%;, calc(-100%), 0) scale(0.9);
}
.bullet:hover .thumbnail{
  opacity: 0.8;
  transform: translate3d(0, calc(-100% - 50px), 0) scale(0.9);
}
.bullet:hover .thumbnail.to-right{
  opacity: 0.8;
  transform: translate3d(-50%, calc(-100% - 50px), 0) scale(0.9);
}
.thumb-text{
  position: absolute;
  font-size: 1.8vmin;
  font-family: 'Open Sans', sans-serif;
  color: white;
  text-shadow: 0px 0px 10px grey;
  opacity: 1;
  bottom: 0;
  transform: translate3d(0,100%,0);
}
#camdetail1{
  background-image: url('/static/timeSlide/camdetail1.png');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 343px;
  height: 253px;
  z-index: 100;
  pointer-events: none;
}
#camdetail2{
  background-image: url('/static/timeSlide/camdetail2.png');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  right: 0;
  width: 343px;
  height: 253px;
  z-index: 100;
  pointer-events: none;
}
.nospacing{
  letter-spacing: -1px;
}
@media only screen and (max-width: 600px)  {
  .home-container{
    width: 200px;
    max-height: 480px;
    font-size: 14px;
    line-height: 1;
    top: 50%;
    transform: translate3d(-50%,-50%,0)
  }
  .home-container p{
    margin-bottom: 10px;
  }
  .full-logo{
    height: 160px;
    margin: 0;
    margin-bottom: 10px;
  }
  .home-container .cta-info{
    width: 100%;
    height: 50px;
  }
  .home-container img{
    width: 70%;
    height: auto;
  }
  .hour-container p{
    margin: 2px;
  }
  .draggable-container{
    /*pointer-events: none;
    opacity: 0;*/
    font-size: 14px;
    line-height: 1;
  }
  #drag-1{
    width: 200px;
    padding-bottom: 50px;
    min-height: initial;
    position: relative;
    pointer-events: all;
  }
  #drag-1.compact {
    height: 170px;
  }
  .cta-participa{
    width: 100%;
    height: 60px;
    transition: 0.6s;
    opacity: 1;
  }
  .cta-participa.hidden{
    opacity: 0;
    pointer-events: none;
  }
  .drag-info{
    display: none;
  }
  #drag-toggle{
    width: 100%;
    height: 43px;
    background-image: url('/static/timeSlide/hide-content.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    margin: 0 auto;
    cursor: pointer;
    position: absolute;
    bottom: 0;
  }
  #drag-toggle.hidden{
    background-image: url('/static/timeSlide/show-content.png');
  }
  #time-selector{
    transform: rotate(90deg);
    bottom: initial;
    top: 0;
    width: 96vh;
    left: 10px;
  }
  .hour-container{
    min-width: 85px;
    transform: translate3d(-50%,-50px,0) rotate(-90deg) scale(0.8);
  }
  .vertical-line{
    left: -4px;
    transform: translate3d(0,0,0) rotate(90deg);
  }
  .thumbnail{
    display: none;
  }
  .bullet{
    border-radius: 0;
    height: 16px;
    width: 1px;
  }
  .bullet-active{
    border-radius: 4px;
    width: 8px;
    height: 22px;
    border: 2px solid white;
  }
  .bullet:hover {
     transform: translate3d(-50%,-50%,0)
  }
  .slider::-webkit-slider-thumb {
    top: -40px;
    height: 110px;
  }
  #camdetail1, #camdetail2 {
    display: none;
  }
  #text-container {
    transition: 0.6s;
    opacity: 1;
    max-height: 200px;
    overflow-y: scroll;
  }
  #text-container.hidden{
    opacity: 0;
    pointer-events: none;
  }
  #share-container{
    left: initial;
    right: 10px;
    top: 10px;
    transform-origin: top right;
    transform: scale(0.4);
    max-width: 128px;
  }
  .share-icon {
    margin-right: 0;
    margin-bottom: 50px;
    position: relative;
  }
  .share-icon.share{
    display: inline-block;
    cursor: pointer;
  }
  .share-icon.share.close{
    background: url('/static/timeSlide/shares/x_sprite.png');
  }
  .share-icon.fb, .share-icon.tw, .share-icon.wh  {
    display: inline-block;
    transition: 0.3s;
    opacity: 0;
    transform: translate3d(0,-100%,0);
    pointer-events:  none;
  }
  .share-icon.fb.displayed, .share-icon.tw.displayed, .share-icon.wh.displayed {
    opacity: 1;
    transform: translate3d(0,0,0);
    pointer-events: all;
    animation-play-state: initial;
  }
}
</style>
