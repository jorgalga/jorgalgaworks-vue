<template>
  <div id="page" class="page">
    <div class="page-content">
      <unMenu></unMenu>
      <unPageheader type="organizers"></unPageheader>
      <unQuestion type="organizers" qindex="0"></unQuestion>
      <unLines></unLines>
      <unFloatingTags type="organizers"></unFloatingTags>
      <unFooter></unFooter>
    </div>
  </div>
</template>
<script>
import unMenu from '@/components/unMenu'
import unPageheader from '@/components/unPageheader'
import unFloatingTags from '@/components/unFloatingTags'
import unQuestion from '@/components/unQuestion'
import unLines from '@/components/unLines'
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
    'unFloatingTags': unFloatingTags,
    'unQuestion': unQuestion,
    'unLines': unLines,
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
