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

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;
  height: 99.9vh;
  width: 100vw;
  position: fixed;
}
#app.no-scroll{
  overflow-y: hidden;
  height: 99vh
}

.logo{
  display:none;
}
h1,h2,h3,p{
  margin-top: 0;
}
.thumb-text p{
  margin: 0;
}
h2{
 font-size: 2.5vmin;
}
@media only screen and (max-width: 600px)  {
  h2{
    font-size: 18px;
    margin-bottom: 10px;
  }
}
</style>
