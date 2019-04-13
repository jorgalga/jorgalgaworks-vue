<template>
  <div id="app">
    <!--div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/hello">Hello</router-link>
    </div-->
    <transition name="router-anim">
      <router-view/>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'App'
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
  -webkit-overflow-scrolling: touch;
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
