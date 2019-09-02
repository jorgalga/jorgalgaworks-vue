<template>
  <div id="page" ref="page" class="page">
    <cmpMenutwo ></cmpMenutwo>
    <cmpHeader type="whity"></cmpHeader>
    <cmpFooter></cmpFooter>
  </div>
</template>
<script>
import cmpHeader from '@/components/CMP_header'
import cmpMenutwo from '@/components/CMP_menutwo'
import cmpFooter from '@/components/CMP_footer'
export default {
  name: 'NewExternal',
  props: ['id', 'lang'],
  data () {
    return {
      scaleR: 1,
      isMobile: window.innerWidth < window.dataConfig.mobile_width,
      data: window.dataConfig
    }
  },
  beforeCreate () {
  },
  created () {
  },
  components: {
    'cmpHeader': cmpHeader,
    'cmpMenutwo': cmpMenutwo,
    'cmpFooter': cmpFooter
  },
  mounted () {
  },
  methods: {
    resizeHandler () {
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
