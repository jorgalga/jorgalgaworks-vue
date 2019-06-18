<template>
  <div class="component-wrapper untickets" v-bind:style="isMobile ? 'min-height:100vh' : 'min-height:'+850+'px'">
    <div class="component-container" v-bind:style="isMobile ? 'padding:'+126*scaleR+'px 0 0 0;' : 'padding:'+200*scaleR+'px 0 0 0;'">
      <div class="page-breadcum" v-html="data.page_content['tickets'].breadcum"></div>
      <div class="description" v-html="data.page_content['tickets'].description"></div>
      <div class="eb-wrapper">
        <div id="eventbrite-widget-container-60921653305"></div>
        <div class="img-whistle"> </div>
      </div>
      <div ref="shadow" class="shadow" v-bind:style="'height:'+250*scaleR+'px'">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'unTickets',
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
      _.resizeHandler()
      _.isMobile = window.innerWidth < window.dataConfig.data.mobile_width
    })
  },
  mounted () {
    var exampleCallback = function () {
      console.log('Order complete!')
    }
    window.EBWidgets.createWidget({
      // Required
      widgetType: 'checkout',
      eventId: '60921653305',
      iframeContainerId: 'eventbrite-widget-container-60921653305',
      // Optional
      // iframeContainerHeight: 640, // Widget height in pixels. Defaults to a minimum of 425px if not provided
      onOrderComplete: exampleCallback // Method called when an order has successfully completed
    })
  },
  methods: {
    resizeHandler () {
      var w = Math.min(window.innerWidth, this.data.max_width)
      this.scaleR = Math.max(0.5, w / this.data.max_width)
      this.scaleR = Math.min(this.scaleR, (this.data.max_width_limit / this.data.max_width))
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../scss/_vars.scss';
.component-wrapper.untickets{
  width: 100%;
  background-color: black;
  .component-container{
    position: relative;
    max-width: $pagewidth2;
    max-width: $pagewidth;
    margin: 0 auto;
    background-color: black;
    box-sizing: border-box;
    text-align: right;
    .shadow{
      height: 200px;
      width: 100%;
      background-image: url('#{$staticpath}static/unleash/images/spray.png');
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
      transform: translate3d(0,-52.5%,0);
      clip-path: polygon(0% 50%, 100% 50%, 100% 100%, 0% 100%);
      @media (max-width: $break-mobile) {
        width: 90%;
        display: block;
        margin: 0 auto;
      }
    }
  }
  .page-breadcum{
    font-family: 'overpass_blackregular';
    color: $magenta;
    text-align: center;
    padding: 20px 0;
    font-size: 20px;
    width: 100%;
    max-width: 75%;
    margin: 0 auto;
    box-sizing: border-box;
    @media (max-width: $break-mobile) {
      width: 100%;
      padding: 20px 0;
      max-width: 90%;
      text-align: left;
    }
  }
  .description{
    font-family: 'overpassregular';
    color: white;
    text-align: center;
    padding: 15px 0;
    line-height: 1.3;
    width: 100%;
    max-width: 75%;
    margin: 0 auto;
    box-sizing: border-box;
    @media (max-width: $break-mobile) {
      width: 100%;
      padding: 15px 0;
      max-width: 90%;
      text-align: left;
    }
  }
  .eb-wrapper{
    display: inline-block;
    width: 50%;
    position: relative;
    @media (max-width: $break-mobile) {
      width: 90%;
      display: block;
      margin: 0 auto;
    }
    .img-whistle {
      display: inline-block;
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      top:0;
      left: 0;
      display: inline-block;
      position: absolute;
      transform: translate3d(-100%,0,0);
      background-image: url('#{$staticpath}static/unleash/images/UNLEASH_MATERIALES_PULSERA.jpg');
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      @media (max-width: $break-mobile) {
        position: relative;
        transform: translate3d(0,0,0);
        height: 300px;
      }
    }
  }
}

</style>
