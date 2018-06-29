<template>
  <div class="hello">
    <div class="preload-hack"></div>
    <div id="touch-feedback"></div>
    <div id="rotate-screen" >
      <div class="rs-container">
        <img width="256px" height="175px" src="static/timeSlide/Vertical-Mobile.png">
        <p>PON TU MÓVIL EN VERTICAL<br>Y SIGUE NAVEGANDO.</p>
      </div>
    </div>
    <div id="splash-screen" >
      <a v-on:click.prevent="hideSplash()" href class="btn"><img width="64px" height="64px" src="static/timeSlide/cla-loader128.gif"></a>
    </div>
    <div id="video-screen" v-on:click.prevent="closeVideo()">
      <div class="videoContainer">
        <div class="videoWrapper">
          <div id="player"></div>
          <div v-on:click.prevent="closeVideo()" id="close"><!--CERRAR <span class="close-icon"><span class="aspa"></span><span class="aspa"></span></span>--></div>
        </div>
      </div>
    </div>
    <div class="cla-seal">
      <a v-on:click.prevent="goToGarantia()" href><img width="100%" height="auto" src="static/timeSlide/sello.png?v=1"></a>
    </div>
    <div id="share-container" class="share-container">
      <div id="share-btn" v-on:click.stop="expandShare()" class="share-icon share">
      </div>
      <div id="share-fb" class="share-icon fb">
        <a title="Comparte en facebook" target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.centrallecheraasturiana.es%2Fpromocion24horasalnatural%2F"></a>
      </div>
      <div id="share-tw" class="share-icon tw">
        <a title="Comparte en twitter" target="_blank" href="https://twitter.com/intent/tweet?text=24%20horas%20al%20natural.%20Descubre%20hora%20a%20hora%20el%20d%C3%ADa%20de%20Jos%C3%A9%2C%20uno%20de%20los%20integrantes%20de%20nuestra%20empresa%20con%20origen%20cooperativo.%20www.24horasalnatural.com"></a>
      </div>
      <div id="share-wh" class="share-icon wh">
        <a title="Comparte en whatsapp" target="_blank" href="whatsapp://send?url=https%3A%2F%2Fwww.centrallecheraasturiana.es/promocion24horasalnatural/&text=24%20horas%20al%20natural.%20Descubre%20hora%20a%20hora%20el%20d%C3%ADa%20de%20Jos%C3%A9%2C%20uno%20de%20los%20integrantes%20de%20nuestra%20empresa%20con%20origen%20cooperativo.%20www.centrallecheraasturiana.es/promocion24horasalnatural/"></a>
      </div>
      <div id="share-yt" class="share-icon yt">
        <a v-on:click.prevent="openVideo()" title="Ver spot" ><span>VER SPOT</span></a>
      </div>
    </div>
    <div id="home-container" class="home-container">
      <div v-on:click.stop="goToCLA()" class="full-logo"></div>
      <div class="init-content">
        <p><em>Un recorrido por el día a día de <b>José</b> en la <b>Ganadería Casa Ron</b>. Uno de nuestros 8.000 ganaderos de una empresa con origen cooperativo hace ya más de 50 años.</em></p>
        <p><em>Vente a <b>Asturias</b> y disfruta de <b>24 horas al natural</b></em></p>
        <div v-on:click.stop="expandHome()" id="more-info" class="cta-info noSelect"></div>
      </div>
      <div id="expanded-content" class="expanded-content">
        <p><em>Participa en</em></p>
        <p><img src="static/timeSlide/insta.png"></p>
        <p><em>Con <b>tu momento más natural del día</b> y vente a disfrutar con nosotros</em></p>
        <p><img src="static/timeSlide/hashtag.png"></p>
      </div>
    </div>
    <div id="draggable-container" class="draggable-container disabled">
      <div id="drag-1" class="draggable">
        <div id="fl" v-on:click.stop="goToCLA()" class="full-logo"></div>
        <!--p class="bg-clip"><em>You can drag one element</em></p-->
        <div id="text-container">
          <div v-html="currentTitle" ></div>
          <div v-html="currentText" ></div>
        </div>
        <div v-on:click.stop="goToParticipa()" id="cta-participa" class="cta-participa"></div>
        <a id="bbll" class="bbll" target="_blank" href="https://centrallecheraasturiana.es/promocion24horasalnatural/doc/BBNN_24horas_al_natural.pdf"><b>Bases legales</b></a>
        <div class="drag-info"></div>
        <div v-on:click.stop="toggleContent()" id="drag-toggle"></div>
      </div>
    </div>
    <div id="time-selector" class="slidecontainer">
      <div class="t0000"><b>00:00h</b></div>
      <div class="t1200"><b>12:00h</b></div>
      <div class="t2400"><b>24:00h</b></div>
      <div id="current-time" class="hour-container" v-bind:style="{ left: progress + '%' }">
        <div id="vl" class="vertical-line"></div>
        <p><span class="hour">{{ t_hour }}</span> : <span class="minutes"><span class="nospacing" v-if="t_min < 10">0</span> {{ t_min }} </span> h<!--: <span class="seconds"> {{ t_sec }} </span>--></p>
      </div>
      <input type="range" min="0" v-bind:max="maxTime" v-bind:value="time" class="slider" id="myRange">
      <!--div v-on:click.prevent="prevHotspot()" id="time-prev" class="time-btn"><div class="prev-shape"></div></div>
      <div v-on:click.prevent="nextHotspot()" id="time-next" class="time-btn"><div class="next-shape"></div></div-->
      <div class="bullets-container">
        <div v-for="item in images.slice().reverse()" class="bullet" v-bind:style="{left: 100 * item.initTime/maxTime + '%' }" :key="item.id" v-on:click.prevent="goToTime(item.initTime)">
          <div v-bind:id="'bullet-'+item.id" class="bullet-active"></div>
          <div class="thumbnail" v-bind:style="{ 'background-image': 'url('+ cmpPath + item.pathThumb + '?paco)' }">
            <div class="thumb-text" v-html="item.textThumb"></div>
          </div>
        </div>
      </div>
    </div>
    <div id="background-container" class="background-container">
      <div v-bind:id="'bg-block'+item.id" v-for="item in images.slice().reverse()" class="background-block" :key="item.id">
        <div class="loader"></div>
        <div class="background-full"></div>
        <div class="background-blur" v-bind:style="{ 'background-image': 'url('+ cmpPath + pMobile + item.pathBlurred + ')' }"></div>
        <div class="bg-thumb"></div>
      </div>
      <div id="camdetail1"></div>
      <div id="camdetail2"></div>
    </div>
  </div>
