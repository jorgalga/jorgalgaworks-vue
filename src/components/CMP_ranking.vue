<template>
  <div id="cmpheader" class="component-wrapper cmpranking">
    <div class="component-container" v-bind:style="isMobile ? 'height:auto' : 'height:'+800*scaleR+'px'">
      <div class="colran">
        <div class="page-title" v-bind:style="isMobile ? 'font-size:80px' : 'font-size:'+120*scaleR+'px; margin-bottom:'+15*scaleR+'px'" v-html="data.copy[clang].ranking_ptitle">
        </div>
        <div class="page-description" v-bind:style="isMobile ? 'font-size:15px' : 'font-size:'+18*1+'px'" v-html="data.copy[clang].ranking_description">
        </div>
        <div class="page-description" v-bind:style="isMobile ? 'font-size:15px' : 'font-size:'+18*1+'px'">
          <a class="btn blue" v-bind:style="isMobile ? 'padding: 5px 10px' : 'padding: '+15*1+'px'">Sigue el Ranking en Twitter</a>
        </div>
      </div>
      <div class="colran">
        <div class="ranking-list">
          <div class="ranking-list-item blued">
            <div class="rli-wrapper">
              <div class="position">1<sup>st</sup></div>
              <div class="data">
                <div class="name">Francisco Javier Perez</div>
                <div class="place">Lima</div>
                <div class="icon">Github</div>
              </div>
              <div class="score">
                22
              </div>
            </div>
          </div>
          <div class="ranking-list-item">
            <div class="rli-wrapper">
              <div class="position">1<sup>st</sup></div>
              <div class="data">
                <div class="name">Francisco Javier Perez</div>
                <div class="place">Lima</div>
                <div class="icon">Github</div>
              </div>
              <div class="score">
                22
              </div>
            </div>
          </div>
          <div class="ranking-list-item">
            <div class="rli-wrapper">
              <div class="position">1<sup>st</sup></div>
              <div class="data">
                <div class="name">Francisco Javier Perez</div>
                <div class="place">Lima</div>
                <div class="icon">Github</div>
              </div>
              <div class="score">
                22
              </div>
            </div>
          </div>
          <div class="ranking-list-item">
            <div class="rli-wrapper">
              <div class="position">1<sup>st</sup></div>
              <div class="data">
                <div class="name">Francisco Javier Perez</div>
                <div class="place">Lima</div>
                <div class="icon">Github</div>
              </div>
              <div class="score">
                22
              </div>
            </div>
          </div>
          <div class="ranking-list-item">
            <div class="rli-wrapper">
              <div class="position">1<sup>st</sup></div>
              <div class="data">
                <div class="name">Francisco Javier Perez</div>
                <div class="place">Lima</div>
                <div class="icon">Github</div>
              </div>
              <div class="score">
                22
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CMP_ranking',
  props: ['test'],
  data () {
    return {
      scaleR: 1,
      isMobile: window.innerWidth < window.dataConfig.mobile_width,
      data: window.dataConfig,
      clang: 'es'
    }
  },
  created () {
    if (this.$route.params.lang) {
      this.clang = this.$route.params.lang
    }
    var _ = this
    // _.resizeHandler()
    window.addEventListener('resize', function () {
      _.isMobile = window.innerWidth < _.data.mobile_width
      // _.resizeHandler()
    })
  },
  mounted () {
  },
  methods: {
    resizeHandler () {
      var w = Math.min(window.innerWidth, this.data.max_width)
      this.scaleR = Math.max(this.data.mobile_width / this.data.max_width, w / this.data.max_width)
      this.scaleR = Math.min(this.scaleR, (this.data.max_width_limit / this.data.max_width))
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../scss/_vars.scss';
@import '../scss/_fonts.scss';
.component-wrapper.cmpranking{
  width: 100%;
  background-color: $blue;
  background-color: transparent;
  transition: 1s;
  position: relative;
  z-index: 90;
  margin-top: -1px;
  @media (max-width: $break-mobile) {
    margin-top: 30px;
  }
  .btn{
    font-family: 'SohoGothicPro-Medium';
    display: inline-block;
    &.blue{
      border: 2px solid $darkblue;
      &:hover{
        background-color:$darkblue;
        color: white;
        cursor: pointer;
      }
    }
  }
  .component-container{
    max-width: $pagewidth;
    margin: 50px auto;
    display: block;
    text-align: center;
    position: relative;
    .page-title{
      text-align: left;
      @media (max-width: $break-mobile) {
        text-align: center;
      }
    }
    .colran{
      position: absolute;
      display: inline-block;
      width: 50%;
      height: 100%;
      @media (max-width: $break-mobile) {
        width: 100%;
        position: relative;
      }
      &:nth-child(1){
        left: 0;
        top: 0;
      }
      &:nth-child(2){
        left: 50%;
        top: -50px;
        @media (max-width: $break-mobile) {
          left: initial;
          top: initial;
          padding: 10px;
          box-sizing: border-box;
          display: block;
        }
      }
    }
    .page-description{
      font-family: 'SohoGothicPro-Regular';
      color: $blue;
      text-align: left;
      max-width: 70%;
      margin: 0 auto;
      @media (max-width: $break-mobile) {
        display: block;
        max-width: 100%;
        margin: 15px;
        text-align: center;
        /deep/  p{
          margin: 0;
          padding: 30px 0 0 0;
        }
      }
    }
  }
  .ranking-list{
    .ranking-list-item{
      height: 150px;
      width: 100%;
      position: relative;
      background-color: white;
      color: $darkblue;
      border-bottom: 1px solid $darkblue;
      @media (max-width: $break-mobile) {
        height: 100px;
      }
      &.blued{
        background-color: $darkblue;
        color: white;
      }
      .rli-wrapper{
        position: absolute;
        width: 85%;
        height: 60%;
        top: 50%;
        left: 50%;
        transform: translate3d(-50%,-50%,0);
        @media (max-width: $break-mobile) {
           width: 95%;
           height: 85%;
        }
        .position{
          width: 20%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          font-family: 'SohoGothicPro-Medium';
          text-align: right;
          padding: 0 15px;
          box-sizing: border-box;
          font-size: 40px;
          sup{
            font-size: 20px;
          }
          @media (max-width: $break-mobile) {
            width: 15%;
            font-size: 23px;
            text-align: left;
            padding: 0;
          }
        }
        .data{
          width: 60%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 20%;
          font-family: 'SohoGothicPro-Regular';
          padding: 5px 15px;
          text-align: left;
          box-sizing: border-box;
          @media (max-width: $break-mobile) {
            width: 75%;
            left: 15%;
          }
          .name{
            font-size: 23px;
            @media (max-width: $break-mobile) {
              font-size: 18px;
            }
          }
          .place, .icon {
            font-size: 18px;
            @media (max-width: $break-mobile) {
               font-size: 15px;
            }
          }
        }
        .score{
          width: 20%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 80%;
          font-family: 'SohoGothicPro-Medium';
          text-align: left;
          padding: 0 15px;
          box-sizing: border-box;
          font-size: 40px;
          color: #40c6b5;
          @media (max-width: $break-mobile) {
            width: 15%;
            left: 85%;
            font-size: 23px;
            text-align: right;
            padding: 0;
          }
        }
      }
    }
  }
}
</style>
