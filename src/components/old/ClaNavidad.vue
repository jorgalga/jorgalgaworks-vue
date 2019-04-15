<template>
  <div class="hello claNavidad-container">
    <div id="sec-4" class="appsection pos-right">
      <div class="right-side">
        <div class="parallax-container"></div>
      </div>
      <div class="left-pattern" v-bind:style="'background-image: url('+pathStatic+pathMobile+shareFondos[lecheSelected][patternSelected]+'?v='+hashCode+')'"></div>
      <div class="appsection-container">
        <div v-if="isMobile === false" v-bind:style="'background-image: url('+pathStatic+pathMobile+shareBriks[lecheSelected][patternSelected]+'?v='+hashCode+')'" class="bg-image"></div>
        <div class="text-container">
          <h1>¡Bravo!</h1>
          <p>Pero aún quedan por envolver.</p>
          <h2>{{lechesRestantes}}</h2>
          <div id="leches-progress">
            <div class="left-image"></div>
            <div class="right-image"></div>
            <div class="lp-bar-container">
              <div id="lp-bar" v-bind:style="'width:'+Math.ceil(lechesCompartidas / lechesTotales * 100)+'%'"></div>
            </div>
          </div>
          <p style="padding-top: 3vh">Comparte con tus contactos para<br>que también <b>hagan sus regalos</b> a<br>los niños de Aldeas Infantiles SOS :)</p>
          <a class="btn-rounded colorFB socialBtn"><span class="icon-facebook"></span></a>
          <a class="btn-rounded colorTW socialBtn"><span class="icon-twitter"></span></a>
          <a class="btn-rounded colorWH socialBtn"><span class="icon-whatsapp"></span></a>
          <br>
          <div class="bb-container">
            <span class="button--bubble__container">
              <a v-on:click.prevent="reloadSite()" target="_blank" class="button button--bubble">
                Envolver otro regalo <span class="icon-ctrl"></span>
              </a>
              <span class="button--bubble__effect-container">
                <span class="circle top-left"></span>
                <span class="circle top-left"></span>
                <span class="circle top-left"></span>
                <span class="button effect-button"></span>
                <span class="circle bottom-right"></span>
                <span class="circle bottom-right"></span>
                <span class="circle bottom-right"></span>
              </span>
            </span>
          </div>
          <br>
          <a href="https://www.aldeasinfantiles.es/" target="blank" class="img-btn"><img v-bind:width="(166 * dRatio) + 'px'" v-bind:height="(45 * dRatio) + 'px'" src="static/claNavidad/logo-aldeas.png"></a>
        </div>
      </div>
    </div>
    <div id="sec-3" class="appsection pos-right">
      <a target="blank" class="img-btn"><img v-bind:width="(220 * dRatio) + 'px'" v-bind:height="(60 * dRatio) + 'px'" src="static/claNavidad/logo-aldeas-white.png"></a>
      <div id="video-viewport">
        <div class="sprite-el" v-for="item in videoConfig['v00']" v-bind:style="{'z-index': item.zIndex}" :key="item.index">
        </div>
        <!--TESTdiv class="sprite-el" v-if="isMobile === true" v-for="item in videoConfig['v00']" v-bind:style="{'z-index': item.zIndex}" :key="item.index">
        </div>
        <video v-if="isMobile === false" playsinline v-for="item in videoConfig['v00']" preload="auto" v-bind:style="{'z-index': item.zIndex}" :key="item.index">
        </video-->
        <div class="video-mask"></div>
      </div>
      <div id="vidDrag" class="video-draggables" v-bind:style="'width: 900px; height: 900px; transform: translate3d(-50%,-50%,0) scale('+dScale+')'">
        <svg v-for="item in videoConfig['v' + lecheSelected + patternSelected]" v-bind:id="'curved-drag-'+item.index" class="curverd-drag" v-bind:width="item.drag.boxSize+'px'" v-bind:height="item.drag.boxSize+'px'" version="1.1" xmlns="http://www.w3.org/2000/svg" v-bind:style="'transform: translate3d('+(-50 + item.drag.offsetX*dTrans)+'%,'+(-50 + item.drag.offsetY*dTrans)+'%,0)'" :key="item.index">
          <path v-bind:id="'pathB-'+item.index" v-bind:d="'M'+item.drag.startX+' '+item.drag.startY+' Q '+item.drag.middleX+' '+item.drag.middleY+' '+item.drag.endX+' '+item.drag.endY" stroke="white" v-bind:stroke-width="4" v-bind:stroke-dasharray="0.5+' '+10" stroke-linecap="round" fill="transparent"/>
          <path v-bind:id="'path-'+item.index" v-bind:d="'M'+item.drag.startX+' '+item.drag.startY+' Q '+item.drag.middleX+' '+item.drag.middleY+' '+item.drag.endX+' '+item.drag.endY" v-bind:stroke-width="5" stroke="transparent" fill="transparent" stroke-linecap="round"/>
          <circle v-bind:id="'knob-B'+item.index" v-bind:r="(30)" fill="transparent" v-bind:stroke-width="2" stroke="#fff"/>
          <circle v-bind:id="'knob-AO'+item.index" v-bind:r="(30)" fill="transparent" stroke-width="2" stroke="#fff"/>
          <circle v-bind:id="'knob-A'+item.index" v-bind:r="(28)" fill="#1b6aa8" stroke-width="0" stroke="#fff"/>
          <g v-bind:id="'svg-arrow-'+item.index" width="60" height="60" transform="scale(1)">
            <g v-bind:transform="'rotate(' + item.drag.angles[0] + ' 30 30)'">
            <line stroke-linecap="undefined" stroke-linejoin="undefined" id="svg_6" y2="30.5" x2="35" y1="20" x1="25" fill-opacity="null" stroke-width="2" stroke="#ffffff" fill="none"/>
            <line stroke-linecap="undefined" stroke-linejoin="undefined" id="svg_7" y2="29.5" x2="35" y1="40" x1="25" fill-opacity="null" stroke-width="2" stroke="#ffffff" fill="none"/>
            </g>
          </g>
          <svg class="inside">
          </svg>
        </svg>
        <div id="hold-video-button">
          <div class='container'>
            <span class='pulse-button'><div><span>Pulsar</span></div></span>
          </div>
          <div class="flecha" style="display: none"></div>
        </div>
      </div>
    </div>
    <div id="sec-2" class="appsection pos-right">
      <div v-bind:id="'pattern-selected-'+patternSelected" class="pattern-container">
        <!-- div class="ptrn3 pattern-item"></div>
        <div class="ptrn2 pattern-item"></div -->
        <div class="ptrn1 pattern-item" v-bind:style="'background-image: url('+ pathStatic + pathMobile + lecheItems[lecheSelected].urlPatrones[1] +'?v='+hashCode+')'"></div>
        <div class="ptrn0 pattern-item" v-bind:style="'background-image: url('+ pathStatic + pathMobile + lecheItems[lecheSelected].urlPatrones[0] +'?v='+hashCode+')'"></div>
      </div>
      <div class="leches-container">
        <div v-bind:id="'leit-sel-'+lecheSelected" class="leche-item" v-bind:style="'background-image: url('+ pathStatic + pathMobile + lecheItems[lecheSelected].urlBotella +'?v='+hashCode+')'"></div>
      </div>
      <div class="items-selector">
        <div id="pattern-selector-izq" class="item-selector-izq rb-container">
            <a v-bind:id="'vi-'+ lecheSelected +'-'+patternSelected" v-on:click.prevent="prevPattern()" class="btn-rounded claBlued disabled"><span class="icon-ctrl1"></span></a>
        </div>
        <div id="pattern-selector-der" class="item-selector-der rb-container">
            <a v-bind:id="'vd-'+ lecheSelected +'-'+patternSelected" v-on:click.prevent="nextPattern()" class="btn-rounded claBlued"><span class="icon-ctrl"></span></a>
        </div>
      </div>
      <div class="text-container">
        <div v-bind:id="'patternStates-'+patternSelected" class="states-index">
          <div class="state-bullet"></div>
          <div class="state-bullet"></div>
        </div>
        <h1><span class="d-copy">Envuélvelo <br>con cariño.</span><span class="m-copy">Y ahora... ¿Qué papel?</Span></h1>
        <p>Ahora elige el papel<br>con el que quieres envolverlo.</p>
        <div class="bb-wrapper">
          <div class="bb-container">
            <span class="button--bubble__container">
              <a v-on:click.prevent="prevSection()" class="button inverted button--bubble">
                <span class="icon-ctrl1"></span>Volver
              </a>
              <span class="button--bubble__effect-container">
                <span class="circle top-left"></span>
                <span class="circle top-left"></span>
                <span class="circle top-left"></span>
                <span class="button effect-button"></span>
                <span class="circle bottom-right"></span>
                <span class="circle bottom-right"></span>
                <span class="circle bottom-right"></span>
              </span>
            </span>
          </div>
          <div class="bb-container">
            <span class="button--bubble__container">
              <a v-on:click.prevent="nextSection()" class="button button--bubble">
                Elegir Papel <span class="icon-ctrl"></span>
              </a>
              <span class="button--bubble__effect-container">
                <span class="circle top-left"></span>
                <span class="circle top-left"></span>
                <span class="circle top-left"></span>
                <span class="button effect-button"></span>
                <span class="circle bottom-right"></span>
                <span class="circle bottom-right"></span>
                <span class="circle bottom-right"></span>
              </span>
            </span>
          </div>
        </div>
        <br>
        <a target="blank" class="img-btn"><img v-bind:width="(166 * dRatio) + 'px'" v-bind:height="(45 * dRatio) + 'px'" src="static/claNavidad/logo-aldeas.png"></a>
      </div>
    </div>
    <div id="sec-1" class="appsection pos-right">
      <div v-bind:id="'state-'+lecheSelected" class="state">
        <div v-for="item in lecheItems.slice().reverse()" v-bind:id="'pattern-'+item.index" class="pattern" v-bind:style="'background-image: url('+ pathStatic + pathMobile + item.urlPatrones[0] +'?v='+hashCode+')'" :key="item.index"></div>
        <!--div id="white-bar-2"></div>
        <div id="white-bar-1"></div-->
        <div id="white-bar" class="white-bar">
           <div class="parallax-container"></div>
        </div>
      </div>
      <div class="appsection-container">
        <div class="leches-container">
          <!--div id="leit-3" class="leche-item hidden"></div>
          <div id="leit-2" class="leche-item hidden"></div>
          <div id="leit-1" class="leche-item hidden"></div-->
          <div v-for="item in lecheItems.slice().reverse()" v-bind:id="'leit-'+item.index" v-bind:style="'background-image: url('+ pathStatic + pathMobile + item.urlBotella +'?v='+hashCode+')'" class="leche-item hidden" :key="item.index"></div>
        </div>
        <div class="items-selector">
          <div id="leche-selector-izq" class="item-selector-izq rb-container">
             <a v-on:click.prevent="prevLeche()" class="btn-rounded claBlued disabled "><span class="icon-ctrl1"></span></a>
          </div>
          <div id="leche-selector-der" class="item-selector-der rb-container">
             <a v-on:click.prevent="nextLeche()" class="btn-rounded claBlued "><span class="icon-ctrl"></span></a>
          </div>
        </div>
        <div class="text-container translucid">
          <div v-bind:id="'lecheStates-'+lecheSelected" class="states-index">
            <div class="state-bullet"></div>
            <div class="state-bullet"></div>
            <div class="state-bullet"></div>
            <div class="state-bullet"></div>
          </div>
          <h1><span class="d-copy">¿Cuál Elegimos?</span><span class="m-copy">¿Qué brik elegimos?</span></h1>
          <p>Estos son nuestros briks<br>edición especial navidad. <br>Selecciona el que mas te guste</p>
          <div class="bb-wrapper">
           <div class="bb-container">
            <span class="button--bubble__container">
              <a v-on:click.prevent="prevSection()" class="button inverted button--bubble">
                <span class="icon-ctrl1"></span>Volver
              </a>
              <span class="button--bubble__effect-container">
                <span class="circle top-left"></span>
                <span class="circle top-left"></span>
                <span class="circle top-left"></span>
                <span class="button effect-button"></span>
                <span class="circle bottom-right"></span>
                <span class="circle bottom-right"></span>
                <span class="circle bottom-right"></span>
              </span>
            </span>
          </div>
          <div class="bb-container">
            <span class="button--bubble__container">
              <a v-on:click.prevent="nextSection()" class="button button--bubble">
                Elegir Brik <span class="icon-ctrl"></span>
              </a>
              <span class="button--bubble__effect-container">
                <span class="circle top-left"></span>
                <span class="circle top-left"></span>
                <span class="circle top-left"></span>
                <span class="button effect-button"></span>
                <span class="circle bottom-right"></span>
                <span class="circle bottom-right"></span>
                <span class="circle bottom-right"></span>
              </span>
            </span>
          </div>
          </div>
          <br>
          <a target="blank" class="img-btn"><img v-bind:width="(166 * dRatio) + 'px'" v-bind:height="(45 * dRatio) + 'px'" src="static/claNavidad/logo-aldeas.png"></a>
        </div>
      </div>
    </div>
    <div id="sec-0" class="appsection" v-bind:style="'background-image: url('+pathStatic+pathMobile+randomized+'?v='+hashCode+')'">
      <div class="parallax-container">
      </div>
      <div class="appsection-container">
        <div class="text-container">
          <h1>Un brik, <br>un regalo</h1>
          <p>Estas Navidades no<br>te olvides de envolver<br>tu regalo para los niños<br>de <b>Aldeas infantiles SOS</b></p>
          <a target="blank" class="img-btn"><img v-bind:width="(166 * dRatio) + 'px'" v-bind:height="(45 * dRatio) + 'px'" src="static/claNavidad/logo-aldeas.png"></a>
          <br>
          <div class="bb-container">
            <span class="button--bubble__container">
              <a v-on:click.prevent="nextSection()" class="button button--bubble">
                Empezar<span class="icon-ctrl"></span>
              </a>
              <span class="button--bubble__effect-container">
                <span class="circle top-left"></span>
                <span class="circle top-left"></span>
                <span class="circle top-left"></span>
                <span class="button effect-button"></span>
                <span class="circle bottom-right"></span>
                <span class="circle bottom-right"></span>
                <span class="circle bottom-right"></span>
              </span>
            </span>
          </div>
        </div>
      </div>
      <a href="https://www.centrallecheraasturiana.es/unlitrounregalo/docs/BN_Campaña_Navidad_Central_Lechera_Asturiana_2018.pdf" class="bbll" target="_blank"><p>Bases legales</p></a>
    </div>
    <div v-bind:id="'ui-'+secActive+''+lecheSelected+''+patternSelected" class="ui-elements">
      <div class="debug-info">{{debug}}</div>
      <a href="https://www.centrallecheraasturiana.es/" target="_blank"><div class="logo"></div></a>
      <div id='share-container' class="share-container">
        <a v-on:click.prevent="toogleshare()" class="btn-rounded claBlued socialBtn"><span class="icon-share2"></span></a>
        <a target="_blank" href="https://www.facebook.com/" class="btn-rounded socialLink"><span class="icon-facebook"></span></a>
        <a target="_blank" href="https://twitter.com/" class="btn-rounded socialLink"><span class="icon-twitter"></span></a>
        <a target="_blank" href="https://www.whatsapp.com/" class="btn-rounded socialLink"><span class="icon-whatsapp"></span></a>
      </div>
    </div>
    <!--div id="catapult-cookie-bar" class="">
      <div class="ctcc-inner ">
        <span class="ctcc-left-side">Esta página web utiliza cookies propias y de terceros. Si sigue navegando por la página, significa que está de acuerdo y acepta nuestra <a class="ctcc-more-info-link" tabindex="0" target="_blank" href="https://www.centrallecheraasturiana.es/es/politica-de-cookies/">Política de cookies.</a></span>
        <span class="ctcc-right-side"><button id="catapultCookie" tabindex="0" onclick="catapultAcceptCookies();">Aceptar</button></span>
      </div>
    </div-->
    <div id="loader" class="loading-splash fadeout translucid">
      <div class="container">
        <img width="64px" height="64px" src="static/claNavidad/loader_v3.gif">
        <p>Cargando {{ loadingProgress }} %</p>
      </div>
    </div>
    <div id="rotate-screen" >
      <div class="rs-container">
        <img width="70%" height="70%" src="static/claNavidad/landscape.gif">
        <h1>Gira tu móvil</h1>
      </div>
    </div>
  </div>
