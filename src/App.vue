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
  background-color: black;
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
  color: #2c3e50;
  text-align: center;
  height: 99.9vh;
  width: 100vw;
  position: fixed;
  left: 50%;
  transform: translate3d(-50%,0,0);
}
#app.no-scroll{
  overflow-y: hidden;
  height: 99.9vh
}

.logo{
  display:none;
}
h1,h2,h3,p{
  margin-top: 0;
  line-height: 1;
}
.thumb-text p{
  margin: 0;
}
h2{
 font-size: 18px;
}
.videoContainer{
  position: absolute;
  width: 80%;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%,-50%,0)
}
.videoWrapper {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  padding-top: 25px;
  height: 0;
}
.videoWrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
@media only screen and (max-width: 600px)  {
  h2{
    font-size: 16px;
    margin-bottom: 10px;
  }
  #app {
    height: 99vh;
  }
  .videoContainer{
    width: 100%;
    height: auto;
  }
}
</style>
