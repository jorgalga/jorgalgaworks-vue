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
@font-face {
  font-family: 'icomoon';
  src:  url('/static/claNavidad/fonts/icomoon.eot?emph7v');
  src:  url('/static/claNavidad/fonts/icomoon.eot?emph7v#iefix') format('embedded-opentype'),
    url('/static/claNavidad/fonts/icomoon.ttf?emph7v') format('truetype'),
    url('/static/claNavidad/fonts/icomoon.woff?emph7v') format('woff'),
    url('/static/claNavidad/fonts/icomoon.svg?emph7v#icomoon') format('svg');
  font-weight: normal;
  font-style: normal;
}

[class^="icon-"], [class*=" icon-"] {
  /* use !important to prevent issues with browser extensions that change fonts */
  font-family: 'icomoon' !important;
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;

  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-ctrl:before {
  content: "\ea50";
}
.icon-ctrl1:before {
  content: "\ea51";
}
.icon-ctrl1{
  font-size: 17px;
  position: relative;
  top: 2px;
}
.icon-ctrl{
  font-size: 17px;
  position: relative;
  top: 2px;
}

.icon-share2:before {
  content: "\ea82";
}
.icon-facebook:before {
  content: "\ea90";
}
.icon-whatsapp:before {
  content: "\ea93";
}
.icon-twitter:before {
  content: "\ea96";
}

@font-face {
  font-family: 'gabrielaregular';
  src: url('/static/claNavidad/fonts/ydray-gabriela-regular-webfont.woff2') format('woff2'),
    url('/static/claNavidad/fonts/ydray-gabriela-regular-webfont.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
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
}
#app.no-scroll{
  overflow-y: hidden;
  height: 100%
}
@media only screen and (max-width: 600px)  {
}
</style>
