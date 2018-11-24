<template>
  <div class="hello claNavidad-container">
    <div id="sec-4" class="appsection pos-right">6</div>
    <div id="sec-3" class="appsection pos-right">
      <div id="video-viewport">
        <video v-for="item in videoConfig" preload="auto" v-bind:style="{'z-index': item.zIndex}" :key="item.index">
        </video>
        <div class="video-mask"></div>
      </div>
      <div class="video-draggables">
        <svg v-for="item in videoConfig" v-bind:id="'curved-drag-'+item.index" class="curverd-drag" width="320px" height="150px" version="1.1" xmlns="http://www.w3.org/2000/svg" :key="item.index">
          <path v-bind:id="'path-'+item.index" d="M10 80 Q 150 0 300 80" stroke-width="4" stroke="#1b6aa8" stroke-dasharray="8" fill="transparent" stroke-linecap="round"/>
          <circle v-bind:id="'knob-B'+item.index" r="25" fill="transparent" stroke-width="2" stroke="#fff"/>
          <circle v-bind:id="'knob-A'+item.index" r="25" fill="#fff" stroke-width="0" stroke="#fff"/>
        </svg>
      </div>
    </div>
    <div id="sec-2" class="appsection pos-right">
      <div v-bind:id="'pattern-selected-'+patternSelected" class="pattern-container">
        <div class="ptrn3 pattern-item"></div>
        <div class="ptrn2 pattern-item"></div>
        <div class="ptrn1 pattern-item"></div>
        <div class="ptrn0 pattern-item"></div>
      </div>
      <div class="leches-container">
        <div v-bind:id="'leit-sel-'+lecheSelected" class="leche-item "></div>
      </div>
      <div class="items-selector">
        <div id="pattern-selector-izq" class="item-selector-izq rb-container">
            <a v-on:click.prevent="prevPattern()" class="btn-rounded claBlued disabled "><span class="icon-ctrl1"></span></a>
        </div>
        <div id="pattern-selector-der" class="item-selector-der rb-container">
            <a v-on:click.prevent="nextPattern()" class="btn-rounded claBlued "><span class="icon-ctrl"></span></a>
        </div>
      </div>
      <div class="text-container inverted">
        <h1>¿Cuál Elegimos?</h1>
        <p>Estos son nuestros bricks edición especial navidad. Selecciona el que mas te guste</p>
          <div class="bb-container">
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" class="goo">
            <defs>
              <filter id="goo">
                <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
                <feComposite in="SourceGraphic" in2="goo"/>
              </filter>
            </defs>
          </svg>
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
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" class="goo">
            <defs>
              <filter id="goo">
                <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
                <feComposite in="SourceGraphic" in2="goo"/>
              </filter>
            </defs>
          </svg>
          <span class="button--bubble__container">
            <a v-on:click.prevent="nextSection()" class="button button--bubble">
              Elegir Brick <span class="icon-ctrl"></span>
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
    <div id="sec-1" class="appsection pos-right">
      <div v-bind:id="'state-'+lecheSelected" class="state">
        <div class="pattern pattern-3"></div>
        <div class="pattern pattern-2"></div>
        <div class="pattern pattern-1"></div>
        <div class="pattern pattern-0"></div>
        <div class="white-bar"></div>
      </div>
      <div class="appsection-container">
        <div class="leches-container">
          <div id="leit-3" class="leche-item hidden"></div>
          <div id="leit-2" class="leche-item hidden"></div>
          <div id="leit-1" class="leche-item hidden"></div>
          <div id="leit-0" class="leche-item "></div>
        </div>
        <div class="items-selector">
          <div id="leche-selector-izq" class="item-selector-izq rb-container">
             <a v-on:click.prevent="prevLeche()" class="btn-rounded claBlued disabled "><span class="icon-ctrl1"></span></a>
          </div>
          <div id="leche-selector-der" class="item-selector-der rb-container">
             <a v-on:click.prevent="nextLeche()" class="btn-rounded claBlued "><span class="icon-ctrl"></span></a>
          </div>
        </div>
        <div class="text-container">
          <h1>¿Cuál Elegimos?</h1>
          <p>Estos son nuestros bricks edición especial navidad. Selecciona el que mas te guste</p>
           <div class="bb-container">
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" class="goo">
              <defs>
                <filter id="goo">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                  <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
                  <feComposite in="SourceGraphic" in2="goo"/>
                </filter>
              </defs>
            </svg>
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
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" class="goo">
              <defs>
                <filter id="goo">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                  <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
                  <feComposite in="SourceGraphic" in2="goo"/>
                </filter>
              </defs>
            </svg>
            <span class="button--bubble__container">
              <a v-on:click.prevent="nextSection()" class="button button--bubble">
                Elegir Brick <span class="icon-ctrl"></span>
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
    </div>
    <div id="sec-0" class="appsection">
      <div class="appsection-container">
        <div class="text-container">
          <h1>Un brick,<br>un regalo</h1>
          <p>Estas Navidades no te olvides de envolver tu regalo para los niños de <b>Aldeas infantiles</b></p>
          <div class="bb-container">
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" class="goo">
              <defs>
                <filter id="goo">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                  <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
                  <feComposite in="SourceGraphic" in2="goo"/>
                </filter>
              </defs>
            </svg>
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
          <a href="https://www.aldeasinfantiles.es/" target="blank" class="img-btn"><img width="166px" height="45px" src="static/claNavidad/logo-aldeas.png"></a>
        </div>
      </div>
    </div>
    <div class="ui-elements">
      <div id='share-container' class="share-container">
        <a v-on:click.prevent="toogleshare()" class="btn-rounded claBlued socialBtn"><span class="icon-share2"></span></a>
        <a target="_blank" href="https://www.facebook.com/" class="btn-rounded socialLink"><span class="icon-facebook"></span></a>
        <a target="_blank" href="https://twitter.com/" class="btn-rounded socialLink"><span class="icon-twitter"></span></a>
        <a target="_blank" href="https://www.whatsapp.com/" class="btn-rounded socialLink"><span class="icon-whatsapp"></span></a>
      </div>
      <div class="logo"></div>
    </div>
    <div id="loader" class="loading-splash fadeout translucid">
      <div class="container">
        <img width="64px" height="64px" src="static/claNavidad/loader_v3.gif">
        <p>Cargando {{ loadingProgress }} %</p>
      </div>
    </div>
  </div>
