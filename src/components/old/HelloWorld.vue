<template>
  <div class="page">
    <div class="page-content">
    </div>
  </div>
</template>

<script>

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
<style scoped lang="scss">
@import '../scss/_vars.scss';
.page-content{
  margin: 0 auto;
  max-width: $pagewidth;
  min-height: 10000px;
  background-color: purple;
}
</style>
