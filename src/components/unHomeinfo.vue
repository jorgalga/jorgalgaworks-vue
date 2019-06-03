<template>
  <div class="component-wrapper homeinfo">
    <div class="component-container" v-observe-visibility="visibilityChanged">
      <div class="flex-grid">
        <div class="col">
          <!--div id="home-bust">
          </div-->
          <unGlitch name="home_bust.jpg"></unGlitch>
        </div>
        <div class="col">
          <div class="text-container">
            <div class="text-wrapper">
              <h2 id="tw-text" v-bind:style="isMobile? 'margin-bottom:'+15+'px;font-size:30px' : 'margin-bottom:'+30*scaleR+'px;font-size:'+72*scaleR+'px'">Say hello to the <span style='color:#FF00FF;text-decoration:line-through'><span style='color:white'>craziest </span></span> talent festival.</h2>
              <a href="/#/tickets"><img id="ticketshomeinfo" v-bind:width="225*scaleR+'px'" src="static/unleash/images/ticket.png"></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import unGlitch from '@/components/unGlitch'
import Typewriter from 'typewriter-effect/dist/core'
export default {
  name: 'unHomeinfo',
  props: ['test'],
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
      _.isMobile = window.innerWidth < window.dataConfig.data.mobile_width
      _.resizeHandler()
    })
  },
  mounted () {
    var twEl = document.getElementById('tw-text')
    var typewriter = new Typewriter(twEl, {
      loop: true
    })
    typewriter.typeString('Say hello to')
      .typeString('<br/>')
      .typeString('the craziest')
      .pauseFor(500)
      .deleteChars(9)
      .typeString(' <span style=color:#FF00FF;text-decoration:line-through><span style=color:white>craziest</span></span>')
      .typeString('<br/>')
      .typeString('talent')
      .typeString('<br/>')
      .typeString('festival.')
      .pauseFor(2500)
      .start()
    // Say hello to the <span style='color:#FF00FF;text-decoration:line-through'><span style='color:white'>craziest </span></span> talent festival.
  },
  methods: {
    visibilityChanged: function (isVisible, entry) {
      if (isVisible && !entry.target.classList.contains('displayed')) {
        entry.target.classList.add('displayed')
      }
    },
    resizeHandler () {
      var w = Math.min(window.innerWidth, this.data.max_width)
      this.scaleR = Math.max(0.5, w / this.data.max_width)
      this.scaleR = Math.min(this.scaleR, (this.data.max_width_limit / this.data.max_width))
    }
  },
  components: {
    'unGlitch': unGlitch
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../scss/_vars.scss';
.component-wrapper.homeinfo{
  width: 100%;
  //background-color: darkgrey;
  //background-color: black;
  padding-top: 126px;
  @media (max-width: $break-mobile) {
    padding-top: 50px;
  }
  .component-container{
    position: relative;
    max-width: $pagewidth;
    margin: 0 auto;
    //background-color: black;
    box-sizing: border-box;
  }
  #ticketshomeinfo{
    opacity: 1;
    transition: 0.5s;
  }
}
.flex-grid{
  display: flex;
}
.col{
  flex: 1;
}
@media (max-width: 800px) {
  .flex-grid{
    display: block;
  }
}
h2{
  font-family: 'space_monoregular';
  font-weight: 100;
  line-height: 1.3;
  margin: 0;
  color: white;
}
.text-container{
  position: relative;
  height: 100%;
  .text-wrapper{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%,-50%,0);
    display: inline-block;
    width: 85%;
    a{
      display: inline-block;
    }
    @media (max-width: $break-mobile) {
      position: initial;
      transform: translate3d(0,0,0);
      padding: 30px 0 60px;
      margin: 0 auto;
      img{
        width: 100px;
      }
    }
  }
  @media (max-width: $break-mobile) {
    min-height: 200px;
    text-align: center;
  }
}

</style>
