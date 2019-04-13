<template>
  <div class="page">
    <div class="page-content">
      <unMenu></unMenu>
    </div>
  </div>
</template>
<script>
import unMenu from '@/components/unMenu'
export default {
  name: 'Speakers',
  props: ['id'],
  data () {
    return {
      msg: ''
    }
  },
  components: {
    'unMenu': unMenu
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
