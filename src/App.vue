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
  height: 100vh
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;
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
    margin: 30px auto;
    max-width: 700px;
    box-shadow: 0 2px 10px #80808080;
}
.modal-full{
    width: 100%;
    display: block;
    margin: 0 auto;
    margin-bottom: 100px;
}
iframe{
    margin-bottom: 0;
}
</style>
