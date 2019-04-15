<template>
  <div class="page">
    <div class="page-content">
      <unMenu></unMenu>
      <unWrapper type="speakers"></unWrapper>
      <unWrapper type="artists"></unWrapper>
    </div>
  </div>
</template>
<script>
import unMenu from '@/components/unMenu'
import unWrapper from '@/components/unWrapper'
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
    'unWrapper': unWrapper
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
}
</style>