</template>

<script>
import {TweenMax, TimelineLite, TimelineMax, SlowMo, Linear, Elastic} from 'gsap'
import Draggable from 'gsap/Draggable'
export default {
  name: 'ClaNavidad',
  data () {
    return {
      msg: 'Who am I?',
      secActive: 0,
      lecheSelected: 0,
      patternSelected: 0,
      shareOpened: false,
      minvw: 0,
      vid_w_orig: 0,
      vid_h_orig: 0,
      interIndex: 0,
      loadingProgress: 0,
      videoConfig: [
        {
          index: 0,
          zIndex: 50,
          url: 'https://www.centrallecheraasturiana.es/unlitrounregalo/videos/modelo_de_envolver_3_azul_v1.mp4',
          type: 'drag'
        },
        {
          index: 1,
          zIndex: 40,
          url: 'https://www.centrallecheraasturiana.es/unlitrounregalo/videos/modelo_de_envolver_3_azul_v2.mp4',
          type: 'drag'
        }
      ]
    }
  },
  mounted () {
    this.initBubleBtn()
    this.videoInit()
  },

  methods: {
    showLoader () {
      document.getElementById('loader').classList.remove('fadeout')
    },
    hideLoader () {
      document.getElementById('loader').classList.add('fadeout')
    },
    videoInit () {
      var _ = this
      var viewport = document.getElementById('video-viewport')
      var vids = document.getElementsByTagName('VIDEO')
      console.log(vids[0])
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
    videoDragControllers (video, index) {
      if (index === 0) {
        document.getElementById('curved-drag-0').classList.add('displayed')
      }
      var _ = this
      var D = document.createElement('div')
      var position = 0
      TweenMax.set('#knob-A' + index, {x: 10, y: 80})
      TweenMax.set('#knob-B' + index, {x: 300, y: 80})

      var tl = new TimelineMax({paused: true})
        .from('#path-' + index, 1, {drawSVG: '0%', stroke: 'white', ease: Linear.easeNone})
        .to('#knob-A' + index, 1, {bezier: {type: 'quadratic', values: [{x: 10, y: 80}, {x: 150, y: 0}, {x: 300, y: 80}]}, ease: Linear.easeNone}, 0)
      Draggable.create(D, {trigger: '#knob-A' + index,
        type: 'x',
        throwProps: true,
        bounds: {minX: 0, maxX: 300},
        onDrag: Update,
        onDragEnd: CheckIsDragEnd,
        onThrowUpdate: Update}
      )
      function Update () {
        position = Math.abs(this.x / 300)
        tl.progress(position)
        video.currentTime = position * video.duration
      }
      function CheckIsDragEnd () {
        var position = Math.abs(this.x / 300)
        if (position === 1) {
          // console.log('Position 1')
          document.getElementById('curved-drag-' + _.interIndex).classList.remove('displayed')
          _.interIndex++
          if (_.interIndex < _.videoConfig.length) {
            document.getElementById('curved-drag-' + _.interIndex).classList.add('displayed')
            video.classList.add('faded')
          }
        }
      }
    },
    prevSection () {
      document.getElementById('sec-' + this.secActive).classList.add('pos-right')
      this.secActive--
      document.getElementById('sec-' + this.secActive).classList.remove('pos-left')
    },
    nextSection () {
      var _ = this
      var vids = []
      if ((this.secActive + 1) === 3) {
        _.showLoader()
        var interval = setInterval(function () {
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
          var playPromise = vids[i].play()
          if (playPromise !== undefined) {
            playPromise.then(_ => {
              requestAnimationFrame(function () {
                // console.log('videoPause')
                vids[i].pause()
              })
            }).catch(error => {
              console.log('error: ' + error)
            })
          }
          _.videoDragControllers(vids[i], i)
        }
      } else {
        _.transitionNextPage()
      }
    },
    transitionNextPage () {
      document.getElementById('sec-' + this.secActive).classList.add('pos-left')
      this.secActive++
      document.getElementById('sec-' + this.secActive).classList.remove('pos-right')
    },
    getVideoSource (index) {
      return this.videoConfig[index].url
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
    initBubleBtn () {
      var bbs = document.getElementsByClassName('button--bubble')
      for (let i = 0; i < bbs.length; i++) {
        // console.log('paso')
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
        bbs.item(i).addEventListener('mouseover', function () {
          btTl.restart()
        })
      }
    },
    prevLeche () {
      // console.log('prev')
      if (this.lecheSelected > 0) {
        if (this.lecheSelected === 1) {
          document.getElementById('leche-selector-izq').getElementsByClassName('btn-rounded')[0].classList.add('disabled')
        }
        this.lecheSelected--
        document.getElementById('leche-selector-der').getElementsByClassName('btn-rounded')[0].classList.remove('disabled')
        document.getElementById('leit-' + (this.lecheSelected + 1)).classList.add('hidden')
        document.getElementById('leit-' + (this.lecheSelected)).classList.remove('faded')
      }
    },
    nextLeche () {
      // console.log('next')
      if (this.lecheSelected < 3) {
        if (this.lecheSelected === 2) {
          document.getElementById('leche-selector-der').getElementsByClassName('btn-rounded')[0].classList.add('disabled')
        }
        this.lecheSelected++
        document.getElementById('leche-selector-izq').getElementsByClassName('btn-rounded')[0].classList.remove('disabled')
        document.getElementById('leit-' + (this.lecheSelected)).classList.remove('hidden')
        document.getElementById('leit-' + (this.lecheSelected - 1)).classList.add('faded')
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
      if (this.patternSelected < 3) {
        if (this.patternSelected === 2) {
          document.getElementById('pattern-selector-der').getElementsByClassName('btn-rounded')[0].classList.add('disabled')
        }
        this.patternSelected++
        document.getElementById('pattern-selector-izq').getElementsByClassName('btn-rounded')[0].classList.remove('disabled')
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import '../scss/_vars.scss';
  @import '../scss/_bubbleButton.scss';
  .claNavidad-container{
    height: 1280px;
    height: 100%;
    font-family: 'gabrielaregular';
  }
  h1{
    margin: 0;
    font-size: 38px;
    line-height: 1.25;
    color: $claBlue;
    margin-bottom: 45px;
    text-shadow: 1px 1px 0 #1b6aa8
  }
  p{
    margin: 0;
    font-size: 26px;
    line-height: 1.25;
    color: $claBlue;
    margin-bottom: 45px;
  }
  .btn{
    display: inline-block;
    background-color: $claBlue;
    color: white;
    font-size: 17px;
    line-height: 1;
    padding: 20px 35px;
    margin-bottom: 40px;
    cursor: pointer;
  }
  .btn-rounded{
    display: inline-block;
    font-size: 24px;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    cursor: pointer;
    position: relative;
    margin-right: 20px;
    color: $claBlue;
    transition: 0.5s;
    &.claBlued{
      color: white;
      background-color: $claBlue;
    }
    span{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate3d(-50%,-50%,0)
    }
  }
  .img-btn{
    display: inline-block;
    margin-bottom: 40px;
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
      background-color: red;
    }
    &.pos-right{
      transform: translate3d(100%,0,0)
    }
    &.pos-left{
      transform: translate3d(-100%,0,0)
    }
    .appsection-container{
      position: relative;
      width: 100%;
      max-width: 1920px;
      height: 100%;
      display: inline-block;
      margin: 0 auto;
    }
  }
  .text-container{
    text-align: left;
    display: inline-block;
  }
  .ui-elements{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    text-align: center;
    .share-container{
      position: absolute;
      top: 2%;
      left: 1.33%;
      pointer-events: all;
      user-select:none;
      .socialLink{
        opacity: 0;
        transform: translate3d(-100%,0,0);
        pointer-events: none
      }
      &.opened{
        .socialLink{
          opacity: 1;
          transform: translate3d(0,0,0);
          pointer-events: all
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
    }
  }
  .items-selector{
    position: absolute;
    height: 70px;
    width: 42%;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%,-50%,0);
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
      .btn-rounded{
        margin: 0;
        transition: 0.25s;
        &:hover{
          transform: scale(1.1)
        }
        &.disabled{
          pointer-events: none;
          opacity: 0.5
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
    width: 24.075%;
    max-width: 462px;
    height: 85%;
    max-height: 1083px;
    top: 50%;
    left: 46.5%;
    transform: translate3d(-50%,-50%,0);
    .leche-item{
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
      opacity: 1;
      transition: 1s;
      &.faded {
        transition: 1s ;
        clip-path: polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%);
      }
      &.hidden{
        opacity: 0;
      }
    }
    #leit-0, #leit-sel-0{
      background: url('#{$staticpath}static/claNavidad/lecheItem-semi.png');
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
    }
    #leit-1, #leit-sel-1{
      background: url('#{$staticpath}static/claNavidad/lecheItem-desnatada.png');
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
    }
    #leit-2, #leit-sel-2{
      background: url('#{$staticpath}static/claNavidad/lecheItem-00.png');
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
    }
    #leit-3, #leit-sel-3{
      background: url('#{$staticpath}static/claNavidad/lecheItem-entera.png');
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
    }
  }
  #sec-0{
    .appsection-container{
      background: url('#{$staticpath}static/claNavidad/intro-brick.png');
      background-size: contain;
      background-position: center bottom;
      background-repeat: no-repeat;
    }
    .text-container{
      max-width: 275px;
      position: absolute;
      top: 50%;
      right: 17%;
      transform: translate3d(0,-50%,0)
    }
  }
  #sec-1{
    .text-container{
      max-width:410px;
      position: absolute;
      top: 50%;
      left: 71%;
      transform: translate3d(-70px, 70px,0)
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
      background-color: purple;
      display: inline-block;
      position: absolute;
      transition: 0.7s;
      transition-delay: 0.5s;
    }
    .pattern-0, .pattern-2{
      background: url('#{$staticpath}static/claNavidad/test-pattern.jpg');
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    }
    .pattern-1, .pattern-3{
      background: url('#{$staticpath}static/claNavidad/test-patternB.jpg');
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    }
    .white-bar{
      position: absolute;
      width: 100%;
      height: 50%;
      background-color: white;
      transition: 0.7s;
      transition-delay: 0.5s;
    }
    #state-0{
      .white-bar{
        top: 50%;
      }
      .pattern-0{
        opacity: 1;
      }
      .pattern-1, .pattern-2, .pattern-3 {
        opacity: 0;
      }
    }
    #state-1{
      .white-bar{
        top: 0;
      }
      .pattern-1{
        opacity: 1;
      }
      .pattern-0, .pattern-2, .pattern-3 {
        opacity: 0;
      }
    }
    #state-2{
      .white-bar{
        top: 50%;
      }
      .pattern-2{
        opacity: 1;
      }
      .pattern-0, .pattern-1, .pattern-3 {
        opacity: 0;
      }
    }
    #state-3{
      .white-bar{
        top: 0%;
      }
      .pattern-3{
        opacity: 1;
      }
      .pattern-0, .pattern-1, .pattern-2 {
        opacity: 0;
      }
    }
  }
  #sec-2{
    .text-container{
      max-width:410px;
      position: absolute;
      top: 50%;
      left: 71%;
      transform: translate3d(-70px, 70px,0);
      &.inverted{
        h1, p {
          color:white;
        }
      }
    }
    .pattern-container{
      background-color: red;
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
    }
    .ptrn0, .ptrn2{
      background-image: url('#{$staticpath}static/claNavidad/test-BGpattern.jpg');
    }
    .ptrn1, .ptrn3{
      background-image: url('#{$staticpath}static/claNavidad/test-BGpatternB.jpg');
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
    svg{
      overflow: visible;
      transition: 0.25s;
      pointer-events: none;
      opacity: 0;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate3d(-50%,-50%,0);
      &.displayed{
        pointer-events: all;
        opacity: 1;
      }
    }
    #video-viewport {
      position: absolute;
      top: 0;
      left:0;
      overflow: hidden;
      z-index: -1; /* for accessing the video by click */
    }
    .video-mask{
      position: absolute;
      top: 0;
      left:0;
      width: 100%;
      height: 100%;
      background-image: url('#{$staticpath}static/claNavidad/videomask.png');
      opacity: 0.75;
    }
    video {
      display: block;
      width: 100%;
      height: auto;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate3d(-50%,-50%,0);
      transition: 0.5s;
      &.faded{
        opacity: 0;
        pointer-events: none;
      }
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
      height: 100;
      width: 100%;
      top: 50%;
      transform: translate3d(0,-50%,0)
    }
  }
</style>
