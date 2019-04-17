<template>
  <div class="page">
    <div class="page-content">
      <unMenu></unMenu>
      <unPageheader type="speakers"></unPageheader>
      <unWrapper type="speakers"></unWrapper>
      <unWrapper type="artists" flipped="inverse"></unWrapper>
      <unWrappersimple type="hosts"></unWrappersimple>
      <unFooter></unFooter>
    </div>
  </div>
</template>
<script>
import unMenu from '@/components/unMenu'
import unPageheader from '@/components/unPageheader'
import unWrapper from '@/components/unWrapper'
import unWrappersimple from '@/components/unWrappersimple'
import unFooter from '@/components/unFooter'
export default {
  name: 'Speakers',
  props: ['id'],
  data () {
    return {
      msg: ''
    }
  },
  components: {
    'unMenu': unMenu,
    'unPageheader': unPageheader,
    'unWrapper': unWrapper,
    'unWrappersimple': unWrappersimple,
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
