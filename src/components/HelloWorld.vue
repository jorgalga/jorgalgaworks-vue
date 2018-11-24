<template>
  <div class="hello">
    <clanavidad></clanavidad>
  </div>
</template>

<script>
import ClaNavidad from '@/components/ClaNavidad'

export default {
  name: 'HelloWorld',
  props: ['id'],
  data () {
    return {
      msg: 'Jorgalga Works',
      vh: window.innerHeight / 1.75,
      vw: Math.min(1024, window.innerWidth / 1.25)
    }
  },
  components: {
    'clanavidad': ClaNavidad
  },
  mounted () {
    window.addEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize () {
      this.vh = window.innerHeight / 1.75
      this.vw = Math.min(1024, window.innerWidth / 1.25)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.hello{
  background-color: white;
  position: relative;
  height: 100%;
}
.slide-image.sl1{
  background-image: url('/static/slider-0.jpg')
}
</style>
