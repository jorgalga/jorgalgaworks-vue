<template>
  <div class="component-wrapper cmpcontact">
    <div class="component-container" v-bind:style="isMobile ? 'height:'+200*scaleR+'px' : 'height:'+200*scaleR+'px'" >
    </div>
  </div>
</template>

<script>
export default {
  name: 'CMP_contact',
  props: ['test'],
  data () {
    return {
      scaleR: 1,
      isMobile: window.innerWidth < window.dataConfig.mobile_width,
      data: window.dataConfig,
      clang: 'es'
    }
  },
  created () {
    console.log(this.$route.params.lang)
    if (this.$route.params.lang) {
      this.clang = this.$route.params.lang
    }
    var _ = this
    _.resizeHandler()
    window.addEventListener('resize', function () {
      _.isMobile = window.innerWidth < _.data.mobile_width
      _.resizeHandler()
    })
  },
  mounted () {
  },
  methods: {
    resizeHandler () {
      var w = Math.min(window.innerWidth, this.data.max_width)
      this.scaleR = Math.max(this.data.mobile_width / this.data.max_width, w / this.data.max_width)
      this.scaleR = Math.min(this.scaleR, (this.data.max_width_limit / this.data.max_width))
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../scss/_vars.scss';
@import '../scss/_fonts.scss';
.component-wrapper.cmpcontact{
  width: 100%;
  background-color: $darkblue;
  transition: 1s;
  position: relative;
  .component-container{
    max-width: $pagewidth;
    margin: 0 auto;
    box-sizing: border-box;
    // background-color: #00000011;
    min-height: 100px;
    position:relative;
  }
}
</style>
