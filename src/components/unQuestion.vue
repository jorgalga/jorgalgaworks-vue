<template>
  <div class="component-wrapper unquestion">
    <div class="component-container" v-bind:style="isMobile ? '' : 'height:'+data.page_content[$props.type].qheight*scaleR+'px;max-width:'+(data.max_width - 30)*scaleR+'px'">
      <div v-if="data.page_content[$props.type].qbackground" v-bind:style="'background-image:url('+data.img_src+data.page_content[$props.type].qbackground+')'" class="qbackground"></div>
      <div class="question-wrapper">
        <div class="question" v-bind:style="isMobile ? 'margin-bottom: 30px; font-size: 28px;' : 'font-size:'+72*scaleR+'px;margin-bottom:'+60*scaleR+'px'">
          <div class="text-wrapper"  v-bind:style="'color:'+data.page_content[$props.type].questions[qindex].title_color+';'" v-html="data.page_content[$props.type].questions[qindex].title">
          </div>
        </div>
        <div class="description"  v-bind:style="isMobile ? '' : 'font-size:'+36*scaleR+'px'" v-html="data.page_content[$props.type].questions[qindex].description">
        </div>
         <div v-if="data.page_content[$props.type].questions[qindex].biginfo" class="biginfo"  v-bind:style="isMobile ? '' : 'font-size:'+72*scaleR+'px'" v-html="data.page_content[$props.type].questions[qindex].biginfo">
        </div>
        <a @click.prevent="openPopup($event)"  target="_blank">
          <button v-if="data.page_content[$props.type].questions[qindex].question_btn"  v-bind:style="isMobile ? '' : 'font-size:'+60*scaleR+'px;padding:'+15*scaleR+'px '+45*scaleR+'px'" v-html="data.page_content[$props.type].questions[qindex].question_btn"></button>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'unQuestion',
  props: ['type', 'qindex'],
  data () {
    return {
      scaleR: 1,
      isMobile: window.innerWidth < window.dataConfig.data.mobile_width
    }
  },
  created () {
    var _ = this
    _.data = window.dataConfig.data
    _.resizeHandler()
    window.addEventListener('resize', function () {
      _.resizeHandler()
      _.isMobile = window.innerWidth < window.dataConfig.data.mobile_width
    })
  },
  mounted () {
  },
  methods: {
    resizeHandler () {
      var w = Math.min(window.innerWidth, this.data.max_width)
      this.scaleR = Math.max(0.5, w / this.data.max_width)
      this.scaleR = Math.min(this.scaleR, (this.data.max_width_limit / this.data.max_width))
    },
    openPopup () {
      var customevent = new Event('openPopupContact')
      document.dispatchEvent(customevent)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../scss/_vars.scss';
.component-wrapper.unquestion{
  width: 100%;
  //background-color: darkgrey;
  background-color: black;
  .component-container{
    position: relative;
    max-width: $pagewidth;
    margin: 0 auto;
    //background-color: black;
    box-sizing: border-box;
  }
  .qbackground{
    position: absolute;
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
  }
  .question-wrapper{
    position: absolute;
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%,-50%,0);
    width: 70%;
    @media (max-width: $break-mobile) {
      position: initial;
      transform: translate3d(0,0,0);
      width: 100%;
      margin: 0 auto;
      padding: 30px;
      box-sizing: border-box;
    }
  }
  .question{
    color: white;
    font-family: 'space_monoregular';
    margin-bottom: 60px;
    line-height: 1.3;
    @media (max-width: $break-mobile) {
      letter-spacing: -2px
    }
  }
  .description{
    color:white;
    font-family: 'overpassregular';
    line-height: 1.3
  }
  .biginfo{
    font-family: 'overpassregular';
    line-height: 1.3;
  }
  button{
    text-decoration: none;
    background-color: transparent;
    color: $magenta;
    border-color: $magenta;
    cursor: pointer;
    &:hover{
      color: black;
      background-color: white;
      border-color: white;
    }
    @media (max-width: $break-mobile) {
      font-size: 20px;
      padding: 10px 30px;
    }
  }
}
</style>
