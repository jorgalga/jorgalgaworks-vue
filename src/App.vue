<template>
  <div id="app">
    <transition name="router-anim" >
      <router-view/>
    </transition>
    <cmpCookies></cmpCookies>
  </div>
</template>
<script>
import cmpCookies from '@/components/CMP_cookies'
export default {
  name: 'App',
  props: ['lang'],
  components: {
    'cmpCookies': cmpCookies
  },
  data () {
    return {
      scaleR: 1,
      menuOpened: false,
      isMobile: window.innerWidth < window.dataConfig.mobile_width
    }
  },
  created () {
    var _ = this
    _.data = window.dataConfig
    _.resizeHandler()
    window.addEventListener('resize', function () {
      _.isMobile = window.innerWidth < _.data.mobile_width
      _.resizeHandler()
    })
  },
  mounted () {
  },
  methods: {
    resizeHandler () {
      var w = Math.min(window.innerWidth, this.data.max_width)
      this.scaleR = Math.max(0.5, w / this.data.max_width)
    }
  }
}
</script>

<style scoped lang="scss">
@import 'scss/_vars.scss';
@import 'scss/_fonts.scss';
#app {
  display: inline-block;
  height: 100%;
  width: 100%;
  background-color: black;
}
#app.no-scroll{
  overflow-y: hidden;
  height: 100%
}
.page{
  position: absolute;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  overflow-y: scroll;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
  &.no-scroll{
    overflow-y:hidden;
  }
}
.router-anim-enter-active{
  animation: coming 0.5s;
  animation-delay: 0.5s;
  opacity: 0;
}
.router-anim-leave-active{
  animation: going 0.5s;
}
@keyframes  coming {
  from {
    transform: translateY(-0);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
@keyframes  going {
  from {
    transform: translateX(0)
  }
  to {
    transform: translateY(0);
    opacity: 0;
  }
}
</style>
