<template>
  <div id="app">
    <!-- img class="logo" src="./assets/logo2.png" -->
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'App'
}
</script>

<style>
body, html{
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow: hidden;
}
.noSelect {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  outline: none;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100%;
  width: 100%;
  position: fixed;
  left: 50%;
  transform: translate3d(-50%,0,0);
  overflow-y: scroll;
  border: 10px solid white;
  box-sizing: border-box;
}

#app.no-scroll{
  overflow-y: hidden;
  height: 100%
}
.items-selector .rb-container .btn-rounded.disabled{
  pointer-events: none;
  opacity: 0.5
}
.parallax-container{
  position: absolute;
  perspective: 600px;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0;
  pointer-events: none;
  transition: 0.5s
}
.parallax-container.enabled{
  opacity: 1;
}
.parallax-item{
  position: absolute;
  display: inline-block;
  width: 4vh;
  height: 4vh;
  transition: 0.1s;
}
.parallax-item-image{
  background-size: contain;
  background-repeat: no-repeat;
  transform-origin: center;
  width: 100%;
  height: 100%;
}
#state-1 .parallax-item-image, #state-3 .parallax-item-image{
  transform: rotate(180deg)
}
@media only screen and (max-width: 800px)  {
  .parallax-container.enabled{
    opacity: 0.7;
  }
}
@keyframes diagonal {
  0% {
    transform: translate3d(-10%,-10%,0)
  }
  50%{
    transform: translate3d(10%,10%,0)
  }
  100% {
    transform: translate3d(-10%,-10%,0)
  }
}
</style>