</template>
<script>
import interact from 'interactjs'
import Impetus from 'impetus'
import {BgBlock} from '../lib/BgBlock'
import {WheelEventCB} from '../lib/WheelEventCB'
export default {
  name: 'TimeSlide',
  data () {
    return {
      cmpPath: 'static/timeSlide/',
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
      timeout: {},
      homeTimeout: {},
      touchY: 0,
      device: false,
      images: window.data_images,
      removed: false
    }
  },
  created () {
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
    if (this.device) {
      console.log('is Mobile')
      this.pMobile = 'mobile/'
      console.log(window.innerWidth + 'px')
      // document.getElementById('app').style.maxWidth = window.innerWidth + 'px'
      // document.getElementById('app').style.minHeight = (window.innerHeight - 56) + 'px'
    } else {
      this.pMobile = ''
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
    this.initScrollDetector()
    this.initYT()
    if (!this.device && window.innerWidth > 600) {
      this.initMouseMoveDetector()
      this.initDraggable()
    } else {
      this.initiOrientationEvent()
      // this.initBlurBgTouch()
    }
  },
  methods: {
    initYT () {
      window.initPlayer()
    },
    openVideo () {
      var vl = document.getElementById('video-screen')
      vl.classList.add('displayed')
      window.playVideo()
    },
    closeVideo () {
      var vl = document.getElementById('video-screen')
      vl.classList.remove('displayed')
      window.stopVideo()
    },
    goToCLA () {
      // window.open('https://www.centrallecheraasturiana.es/es/', '_blank')
    },
    goToGarantia () {
      console.log(window.garantia_link)
      window.open(window.garantia_link, '_blank')
    },
    goToParticipa () {
      window.open(window.post_link, '_blank')
    },
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
        if (_.time < 0) {
          _.time = _.maxTime
        }
      }, 1000)
    },
    expandHome () {
      var _ = this
      document.getElementById('more-info').classList.add('hidden')
      setTimeout(function () {
        document.getElementById('more-info').style.display = 'none'
        document.getElementById('expanded-content').classList.add('displayed')
      }, 301)
      clearTimeout(_.homeTimeout)
      _.homeTimeout = setTimeout(function () {
        if (!_.removed) {
          _.removed = true
          document.getElementById('home-container').classList.add('hidden')
          document.getElementById('draggable-container').classList.remove('disabled')
        }
      }, 10000)
      /*
      setTimeout(function () {
        document.getElementById('expanded-content').classList.remove('displayed')
        setTimeout(function () {
          document.getElementById('more-info').style.display = 'inline-block'
          requestAnimationFrame(function () {
            document.getElementById('more-info').classList.remove('hidden')
          })
        }, 301)
      }, 5000)
      */
    },
    retractHome () {

    },
    initHome () {
      var _ = this
      document.getElementById('home-container').addEventListener('click', function (e) {
        e.stopPropagation()
      })
      document.addEventListener('click', function (e) {
        if (!_.timeoutremoved) {
          _.removed = true
          document.getElementById('home-container').classList.add('hidden')
          document.getElementById('draggable-container').classList.remove('disabled')
        }
      })
      _.homeTimeout = setTimeout(function () {
        if (!_.removed) {
          _.removed = true
          document.getElementById('home-container').classList.add('hidden')
          document.getElementById('draggable-container').classList.remove('disabled')
        }
      }, 15000)
    },
    initDraggable () {
      // target elements with the "draggable" class
      var el = document.getElementById('drag-1')
      // var limW = window.innerWidth / 2 - el.offsetWidth / 2
      // var transX = 0
      // var transY = 0
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
          onmove: dragMoveListener
        })
      function dragMoveListener (event) {
        var target = el
        // keep the dragged position in the data-x/data-y attributes
        var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
        var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy
        // transX = x
        // transY = y
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
      //
      var resizeTimer
      window.onresize = function (event) {
        clearTimeout(resizeTimer)
        resizeTimer = setTimeout(function () {
          el.style.transition = '0.3s'
          requestAnimationFrame(function () {
            el.style.webkitTransform =
            el.style.transform =
              'translate(0, 0)'
            el.setAttribute('data-x', 0)
            el.setAttribute('data-y', 0)
            setTimeout(function () {
              el.style.transition = '0s'
            })
          })
        }, 250)
      }
      this.setThumbnails()
    },
    setThumbnails () {
      var thumbs = document.getElementsByClassName('thumbnail')
      for (var i = 0; i < thumbs.length; i++) {
        if ((this.offset(thumbs[i]).left + thumbs[i].clientWidth) >= window.innerWidth) {
          thumbs[i].classList.add('to-left')
        }
      }
    },
    initScrollDetector () {
      var _ = this
      if (!this.device) {
        var wheel = new WheelEventCB()
        wheel.init()
        window.addWheelListener(document.getElementById('background-container'), function (event) {
          eventHandler(event)
        })
        window.addWheelListener(document.getElementById('time-selector'), function (event) {
          eventHandler(event)
        })
      } else {
        var imp = new Impetus({
          source: document.getElementById('background-container'),
          update: function (x, y) {
            var deltaY = Math.floor((_.touchY - y) * 10)
            _.time = _.time + deltaY
            _.progress = _.time / _.maxTime * 100
            _.updateBgBlocks(_.time)
            _.updateHour()
            _.touchY = y
          }
        })
        imp.resume()
        /*
        var tf = document.getElementById('touch-feedback')
        document.getElementById('app').addEventListener('touchmove', function (e) {
          tf.style.transition = '0s'
          tf.style.left = Math.floor(e.touches[0].clientX) + 'px'
          tf.style.top = Math.floor(e.touches[0].clientY) + 'px'
        }, false)
        document.getElementById('app').addEventListener('touchstart', function (e) {
          console.log('start')
          tf.style.transition = '0.1s'
          requestAnimationFrame(function () {
            tf.style.opacity = 0.5
            tf.style.transform = 'translate3d(-50%,-50%,0) scale(1.0)'
          })
          tf.style.left = Math.floor(e.touches[0].clientX) + 'px'
          tf.style.top = Math.floor(e.touches[0].clientY) + 'px'
        }, false)
        document.getElementById('app').addEventListener('touchend', function (e) {
          console.log(e)
          tf.style.transition = '0.3s'
          requestAnimationFrame(function () {
            tf.style.opacity = 0
            tf.style.transform = 'translate3d(-50%,-50%,0) scale(0.2)'
          })
          tf.style.left = Math.floor(e.touches[0].clientX) + 'px'
          tf.style.top = Math.floor(e.touches[0].clientY) + 'px'
        }, false)
        */
      }
      function eventHandler (event) {
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
      }
    },
    initMouseMoveDetector () {
      var _ = this
      var el = document.getElementById('app')
      var drag = document.getElementById('drag-1')
      var centerx = 0
      var centery = 0
      var mod = 0
      el.addEventListener('mousemove', function (e) {
        var x = -1 * ((e.clientX / el.offsetWidth * 10) - 5) * 0.075
        var y = -1 * ((e.clientY / el.offsetHeight * 10) - 5) * 0.075
        var x1 = x * 2
        var y1 = y * 2
        var bb = document.getElementsByClassName('bb-visible')[0]
        if (bb) {
          bb.getElementsByClassName('background-full')[0].style.transform = 'translate3d(' + x + '%,' + y + '%,0) scale(1.1)'
          document.getElementById('camdetail1').style.transform = 'translate3d(' + x1 + '%,' + y1 + '%,0)'
          document.getElementById('camdetail2').style.transform = 'translate3d(' + x1 + '%,' + y1 + '%,0)'
          centerx = _.offset(drag).left + (drag.offsetWidth / 2)
          centery = _.offset(drag).top + (drag.offsetHeight / 2)
          mod = Math.sqrt(((e.clientX - centerx) * (e.clientX - centerx)) + ((e.clientY - centery * (e.clientY - centery))))
          if (isNaN(parseFloat(mod))) {
            drag.style.opacity = 1
          } else {
            drag.style.opacity = Math.max(0, 1 - ((mod / window.innerWidth) * 3))
            // console.log('opa', 1 - (mod / window.innerWidth))
          }
        }
      })
      /*
      function offset (el) {
        var rect = el.getBoundingClientRect()
        var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
      }
      */
    },
    offset (el) {
      var rect = el.getBoundingClientRect()
      var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
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
      if (!this.device && window.innerWidth > 600) {
        // console.log(this.device)
        this.adjustTimeSelector()
      } else {
        var elem1 = document.getElementById('current-time')
        var elem2 = document.getElementById('vl')
        if (elem1.style.removeProperty) {
          elem1.style.removeProperty('transform')
          elem2.style.removeProperty('left')
        } else {
          elem1.style.removeAttribute('transform')
          elem2.style.removeAttribute('left')
        }
        this.adjustTimeSelectorMobile()
      }
    },
    adjustTimeSelector () {
      var hc = document.getElementById('current-time')
      var vl = document.getElementById('vl')
      hc.style.transform = 'translate3d(-' + this.progress + '%,-58px,0)'
      vl.style.left = this.progress + '%'
    },
    adjustTimeSelectorMobile () {
      var hc = document.getElementById('current-time')
      hc.style.transform = 'translate3d(-' + (30 + (this.progress / 100 * 30)) + 'px,-58px,0) rotate(-90deg) scale(0.8)'
      var vl = document.getElementById('vl')
      vl.style.top = 'calc(' + this.progress + '% - 12px)'
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
        // console.log(window.location.protocol + '//' + window.location.host + window.location.pathname + _.cmpPath + _.pMobile + _.bgBlocksSorted[i].data.imgName + '.' + _.bgBlocksSorted[i].data.type)
        toload.src = window.location.protocol + '//' + window.location.host + window.location.pathname + _.cmpPath + _.pMobile + _.bgBlocksSorted[i].data.imgName + '.' + _.bgBlocksSorted[i].data.type + '?0101'
      }
      loadImage()
    },
    toggleContent () {
      var el = document.getElementById('drag-toggle')
      if (hasClass(el, 'hidden')) {
        el.classList.remove('hidden')
        document.getElementById('fl').classList.remove('compact')
        document.getElementById('cta-participa').classList.remove('hidden')
        document.getElementById('text-container').classList.remove('hidden')
        document.getElementById('bbll').classList.remove('compact')
        // document.getElementById('drag-1').classList.remove('compact')
      } else {
        el.classList.add('hidden')
        document.getElementById('fl').classList.add('compact')
        document.getElementById('cta-participa').classList.add('hidden')
        document.getElementById('text-container').classList.add('hidden')
        document.getElementById('bbll').classList.add('compact')
        // document.getElementById('drag-1').classList.add('compact')
      }
      function hasClass (element, cls) {
        return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1
      }
    },
    expandShare () {
      clearTimeout(this.timeout)
      var _ = this
      var el = document.getElementById('share-btn')
      if (!this.shareopened) {
        this.shareopened = true
        el.classList.add('close')
        document.getElementById('share-fb').style.display = 'inline-block'
        document.getElementById('share-tw').style.display = 'inline-block'
        document.getElementById('share-wh').style.display = 'inline-block'
        document.getElementById('share-yt').classList.add('hidden')
        requestAnimationFrame(function () {
          document.getElementById('share-fb').classList.add('displayed')
          document.getElementById('share-tw').classList.add('displayed')
          document.getElementById('share-wh').classList.add('displayed')
        })
        _.timeout = setTimeout(function () {
          // console.log('done')
          if (_.shareopened) {
            _.expandShare()
          }
        }, 50000)
      } else {
        this.shareopened = false
        el.classList.remove('close')
        document.getElementById('share-fb').classList.remove('displayed')
        document.getElementById('share-tw').classList.remove('displayed')
        document.getElementById('share-wh').classList.remove('displayed')
        document.getElementById('share-yt').classList.remove('hidden')
      }
    },
    initiOrientationEvent () {
      function doOnOrientationChange () {
        switch (window.orientation) {
          case -90:
            document.getElementById('rotate-screen').classList.add('displayed')
            break
          case 90:
            document.getElementById('rotate-screen').classList.add('displayed')
            break
          default:
            document.getElementById('rotate-screen').classList.remove('displayed')
            break
        }
      }
      window.addEventListener('orientationchange', doOnOrientationChange)
      doOnOrientationChange()
    },
    initBlurBgTouch () {
      var tc = document.getElementById('text-container')
      document.querySelector('.bb-visible .background-full').style.transition = '0.3s'
      setTimeout(function () {
        requestAnimationFrame(function () {
          document.querySelector('.bb-visible .background-full').style.opacity = 0
        })
      }, 300)
      tc.addEventListener('touchstart', function () {
      })
    }
  }
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700,700i,800,800i');
$staticpath: 'https://www.centrallecheraasturiana.es/promocion24horasalnatural/';
//$staticpath: '/';

