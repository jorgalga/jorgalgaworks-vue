<template>
  <div class="page">
    <div class="page-content">
      <unMenu></unMenu>
      <unPageheader type="speakers"></unPageheader>
      <unWrapper type="speakers" classopened="opened"></unWrapper>
      <unWrapper type="artists" classopened="opened" flipped="inverse"></unWrapper>
      <unWrappersimple type="host" classopened="opened"></unWrappersimple>
      <unQuestion type="speakers" qindex="0"></unQuestion>
      <unFooter></unFooter>
    </div>
  </div>
</template>
<script>
import unMenu from '@/components/unMenu'
import unPageheader from '@/components/unPageheader'
import unWrapper from '@/components/unWrapper'
import unWrappersimple from '@/components/unWrappersimple'
import unQuestion from '@/components/unQuestion'
import unFooter from '@/components/unFooter'
export default {
  name: 'Speakers',
  props: ['id'],
  data () {
    return {
      scaleR: 1,
      isMobile: window.innerWidth < window.dataConfig.data.mobile_width
    }
  },
  components: {
    'unMenu': unMenu,
    'unPageheader': unPageheader,
    'unWrapper': unWrapper,
    'unWrappersimple': unWrappersimple,
    'unQuestion': unQuestion,
    'unFooter': unFooter
  },
  mounted () {
    var _ = this
    _.data = window.dataConfig.data
    _.resizeHandler()
    window.addEventListener('resize', function () {
      _.resizeHandler()
      _.isMobile = window.innerWidth < window.dataConfig.data.mobile_width
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
.page-content{
  margin: 0 auto;
  max-width: 100%;
  background-color: white;
}
.component-wrapper.unquestion{
  background-color: black;
}
</style>
