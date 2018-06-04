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
  margin: 0
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;
  height: 100vh;
  width: 100vw;
  position: fixed;
  overflow-y: scroll;
}
#app.no-scroll{
  overflow-y: hidden;
  height: 100vh
}

.logo{
  display:none;
}
h1,h2,h3,p{
  margin-top: 0;
}
/* INJECTED HTML*/
.modal700{
    width: 75%;
    display: block;
    margin: 30px auto 0;
    max-width: 700px;
    box-shadow: 0 2px 10px #80808080;
}
.modal500{
    width: 75%;
    display: block;
    margin: 30px auto 0;
    max-width: 500px;
    box-shadow: 0 2px 10px #80808080;
}
.modal-full{
    width: 100%;
    display: block;
    margin: 0 auto;
    margin-bottom: 15px;
}
iframe{
    margin-bottom: 0;
}
iframe.youtube-video{
    width: 100%;
    max-width: 700px;
}
iframe.youtube-video-small{
    width: 100%;
    max-width: 560px;
}

.VueCarousel-dot-container{
  margin-top: -30px !important
}

#selector img{
  width: 60px;
  height: 60px;
  box-shadow: 0 3px 5px rgba(0,0,0,.4);
  margin: 2px;
  cursor:pointer;
  clip-path: polygon(0 5px, 100% 0, 100% calc(100% - 5px), 0 100%);
  transition: 0.25s;
  filter: grayscale(100%);
  opacity: 0.5
}
#selector img:hover{
  filter: grayscale(0);
  transform: translate3d(0,-5px, 0);
  opacity: 1;
}

.webvr-ui-title{
  font-size: 12px
}
a#magic-window{
  color: white !important;
  text-shadow: 0 0 10px black
}

</style>
