<template>
  <div id="page" ref="page" class="page">
    <cmpMenutwo ></cmpMenutwo>
    <cmpHeader nologocopy='nologocopy'></cmpHeader>
    <cmpFormtwo></cmpFormtwo>
    <cmpFooter></cmpFooter>
  </div>
</template>
<script>
import cmpHeader from '@/components/CMP_header'
import cmpMenutwo from '@/components/CMP_menutwo'
import cmpFormtwo from '@/components/CMP_formtwo'
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
    'cmpFormtwo': cmpFormtwo,
    'cmpFooter': cmpFooter
  },
  mounted () {
    this.scrollHandler()
  },
  methods: {
    resizeHandler () {
    },
    scrollHandler () {
      var _ = this
      var top = true
      if (document.getElementById('pc').classList.contains('displayed')) {
        document.getElementById('pc').classList.remove('displayed')
      }
      _.$refs.page.addEventListener('scroll', function () {
        // console.log(_.$refs.page.scrollTop)
        if (_.$refs.page.scrollTop < 200) {
          if (top === false) {
            top = true
            console.log('hide btn fix')
            document.getElementById('pc').classList.remove('displayed')
          }
        } else {
          if (top === true) {
            top = false
            console.log('show btn fix')
            document.getElementById('pc').classList.add('displayed')
          }
        }
      })
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
