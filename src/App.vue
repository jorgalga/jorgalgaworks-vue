<template>
  <div id="app">
    <img class="logo" src="./assets/logo2.png">
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
.no-scroll{
  overflow: hidden;
  height: 99vh
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;
  height: 99vh;
  width: 100vw;
  position: fixed;
  overflow-y: scroll;
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
</style>
