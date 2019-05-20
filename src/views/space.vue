<template>
  <div class="page">
    <div class="page-content">
      <unMenu></unMenu>
      <unPageheader type="space"></unPageheader>
      <unFloatingTags type="space"></unFloatingTags>
      <unWrapperspace type="space_enter" classopened="opened"></unWrapperspace>
      <unWrapperspace type="space_shift"></unWrapperspace>
      <unWrapperspace type="space_escape" configclass="darked"></unWrapperspace>
      <unMap></unMap>
      <unFooter></unFooter>
    </div>
  </div>
</template>
<script>
import unMenu from '@/components/unMenu'
import unPageheader from '@/components/unPageheader'
import unFloatingTags from '@/components/unFloatingTags'
import unWrapperspace from '@/components/unWrapperspace'
import unMap from '@/components/unMap'
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
    'unWrapperspace': unWrapperspace,
    'unMap': unMap,
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