</template>

<script>
import {TweenMax, TimelineLite, TimelineMax, SlowMo, Linear, Elastic} from 'gsap'
import Draggable from 'gsap/Draggable'
import {SpriteCSS} from '../lib/SpriteCSS'
// pathStatic: https://www.centrallecheraasturiana.es/unlitrounregalo/test/static/claNavidad/
// pathStatic: '/static/claNavidad/',
export default {
  name: 'ClaNavidad',
  data () {
    return window.dataConfig
  },
  created () {
    this.hashCode = this.hashCode()
    this.randomized = Math.floor(Math.random() * 8)
    var index = []
    // build the index
    for (var x in this.homeBriks) {
      index.push(x)
    }
    this.randomized = this.homeBriks[index[this.randomized]]
    this.isMobile = this.detectMobile()
    // console.log(this.isMobile)
    if (!this.isMobile) {
      this.pathItems += 'desktop/'
    } else {
      this.dTrans = 0.0
      this.pathMobile = '_mobile/'
    }
    // console.log('isMobile ' + this.isMobile)
  },
  mounted () {
    document.getElementById('leit-0').classList.remove('hidden')
    this.resizeFonts()
    this.initParallax()
    if (!this.isMobile) {
      this.initBubleBtn()
    } else {
      this.initiOrientationEvent()
    }
    this.spriteVideoInit()
  },
  methods: {
    reloadSite () {
      window.location.reload()
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
    hashCode () {
      return '_' + Math.random().toString(36).substr(2, 9)
    },
    increaseCounter () {
      var path = 'https://clacounter-jorgalga.c9users.io/increaseLeches'
      var request = new XMLHttpRequest()
      request.open('GET', path, true)
      request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
          console.log('done')
        } else {
          // We reached our target server, but it returned an error
        }
      }
      request.onerror = function () {
        // There was a connection error of some sort
      }
      request.send()
    },
    readCounter () {
      var _ = this
      var path = 'https://clacounter-jorgalga.c9users.io/getLeches'
      var request = new XMLHttpRequest()
      request.open('GET', path, true)
      request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
          _.lechesCompartidas = parseInt(request.responseText) + 1
          _.setLechesRestantes()
          _.increaseCounter()
        } else {
          // We reached our target server, but it returned an error
          console.log(request.status)
        }
      }
      request.onerror = function () {
        // There was a connection error of some sort
        console.log('error')
      }
      request.send()
    },
    setLechesRestantes () {
      var a = this.lechesTotales - this.lechesCompartidas
      var b = '.'
      var position = 2
      if (a > 9999) {
        this.lechesRestantes = [a.toString().slice(0, position), b, a.toString().slice(position)].join('')
      } else if (a > 999) {
        position = 1
        this.lechesRestantes = [a.toString().slice(0, position), b, a.toString().slice(position)].join('')
      } else {
        this.lechesRestantes = '' + a + ''
      }
    },
    initParallax () {
      var _ = this
      // Remove ongoing parallax. Look enabled and delete elements
      window.removeEventListener('mousemove', BuildUp.mousemoveHandler)
      var enableds = document.querySelector('.parallax-container.enabled')
      if (enableds) {
        enableds.classList.remove('enabled')
        setTimeout(function () {
          enableds.innerHTML = ''
          BuildUp()
        }, 50)
      } else {
        BuildUp()
      }
      function BuildUp () {
        // vars
        var offx = 0
        var offy = 0
        var pc = document.getElementById('sec-' + _.secActive).getElementsByClassName('parallax-container')[0]
        var key = 'sec00'
        if (_.secActive > 0) {
          key = 'sec' + _.secActive + _.lecheSelected
        }
        if (_.secActive === 4) {
          key = 'sec40'
        }
        var array = _.parallax[key]
        // Add elements of the index
        for (var i = 0; i < array.length; i++) {
          var bgImage = 'background-image:url(' + _.pathStatic + array[i].url + '?v=' + _.hashCode + ');'
          var posx = 'left: ' + (array[i].posX * pc.offsetWidth) + 'px;'
          var posy = 'top: ' + (array[i].posY * pc.offsetHeight) + 'px;'
          pc.innerHTML += '<div style="' + posx + posy + '" data-speed="' + array[i].speed + '" data-zi="' + array[i].zIndex + '" class="parallax-item"><div style="' + bgImage + '" class="parallax-item-image"></div></div>'
        }
        pc.classList.add('enabled')
        document.getElementById('sec-' + _.secActive).classList.remove('disabled')
        // Bind mousemovement
        requestAnimationFrame(function () {
          window.addEventListener('mousemove', mousemoveHandler)
          var pi = document.getElementsByClassName('parallax-item')
          for (var i = 0; i < pi.length; i++) {
          }
        })
        function mousemoveHandler (e) {
          offx = -2 * ((e.pageX / window.innerWidth) - 0.5)
          offy = -2 * ((e.pageY / window.innerHeight) - 0.5)
          var pi = document.getElementsByClassName('parallax-item')
          for (var i = 0; i < pi.length; i++) {
            pi[i].style.transform = 'translate3D(' + offx * 10 * pi[i].getAttribute('data-speed') + 'px,' + offy * 6 * pi[i].getAttribute('data-speed') + 'px,' + pi[i].getAttribute('data-zi') + 'px)'
          }
        }
      }
    },
    resizeFonts () {
      var _ = this
      var ns = 0
      var ns2 = 0
      // var ns3 = 0
      var H1s = document.getElementsByTagName('H1')
      var Ps = document.getElementsByTagName('p')
      // var Buttons = document.getElementsByClassName('button')
      var resizeTimer
      window.onresize = function () {
        clearTimeout(resizeTimer)
        resizeTimer = setTimeout(function () {
          // Run code here, resizing has "stopped"
          resizeHandler()
        }, 250)
      }
      function resizeHandler () {
        _.dRatio = Math.min(window.innerHeight / 1280, 1.0)
        // Vdrags
        _.dScale = Math.min((window.innerHeight / 900) - 0.1, 1.0)
        if (_.isMobile) {
          _.dScale = Math.min((window.innerHeight / 900) - 0.2, 1.0)
          _.dScale = 0.8
        }

        // fonts
        ns = Math.min((window.innerHeight * (_.sizeH1 / 1280)), _.sizeH1)
        ns2 = Math.min((window.innerHeight * (_.sizeP / 1280)), _.sizeP)
        // ns3 = Math.min((window.innerHeight * (_.sizeBtn / 1280)), _.sizeBtn)
        for (var i = 0; i < H1s.length; i++) {
          H1s[i].style.fontSize = ns + 'px'
        }
        for (i = 0; i < Ps.length; i++) {
          Ps[i].style.fontSize = ns2 + 'px'
        }
        /*
        for (i = 0; i < Buttons.length; i++) {
          Buttons[i].style.fontSize = ns3 + 'px'
        } */
        document.getElementsByTagName('H2')[0].style.fontSize = Math.min((window.innerHeight * (128 / 1280)), 128) + 'px'
        /*
        _.resetBubles()
        _.killBTLS()
        setTimeout(function () {
          _.initBubleBtn()
        }, 200)
        */
      }
      resizeHandler()
    },
    detectMobile () {
      if (window.innerWidth <= this.breakMobile) {
        return true
      } else {
        return false
      }
    },
    showLoader () {
      document.getElementById('loader').classList.remove('fadeout')
    },
    hideLoader () {
      document.getElementById('loader').classList.add('fadeout')
    },
    spriteVideoInit () {
      var _ = this
      var viewport = document.getElementById('video-viewport')
      var vids = document.getElementsByTagName('VIDEO')
      // TEST if (_.isMobile) {
      if (_) {
        vids = document.getElementsByClassName('sprite-el')
        for (let i = 0; i < vids.length; i++) {
          // console.log(vids[i])
          _.sprites.push(new SpriteCSS(vids[i], _.isMobile))
        }
        console.log(_.sprites)
      } else {
        console.log(vids)
        for (let i = 0; i < vids.length; i++) {
          let video = vids[i]
          video.addEventListener('loadedmetadata', function () {
            // console.log('video duration information available')
            _.vid_w_orig = parseInt(video.videoWidth)
            _.vid_h_orig = parseInt(video.videoHeight)
            window.addEventListener('resize', function () {
              resizeToCover(video)
            })
            resizeToCover(video)
          })
        }
      }
      function resizeToCover (video) {
        viewport.style.width = window.innerWidth + 'px'
        viewport.style.height = window.innerHeight + 'px'
        // use largest scale factor of horizontal/vertical
        var scaleH = window.innerWidth / _.vid_w_orig
        var scaleV = window.innerHeight / _.vid_h_orig
        var scale = scaleH > scaleV ? scaleH : scaleV
        // don't allow scaled width < minimum video width
        if (scale * _.vid_w_orig < _.minvw) {
          scale = _.minvw / _.vid_w_orig
        }
        video.style.width = scale * _.vid_w_orig + 'px'
        video.style.height = scale * _.vid_h_orig + 'px'
      }
    },
    spriteDragControllers (sprite, index) {
      var _ = this
      var drg = this.videoConfig['v' + _.lecheSelected + _.patternSelected][index].drag
      if (index === 0) {
        document.getElementById('curved-drag-0').classList.add('displayed')
      }
      // --- hold behaviour
      if (index === 4) {
        var videoTicker = {}
        var tf = 1000 / 25
        var hvb = document.getElementById('hold-video-button')
        var press = 'mousedown'
        var release = 'mouseup'
        if (this.isMobile) {
          press = 'touchstart'
          release = 'touchend'
        }
        hvb.addEventListener(press, function () {
          hvb.classList.add('pulsed')
          hvb.getElementsByClassName('pulse-button')[0].classList.add('pulsed')
          videoTicker = setInterval(function () {
            if (!sprite.isAtTheEnd()) {
              sprite.nextFrame()
            } else {
              // console.log('at the end')
              _.readCounter()
              _.nextSection()
              clearInterval(videoTicker)
            }
          }, tf)
        })
        hvb.addEventListener(release, function () {
          hvb.classList.remove('pulsed')
          hvb.getElementsByClassName('pulse-button')[0].classList.remove('pulsed')
          clearInterval(videoTicker)
        })
      }
      // ---
      var D = document.createElement('div')
      var position = 0

      var rad = 30
      if (drg.type === 'x' & drg.direction === 1) {
        console.log('case 1')
        drg.startX = drg.startX + rad
        drg.endX = drg.endX - rad
      }
      if (drg.type === 'x' & drg.direction === -1) {
        console.log('case 2')
        drg.startX = drg.startX - rad
        drg.endX = drg.endX + rad
      }
      if (drg.type === 'y' & drg.direction === 1) {
        console.log('case 3')
        drg.startY = drg.startY + rad
        drg.endY = drg.endY - rad
      }
      if (drg.type === 'y' & drg.direction === -1) {
        console.log('case 4')
        drg.startY = drg.startY - rad
        drg.endY = drg.endY + rad
      }
      TweenMax.set('#svg-arrow-' + index, {x: drg.startX - 30, y: drg.startY - 30})
      TweenMax.set('#knob-A' + index, {x: drg.startX, y: drg.startY})
      TweenMax.set('#knob-AO' + index, {x: drg.startX, y: drg.startY})
      TweenMax.set('#knob-B' + index, {x: drg.endX, y: drg.endY})
      var tl = new TimelineMax({paused: true})
        .from('#path-' + index, 1, {drawSVG: '0%', stroke: 'transparent', ease: Linear.easeNone})
        .to('#knob-A' + index, 1, {bezier: {type: 'quadratic', values: [{x: drg.startX, y: drg.startY}, {x: drg.middleX, y: drg.middleY}, {x: drg.endX, y: drg.endY}]}, ease: Linear.easeNone}, 0)
        .to('#knob-AO' + index, 1, {bezier: {type: 'quadratic', values: [{x: drg.startX, y: drg.startY}, {x: drg.middleX, y: drg.middleY}, {x: drg.endX, y: drg.endY}]}, ease: Linear.easeNone}, 0)
        .to('#svg-arrow-' + index, 1, {bezier: {type: 'quadratic', values: [{x: drg.startX - 30, y: drg.startY - 30}, {x: drg.middleX - 30, y: drg.middleY - 30}, {x: drg.endX - 30, y: drg.endY - 30}]}, ease: Linear.easeNone}, 0)
      var bounds = {}
      if (drg.type === 'x') {
        bounds = {minX: 0, maxX: drg.boxSize * drg.direction * _.dScale}
      } else if (drg.type === 'y') {
        bounds = {minY: 0, maxY: drg.boxSize * drg.direction * _.dScale}
      }
      // console.log(bounds)
      Draggable.create(D, {trigger: '#knob-A' + index,
        type: drg.type,
        throwProps: true,
        bounds: bounds,
        onDrag: Update,
        onDragEnd: CheckIsDragEnd,
        onThrowUpdate: Update}
      )
      TweenMax.to('#pathB-' + index, 0.5, {strokeDashoffset: -10, repeat: -1, ease: Linear.easeNone})

      function Update () {
        if (drg.type === 'x') {
          position = Math.abs(this.x / (drg.boxSize - 60) / _.dScale)
        } else if (drg.type === 'y') {
          position = Math.abs(this.y / (drg.boxSize - 60) / _.dScale)
        }
        drg.angles[0] = (drg.angles[2] - drg.angles[1]) * position + drg.angles[1]
        _.debug = position
        tl.progress(position)
        sprite.setFrame(Math.min(position, 1.0))
      }
      function CheckIsDragEnd () {
        // console.log('dragend')
        if (drg.type === 'x') {
          position = Math.abs(this.x / (drg.boxSize - 60) / _.dScale)
        } else if (drg.type === 'y') {
          position = Math.abs(this.y / (drg.boxSize - 60) / _.dScale)
        }
        if (position > 0.99) {
          // console.log('Position 1')
          if (index < 3) {
            _.sprites[index + 2].updateBG()
          }
          sprite.sprite_el.classList.add('faded')
          document.getElementById('curved-drag-' + _.interIndex).classList.remove('displayed')
          _.interIndex++
          if (_.interIndex < _.videoConfig['v' + _.lecheSelected + _.patternSelected].length - 1) {
            document.getElementById('curved-drag-' + _.interIndex).classList.add('displayed')
          }
          if (_.interIndex === _.videoConfig['v' + _.lecheSelected + _.patternSelected].length - 1) {
            // console.log('ultimo')
            document.getElementById('hold-video-button').classList.add('displayed')
          }
        }
      }
    },
    videoDragControllers (video, index) {
      var _ = this
      var drg = this.videoConfig['v' + _.lecheSelected + _.patternSelected][index].drag
      if (index === 0) {
        document.getElementById('curved-drag-0').classList.add('displayed')
      }
      if (index === this.videoConfig['v' + _.lecheSelected + _.patternSelected].length - 1) {
        var videoTicker = {}
        var tf = 1000 / 24
        var frame = 1
        var hvb = document.getElementById('hold-video-button')
        var press = 'mousedown'
        var release = 'mouseup'
        if (this.isMobile) {
          press = 'touchstart'
          release = 'touchend'
        }
        hvb.addEventListener(press, function () {
          hvb.classList.add('pulsed')
          hvb.getElementsByClassName('pulse-button')[0].classList.add('pulsed')
          videoTicker = setInterval(function () {
            var prg = frame / (12 * video.duration)
            video.currentTime = prg * video.duration
            frame++
            if (prg >= 1.0) {
              _.readCounter()
              _.nextSection()
              clearInterval(videoTicker)
            }
          }, tf)
        })
        hvb.addEventListener(release, function () {
          hvb.classList.remove('pulsed')
          hvb.getElementsByClassName('pulse-button')[0].classList.remove('pulsed')
          clearInterval(videoTicker)
        })
      }
      var D = document.createElement('div')
      var position = 0
      var rad = 30
      if (drg.type === 'x' & drg.direction === 1) {
        console.log('case 1')
        drg.startX = drg.startX + rad
        drg.endX = drg.endX - rad
      }
      if (drg.type === 'x' & drg.direction === -1) {
        console.log('case 2')
        drg.startX = drg.startX - rad
        drg.endX = drg.endX + rad
      }
      if (drg.type === 'y' & drg.direction === 1) {
        console.log('case 3')
        drg.startY = drg.startY + rad
        drg.endY = drg.endY - rad
      }
      if (drg.type === 'y' & drg.direction === -1) {
        console.log('case 4')
        drg.startY = drg.startY - rad
        drg.endY = drg.endY + rad
      }

      TweenMax.set('#svg-arrow-' + index, {x: drg.startX - 30, y: drg.startY - 30})
      TweenMax.set('#knob-A' + index, {x: drg.startX, y: drg.startY})
      TweenMax.set('#knob-AO' + index, {x: drg.startX, y: drg.startY})
      TweenMax.set('#knob-B' + index, {x: drg.endX, y: drg.endY})

      var tl = new TimelineMax({paused: true})
        .from('#path-' + index, 1, {drawSVG: '0%', stroke: 'transparent', ease: Linear.easeNone})
        .to('#knob-A' + index, 1, {bezier: {type: 'quadratic', values: [{x: drg.startX, y: drg.startY}, {x: drg.middleX, y: drg.middleY}, {x: drg.endX, y: drg.endY}]}, ease: Linear.easeNone}, 0)
        .to('#knob-AO' + index, 1, {bezier: {type: 'quadratic', values: [{x: drg.startX, y: drg.startY}, {x: drg.middleX, y: drg.middleY}, {x: drg.endX, y: drg.endY}]}, ease: Linear.easeNone}, 0)
        .to('#svg-arrow-' + index, 1, {bezier: {type: 'quadratic', values: [{x: drg.startX - 30, y: drg.startY - 30}, {x: drg.middleX - 30, y: drg.middleY - 30}, {x: drg.endX - 30, y: drg.endY - 30}]}, ease: Linear.easeNone}, 0)
      var bounds = {}
      if (drg.type === 'x') {
        bounds = {minX: 0, maxX: drg.boxSize * drg.direction * _.dScale}
      } else if (drg.type === 'y') {
        bounds = {minY: 0, maxY: drg.boxSize * drg.direction * _.dScale}
      }
      // console.log(bounds)
      Draggable.create(D, {trigger: '#knob-A' + index,
        type: drg.type,
        throwProps: true,
        bounds: bounds,
        onDrag: Update,
        onDragEnd: CheckIsDragEnd,
        onThrowUpdate: Update}
      )
      TweenMax.to('#pathB-' + index, 0.5, {strokeDashoffset: -10, repeat: -1, ease: Linear.easeNone})

      function Update () {
        if (drg.type === 'x') {
          position = Math.abs(this.x / (drg.boxSize - 60) / _.dScale)
        } else if (drg.type === 'y') {
          position = Math.abs(this.y / (drg.boxSize - 60) / _.dScale)
        }
        drg.angles[0] = (drg.angles[2] - drg.angles[1]) * position + drg.angles[1]
        _.debug = position
        tl.progress(position)
        video.currentTime = position * video.duration
      }
      function CheckIsDragEnd () {
        // console.log('dragend')
        if (drg.type === 'x') {
          position = Math.abs(this.x / (drg.boxSize - 60) / _.dScale)
        } else if (drg.type === 'y') {
          position = Math.abs(this.y / (drg.boxSize - 60) / _.dScale)
        }
        if (position > 0.99) {
          // console.log('Position 1')
          document.getElementById('curved-drag-' + _.interIndex).classList.remove('displayed')
          _.interIndex++
          if (_.interIndex < _.videoConfig['v' + _.lecheSelected + _.patternSelected].length - 1) {
            document.getElementById('curved-drag-' + _.interIndex).classList.add('displayed')
            video.classList.add('faded')
          }
          if (_.interIndex === _.videoConfig['v' + _.lecheSelected + _.patternSelected].length - 1) {
            // console.log('ultimo')
            video.classList.add('faded')
            document.getElementById('hold-video-button').classList.add('displayed')
          }
        }
      }
    },
    prevSection () {
      var _ = this
      document.getElementById('sec-' + this.secActive).classList.add('pos-right')
      this.secActive--
      document.getElementById('sec-' + this.secActive).classList.remove('pos-left')
      document.getElementById('sec-' + _.secActive).classList.add('disabled')
      if (_.secActive < 2) {
        setTimeout(function () {
          _.initParallax()
        }, 500)
      }
    },
    nextSection () {
      var _ = this
      var interval = {}
      var vids = []
      // ---
      let il = 0
      function loadRecImages () {
        let toLoad = new Image()
        toLoad.onload = function () {
          window.imgsLoaded.push(toLoad)
          // _.sprites[il].updateBG(toLoad.src)
          _.sprites[il].url = toLoad.src
          // console.log('loaded ' + il)
          _.loadingProgress = parseInt(_.loadingProgress) + 20
          if (il === 4) {
            // console.log('all preloaded')
            _.sprites[0].updateBG()
            _.sprites[1].updateBG()
            setTimeout(function () {
              clearInterval(interval)
              _.hideLoader()
              _.transitionNextPage()
            }, 2000)
          } else {
            il++
            loadRecImages()
          }
        }
        toLoad.src = _.pathStatic + _.pathMobile + _.spriteSheets[_.lecheSelected][_.patternSelected][il].url
      }
      // ---
      if ((this.secActive + 1) === 3) {
        // if (_.isMobile) {
        if (_) {
          console.log(_.spriteSheets[_.lecheSelected][_.patternSelected][0].url)
          _.showLoader()
          // console.log(window.imgsLoaded)
          // --- LOAD
          loadRecImages()
          for (let i = 0; i < _.sprites.length; i++) {
            _.sprites[i].url = _.spriteSheets[_.lecheSelected][_.patternSelected][i].url
            if (_.isMobile) {
              _.sprites[i].frames = _.spriteSheets[_.lecheSelected][_.patternSelected][i].frames
            } else {
              _.sprites[i].frames = _.spriteSheets[_.lecheSelected][_.patternSelected][i].framesD
            }
            _.spriteDragControllers(_.sprites[i], i)
          }
        } else {
          _.showLoader()
          interval = setInterval(function () {
            _.loadingProgress = _.loadingProgress + 10
          }, 100)
          setTimeout(function () {
            clearInterval(interval)
            _.hideLoader()
            _.transitionNextPage()
          }, 1000)
          // Start all videos
          vids = document.getElementsByTagName('VIDEO')
          for (let i = 0; i < vids.length; i++) {
            vids[i].src = _.getVideoSource(i)
            if (i !== 0) {
              // vids[i].style.display = 'none'
            }
            var playPromise = vids[i].play()
            if (playPromise !== undefined) {
              playPromise.then(_ => {
                requestAnimationFrame(function () {
                  vids[i].pause()
                })
              }).catch(error => {
                console.log('error: ' + error)
              })
            }
            _.videoDragControllers(vids[i], i)
          }
        }
      } else {
        _.transitionNextPage()
      }
    },
    transitionNextPage () {
      if (this.secActive < 4) {
        var _ = this
        document.getElementById('sec-' + this.secActive).classList.add('pos-left')
        this.secActive++
        document.getElementById('sec-' + this.secActive).classList.remove('pos-right')
        document.getElementById('sec-' + _.secActive).classList.add('disabled')
        if (_.secActive === 0 || _.secActive === 1 || _.secActive === 4) {
          setTimeout(function () {
            _.initParallax()
          }, 500)
        }
        if (_.secActive === 3) {
          /*
          setTimeout(function () {
            _.sprites[2].updateBG()
            // document.getElementsByClassName('sprite-el')[2].style.display = 'inline-block'
          }, 2000)
          setTimeout(function () {
            _.sprites[3].updateBG()
            // document.getElementsByClassName('sprite-el')[3].style.display = 'inline-block'
          }, 2500)
          setTimeout(function () {
            _.sprites[4].updateBG()
            // document.getElementsByClassName('sprite-el')[4].style.display = 'inline-block'
          }, 3000)
          */
        }
      }
    },
    getVideoSource (index) {
      return (this.pathStatic + this.pathMobile + this.videoConfig['v' + this.lecheSelected + this.patternSelected][index].url) + '?v=' + this.hashCode
    },
    toogleshare () {
      var timer
      var _ = this
      var sc = document.getElementById('share-container')
      if (this.shareOpened === false) {
        openShare()
        timer = setTimeout(function () {
          closeShare()
        }, 5000)
      } else {
        clearTimeout(timer)
        closeShare()
      }
      function openShare () {
        _.shareOpened = true
        sc.classList.add('opened')
      }
      function closeShare () {
        _.shareOpened = false
        sc.classList.remove('opened')
      }
    },
    resetBubles () {
      var bbs = document.querySelectorAll('.button--bubble__container')
      for (let i = 0; i < bbs.length; i++) {
        var clone = bbs[i].getElementsByTagName('A')[0].cloneNode(true)
        bbs[i].removeChild(bbs[i].getElementsByTagName('A')[0])
        bbs[i].prepend(clone)
      }
      requestAnimationFrame(function () {
        var bbs = document.getElementsByClassName('button--bubble')
        for (let i = 0; i < bbs.length; i++) {
          var $circlesTopLeft = bbs.item(i).parentNode.getElementsByClassName('circle top-left')
          var $circlesBottomRight = bbs.item(i).parentNode.getElementsByClassName('circle bottom-right')
          $circlesTopLeft.item(0).style.transform = ''
          $circlesTopLeft.item(1).style.transform = ''
          $circlesTopLeft.item(2).style.transform = ''
          $circlesBottomRight.item(0).style.transform = ''
          $circlesBottomRight.item(1).style.transform = ''
          $circlesBottomRight.item(2).style.transform = ''
          bbs.item(i).parentNode.getElementsByClassName('button effect-button').item(0).style.transform = ''
        }
      })
    },
    initBubleBtn () {
      var bbs = document.getElementsByClassName('button--bubble')
      for (let i = 0; i < bbs.length; i++) {
        // // console.log('paso')
        var $circlesTopLeft = bbs.item(i).parentNode.getElementsByClassName('circle top-left')
        var $circlesBottomRight = bbs.item(i).parentNode.getElementsByClassName('circle bottom-right')

        var tl = new TimelineLite()
        var tl2 = new TimelineLite()
        let btTl = new TimelineLite({ paused: true })

        tl.to($circlesTopLeft, 1.2, { x: -25, y: -25, scaleY: 2, ease: SlowMo.ease.config(0.1, 0.7, false) })
        tl.to($circlesTopLeft.item(0), 0.1, { scale: 0.2, x: '+=6', y: '-=2' })
        tl.to($circlesTopLeft.item(1), 0.1, { scaleX: 1, scaleY: 0.8, x: '-=10', y: '-=7' }, '-=0.1')
        tl.to($circlesTopLeft.item(2), 0.1, { scale: 0.2, x: '-=15', y: '+=6' }, '-=0.1')
        tl.to($circlesTopLeft.item(0), 1, { scale: 0, x: '-=5', y: '-=15', opacity: 0 })
        tl.to($circlesTopLeft.item(1), 1, { scaleX: 0.4, scaleY: 0.4, x: '-=10', y: '-=10', opacity: 0 }, '-=1')
        tl.to($circlesTopLeft.item(2), 1, { scale: 0, x: '-=15', y: '+=5', opacity: 0 }, '-=1')

        var tlBt1 = new TimelineLite()
        var tlBt2 = new TimelineLite()

        tlBt1.set($circlesTopLeft, { x: 0, y: 0, rotation: -45 })
        tlBt1.add(tl)

        tl2.set($circlesBottomRight, { x: 0, y: 0 })
        tl2.to($circlesBottomRight, 1.1, { x: 30, y: 30, ease: SlowMo.ease.config(0.1, 0.7, false) })
        tl2.to($circlesBottomRight.item(0), 0.1, { scale: 0.2, x: '-=6', y: '+=3' })
        tl2.to($circlesBottomRight.item(1), 0.1, { scale: 0.8, x: '+=7', y: '+=3' }, '-=0.1')
        tl2.to($circlesBottomRight.item(2), 0.1, { scale: 0.2, x: '+=15', y: '-=6' }, '-=0.2')
        tl2.to($circlesBottomRight.item(0), 1, { scale: 0, x: '+=5', y: '+=15', opacity: 0 })
        tl2.to($circlesBottomRight.item(1), 1, { scale: 0.4, x: '+=7', y: '+=7', opacity: 0 }, '-=1')
        tl2.to($circlesBottomRight.item(2), 1, { scale: 0, x: '+=15', y: '-=5', opacity: 0 }, '-=1')
        tlBt2.set($circlesBottomRight, { x: 0, y: 0, rotation: 45 })
        tlBt2.add(tl2)
        btTl.add(tlBt1)
        btTl.to(bbs.item(i).parentNode.getElementsByClassName('button effect-button').item(0), 0.8, { scaleY: 1.1 }, 0.1)
        btTl.add(tlBt2, 0.2)
        btTl.to(bbs.item(i).parentNode.getElementsByClassName('button effect-button').item(0), 1.8, { scale: 1, ease: Elastic.easeOut.config(1.2, 0.4) }, 1.2)
        btTl.timeScale(2.6)
        this.BTLS.push(btTl)
      }
      this.initBTLS()
    },
    killBTLS () {
      var _ = this
      for (let i = 0; i < _.BTLS.length; i++) {
        // console.log('kill')
        _.BTLS[i].kill()
      }
      _.BTLS = []
    },
    initBTLS () {
      var _ = this
      for (let i = 0; i < _.BTLS.length; i++) {
        document.getElementsByClassName('button--bubble')[i].addEventListener('mouseover', restartBTLS.bind(this, i))
      }
      function restartBTLS (i, event) {
        _.BTLS[i].restart()
      }
    },
    prevLeche () {
      var _ = this
      // console.log('prev')
      if (this.lecheSelected > 0) {
        if (this.lecheSelected === 1) {
          document.getElementById('leche-selector-izq').getElementsByClassName('btn-rounded')[0].classList.add('disabled')
        }
        var el = document.getElementById('white-bar')
        if (_.isMobile) {
          el.style.width = '200%'
          el.style.height = '90%'
        } else {
          el.style.width = '150%'
          el.style.height = '120%'
        }
        requestAnimationFrame(function () {
          el.classList.add('slow-fast')
          _.lecheSelected--
          setTimeout(function () {
            _.initParallax()
            el.classList.remove('slow-fast')
            el.style.width = ''
            el.style.height = ''
          }, 500)
          if (_.lecheSelected % 2 === 1) {
            document.getElementById('sec-1').getElementsByClassName('text-container')[0].classList.remove('translucid')
          } else {
            document.getElementById('sec-1').getElementsByClassName('text-container')[0].classList.add('translucid')
          }
          document.getElementById('leche-selector-der').getElementsByClassName('btn-rounded')[0].classList.remove('disabled')
          document.getElementById('leit-' + (_.lecheSelected + 1)).classList.add('hidden')
          document.getElementById('leit-' + (_.lecheSelected)).classList.remove('faded')
        })
      }
    },
    nextLeche () {
      // // console.log('next')
      var _ = this
      if (this.lecheSelected < 3) {
        if (this.lecheSelected === 2) {
          document.getElementById('leche-selector-der').getElementsByClassName('btn-rounded')[0].classList.add('disabled')
        }
        var el = document.getElementById('white-bar')
        if (_.isMobile) {
          el.style.width = '200%'
          el.style.height = '90%'
        } else {
          el.style.width = '150%'
          el.style.height = '120%'
        }
        requestAnimationFrame(function () {
          el.classList.add('slow-fast')
          _.lecheSelected++
          setTimeout(function () {
            _.initParallax()
            el.classList.remove('slow-fast')
            el.style.width = ''
            el.style.height = ''
          }, 500)
          if (_.lecheSelected % 2 === 1) {
            document.getElementById('sec-1').getElementsByClassName('text-container')[0].classList.remove('translucid')
          } else {
            document.getElementById('sec-1').getElementsByClassName('text-container')[0].classList.add('translucid')
          }
          document.getElementById('leche-selector-izq').getElementsByClassName('btn-rounded')[0].classList.remove('disabled')
          document.getElementById('leit-' + (_.lecheSelected)).classList.remove('hidden')
          document.getElementById('leit-' + (_.lecheSelected - 1)).classList.add('faded')
        })
      }
    },
    prevPattern () {
      if (this.patternSelected > 0) {
        if (this.patternSelected === 1) {
          document.getElementById('pattern-selector-izq').getElementsByClassName('btn-rounded')[0].classList.add('disabled')
        }
        this.patternSelected--
        document.getElementById('pattern-selector-der').getElementsByClassName('btn-rounded')[0].classList.remove('disabled')
      }
    },
    nextPattern () {
      this.patternSelected++
      document.getElementById('pattern-selector-der').getElementsByClassName('btn-rounded')[0].classList.add('disabled')
      document.getElementById('pattern-selector-izq').getElementsByClassName('btn-rounded')[0].classList.remove('disabled')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import '../scss/_vars.scss';
  @import '../scss/_fonts.scss';
  @import '../scss/_bubbleButton.scss';
  #rotate-screen{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1200;
    background-color: white;
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
  #rotate-screen .rs-container {
    min-width: 50px;
    min-height: 50px;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate3d(-50%,-50%,0);
    h1{
      padding: 0;
      font-size: 12px !important;
    }
  }
  .claNavidad-container{
    height: 1280px;
    height: 100%;
    width: 100%;
    overflow: hidden;
    font-family: 'gabrielaregular';
  }
  a{
    font-family: 'gabrielaregular';
    line-height: 1.25;
    color: $claBlue;
    &.bbll{
      position: absolute;
      bottom: 1vh;
      right: 1.5vh;
      p{
        padding: 0
      }
    }
  }
  h1{
    margin: 0;
    // font-size: 38px;
    line-height: 1.25;
    color: $claBlue;
    padding-bottom: 45px;
    padding-bottom: 3vh;
    user-select: none;
  }
  h2{
    font-family: 'nixie_oneregular';
    margin: 0;
    font-size: 128px;
    line-height: 0.75;
    color: $claBlue;
    padding-bottom: 45px;
    padding-bottom: 3vh;
    font-weight: 100;
    user-select: none;
  }
  p{
    margin: 0;
    line-height: 1.25;
    color: $claBlue;
    padding-bottom: 45px;
    padding-bottom: 3vh;
    user-select: none;
  }
  .btn{
    display: inline-block;
    background-color: $claBlue;
    color: white;
    font-size: 17px;
    line-height: 1;
    padding: 20px 35px;
    padding-bottom: 40px;
    padding-bottom: 3vh;
    cursor: pointer;
  }
  #vi-0-1, #vd-0-1, #vi-1-0, #vd-1-0, #vi-2-1, #vd-2-1, #vi-3-1, #vd-3-1{
    &.btn-rounded.claBlued{
      color: $claBlue;
      background-color: white;
    }
  }
  #ui-201, #ui-210, #ui-221, #ui-231, {
    .btn-rounded.claBlued{
       color: $claBlue;
      background-color: white;
    }
  }
  .btn-rounded{
    display: inline-block;
    font-size: 17px;
    height: 45px;
    width: 45px;
    border-radius: 50%;
    cursor: pointer;
    position: relative;
    margin-right: 1vw;
    padding-bottom: 3vh;
    color: $claBlue;
    transition: 0.5s;
    background-color: white;
    @media only screen and (max-width: $break-mobile)  {
      height: 5vh;
      width: 5vh;
      margin-right: 2vw;
      padding-bottom: 2vw;
    }
    .icon-ctrl1, .icon-ctrl{
      font-size: 30px;
    }
    &.claBlued{
      color: white;
      background-color: $claBlue;
    }
    &.colorFB{
      border: 2px solid #3c5a99;
      color: #3c5a99;
      transition: 0.25s;
      &:hover{
        transform: scale(1.05)
      }
    }
    &.colorTW{
      border: 2px solid #33ccff;
      color: #33ccff;
      transition: 0.25s;
      &:hover{
        transform: scale(1.05)
      }
    }
    &.colorWH{
      border: 2px solid #25D366;
      color: #25D366;
      transition: 0.25s;
      display: none;
      @media only screen and (max-width: $break-mobile)  {
        display: inline-block;
      }
      &:hover{
        transform: scale(1.05)
      }
    }
    span{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate3d(-50%,-50%,0);
      &.icon-ctrl1{
        transform: translate3d(-30%,-50%,0);
      }
      &.icon-ctrl{
        transform: translate3d(-70%,-50%,0);
      }
    }
  }
  .img-btn{
    display: inline-block;
  }
  .loading-splash{
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: white;
    transition: 0.25s;
    &.translucid{
      background-color: #ffffffcc
    }
    &.fadeout{
      pointer-events: none;
      opacity: 0;
    }
    .container{
      position: absolute;
      top:50%;
      left: 50%;
      transform: translate3d(-50%,-50%,0)
    }
  }
  .appsection{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left:0;
    transition: all 700ms cubic-bezier(0.5, 0.000, 0.5, 1.000);
    transform: translate3d(0,0,0);
    overflow: hidden;
    &.red{
      background-color: white;
    }
    &.pos-right{
      pointer-events: none;
      transform: translate3d(100%,0,0)
    }
    &.pos-left{
      transform: translate3d(-100%,0,0);
      opacity: 0;
      pointer-events: none;
    }
    .appsection-container{
      position: absolute;
      width: 100%;
      max-width: 1920px;
      height: 100%;
      max-height: 1280px;
      display: inline-block;
      margin: 0 auto;
      transform: translate3d(-50%,-50%,0);
      top: 50%;
      left: 50%;
      @media only screen and (max-width: $break-mobile)  {
        max-width: 750px;
        max-height: 1334px;
      }
    }
  }
  .text-container{
    text-align: left;
    display: inline-block;
  }
  .states-index{
    padding-bottom: 1.5vh;
    @media only screen and (max-width: $break-mobile)  {
      background-color: white;
      padding-bottom: 1vh;
    }
  }
  .state-bullet{
    height: .8vh;
    width:  .8vh;
    border-radius: 50%;
    display: inline-block;
    margin-right:  .8vh;
    background-color: $claBlue;
    opacity: 0.5;
    transition: 0.25s;
  }
  #lecheStates-0, #patternStates-0{
    .state-bullet:nth-child(1){
      background-color: $claBlue;
      opacity: 1;
    }
  }
  #lecheStates-1, #patternStates-1{
    .state-bullet:nth-child(2){
      background-color: $claBlue;
      opacity: 1;
    }
  }
  #lecheStates-2{
    .state-bullet:nth-child(3){
      background-color: $claBlue;
      opacity: 1;
    }
  }
  #lecheStates-3{
    .state-bullet:nth-child(4){
      background-color: $claBlue;
      opacity: 1;
    }
  }
  .ui-elements{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    text-align: center;
    .debug-info{
      font-family: Arial, Helvetica, sans-serif;
      position: absolute;
      right: 0;
      display: none;
    }
    .share-container{
      position: absolute;
      top: 2%;
      left: 2%;
      pointer-events: all;
      user-select:none;
      @media only screen and (max-width: $break-mobile) {
        max-width: 5vh;
      }
      .socialLink{
        opacity: 0;
        transform: translate3d(-100%,0,0);
        pointer-events: none;
        background-color: white;
        border: 1px solid $claBlue;
        margin-top: 2vh;
        @media only screen and (max-width: $break-mobile) {
          transform: translate3d(0,-100%,0);
        }
      }
      .socialLink:nth-child(4){
        display: none;
        @media only screen and (max-width: $break-mobile) {
          display: inline-block;
        }
      }
      &.opened{
        .socialLink{
          opacity: 1;
          transform: translate3d(0,0,0);
          pointer-events: all;
          @media only screen and (max-width: $break-mobile) {
            transform: translate3d(0,0,0);
          }
        }
      }
    }
    .logo{
      background: url('#{$staticpath}static/claNavidad/logo.png');
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      width: 7%;
      max-width: 133px;
      height: 5%;
      max-height: 63px;
      display: inline-block;
      position: absolute;
      top: 2%;
      left: 50%;
      transform: translate3d(-50%,0,0);
      pointer-events: all;
      cursor: pointer;
      @media only screen and (max-width: $break-mobile)  {
        width: 17%;
        height: 4.5%;
      }
    }
  }
  .items-selector{
    position: absolute;
    height: 70px;
    width: 42%;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%,-50%,0);
    @media only screen and (max-width: $break-mobile)  {
      width: 96%;
    }
    .rb-container{
      width: 70px;
      height: 100%;
      // background-color :aliceblue ;
      border-radius: 50%;
      position: absolute;
      display: inline-block;
      display: flex;
      align-items: center;
      justify-content: center;
      @media only screen and (max-width: $break-mobile)  {
        width: initial;
      }
      .btn-rounded{
        margin: 0;
        transition: 0.25s;
        &:hover{
          transform: scale(1.1)
        }
      }
    }
    .item-selector-izq{
      left: 0;
      top: 0;
    }
    .item-selector-der{
      right: 0;
      top: 0;
    }
  }
  .leches-container {
    position: absolute;
    width: 50%;
    max-width: 42%;
    height: 100%;
    max-height: 1280px;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%,-50%,0);
    @media only screen and (max-width: $break-mobile)  {
      max-width: initial;
      width: 100%;
      height: calc(100% - 50px);
      top: 45%
    }
    .leche-item{
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
      opacity: 1;
      transition: 1s;
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
      &.faded {
        transition: 1s ;
        clip-path: polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%);
      }
      &.hidden{
        opacity: 1;
      }
    }
  }
  #sec-0{
    background-size: contain;
    background-position: center bottom;
    background-repeat: no-repeat;
    .text-container{
      width: 33%;
      position: absolute;
      top: 50%;
      right: 0;
      transform: translate3d(0,-50%,0);
      .img-btn{
        margin-top: 0;
        margin-bottom: 1.5vh
      }
      @media only screen and (max-width: $break-mobile)  {
        width: 66%;
        left: 50%;
        transform: translate3d(-50%,0,0);
        text-align: center;
        top: 14%;
        h1, p{
          br {
            display: none;
          }
        }
      }
    }
  }
  #sec-1{
    .text-container{
      position: absolute;
      top: calc(50% + 45px);
      left: calc(71% - 60px);
      background-color: #ffffff ;
      padding: 2%;
      transition: 1s;
      // min-width: 400px;
      .m-copy{
        display: none;
      }
      @media only screen and (max-width: $break-mobile)  {
        width: 100%;
        height: 9%;
        left: 50%;
        transform: translate3d(-50%,0,0);
        text-align: center;
        top: initial;
        bottom: 50px;
        background-color: transparent;
        padding: 0;
        .d-copy{
          display: none;
        }
        .m-copy{
          display: inline;
        }
        p{
          display: none;
        }
        h1, p{
          br {
            display: none;
          }
          background-color: white;
          padding-right: 1.5vh;
          padding-left: 1.5vh;
        }
        .img-btn{
          display: none;
        }
      }
      &.disabled{
        pointer-events: none;
      }
      &.translucid{
        background-color: transparent;
      }
    }
    .bb-wrapper{
      @media only screen and (max-width: $break-mobile)  {
        text-align: center;
        display: inline-block;
        background-color: white;
        position: absolute;
        bottom: 0;
        width: 100vw;
        left: 50%;
        transform: translate3d(-50%,100%,0);
        background-color: white;
        height: 50px;
      }
    }
    .bb-container{
      margin-right: 14px;
    }
    .bb-container:nth-child(1){
      @media only screen and (max-width: $break-mobile)  {
        margin: 0;
        position: absolute;
        top:50%;
        left: 50%;
        transform: translate3d(-90%,-50%,0) scale(0.75)
      }
    }
    .bb-container:nth-child(2){
      @media only screen and (max-width: $break-mobile)  {
        margin: 0;
        position: absolute;
        top:50%;
        left: 50%;
        transform: translate3d(-10%,-50%,0) scale(0.75)
      }
    }
    .state{
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
    }
    .pattern{
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
      background-color: aliceblue;
      display: inline-block;
      position: absolute;
      transition: 0.5s;
      transition-delay: 0.25s;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      backface-visibility: hidden;
      // will-change: opacity;
    }
    .white-bar, #white-bar-1,  #white-bar-2{
      position: absolute;
      width: 100%;
      height: 50%;
      background-color: white;
      transform-origin: center top;
      //will-change: transform;
      top:50%;
      left:50%;
      transform-origin: top center;
      &.slow-fast{
        transition: all 500ms cubic-bezier(1.000, 0.000, 0.5, 1.0);
        .parallax-container{
          opacity: 0;
        }
      }
      &.transitioning{
        transition: 1s;
        width: 100%;
        height: 50%;
      }
    }
    #white-bar-1 {
      opacity: 0.75;
      transition-delay: 0.30s
    }
    #white-bar-2 {
      transition-delay: 0.35s;
      opacity: 0.5;
    }
    #state-0{
      .white-bar{
        transform: translate3d(-50%,0,0) rotate3d(0,0,1,0)
      }
      #pattern-0{
        opacity: 1;
      }
      #pattern-1, #pattern-2, #pattern-3 {
        opacity: 0;
      }
    }
    #state-1{
      .white-bar, #white-bar-1, #white-bar-2{
         transform: translate3d(-50%,0,0) rotate3d(0,0,1,-180deg)
      }
      #pattern-1{
        opacity: 1;
      }
      #pattern-0, #pattern-2, #pattern-3 {
        opacity: 0;
      }
    }
    #state-2{
      .white-bar, #white-bar-1, #white-bar-2{
        transform: translate3d(-50%,0,0) rotate3d(0,0,1,-360deg)
      }
      #pattern-2{
        opacity: 1;
      }
      #pattern-0, #pattern-1, #pattern-3 {
        opacity: 0;
      }
    }
    #state-3{
      .white-bar, #white-bar-1, #white-bar-2{
        transform: translate3d(-50%,0,0) rotate3d(0,0,1,-540deg)
      }
      #pattern-3{
        opacity: 1;
      }
      #pattern-0, #pattern-1, #pattern-2 {
        opacity: 0;
      }
    }
  }
  #sec-2{
    .text-container{
      // width:30%;
      position: absolute;
      top: calc(50% + 45px);
      left: calc(71% - 60px);
      background-color: #ffffff;
      padding: 2%;
      .m-copy{
        display: none;
      }
      @media only screen and (max-width: $break-mobile)  {
        width: 100%;
        height: 9%;
        left: 50%;
        transform: translate3d(-50%,0,0);
        text-align: center;
        top: initial;
        bottom: 50px;
        background-color: transparent;
        padding: 0;
        .d-copy{
          display: none;
        }
        .m-copy{
          display: inline;
        }
        p{
          display: none;
        }
        h1, p{
          br {
            display: none;
          }
          background-color: white;
          padding-right: 1.5vh;
          padding-left: 1.5vh;
        }
         .img-btn{
          display: none;
        }
      }
    }
    .bb-wrapper{
      @media only screen and (max-width: $break-mobile)  {
        text-align: center;
        display: inline-block;
        background-color: white;
        position: absolute;
        bottom: 0;
        width: 100vw;
        left: 50%;
        transform: translate3d(-50%,100%,0);
        background-color: white;
        height: 50px;
      }
    }
    .bb-container{
      margin-right: 14px;
    }
    .bb-container:nth-child(1){
      @media only screen and (max-width: $break-mobile)  {
        margin: 0;
        position: absolute;
        top:50%;
        left: 50%;
        transform: translate3d(-90%,-50%,0) scale(0.75)
      }
    }
    .bb-container:nth-child(2){
      @media only screen and (max-width: $break-mobile)  {
        margin: 0;
        position: absolute;
        top:50%;
        left: 50%;
        transform: translate3d(-10%,-50%,0) scale(0.75)
      }
    }
    .pattern-container{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    .pattern-item{
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      position: absolute;
      width: 100%;
      height: 100%;
      transition: 0.75s;
      //will-change: transform;
    }
    #pattern-selected-0{
      .ptrn0{
        transform: translate3d(0%,0,0)
      }
      .ptrn1, .ptrn2, .ptrn3{
        transform: translate3d(100%,0,0)
      }
    }
    #pattern-selected-1{
      .ptrn0{
        transform: translate3d(-100%,0,0)
      }
      .ptrn1{
        transform: translate3d(0%,0,0)
      }
      .ptrn2, .ptrn3{
        transform: translate3d(100%,0,0)
      }
    }
    #pattern-selected-2{
      .ptrn0, .ptrn1{
        transform: translate3d(-100%,0,0)
      }
      .ptrn2{
        transform: translate3d(0%,0,0)
      }
      .ptrn3{
        transform: translate3d(100%,0,0)
      }
    }
    #pattern-selected-3{
      .ptrn0, .ptrn1,.ptrn2{
        transform: translate3d(-100%,0,0)
      }
      .ptrn3{
        transform: translate3d(0%,0,0)
      }
    }
  }
  #sec-3{
    background-color: white;
    .img-btn{
      position: absolute;
      bottom: 2vh;
      right: 3vh;
    }
    svg{
      overflow:visible;
      transition: 0.25s;
      pointer-events: none;
      opacity: 0;
      position: absolute;
      top: 50%;
      left: 50%;
      &.inside{
        transition: 0s;
        opacity: initial;
        top: initial;
        left: initial;
        position: initial;
      }
      &.displayed{
        pointer-events: all;
        opacity: 1;
      }
    }
    #video-viewport {
      position: absolute;
      top: 0;
      left:0;
      width: 100%;
      height: 100%;
      overflow: hidden;
      z-index: -1; /* for accessing the video by click */
    }
    .video-mask{
      position: absolute;
      top: 0;
      left:0;
      width: 100%;
      height: 100%;
      background-size: 10px 10px;
      background-image: url('#{$staticpath}static/claNavidad/graphics/videomask.png');
      opacity: 0.75;
      z-index: 500;
      @media only screen and (max-width: $break-mobile) {
        opacity: 0.25;
      }
    }
    video, .sprite-el {
      display: block;
      width: 100%;
      height: auto;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate3d(-50%,-50%,0);
      transition: 0.5s;
      backface-visibility: hidden;
      &.faded{
        opacity: 0;
        pointer-events: none;
      }
      &:nth-child(1){
        display: inline-block
      }
    }
    .sprite-el{
      width: 1280px;
      height: 720px;
      background-color: aliceblue;
      transition: 0s;
      background-position: top left;
      background-repeat: no-repeat;
      @media only screen and (max-width: $break-mobile) {
        width: 375px;
        height: 667px;
      }
      //background-image: url('#{$staticpath}static/claNavidad/_mobile/sprites/sptest.jpg');
    }
    .timeline {
      width: 100%;
      height: 20px;
      background-color: black;
      cursor: pointer;
      position: relative
    }
    .timeline__drag {
      width: 10px;
      height: 20px;
      top: -20px;
      background-color: yellow;
      position: absolute;
      z-index: 2;
      transform-origin: 0 0;
    }
    .timeline__progress {
      display: block;
      width: 100%;
      height: 100%;
      background-color: green;
      transform: scaleX(0);
      transform-origin: 0 0;
      position: relative;
      z-index: 1;
    }
    .video__play{
      position: absolute;
      bottom: 50px;

    }

    button {
      margin-top: 2em;
    }
    .video-draggables{
      position: absolute;
      top: 45%;
      left: 50%;
      transform: translate3d(-50%,-50%,0);
      svg{
        background-color: #00000000;
      }
      @media only screen and (max-width: $break-mobile)  {
        width: 300px !important;
        height: 300px !important;
      }
    }
    #hold-video-button{
      position: absolute;
      width: 100px;
      height: 100px;
      top: 50%;
      left: 50%;
      transform: translate3d(-50%,-50%,0) scale(0.70);
      transition: 0.25s;
      opacity: 0;
      pointer-events: none;
      text-align: center;
      user-select: none;
      cursor: pointer;
      &.pulsed{
        animation: shake 1s infinite cubic-bezier(.36,.07,.19,.97);
        .flecha{
          animation:none;
        }
      }
      &.displayed{
        opacity: 1;
        pointer-events: all
      }
      .container {
        width: 100%;
        height: 100%;
        margin: 0 auto;
        backface-visibility: hidden;
      }
      .pulse-button {
        position: relative;
        top: 50%;
        left: 50%;
        margin-left: -50px;
        margin-top: -50px;
        display: block;
        width: 100px;
        height: 100px;
        font-size: 24px;
        font-weight: light;
        font-family: 'gabrielaregular';
        letter-spacing: 1px;
        text-align: center;
        line-height: 100px;
        color: white;
        border: 2px solid white;
        border-radius: 50%;
        //background: $claBlue;
        cursor: pointer;
        box-shadow: 0 0 0 0 rgba(white, 1);
        animation: pulse 1.5s infinite;
        transition: 1s;
        div{
          background-color: $claBlue;
          width: 90%;
          height: 90%;
          border-radius: 50%;
          position: absolute;
          transform: translate3d(-50%,-50%,0);
          top: 50%;
          left: 50%;
          span{
            text-align: center;
            width: 90%;
            font-size: 22px;
            position: absolute;
            transform: translate3d(-50%,-50%,0);
            top: 50%;
            left: 50%;
          }
        }
      }
      .pulse-button.pulsed {
        animation: pulse2 0.5s infinite;
        background: #1b6aa888;
      }
      @keyframes shake {
        10%, 90% {
          transform: translate3d(-50.5%,-50%,0) scale(0.70)
        }
        20%, 80% {
          transform: translate3d(-49%,-50%,0) scale(0.70)
        }
        30%, 50%, 70% {
          transform: translate3d(-52%,-50%,0) scale(0.70)
        }
        40%, 60% {
          transform: translate3d(-48%,-50%,0) scale(0.70)
        }
      }
      @keyframes pulse {
        0% {
          transform: scale(.9)
        }
        70% {
          transform: scale(1);
          //box-shadow: 0 0 0 50px rgba(white, 0);
        }
          100% {
          transform: scale(.9);
          //box-shadow: 0 0 0 0 rgba($claBlue, 0);
        }
      }
      @keyframes pulse2 {
        0% {
          transform: scale(.9)
        }
        70% {
          transform: scale(1);
          box-shadow: 0 0 0 50px rgba(white, 0);
        }
          100% {
          transform: scale(.9);
          box-shadow: 0 0 0 0 rgba($claBlue, 0);
        }
      }

      .flecha{
        position: absolute;
        width: 50px;
        height: 50px;
        background: url('#{$staticpath}static/claNavidad/flecha.png?v=1');
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center center;
        bottom:0;
        right: 0;
        animation: diagonal 0.6s infinite;
      }
    }
  }
  #sec-4{
    .img-btn{
      padding-top: 1.5vh
    }
    .bb-container{
      padding-top: 1.5vh;
    }
    .right-side{
      position: absolute;
      top: 0;
      left: 50%;
      width: 50%;
      height: 100%;
      @media only screen and (max-width: $break-mobile)  {
        top: 50%;
        left: 0;
        width: 100%;
        height: 50%;
      }
    }
    .left-pattern{
      position: absolute;
      top: 0;
      left: 0;
      width: 50%;
      height: 100%;
      background: url('#{$staticpath}static/claNavidad/items/desktop/azul_patron_1.jpg');
      background-size: cover;
      background-position: left bottom;
      @media only screen and (max-width: $break-mobile)  {
        background-position: center;
        height: 33%;
        width: 100%;
      }
    }
    .appsection-container{
      background-size: contain;
      background-position: center bottom;
      background-repeat: no-repeat;
      .bg-image{
        position: absolute;
        width: 100%;
        height: 100%;
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        @media only screen and (max-width: $break-mobile) {
          clip-path: polygon(0 0, 100% 0, 100% 33%, 0% 33%)
        }
      }
    }
    .text-container{
      width: 30%;
      position: absolute;
      top: 50%;
      right: 3%;
      transform: translate3d(0,-50%,0);
      text-align: center;
      @media only screen and (max-width: $break-mobile) {
        width: 100%;
        left: 0;
        top: 33%;
        height: 67%;
        transform: translate3d(0,0,0);
        h1{
          margin-top:1.5vh;
          padding-bottom: 1.5vh;
        }
      }
    }
    #leches-progress{
      display: inline-block;
      height: 5.5vh;
      width: 100%;
      position: relative;
      padding-bottom: 45px;
      padding-bottom: 3vh;
      @media only screen and (max-width: $break-mobile) {
        width: 66%;
      }
      .left-image, .right-image{
        position: absolute;
        display:inline-block;
        width: 7.5vh;
        height: 5.5vh;
        max-height: 70px;
        max-width: 100px;
      }
      .left-image{
        left: 0;
        top: 0;
        background-image: url('#{$staticpath}static/claNavidad/present-small.png');
        background-position: bottom left;
        background-repeat: no-repeat;
        background-size: auto;
      }
      .right-image{
        right: 0;
        top: 0;
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
        background-image: url('#{$staticpath}static/claNavidad/present-big.png');
      }
      .lp-bar-container{
        display: inline-block;
        height: 4px;
        width: 100%;
        background-color: #e3edf4;
        bottom: 0;
        left: 0;
        position: absolute;
        transform: translate3d(0,100%,0);
        #lp-bar{
          display: inline-block;
          position: absolute;
          top: 0;
          left: 0;
          min-width: 5%;
          height: 100%;
          background-color: $claBlue;
          transition: 1s;
          transition-delay: 1s;
        }
      }
    }
  }
</style>