.hello{
  background-color: black;
  height: 100%;
  width: 100vw;
  position: relative;
}
.bbll{
  color: white;
  width: 80%;
  position: relative;
  top: -10px;
  display: inline-block;
  text-align: right;
  font-size: 11px
}
#touch-feedback{
  position: absolute;
  top: 0;
  left: 0;
  width: 40px;
  height: 40px;
  background-color: white;
  transform-origin: center;
  z-index: 9999;
  opacity: 0.5;
  border-radius: 50%;
  transform: translate3d(-50%,-50%,0) scale(0.2);
  box-shadow: 0px 0px 10px white;
  opacity: 0;
  pointer-events: none;
}
.preload-hack{
  width: 1px;
  height: 1px;
  position: absolute;
  bottom: 0;
  left: 0;
  pointer-events: none;
  background: url('#{$staticpath}static/timeSlide/shares/x_sprite.png');
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
#rotate-screen{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1200;
  background-color: #2973fb;
  -webkit-transform: translate3d(0,0,0);
  -moz-transform: translate3d(0,0,0);
  -ms-transform: translate3d(0,0,0);
  -o-transform: translate3d(0,0,0);
  transform: translate3d(0,0,0);
  opacity: 0;
  pointer-events: none;
}
#rotate-screen.displayed{
  opacity: 1;
  pointer-events: all;
}
#video-screen{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1150;
  background-color: #000000dd;
  -webkit-transform: translate3d(0,0,0);
  -moz-transform: translate3d(0,0,0);
  -ms-transform: translate3d(0,0,0);
  -o-transform: translate3d(0,0,0);
  transform: translate3d(0,0,0);
  opacity: 0;
  pointer-events: none;
  transition: 0.6s;
}
#video-screen.displayed{
  opacity: 1;
  pointer-events: all;
}
#close{
  position: absolute;
  top: 20px;
  right: 15px;
  transform: translate3d(0,0%,0) scale(0.4);
  transform-origin: top right;
  color: white;
  font-size: 20px;
  display: inline-block;
  cursor: pointer;
  transition: 0.3s;
  width: 128px;
  height: 128px;
  background-size: 128px;
  background: url('#{$staticpath}static/timeSlide/shares/x_sprite.png');
  animation: like-gif steps(85) 2s infinite both;
}
#close .close-icon{
  position: absolute;
  display: inline-block;
  width: 20px;
  height: 20px;
  top: 50%;
  right: 0;
  transform: translate3d(0, -50%, 0);
}
#close .close-icon .aspa{
  position: absolute;
  display: inline-block;
  background-color: white;
  width: 1px;
  height: 100%;
  top: 40%;
  right: 50%;
  transform: translate3d(-50%, -50%, 0);
  transition: 0.3s
}
#close .close-icon .aspa:nth-child(1) {
  transform: translate3d(-50%, -50%, 0) rotate(45deg);
}
#close .close-icon .aspa:nth-child(2) {
  transform: translate3d(-50%, -50%, 0) rotate(-45deg);
}
#close:hover .close-icon .aspa:nth-child(1) {
  transform: translate3d(-50%, -50%, 0) rotate(-45deg);
}
#close:hover .close-icon .aspa:nth-child(2) {
  transform: translate3d(-50%, -50%, 0) rotate(225deg);
}
#rotate-screen .rs-container {
  min-width: 50px;
  min-height: 50px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%,-50%,0);
  color: white;
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
  opacity: 1;
}
#splash-screen.hidden{
  opacity: 0;
  pointer-events: none
}
.loader{
  position: absolute;
  width: 50px;
  height: 50px;
  z-index: 100;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%,-50%,0);
  background-image: url(#{$staticpath}static/timeSlide/loading_spinner.gif);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.5;
  transition: 0.5s;
}
.loader.hidden {
  opacity: 0;
}
.cla-seal{
  position: absolute;
  z-index: 971;
  top: 50px;
  right: 40px;
  box-sizing: border-box;
  display: inline-block;
  transform-origin: top left;
  width: 13.5%;
  height: 26%;
  max-height: 279px;
  max-width: 200px;
}
#share-container{
  position: absolute;
  z-index: 970;
  top: 50px;
  left: 40px;
  box-sizing: border-box;
  display: inline-block;
  transform-origin: top left;
  transform: scale(0.4)
}
.share-icon{
  display: inline-block;
  min-height: 128px;
  width: 128px;
  margin-right: 40px;
  box-sizing: border-box;
  vertical-align: top;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
}
.share-icon a{
  display: inline-block;
  width: 100%;
  min-height: 128px;
}
@keyframes like-gif {
  0% {
    background-position: 0%;
  }
  100% {
    background-position: 100%;
  }
}
@-webkit-keyframes like-gif {
  0% {
    background-position: 0%;
  }
  100% {
    background-position: 100%;
  }
}
@keyframes like-gif-withpause {
  0% {
    background-position: 0%;
  }
  33% {
    background-position: 100%;
  }
  100% {
    background-position: 100%;
  }
}
@-webkit-keyframes like-gif-withpause {
  0% {
    background-position: 0%;
  }
  33% {
    background-position: 100%;
  }
  100% {
    background-position: 100%;
  }
}
.share-icon.fb{
  background-size: 128px;
  background: url('#{$staticpath}static/timeSlide/shares/fb-sprite.png');
  animation: like-gif steps(98) 2.5s infinite both;
  animation-play-state: paused;
}
.share-icon.fb:hover{
  animation-play-state: initial;
}
.share-icon.tw{
  background-size: 128px;
  background: url('#{$staticpath}static/timeSlide/shares/tw-spriteB.png');
  animation: like-gif steps(98) 2s infinite both;
  animation-play-state: paused;
}
.share-icon.tw:hover{
  animation-play-state: initial;
}

