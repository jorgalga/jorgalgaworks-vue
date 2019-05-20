<template>
  <div class="component-wrapper untickets" v-bind:style="isMobile ? 'min-height:100vh' : 'min-height:'+850+'px'">
    <div class="component-container" v-bind:style="isMobile ? 'padding:'+126*scaleR+'px 0 0 0;' : 'padding:'+200*scaleR+'px 0 0 0;'">
      <div class="page-breadcum" v-html="data.page_content['tickets'].breadcum"></div>
      <div class="description" v-html="data.page_content['tickets'].description"></div>
      <div class="eb-wrapper">
        <div id="eventbrite-widget-container-60921653305"></div>
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
      iframeContainerHeight: 640, // Widget height in pixels. Defaults to a minimum of 425px if not provided
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
    margin: 0 auto;
    background-color: black;
    box-sizing: border-box;
  }
  .page-breadcum{
    font-family: 'space_monoregular';
    color: $magenta;
    text-align: center;
    padding: 20px;
    font-size: 20px;
  }
  .description{
    font-family: 'overpassregular';
    color: white;
    text-align: center;
    padding: 15px;
    line-height: 1.3;
    max-width: 66%;
    margin: 0 auto;
  }
}

</style>
