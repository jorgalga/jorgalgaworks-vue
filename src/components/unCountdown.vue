<template>
  <div class="component-container">
    <div id="countdown-three"></div>
    <div id="clockdiv">
      <div class="cd-item" v-bind:style="isMobile ? '' : 'margin:'+10*scaleR+'px;width:'+130*scaleR+'px;'">
        <span class="days" v-html="cd.days"  v-bind:style="isMobile ? '' : 'font-size:'+60*scaleR+'px;'"></span>
        <div class="smalltext">Days</div>
      </div>
      <div class="cd-item">
        <span class="hours" v-html="cd.hours"  v-bind:style="isMobile ? '' : 'font-size:'+60*scaleR+'px;'"></span>
        <div class="smalltext">Hours</div>
      </div>
      <div class="cd-item">
        <span class="minutes" v-html="cd.mins"  v-bind:style="isMobile ? '' : 'font-size:'+60*scaleR+'px;'"></span>
        <div class="smalltext">Minutes</div>
      </div>
      <div class="cd-item">
        <span class="seconds" v-html="cd.secs"  v-bind:style="isMobile ? '' : 'font-size:'+60*scaleR+'px;'"></span>
        <div class="smalltext">Seconds</div>
      </div>
    </div>
  </div>
</template>

<script>
import {ThreeEarth} from '../lib/ThreeEarth'
export default {
  name: 'unCountdown',
  data () {
    return {
      msg: 'Count down component',
      cd: {days: 0, hours: '00', mins: '00', secs: '00'},
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
    this.tEarth = new ThreeEarth('countdown-three')
    this.initCountDown()
  },
  methods: {
    resizeHandler () {
      var w = Math.min(window.innerWidth, this.data.max_width)
      this.scaleR = Math.max(0.5, w / this.data.max_width)
      this.scaleR = Math.min(this.scaleR, (this.data.max_width_limit / this.data.max_width))
    },
    initCountDown () {
      let _ = this
      function getTimeRemaining (endtime) {
        var t = Date.parse(endtime) - Date.parse(new Date())
        var seconds = Math.floor((t / 1000) % 60)
        var minutes = Math.floor((t / 1000 / 60) % 60)
        var hours = Math.floor((t / (1000 * 60 * 60)) % 24)
        var days = Math.floor(t / (1000 * 60 * 60 * 24))
        return {
          'total': t,
          'days': days,
          'hours': hours,
          'minutes': minutes,
          'seconds': seconds
        }
      }
      function initializeClock (id, endtime) {
        function updateClock () {
          // console.log(_.$props.test)
          var t = getTimeRemaining(endtime)
          _.cd.days = t.days
          _.cd.hours = ('0' + t.hours).slice(-2)
          _.cd.mins = ('0' + t.minutes).slice(-2)
          _.cd.secs = ('0' + t.seconds).slice(-2)
          if (t.total <= 0) {
            clearInterval(timeinterval)
          }
        }
        updateClock()
        var timeinterval = setInterval(updateClock, 1000)
      }
      var deadline = new Date(Date.parse(new Date(_.data.initDate)))
      initializeClock('clockdiv', deadline)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../scss/_vars.scss';
.component-container{
  //background-color: black;
  height: 90vh;
  max-height: 650px;
  position: relative;
  @media (max-width: $break-mobile) {
    height: 50vh;
  }
}
#countdown-three{
  height: 100%;
}
#clockdiv{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%,-50%,0);
  color: white;
  text-align: center;
  width: 100%;
  .cd-item{
    background-color: #00000000;
    display: inline-block;
    width: 130px;
    margin: 10px;
    font-family: 'overpass_blackregular';
    color: transparent;
    @media (max-width: $break-mobile) {
      width: initial;
      margin: 5px ;
    }
    span{
      font-size: 60px;
      font-weight: 900;
      -webkit-text-stroke-width: 1px;
      -webkit-text-stroke-color: white;
      display: block;
      @media (max-width: $break-mobile) {
        font-size: 30px;
      }
    }
    .smalltext{
      color: white;
      text-transform: uppercase;
      display: inline-block;
      line-height: 2.5;
      letter-spacing: 4px;
      border-top: 2px solid white;
      font-weight: 100;
       @media (max-width: $break-mobile) {
        font-size: 12px;
      }
    }
  }
}
</style>
