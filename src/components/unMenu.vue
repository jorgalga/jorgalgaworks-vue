<template>
  <div class="component-container">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/speakers">Speakers & artists</router-link>
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
  color: $fontcolor;
  text-align: center;
  a{
    display: inline-block;
    padding: 45px;
    text-decoration: none;
  }
  a:visited{
    color: $fontcolor;
  }
}
#logo{
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate3d(0,-50%,0);
  background-image: url('#{$staticpath}static/unleash/logo-unleash-blanco.png');
  background-size: contain;
  width: 148px;
  height: 51px;
}
</style>