.share-icon.yt{
  background-size: 128px;
  background: url('#{$staticpath}static/timeSlide/shares/yt-sprite.png');
  animation: like-gif steps(86) 2s infinite both;
  animation-play-state: paused;
  transform: scale(1.15);
  margin-left: 80px;
}
.share-icon.yt:hover{
  animation-play-state: initial;
}

.share-icon.yt a{
  text-decoration: none;
  color: white;
  font-size: 28px;
  letter-spacing: 2px;
  font-family: 'Open Sans', sans-serif;
  position: absolute;
  display: block;
  height: 100px;
  top: 50%;
  transform: translateY(-50%);
}
.share-icon.yt span{
  color: white;
  position: absolute;
  display: inline-block;
  top: 50%;
  transform: translate3d(50%, -50%, 0);
  width: 120%;
  transition: 0.3s;
  transform-origin: center left;
  -webkit-filter: blur(0.000001px);
  transform: translate3d(50%, -50%, 0) scale3d(0.9,0.9,0.9);
}
.share-icon.yt:hover span{
  transform: translate3d(50%, -50%, 0) scale3d(1.0,1.0,1.0);
  -webkit-font-smoothing: antialiased;
}
.share-icon.wh{
  background-size: 128px;
  background: url('#{$staticpath}static/timeSlide/shares/wh-sprite.png');
  animation: like-gif steps(85) 2s infinite both;
  animation-play-state: paused;
  display: none;
}
.share-icon.wh:hover{
  animation-play-state: initial;
}
.share-icon.share{
  background-size: 128px;
  background: url('#{$staticpath}static/timeSlide/shares/share_sprite.png');
  animation: like-gif-withpause steps(85) 6s infinite both;
  display: none;
}

