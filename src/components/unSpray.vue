<template>
  <div class="component-wrapper unspray">
    <div ref="coco" class="component-container">
      <div ref="cursor" class="cursor">
      </div>
    </div>
  </div>
</template>
<script>
import {TimelineMax, TweenMax} from 'gsap'
export default {
  name: 'unSpray',
  data () {
    return {
      scaleR: 1,
      isMobile: window.innerWidth < window.dataConfig.data.mobile_width
    }
  },
  created () {
    var _ = this
    _.data = window.dataConfig.data
    _.resizeHandler()
    window.addEventListener('resize', function () {
      _.resizeHandler()
      _.isMobile = window.innerWidth < window.dataConfig.data.mobile_width
    })
  },
  mounted () {
    this.sprayBuild()
  },
  methods: {
    resizeHandler () {
      var w = Math.min(window.innerWidth, this.data.max_width)
      this.scaleR = Math.max(0.5, w / this.data.max_width)
      this.scaleR = Math.min(this.scaleR, (this.data.max_width_limit / this.data.max_width))
    },
    sprayBuild () {
      /**
       * fun javascript doodle that lets you doodle
       * 💦🎨 (spray paint?)
       */
      // play with these
      var settings = {
        colorChangeSpeedFactor: 0.1, // how fast does the color changes? Lower is slower, exponential
        trailLength: 300, // how long is the trail?
        diameter: 24, // how wide is the spray mark?
        fadeStart: 0.8 // where does the trail start fading out? percentage along itself
      }
      /* var metaSettings = {
        disabled: true
      } */
      const cursor = this.$refs.cursor
      var cursorTrail = JSON.parse('[{"hue":300,"speed":7,"x":-200,"y":-200}]')
      var cursorPos = {
        x: 100, // start outside the screen
        y: 10
      }
      function getPos (e) {
        var rect = e.target.getBoundingClientRect()
        var x = e.clientX - rect.left // x position within the element.
        var y = e.clientY - rect.top // y position within the element.
        return {
          x: x,
          y: y
        }
      }
      // can't get the mouse position outside of events, so cache it in the cursorPos object
      this.$refs.coco.addEventListener('mousemove', function (e) {
        // cursorPos = getPos(e)
      })
      this.$refs.coco.addEventListener('touchmove', function (e) {
        cursorPos = getPos(e.changedTouches[0]) // no multitouch support (yet? 😜)
        e.preventDefault() // prevent touch scrolling
      })
      // "hide" the cursor by moving it off screen
      function goAway (e) {
        cursorPos.x = -this.$refs.coco.offsetWidth
        cursorPos.y = -this.$refs.coco.offsetHeight
      }
      // this.$refs.coco.addEventListener('mouseleave', goAway)
      this.$refs.coco.addEventListener('touchend', goAway)
      this.$refs.coco.addEventListener('click', function (e) {
        // ∫console.log(JSON.stringify(cursorTrail))
      })
      function frame (time) {
        var hue = (-700 * settings.colorChangeSpeedFactor) % 360
        cursorTrail.push(Object.assign({
          hue: hue,
          speed: cursorTrail.length <= 1 ? 0 : ((pos, lastPos) => {
            // distance between points ~ speed. Might be nice to smooth this by averaging over the last few points
            return Math.sqrt(Math.pow(lastPos.x - pos.x, 2) + Math.pow(lastPos.y - pos.y, 2))
          })(cursorPos, cursorTrail[cursorTrail.length - 1])
        }, cursorPos))
        // keep popping off the first one
        // nice little following effect, plus your browser would probably die if everything was kept
        if (cursorTrail.length > settings.trailLength) {
          cursorTrail.shift()
        }
        // follow the mouse!
        cursor.style.top = `${cursorPos.y}px`
        cursor.style.left = `${cursorPos.x}px`
        // make it look like the circle is solid
        cursor.style.backgroundColor = `hsl(${hue}, 100%, 50%)`
        // generate a trail of shadows
        cursor.style.boxShadow = cursorTrail.map((pos, i) => {
          const offsetX = pos.x - cursorPos.x
          const offsetY = pos.y - cursorPos.y
          const age = (settings.trailLength - i) / settings.trailLength
          const fadeOut = age < settings.fadeStart ? 0 : Math.pow(4 * (age - settings.fadeStart), 2)
          const color = `hsla(${pos.hue}, 50%, 50%, ${1 - fadeOut})`
          // return `${offsetX}px ${offsetY}px ${pos.speed + 1}px ${age * settings.diameter + settings.diameter}px ${color}`;
          return `${offsetX}px ${offsetY}px ${pos.speed + 1}px ${settings.diameter}px ${color}`
        }).reverse().join(', ')
        window.requestAnimationFrame(frame)
      }
      window.requestAnimationFrame(frame)
      var timeline = new TimelineMax({repeat: -1, onUpdate: myh})
      timeline.add(TweenMax.to(cursorPos, 3, {x: this.$refs.coco.offsetWidth - 100}))
      timeline.add(TweenMax.to(cursorPos, 5, {x: this.$refs.coco.offsetWidth - 100}))
      timeline.add(TweenMax.to(cursorPos, 3, {x: 100}))
      timeline.add(TweenMax.to(cursorPos, 5, {x: 100}))
      function myh () {
        cursorPos.y = (10 * Math.random())
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../scss/_vars.scss';
.component-wrapper.unspray{
  width: 100%;
  background-color: black;
  @media (max-width: $break-mobile) {
    display: none;
  }
  .component-container{
    position: relative;
    max-width: $pagewidth;
    margin: 0 auto;
    box-sizing: border-box;
    min-height: 100px;
    overflow: hidden;
    filter: saturate(2.4)
  }
  .cursor {
    display: block;
    position: absolute;
    height: 2px;
    width: 2px;
    border-radius: 50%;
    background-color: transparent;
    // hide on init
    top: -100px;
    left: -100px;
  }
}
</style>
