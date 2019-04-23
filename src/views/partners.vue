<template>
  <div class="page">
    <div class="page-content">
      <unMenu></unMenu>
      <unPageheader type="partners"></unPageheader>
      <unWrappergrid type="partner_x"></unWrappergrid>
      <unWrappergrid type="partner_global"></unWrappergrid>
      <unWrappergrid type="partner_generations"></unWrappergrid>
      <unWrappergrid type="partner_colaborator" configclass="darked"></unWrappergrid>
      <unQuestion type="partners" qindex=0></unQuestion>
      <unFooter></unFooter>
    </div>
  </div>
</template>
<script>
import unMenu from '@/components/unMenu'
import unPageheader from '@/components/unPageheader'
import unWrappergrid from '@/components/unWrappergrid'
import unQuestion from '@/components/unQuestion'
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
    'unWrappergrid': unWrappergrid,
    'unQuestion': unQuestion,
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
