<template>
  <div id="cmpheader" class="component-wrapper cmpranking">
    <div class="component-container" v-bind:style="isMobile ? 'height:auto' : 'height:'+800*scaleR+'px'">
      <div class="colran">
        <div class="page-title" v-bind:style="isMobile ? 'font-size:50px' : 'font-size:'+70*1+'px; margin-bottom:'+15*scaleR+'px'" v-html="data.copy[clang].ranking_ptitle">
        </div>
        <div class="page-description" v-bind:style="isMobile ? 'font-size:15px' : 'font-size:'+18*1+'px'" v-html="data.copy[clang].ranking_description">
        </div>
        <div class="page-description" v-bind:style="isMobile ? 'font-size:15px' : 'font-size:'+15*1+'px'">
          <a class="btn blue" href="https://twitter.com/onesaitplatform" target="_blank" v-bind:style="isMobile ? 'padding: 5px 10px' : 'padding: '+15*1+'px'" v-html="data.copy[clang].ranking_btn_copy"></a>
        </div>
      </div>
      <div class="colran">
        <div id=style-1 class="ranking-list">
          <div v-for="(item, index) in ritems" :key="item._id"  class="ranking-list-item">
            <div class="rli-wrapper">
              <div class="position">{{index+1}}<sup>st</sup></div>
              <div class="data">
                <div class="name">{{item.UsuarioHackathon.name}}</div>
                <!--div class="place">{{item.UsuarioHackathon.mail}}</div-->
                <div class="icon">
                  <img width="30px" src="/static/minsait/images/Octicons-mark-github.svg">
                  <div class="gh-name">{{item.UsuarioHackathon.github}}</div>
                </div>
              </div>
              <div class="score">
                {{item.UsuarioHackathon.score}}
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
  props: ['type'],
  data () {
    return {
      scaleR: 1,
      isMobile: window.innerWidth < window.dataConfig.mobile_width,
      data: window.dataConfig,
      clang: 'es',
      ritems: [
        {
          _id: '01',
          UsuarioHackathon: {
            name: 'Name',
            mail: 'email',
            score: 0,
            github: 'Github'
          }
        }
      ]
    }
  },
  created () {
    var _ = this
    this.clang = this.$route.name.split('loc:')[1]
    // _.resizeHandler()
    window.addEventListener('resize', function () {
      _.isMobile = window.innerWidth < _.data.mobile_width
      // _.resizeHandler()
    })
  },
  mounted () {
    this.getRanking()
  },
  methods: {
    resizeHandler () {
      var w = Math.min(window.innerWidth, this.data.max_width)
      this.scaleR = Math.max(this.data.mobile_width / this.data.max_width, w / this.data.max_width)
      this.scaleR = Math.min(this.scaleR, (this.data.max_width_limit / this.data.max_width))
    },
    getRanking () {
      console.log('GR')
      var _ = this
      var xhttp = new XMLHttpRequest()
      xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 403) {
          console.log('NOT AUTHORIZED TO REQUEST')
        }
        if (this.readyState === 4 && this.status === 200) {
          // console.log('RESPONSE')
          console.log(JSON.parse(this.responseText))
          _.ritems = JSON.parse(this.responseText)
          setTimeout(function () {
            document.getElementsByClassName('ranking-list-item')[0].classList.add('blued')
          }, 1000)
        }
      }
      xhttp.open('GET', 'https://www.onesaitplatform.online/gravitee/gateway/hackathon-event/v1/ranking', true)
      xhttp.setRequestHeader('X-OP-APIKey', 'd028185e6b5f481e9e1153d0babc067e')
      xhttp.send()
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
    text-decoration: none;
    &:visited{
      color: $darkblue;
    }
    &.blue{
      border: 1px solid $darkblue;
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
      color: $blue;
      text-align: left;
      padding: 0 10px;
      box-sizing: border-box;
      font-family: 'PlayfairDisplay-Regular';
      @media (max-width: $break-mobile) {
        text-align: center;
      }
    }
    .colran{
      overflow: hidden;
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
  #style-1::-webkit-scrollbar-track
  {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.1);
    border-radius: 10px;
    background-color: #F5F5F5;
  }

  #style-1::-webkit-scrollbar
  {
    width: 10px;
    background-color: #F5F5F5;
  }

  #style-1::-webkit-scrollbar-thumb
  {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.1);
    background-color: $darkblue;
  }
  .ranking-list{
    height: 100%;
    overflow-y: scroll;
    @media (max-width: $break-mobile) {
      overflow-y: hidden;
    }
    .ranking-list-item{
      height: 125px;
      width: 98%;
      position: relative;
      background-color: white;
      color: $darkblue;
      border-bottom: 1px solid $darkblue;
      @media (max-width: $break-mobile) {
        height: 85px;
        width: 100%;
      }
      &.blued{
        background-color: $darkblue;
        color: white;
      }
      .rli-wrapper{
        position: absolute;
        width: 90%;
        height: 60%;
        top: 50%;
        left: 50%;
        transform: translate3d(-50%,-50%,0);
        @media (max-width: $break-mobile) {
           width: 97.5%;
           height: 85%;
        }
        .position{
          width: 15%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          font-family: 'SohoGothicPro-Medium';
          text-align: right;
          padding: 0 15px 0 0;
          box-sizing: border-box;
          font-size: 23px;
          sup{
            font-size: 15px;
            @media (max-width: $break-mobile) {
              font-size: 12px;
            }
          }
          @media (max-width: $break-mobile) {
            width: 15%;
            font-size: 21px;
            text-align: left;
            padding: 0;
          }
        }
        .data{
          width: 60%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 15%;
          font-family: 'SohoGothicPro-Regular';
          padding: 5px 15px;
          text-align: left;
          box-sizing: border-box;
          @media (max-width: $break-mobile) {
            width: 55%;
            left: 15%;
          }
          .name{
            font-size: 18px;
            padding-bottom: 5px;
            @media (max-width: $break-mobile) {
              font-size: 15px;
            }
          }
          .icon{
            // margin: 5px 0;
          }
          .place, .icon {
            font-size: 15px;
            position: relative;
            .gh-name {
              display: inline-block;
              position: absolute;
              top: 50%;
              left: 40px;
              transform: translateY(-50%)
            }
            @media (max-width: $break-mobile) {
               font-size: 15px;
            }
          }
        }
        .score{
          width: 25%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 75%;
          font-family: 'SohoGothicPro-Medium';
          text-align: left;
          padding: 0 0 0 15px;
          box-sizing: border-box;
          font-size: 23px;
          color: #40c6b5;
          @media (max-width: $break-mobile) {
            width: 30%;
            left: 70%;
            font-size: 21px;
            text-align: right;
            padding: 0;
          }
        }
      }
    }
  }
}
</style>
