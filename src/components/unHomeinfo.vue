<template>
  <div class="component-container homeinfo" v-observe-visibility="visibilityChanged">
    <div class="flex-grid">
      <div class="col">
        <!--div id="home-bust">
        </div-->
        <unGlitch name="home_bust.jpg"></unGlitch>
      </div>
      <div class="col">
        <div class="text-container">
           <div class="text-wrapper">
             <h2>Say hello to the <span style='color:#FF00FF;text-decoration:line-through'><span style='color:white'>craziest </span></span>young talent festival.
             </h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import unGlitch from '@/components/unGlitch'
export default {
  name: 'unHomeinfo',
  props: ['test'],
  data () {
    return {
      msg: ''
    }
  },
  created () {
  },
  mounted () {
  },
  methods: {
    visibilityChanged: function (isVisible, entry) {
      if (isVisible && !entry.target.classList.contains('displayed')) {
        entry.target.classList.add('displayed')
      }
    }
  },
  components: {
    'unGlitch': unGlitch
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../scss/_vars.scss';
.component-container.homeinfo{
  position: relative;
  color: white;
  padding-bottom: 100px;
  opacity: 0;
  transform: translate3d(0, 50px, 0);
  transition: 0.5s;
  &.displayed{
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
.flex-grid{
  display: flex;
}
.col{
  flex: 1;
}
@media (max-width: 800px) {
  .flex-grid{
    display: block;
  }
}
h2{
  font-family: 'space_monoregular';
  font-size: 72px;
  font-weight: 100;
  line-height: 86px;
  margin: 0;
}
.text-container{
  position: relative;
  height: 100%;
  .text-wrapper{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%,-50%,0);
    display: inline-block;
    width: 85%;
  }
}

</style>
