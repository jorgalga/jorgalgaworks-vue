<template>
  <div class="hello"  v-bind:class="{ active: isActive }" v-on:click="closeModal()">
    <div class="container" v-bind:class="{ centered: isCentered }">
      <div id="lipsum">
        <h2 v-html="title"></h2>
        <h3>{{ year }}</h3>
        <div v-html="msg"></div>
      </div>
      <div class="container-scroll">
        <div id="show-media" v-bind:class="{ centered: isCentered }" v-html="smedia">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  data () {
    return {
      title: '',
      year: '',
      msg: '',
      smedia: '',
      isActive: false,
      isCentered: false
    }
  },
  methods: {
    closeModal () {
      document.getElementById('app').classList.remove('no-scroll')
      this.isActive = false
      this.msg = ''
      this.smedia = ''
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  background-color: #110011dd;
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
  transform: translate3d(-50%,-40%,0);
  transition: 0.5s;
  width: 80%;
  max-width: 1024px;
  height: 84%;
  text-align: right;
  background-color: white;
  overflow-x: hidden;
}
@media only screen and (max-width : 600px) {
  .container{
    width: 100%;
    height: 100%;
  }
}
.container.centered{
  background-color: black;
}

.container-scroll{
  width:100%;
  height: 100%;
  overflow-y: scroll;
  padding-right: 26px; /* Increase/decrease this value for cross-browser compatibility */
  box-sizing: content-box; /* So the width will be 100% + 17px */
}

.hello.active{
  opacity: 1;
  pointer-events: all;
}
.hello.active .container{
  transform: translate3d(-50%,-50%,0);
}

#lipsum{
  width: calc(50% - 60px);
  /* overflow-y: scroll; */
  display: inline-block;
  text-align: left;
  padding: 30px;
  background-color: #ffffffdd;
  color: #112;
  text-shadow: 0 0 4px #cccccc;
  box-shadow: 0 0 4px #cccccc;
  transition: 0.25s;
  transform:translate3d(calc(100% - 50px), 0, 0);
  position: absolute;
  z-index: 10;
  top: 0;
  right: 0;
  box-sizing: border-box;
}
@media only screen and (max-width : 600px) {
  #lipsum{
    width: 100%;
  }
}
#lipsum:hover{
  transform:translate3d(0, 0, 0);
}
#show-media{
  text-align: center;
  position: relative;
  z-index: 5;
  padding-bottom: 30px;
}

#show-media.centered{
  background-color: black;
  width: 100%;
  display: inline-block;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate3d(0,-50%,0);
  min-height: 394px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>
