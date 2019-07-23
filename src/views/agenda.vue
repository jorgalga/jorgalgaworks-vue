<template>
  <div id="page" class="page">
    <div class="page-content">
      <unMenu></unMenu>
      <unPageheader type="agenda"></unPageheader>
      <unWrappertime type="day_1" date="SEPTEMBER 12" white=whitened classopened="opened"></unWrappertime>
      <unWrappertime type="day_2" date="SEPTEMBER 13" white=whitened classopened="opened"  flipped="inverse"></unWrappertime>
      <unWrappertime type="day_3" date="SEPTEMBER 14" classopened="opened" sdisplay="displayed"></unWrappertime>
      <unCountdown></unCountdown>
      <unFooter></unFooter>
    </div>
  </div>
</template>
<script>
import unMenu from '@/components/unMenu'
import unPageheader from '@/components/unPageheader'
import unWrappertime from '@/components/unWrapperTime'
import unCountdown from '@/components/unCountdown'
import unFooter from '@/components/unFooter'
export default {
  name: 'Space',
  props: ['id'],
  data () {
    return {
      msg: ''
    }
  },
  components: {
    'unMenu': unMenu,
    'unPageheader': unPageheader,
    'unWrappertime': unWrappertime,
    'unCountdown': unCountdown,
    'unFooter': unFooter
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../scss/_vars.scss';
.page-content{
  margin: 0 auto;
  max-width: $pagewidth;
  max-width: 100%;
  background-color: black;
}
</style>
