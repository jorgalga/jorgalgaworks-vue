<template>
  <div class="page">
  </div>
</template>

<script>

export default {
  name: 'Home',
  props: ['id'],
  data () {
    return {
      msg: '',
      vh: window.innerHeight / 1.75,
      vw: Math.min(1024, window.innerWidth / 1.25)
    }
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

.page{
  background-color: red;
  position: relative;
  height: 100%;
}
</style>