.home-container{
  position: absolute;
  z-index: 950;
  width: 340px;
  height: calc(100% - 100px);
  left: 50%;
  transform: translate3d(-50%,0,0);
  font-size: 16px;
  font-family: 'Open Sans', sans-serif;
  color: white;
  text-shadow: 0px 0px 10px grey;
  transition: 1s;
  opacity: 1;
}
.home-container.hidden {
  transform: translate3d(-50%,0,0);
  opacity: 0;
  pointer-events: none;
}
.home-container p{
  margin-bottom: 1.5vmin;
  line-height: 1;
  width: 400px;
  position: relative;
  left: -50px;
}
.home-container .cta-info{
  margin: 1.15vmin 0;
  display: inline-block;
  box-sizing: border-box;
  width: 100%;
  min-height: 70px;
  background-image: url('#{$staticpath}static/timeSlide/cta-info.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
  transition: 0.3s;
  opacity: 1;
  transform: translate3d(0,0,0);
  position: relative;
  margin: 0 auto;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
}

.home-container .cta-info.hidden{
  opacity: 0;
  transform: translate3d(0,0,0);
}
.expanded-content{
  transition: 0.3s;
  opacity: 0;
  transform: translate3d(0,0,0);
  // transform: translate3d(0,0,0);
  position: relative;
  max-width: 100%;
  margin: 0 auto;
}
.expanded-content.displayed {
  opacity: 1;
  transform: translate3d(0,0,0);
}
.home-container .expanded-content p{
  width: 100%;
  left: 0;
}
.full-logo{
  margin: 60px 0 1.15vmin;
  display: inline-block;
  width: 100%;
  min-height: 240px;
  box-sizing: border-box;
  background-image: url('#{$staticpath}static/timeSlide/full-logo.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center top;
}
.init-content{
  width: 300px;
  margin: 0 auto;
}
.draggable-container{
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 900;
  transition: 1s;
  font-size: 16px;
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
  display: inline-block;
  /* background-color: #66aacc22; */
  color: white;
  -webkit-transform: translate(0px, 0px);
          transform: translate(0px, 0px);
  pointer-events: all;
  cursor:move;
  user-select: none;
}
#text-container {
  max-width: 85%;
  margin: 0 auto;
  max-height: 200px;
  overflow-y: scroll;
  mask-image: linear-gradient(linear, left 80%, left 95%, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)));
  -webkit-mask-image: -webkit-gradient(linear, left 80%, left 95%, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)));
  padding-bottom: 30px;
}
#drag-1 #text-container{
  max-width: initial;
  width: 400px;
  transform: translateX(-30px)
}
.cta-participa{
  margin: 1.15vmin 0;
  display: inline-block;
  box-sizing: border-box;
  width: 325px;
  height: 70px;
  background-image: url('#{$staticpath}static/timeSlide/cta-participa.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
  transition: 0.3s;
  opacity: 1;
  transform: translate3d(0,0,0);
  position: relative;
  margin: 0 auto;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
}
.drag-info{
  width: 100%;
  max-width:290px;
  height: 91px;
  background-image: url('#{$staticpath}static/timeSlide/drag-info.png?0101');
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
  transition: 1s;
  overflow: hidden;
  display: none;
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
  position: absolute;
  top: 0;
  left: 0;
  image-rendering: crisp-edges;
}
.background-blur{
  z-index: 10;
  webkit-filter: blur(10px);
  -moz-filter: blur(10px);
  -o-filter: blur(10px);
  -ms-filter: blur(10px);
  filter: blur(10px);
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
  bottom: 80px;
  left: 5%;
  z-index: 1000;
  width: 90%;
  height: 20px;
  transform-origin: bottom left;
}
.t0000, .t1200, .t2400 {
  color: white;
  font-family: 'Open Sans', sans-serif;
  position: absolute;
  font-size: 14px;
  letter-spacing: 2px;
}
.t0000{
  top: 30px;
  left: -5px;
}
.t1200 {
  top: 30px;
  left: 50%;
  transform: translate3d(-50%,0,0)
}
.t2400 {
  top: 30px;
  left: initial;
  right: -5px;
}
.hour-container{
  border-radius: 4px;
  background: white;
  position: absolute;
  transform: translate3d(-50%,-58px,0);
  left: 0;
  width: 100px;
}
.hour-container p{
  margin: 6px 10px;
  color: grey;
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  font-weight: 800;
  letter-spacing: 1px;
  position:relative;
  user-select: none;
}
.vertical-line{
  position: absolute;
  height: 150%;
  width: 1px;
  top: 0;
  left: 50%;
  transform: translate3d(-50%,50%,0);
  background-color: white;
}
.slider {
  -webkit-appearance: none;
  width: 100%;
  height: 10px;
  border-radius: 5px;
  background-color: transparent;
  background-image: url('#{$staticpath}static/timeSlide/linepattern.png');
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
  background-image: url('#{$staticpath}static/timeSlide/linepattern.png');
  background-size: 3px 2px;
  background-position: center;
  background-repeat: repeat-x;
  outline: none;
}
input[type=range]::-moz-focus-outer {
  border: 0;
}

.slider:hover {
  opacity: 1;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 110px;
  height: 50px;
  border-radius: 6px;
  cursor: pointer;
  background-color: #FF000000;
  position: relative;
  top: -50px;
  outline: none;
  border: 0;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
}

.slider::-moz-range-thumb{
  width: 110px;
  height: 50px;
  border-radius: 6px;
  cursor: pointer;
  background-color: #FF000000;
  position: relative;
  border: 0;
  transform: translateY(-50px);
  outline: none;
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
.bullet:nth-child(odd){
  /* display: none; */
  height: 12px;
  width: 3px;
  border-radius: 50%;
}
.bullet.v2{
    height: 10px;
    width: 10px;
    border-radius: 50%;
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
  transform: translate3d(0, -130%, 0) scale(0.8);
  opacity: 0;
  transition: 0.6s;
  pointer-events: none;
  transform-origin: bottom left;
}
.thumbnail.to-left{
  transform: translate3d(-50%, -130%, 0) scale(0.8);
}
.bullet:hover .thumbnail{
  opacity: 0.8;
  transform: translate3d(0, calc(-130%), 0) scale(0.8);
}
.bullet:hover .thumbnail.to-left{
  opacity: 0.8;
  transform: translate3d(-50%, calc(-130%), 0) scale(0.8);
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
  white-space: nowrap
}
#camdetail1{
  background-image: url('#{$staticpath}static/timeSlide/camdetail1.png');
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
  background-image: url('#{$staticpath}static/timeSlide/camdetail2.png');
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
@media only screen and (min-width: 1921px)  {
  .draggable-container, .home-container{
    font-size: 16px;
  }
}

@media only screen and (min-width: 601px) and (max-width: 1600px)  {
  .bbll{
    max-width: 190px;
  }
  .full-logo{
    margin: 20px 0 1.15vmin;
    min-height:180px;
    max-width: 225px;
  }
  .init-content{
    max-width: 225px;
  }
  .home-container .cta-info, #cta-participa {
    width: 100%;
    max-height: 50px;
  }
  .home-container{
    font-size: 16px;
    margin-bottom: 5px;
  }
  .home-container p{
    left: -88px;
  }
  .home-container p img{
    max-width: 50%;
  }
  .thumbnail{
    width: 182px;
    height: 80px;
  }
  #time-selector {
    bottom: 40px;
  }
  .drag-info {
    width: 70%;
    max-height: 52px;
  }
  #text-container{
    max-width: 70%;
  }
  #drag-1 #text-container{
    max-width: initial;
    width: 325px;
    max-width: initial;
    transform: translateX(0)
  }
}

