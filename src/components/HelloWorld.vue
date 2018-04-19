<template>
  <div class="hello">
    <carousel
      :per-page="1"
      :mouse-drag="true"
      :autoplay="true"
      :loop="true" >
      <slide>
        <div class="slide-image sl1"></div>
      </slide>
      <slide>
        <div class="slide-image sl2">
          <span class="slide-info">Troopers</span>
        </div>
      </slide>
      <slide>
        <div class="slide-image sl3">
          <span class="slide-info">L'Oracle du papillon - L'Exposition</span>
        </div>
      </slide>
      <slide>
        <div class="slide-image sl4">
          <span class="slide-info">City in progress</span>
        </div>
      </slide>
      <slide>
        <div class="slide-image sl5">
          <span class="slide-info">Drei – „Es geht auch anders“ am Flughafen Wien</span>
        </div>
      </slide>
    </carousel>
    <!-- carousel-3d
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
    </carousel-3d-->
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
  height: 60vh;
  top: 0;
  left: 0;
  position: relative;
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
  transform: skewY(-3.5deg) translate3d(0,-20px,0);
  background-color: #ffffffaa;
  color: black;
  padding: 16px 20px;
  font-weight: 900;
  font-size: 20px;
  font-style: italic;
  margin-bottom: 5px;
  bottom: 20px;
  left: 0;
  transition: 0.5s;
  opacity: 1;
  position: absolute;
  text-align: left;
}
.carousel-3d-slide{
  opacity: 1 !important;
}
.carousel-3d-slide.current{
  overflow: initial;
  opacity: 1 !important;
}
</style>
