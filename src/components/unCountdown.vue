<template>
  <div class="component-container">
    <div id="countdown-three"></div>
    <div id="clockdiv">
      <div class="cd-item">
        <span class="days" v-html="cd.days"></span>
        <div class="smalltext">Dias</div>
      </div>
      <div class="cd-item">
        <span class="hours" v-html="cd.hours"></span>
        <div class="smalltext">Horas</div>
      </div>
      <div class="cd-item">
        <span class="minutes" v-html="cd.mins"></span>
        <div class="smalltext">Minutos</div>
      </div>
      <div class="cd-item">
        <span class="seconds" v-html="cd.secs"></span>
        <div class="smalltext">Segundos</div>
      </div>
    </div>
  </div>
</template>

<script>
import {ThreeEarth} from '../lib/ThreeEarth'
export default {
  name: 'unCountdown',
  props: ['test'],
  data () {
    return {
      msg: 'Count down component',
      cd: {days: 0, hours: '00', mins: '00', secs: '00'}
    }
  },
  created () {
  },
  mounted () {
    this.tEarth = new ThreeEarth('countdown-three')
    this.initCountDown()
  },
  methods: {
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
      var deadline = new Date(Date.parse(new Date('September 27,2019 00:00:00')))
      initializeClock('clockdiv', deadline)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.component-container{
  background-color: black;
  height: 90vh;
  position: relative;
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
  .cd-item{
    background-color: #00000000;
    display: inline-block;
    width: 130px;
    margin: 10px;
    font-family: 'overpass_blackregular';
    color: transparent;
    span{
      font-size: 60px;
      font-weight: 900;
      -webkit-text-stroke-width: 2px;
      -webkit-text-stroke-color: white;
      display: block;
    }
    .smalltext{
      color: white;
      text-transform: uppercase;
      display: inline-block;
      line-height: 2.5;
      border-top: 2px solid white;
    }
  }
}
</style>