@media only screen and (max-width: 600px)  {
  .bbll{
    opacity: 1;
    display: block;
    width: 95%;
    min-height: 20px;
    transition: 0.3s;
  }
  .bbll.compact {
    min-height: 0;
    overflow: hidden;
    opacity: 0;
  }
  .home-container{
    width: 200px;
    max-height: 480px;
    font-size: 14px;
    line-height: 1;
    top: 40px;
    transform: translate3d(-50%,0,0)
  }
  .init-content{
    width: 100%;
  }
  .home-container p{
    margin-bottom: 5px;
    width: 100%;
    left: 0;
  }
  .full-logo{
    min-height: 160px;
    margin: 0;
    margin-bottom: 5px;
    transition: 0.6s;
    background-size: 100%;
  }
  .full-logo.compact{
    min-height: 0px;
  }
  #text-container.hidden{
    padding-bottom: 0;
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
    padding-top: 40px;
    padding-bottom: 50px;
    min-height: initial;
    position: relative;
    pointer-events: all;
  }
  #drag-1.compact {
    height: 170px;
  }
  #drag-1 #text-container{
    max-width: initial;
    width: 100%;
    max-width: initial;
    transform: translateX(0)
  }
  .cta-participa{
    width: 100%;
    max-height: 60px;
    transition: 0.6s;
    opacity: 1;
  }
  .cta-participa.hidden{
    max-height: 0;
    opacity: 0;
    pointer-events: none;
  }
  .drag-info{
    display: none;
  }
  #drag-toggle{
    width: 100%;
    height: 43px;
    background-image: url('#{$staticpath}static/timeSlide/hide-content.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    margin: 0 auto;
    cursor: pointer;
    position: absolute;
    user-select: none;
    outline: 0;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }
  #drag-toggle.hidden{
    background-image: url('#{$staticpath}static/timeSlide/show-content.png');
  }
  #time-selector{
    transform: rotate(90deg);
    bottom: initial;
    top: 0;
    width: 88vh;
    left: 10px;
  }
  .hour-container{
    min-width: 85px;
    transform: translate3d(-30px,-50px,0) rotate(-90deg) scale(0.8);
    width:initial;
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
  .bullet:nth-child(odd){
    border-radius: 0;
    height: 16px;
    width: 1px;
  }
  .bullet.v2{
    height: 8px;
    width: 8px;
    border-radius: 50%;
}
  .bullet-active{
    border-radius: 50%;
    width: 12px;
    height: 12px;
    border: 0;
    border: 2px solid white;
  }
  .bullet:hover {
     transform: translate3d(-50%,-50%,0)
  }
  .slider::-webkit-slider-thumb {
    top: -40px;
    height: 110px;
    width: 30px
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
    max-height:0;
  }
  #share-container{
    left: initial;
    right: 10px;
    top: 10px;
    transform-origin: top right;
    transform: scale(0.4);
    max-width: 128px;
  }
  .cla-seal {
    top: calc(90% - 110px);
    right: 10px;
    width: 80px;
    height: 110px
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
    background: url('#{$staticpath}static/timeSlide/shares/x_sprite.png');
  }
  .share-icon.fb, .share-icon.tw, .share-icon.wh  {
    transition: 0.6s;
    opacity: 0;
    min-height: 0;
    pointer-events:  none;
    box-sizing: border-box;
    margin-bottom: 0;
  }
  .share-icon.fb a, .share-icon.tw a, .share-icon.wh a {
    min-height: 0;
  }
  .share-icon.fb{
    transform: translate3d(0,-100%,0);
  }
  .share-icon.tw{
    transform: translate3d(0,-200%,0);
    transition-delay: 0.1s;
  }
  .share-icon.wh{
    transform: translate3d(0,-300%,0);
    transition-delay: 0.2s;
  }
  .share-icon.fb.displayed, .share-icon.tw.displayed, .share-icon.wh.displayed {
    opacity: 1;
    height: 128px;
    transform: translate3d(0,0,0);
    margin-bottom: 50px;
    pointer-events: all;
    animation-play-state: running;
    -webkit-animation-play-state: running;
  }
  .share-icon.fb.displayed a, .share-icon.tw.displayed a, .share-icon.wh.displayed a {
    min-height: 128px;
  }
  .share-icon.yt{
    margin: 0;
    transition: 0.6s;
    opacity: 1;
    animation-play-state: running;
    -webkit-animation-play-state: running;
  }
  .share-icon.yt a{
    display: block;
    height: 80px;
    position: absolute;
    bottom: 0;
  }
  .share-icon.yt span{
    top: 100%;
    left: 0;
    transform: translate3d(0, 0, 0) scale3d(0.9, 0.9, 0.9);
  }
  .share-icon.yt:hover span{
    transform: translate3d(0, 0, 0) scale3d(0.9, 0.9, 0.9);
  }
  .share-icon.yt.hidden{
    opacity: 0;
    pointer-events: none;
  }
}
</style>
