<template>
  <div id="page" ref="page" class="page">
  </div>
</template>
<script>
import unMenu from '@/components/unMenu'
import unHomeinfo from '@/components/unHomeinfo'
import unQuestion from '@/components/unQuestion'
import unVideo from '@/components/unVideo'
import unCountdown from '@/components/unCountdown'
import unFooter from '@/components/unFooter'
export default {
  name: 'Home',
  props: ['id', 'lang'],
  data () {
    return {
      scaleR: 1,
      isMobile: window.innerWidth < window.dataConfig.data.mobile_width
    }
  },
  created () {
    console.log(this.$props.lang)
    var _ = this
    _.data = window.dataConfig.data
    _.resizeHandler()
    window.addEventListener('resize', function () {
      _.resizeHandler()
      _.isMobile = window.innerWidth < window.dataConfig.data.mobile_width
    })
  },
  components: {
    'unMenu': unMenu,
    'unHomeinfo': unHomeinfo,
    'unQuestion': unQuestion,
    'unCountdown': unCountdown,
    'unVideo': unVideo,
    'unFooter': unFooter
  },
  mounted () {
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
.page-content{
  margin: 0 auto;
  max-width: 100%;
  position: relative;
  perspective: 1px
}
</style>
