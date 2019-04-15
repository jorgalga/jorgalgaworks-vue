<template>
  <div class="component-container">
    <div class="top-footer">
    </div>
    <footer>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'unFooter',
  props: ['test'],
  data () {
    return {
      msg: 'Footer component'
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
  height: 158px;
}
.top-footer{
  background-image: url('#{$staticpath}static/unleash/SprayPaint2.png');
  background-size: 100% 100%;
  width: 100vw;
  height: 80px;
  position: absolute;
  left: 50%;
  transform: translate3d(-50%,0,0)
}
footer{
  min-height: 80px;
  width: 100vw;
  height: 80px;
  position: absolute;
  left: 50%;
  top: 78px;
  transform: translate3d(-50%,0,0);
  background-color: #FF00FF;
}
</style>
