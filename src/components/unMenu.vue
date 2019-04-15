<template>
  <div class="component-container">
    <div id="nav">
      <router-link to="/">Home<span class="underline-container"><span class="underline"></span></span></router-link>
      <router-link to="/speakers">Speakers & artists<span class="underline-container"><span class="underline"></span></span></router-link>
      <router-link to="/space">Space<span class="underline-container"><span class="underline"></span></span></router-link>
      <router-link to="/space">Partners<span class="underline-container"><span class="underline"></span></span></router-link>
      <router-link to="/space">Organizer<span class="underline-container"><span class="underline"></span></span></router-link>
    </div>
    <div id='logo'></div>
  </div>
</template>

<script>
export default {
  name: 'unMenu',
  props: ['test'],
  data () {
    return {
      msg: 'Count down component',
      cd: {days: 0, hours: '00', mins: '00', secs: '00'}
    }
  },
  created () {
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../scss/_vars.scss';
.component-container{
  position: relative;
}
#nav{
  z-index: 9999;
  font-size: 40px;
  line-height: 1;
  font-family: 'overpassregular';
  font-size: 18px;
  text-align: right;
  a{
    display: inline-block;
    padding: 45px;
    text-decoration: none;
    color: $fontcolor;
    cursor: pointer;
  }
  a:visited{
    color: $fontcolor;
  }
  a:hover{
    // color: black;
    // background-color: white;
    .underline-container .underline{
      transform: scaleX(1)
    }
  }
  .underline-container{
    height: 2px;
    width: 100%;
    display: inline-block;
    .underline{
      background-color: #FF00FF;
      height: 100%;
      width: 100%;
      display: inline-block;
      transition: 0.25s;
      transform: scaleX(0);
      transform-origin: top left;
    }
  }
}
#logo{
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate3d(0,-50%,0);
  background-image: url('#{$staticpath}static/unleash/logo-unleash-blanco.png');
  background-repeat: no-repeat;
  background-size: contain;
  width: 148px;
  height: 51px;
}
</style>
