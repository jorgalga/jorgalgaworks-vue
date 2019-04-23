<template>
  <div class="page">
    <div class="page-content">
      <unMenu></unMenu>
      <unPageheader type="agenda"></unPageheader>
      <unCountdown></unCountdown>
      <unFooter></unFooter>
    </div>
  </div>
</template>
<script>
import unMenu from '@/components/unMenu'
import unPageheader from '@/components/unPageheader'
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
  background-color: white;
}
</style>
