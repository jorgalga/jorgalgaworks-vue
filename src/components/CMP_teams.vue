<template>
  <div id="cmpheader" class="component-wrapper cmpteams" v-bind:class="$props.type">
    <div class="component-container" >
      <div class="page-title" v-bind:style="isMobile ? 'font-size:50px' : 'font-size:'+70*1+'px'" v-html="data.copy[clang].team_ptitle">
      </div>
      <div class="teams-container">
        <div v-observe-visibility="fadeInElement" class="team-item-wrapper" v-for="item in data.copy[clang].team_items" :key="item.id">
        <div class="team-item">
          <div class="team-name" v-html="item.name"></div>
          <div class="team-logo" v-bind:style="'background-image:url(static/minsait/images/teams/'+item.logosrc+')'"></div>
          <div class="team-member" v-for="member in item.members" :key="member.id">
            <div class="team-member-name" v-html="member.name"></div>
            <div class="team-member-items" v-for="line in member.lines" :key="line.id">
              <div class="team-member-line"><span class="tm-type" v-html="line.type"></span><span class="tm-value" v-html="line.value"></span></div>
            </div>
          </div>
          <br>
          <div class="challenge-container">
            <div class="ch-header" v-html="data.copy[clang].team_challenge"></div>
            <div class="ch-name" v-html="item.challege"></div>
          </div>
          <div class="challenge-container">
            <div class="ch-header" v-html="data.copy[clang].team_email"></div>
            <div class="ch-name" v-html="item.email"></div>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CMP_teams',
  props: ['type'],
  data () {
    return {
      scaleR: 1,
      isMobile: window.innerWidth < window.dataConfig.mobile_width,
      data: window.dataConfig,
      clang: 'es'
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
  },
  methods: {
    resizeHandler () {
      var w = Math.min(window.innerWidth, this.data.max_width)
      this.scaleR = Math.max(this.data.mobile_width / this.data.max_width, w / this.data.max_width)
      this.scaleR = Math.min(this.scaleR, (this.data.max_width_limit / this.data.max_width))
    },
    fadeInElement (isVisible, entry) {
      if (isVisible) {
        if (!entry.target.classList.contains('fadedIn')) {
          entry.target.classList.add('fadedIn')
        }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../scss/_vars.scss';
@import '../scss/_fonts.scss';
.component-wrapper.cmpteams{
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
  .component-container{
    max-width: $pagewidth;
    margin: 0 auto;
    display: block;
    text-align: center;
    /deep/ a{
      color: $darkblue;
      text-decoration: none;
    }
    /deep/ a:visited{
      color: $darkblue;
    }
    .page-title{
      color: $blue;
      font-family: 'PlayfairDisplay-Regular';
      line-height: 1;
      text-align: left;
      margin:25px 0 50px;
      @media (max-width: $break-mobile) {
        text-align: center;
        margin-bottom: 25px;
      }
    }
    .teams-container{
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
      align-items: flex-start;
      margin-bottom: 75px;
      .team-item-wrapper{
        padding:20px 10px;
        flex-grow: 0;
        flex-shrink: 0;
        flex-basis: 50%;
        position: relative;
        min-height: 200px;
        transition: 0.5s;
        opacity: 0;
        transform: translateY(100px);
        box-sizing: border-box;
        @media (max-width: $break-mobile) {
          flex-basis: 100%;
        }
        &.fadedIn{
          opacity: 1;
          transform: translateY(0)
        }
        &:nth-child(even){
          padding-left: 20px;
          transition-delay:0.1s;
          @media (max-width: $break-mobile) {
            padding-left: 10px;
            transition-delay: 0s;
          }
        }
        &:nth-child(odd){
          padding-right: 20px;
          @media (max-width: $break-mobile) {
            padding-right: 10px;
          }
        }
        .team-item{
          border: 1px solid $darkblue;
          padding: 15px 10px 10px 20px;
          box-sizing: border-box;
          position: relative;
        }
        .team-logo{
          position: absolute;
          width: 100px;
          height: 75px;
          right: 15px;
          top: 15px;
          background-size: contain;
          background-repeat: no-repeat;
          background-position: right top;
          @media (max-width: $break-mobile) {
            height: 60px;
            width: 80px;
          }
        }
        .team-name{
          text-align: left;
          max-width: calc(100% - 100px);
          line-height: 1.3;
          font-size: 21px;
          font-family: 'SohoGothicPro-Medium';
          color: $darkblue;
          margin-bottom: 20px;
          min-height: 54px;
          @media (max-width: $break-mobile) {
            min-height: initial;
            font-size: 18px;
          }
        }
        .team-member{
          margin-bottom: 10px;
          .team-member-name{
            text-align: left;
            font-size: 16px;
            font-family: 'SohoGothicPro-Medium';
            max-width: 66%;
            line-height: 1.3;
            color: $softblue;
            border-bottom: 1px solid $softblue;
            margin-bottom: 5px;
            padding-bottom: 5px;
            white-space: nowrap;
            @media (max-width: $break-mobile) {
              font-size: 16px;
            }
          }
          .team-member-items{
            .team-member-line{
              text-align: left;
              font-family: 'SohoGothicPro-light';
              font-size: 15px;
              margin: 0;
              box-sizing: border-box;
              line-height: 1;
              color: $darkblue;
              @media (max-width: $break-mobile) {
                font-size: 14px;
              }
              .tm-type{
                width: 75px;
                display: inline-block;
                border-right: 1px solid $darkblue;
                line-height: 1.3;
                margin-bottom:0;
                margin-right: 15px;
                padding-bottom: 5px;
              }
              .tm-value{
                display: inline-block;
                line-height: 1.3;
                padding-bottom: 5px;
              }
            }
          }
        }
        .challenge-container{
          margin-top: 5px;
          margin-bottom: 10px;
          .ch-header{
            text-align: left;
            font-size: 16px;
            font-family: 'SohoGothicPro-Medium';
            line-height: 1.3;
            color: $softblue;
            margin-bottom: 5px;
            @media (max-width: $break-mobile) {
              font-size: 16px;
            }
          }
          .ch-name{
            text-align: left;
            font-family: 'SohoGothicPro-light';
            font-size: 15px;
            color: $darkblue;
            @media (max-width: $break-mobile) {
              font-size: 14px;
            }
          }
        }
      }
    }
    .proposito-block{
      min-height: 100px;
      background-color: aliceblue;
      background-color: #40c7b511;
      display: flex;
      align-items: top;
      padding: 30px 10px 45px 10px;
      margin-bottom: 50px;
      transition: 0.5s;
      opacity: 0;
      transform: translate3d(0,50%,0);
      align-items: center;
      color: $darkblue;
      &.fadedIn{
        opacity: 1;
        transform: translate3d(0,0,0);
        .right-text{
          opacity: 1;
          transform: translate3d(0,0,0)
        }
      }
      @media (max-width: $break-mobile) {
        // display: block;
        margin: 15px;
        flex-direction: column-reverse
      }
      .right-text{
        display: inline-block;
        width: 50%;
        height: 100%;
        padding: 50px 15px 50px 0;
        transition: 0.5s;
        transition-delay: 0.1s;
        opacity: 0;
        transform: translate3d(0,50%,0);
        @media (max-width: $break-mobile) {
          width: 100%;
          box-sizing: border-box;
          padding: 15px;
        }
        .title-prop{
          font-family: 'SohoGothicPro-Medium';
          font-size: 23px;
          margin-bottom: 15px;
          text-align: left;
          font-size: 1.3;
          color: $blue;
        }
        .desc-prop{
          font-family: 'SohoGothicPro-Regular';
          text-align: left;
          font-size: 1.3;
          color: $blue;
          @media (max-width: $break-mobile) {
            font-size: 15px;
          }
        }
      }
    }
  }
}
</style>
