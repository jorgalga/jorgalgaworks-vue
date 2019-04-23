<template>
  <div class="component-wrapper unmenu">
    <div class="component-container">
      <div id="nav" v-bind:style="'font-size:'+18*scaleR+'px'">
        <router-link v-bind:style="'padding:'+45*scaleR+'px'" to="/">{{data.page_names.home}}<span class="underline-container"><span class="underline"></span></span></router-link>
        <router-link v-bind:style="'padding:'+45*scaleR+'px'" to="/speakers">{{data.page_names.speakers}}<span class="underline-container"><span class="underline"></span></span></router-link>
        <router-link v-bind:style="'padding:'+45*scaleR+'px'" to="/space">{{data.page_names.space}}<span class="underline-container"><span class="underline"></span></span></router-link>
        <router-link v-bind:style="'padding:'+45*scaleR+'px'" to="/agenda">{{data.page_names.agenda}}<span class="underline-container"><span class="underline"></span></span></router-link>
        <router-link v-bind:style="'padding:'+45*scaleR+'px'" to="/partners">{{data.page_names.partners}}<span class="underline-container"><span class="underline"></span></span></router-link>
        <router-link v-bind:style="'padding:'+45*scaleR+'px'" to="/organizers">{{data.page_names.organizers}}<span class="underline-container"><span class="underline"></span></span></router-link>
      </div>
      <div id='logo'  v-bind:style="'left:'+15*scaleR+'px;width:'+150*scaleR+'px;height:'+50*scaleR+'px'"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'unMenu',
  props: ['test'],
  data () {
    return {
      scaleR: 1
    }
  },
  created () {
    var _ = this
    _.data = window.dataConfig.data
    _.resizeHandler()
    window.addEventListener('resize', function () {
      _.resizeHandler()
    })
  },
  mounted () {
  },
  methods: {
    resizeHandler () {
      var w = Math.min(window.innerWidth, this.data.max_width)
      this.scaleR = Math.max(0.5, w / this.data.max_width)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../scss/_vars.scss';
.component-wrapper.unmenu{
  width: 100%;
  background-color: darkgrey;
  background-color: black;
  .component-container{
    position: relative;
    max-width: $pagewidth;
    margin: 0 auto;
    background-color: black;
    box-sizing: border-box;
  }
}

#nav{
  z-index: 9999;
  line-height: 1;
  font-family: 'overpassregular';
  text-align: right;
  a{
    display: inline-block;
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
}
</style>
