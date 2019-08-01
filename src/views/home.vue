<template>
  <div id="page" ref="page" class="page">
    <cmpMenu></cmpMenu>
    <cmpHeader></cmpHeader>
    <cmpVideo></cmpVideo>
    <cmpInfo></cmpInfo>
    <cmpForm></cmpForm>
    <cmpFooter></cmpFooter>
  </div>
</template>
<script>
import cmpHeader from '@/components/CMP_header'
import cmpMenu from '@/components/CMP_menu'
import cmpForm from '@/components/CMP_form'
import cmpVideo from '@/components/CMP_video'
import cmpInfo from '@/components/CMP_info'
import cmpFooter from '@/components/CMP_footer'
export default {
  name: 'Home',
  props: ['id', 'lang'],
  data () {
    return {
      scaleR: 1,
      isMobile: window.innerWidth < window.dataConfig.mobile_width,
      data: window.dataConfig
    }
  },
  beforeCreate () {
    if (this.$route.params.lang) {
      this.clang = this.$route.params.lang
    }
  },
  created () {
    var _ = this
    _.resizeHandler()
    window.addEventListener('resize', function () {
      _.resizeHandler()
      _.isMobile = window.innerWidth < _.data.mobile_width
    })
  },
  components: {
    'cmpHeader': cmpHeader,
    'cmpMenu': cmpMenu,
    'cmpForm': cmpForm,
    'cmpInfo': cmpInfo,
    'cmpFooter': cmpFooter,
    'cmpVideo': cmpVideo
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
