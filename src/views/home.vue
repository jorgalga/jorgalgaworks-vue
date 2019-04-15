<template>
  <div class="page">
    <div class="page-content">
      <unMenu></unMenu>
      <unHomeinfo></unHomeinfo>
      <unCountdown></unCountdown>
      <unFooter></unFooter>
    </div>
  </div>
</template>
<script>
import unMenu from '@/components/unMenu'
import unHomeinfo from '@/components/unHomeinfo'
import unCountdown from '@/components/unCountdown'
import unFooter from '@/components/unFooter'
export default {
  name: 'Home',
  props: ['id'],
  data () {
    return {
      msg: '',
      vh: window.innerHeight / 1.75,
      vw: Math.min(1024, window.innerWidth / 1.25)
    }
  },
  components: {
    'unMenu': unMenu,
    'unHomeinfo': unHomeinfo,
    'unCountdown': unCountdown,
    'unFooter': unFooter
  },
  mounted () {
    window.addEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize () {
      this.vh = window.innerHeight / 1.75
      this.vw = Math.min(1024, window.innerWidth / 1.25)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../scss/_vars.scss';
.page-content{
  margin: 0 auto;
  max-width: $pagewidth;
}
</style>
