<template>
  <div class="hello">
    <div class="background"></div>
  </div>
</template>

<script>
export default {
  name: 'TimeSlide',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.hello{
  background-color: black;
  height: 100vh;
}
.background{
  width: 100%;
  height: 100%;
  background-color: purple;
  background-image: url('/static/timeSlide/img01_blur.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  will-change: transform;
  transform: translate3d(0,0,0);
  filter: blur(2px);
}
</style>
