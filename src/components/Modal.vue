<template>
  <div class="hello"  v-bind:class="{ active: isActive }" v-on:click="closeModal">
    <div class="container">
      <div id="lipsum" v-html="msg"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  data () {
    return {
      msg: '',
      isActive: false
    }
  },
  methods: {
    closeModal () {
      document.getElementsByTagName('body')[0].classList.remove('no-scroll')
      this.isActive = false
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  background-color: #11001177;
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 999;
  top: 0;
  left: 0;
  opacity: 0;
  transition: 0.5s;
  pointer-events: none;
}
.container{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%,-50%,0);
  background-color: white;
  width: 80%;
  max-width: 1024px;
  height: 80%;
  border-radius: 4px;
  overflow-x: hidden;
  overflow-y: scroll;
  text-align: right;
  background-color: black;

}
.hello.active{
  opacity: 1;
  pointer-events: all;
}
#lipsum{
  width: calc(30% - 30px);
  display: inline-block;
  text-align: left;
  padding: 15px;
  background-color: white;
  color: black;
  transition: 0.25s;
  transform:translate3d(80%, 0, 0);
}
#lipsum:hover{
  transform:translate3d(0, 0, 0);
}

</style>
