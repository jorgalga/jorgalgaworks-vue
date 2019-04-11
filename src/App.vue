<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/hello">Hello</router-link>
    </div>
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
  box-sizing: border-box;
}

#app.no-scroll{
  overflow-y: hidden;
  height: 100%
}
#nav{
  position: absolute;
  top: 0;
  left: 0;
  background-color: white;
  z-index: 9999;
  font-size: 40px;
  line-height: 1;
  padding: 10px;
}
</style>
