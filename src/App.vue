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

</style>
