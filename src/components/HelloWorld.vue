<template>
  <div class="hello">
    <carousel-3d
      :height="vh"
      :width="vw"
      :border="0"
      :autoplay="true"
      :autoplayTimeout="8000"
      :animationSpeed="1500"
      :autoplayHoverPause="true" >
      <slide :index="0">
        <div class="slide-image sl1"></div>
      </slide>
      <slide :index="1">
        <div class="slide-image sl2"></div>
        <span class="slide-info">Troopers</span>
      </slide>
      <slide :index="2">
        <div class="slide-image sl3"></div>
        <span class="slide-info">L'Oracle du papillon - L'Exposition</span>
      </slide>
      <slide :index="3">
        <div class="slide-image sl4"></div>
        <span class="slide-info">City in progress</span>
      </slide>
      <slide :index="4">
        <div class="slide-image sl5"></div>
        <span class="slide-info">Drei – „Es geht auch anders“ am Flughafen Wien</span>
      </slide>
    </carousel-3d>
    <!-- h1>{{ msg }}</h1 -->
    <studies></studies>
    <portfolio :id="id"></portfolio>
    <exhibitions></exhibitions>
  </div>
</template>

<script>
import JggStudies from '@/components/JggStudies'
import JggPortfolio from '@/components/JggPortfolio'
import JggExhibitions from '@/components/JggExhibitions'

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
    'studies': JggStudies,
    'portfolio': JggPortfolio,
    'exhibitions': JggExhibitions
  },
  mounted () {
    window.addEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize () {
      console.log('resize')
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
}
h1{
  font-weight: normal;
  margin: 0;
  color: black
}
.slide-image{
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  display: inline-block;
  filter: grayscale(100%);
  transition: 0.5s;
  cursor: pointer;
}
.slide-image:hover{
  filter: grayscale(0);
}
.slide-image.sl1{
  background-image: url('/static/slider-0.jpg')
}
.slide-image.sl2{
  background-image: url('/static/slider-1.jpg')
}
.slide-image.sl3{
  background-image: url('/static/slider-2.jpg')
}
.slide-image.sl4{
  background-image: url('/static/slider-3.jpg')
}
.slide-image.sl5{
  background-image: url('/static/slider-4.jpg')
}
span.slide-info{
  display: inline-block;
  transform: skewY(-3.5deg) translate3d(-16px,0,0);
  background-color: white;
  box-shadow: 0 0 5px black;
  color: black;
  padding: 16px 20px;
  font-weight: 900;
  font-size: 20px;
  font-style: italic;
  margin-bottom: 5px;
  position: absolute;
  bottom: 20px;
  left: 0;
  transition: 0.5s;
  opacity: 0;
}
.carousel-3d-slide.current{
  overflow: initial;
}
.carousel-3d-slide.current span.slide-info{
  opacity: 1;
  transform:skewY(-3.5deg) translate3d(-16px,0,0)
}
</style>
