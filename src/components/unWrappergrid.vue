<template>
  <div class="component-wrapper unwrappergrid" v-bind:class="$props.configclass">
    <div class="white-band" v-bind:style="'height:'+160*scaleR+'px'"></div>
    <div class="component-container " v-bind:style="'max-width:'+(data.max_width - 30)*scaleR+'px'">
      <div class="unwrap-button" @click.prevent="toogle($event)" v-bind:style="'height:'+160*scaleR+'px'">
        <div ref="txtbtn" class="text-button" v-html="data[$props.type].name" v-bind:style="isMobile ? 'letter-spacing:'+8*scaleR+'px;font-size:'+48*scaleR+'px' : 'letter-spacing:'+20*scaleR+'px;font-size:'+48*scaleR+'px'"></div>
      </div>
      <div class="unwrap-container opened" v-bind:style="opened ? 'max-height:'+(mheight*scaleR)*levels+'px' : 'max-height:0'">
        <div class="flex-grid">
          <div class="col" v-for="item in data[$props.type].items" :key="item.index" v-bind:class="data[$props.type].gsize">
            <div class="img-wrapper" v-bind:style="'height:'+data[$props.type].max_height*scaleR+'px'">
              <div @click.prevent="openLink(item.url)" v-bind:id="item.tag_id" class="img-item" v-bind:style="'background-image: url('+data.img_src + item.img+')'"></div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="configclass" ref="shadow" class="shadow" v-bind:style="'height:'+250*scaleR+'px'">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'unWrappergrid',
  props: ['type', 'configclass'],
  data () {
    return {
      scaleR: 1,
      itemActive: 0,
      opened: true,
      levels: 1,
      mheight: 0,
      isMobile: window.innerWidth < window.dataConfig.data.mobile_width
    }
  },
  created () {
    let _ = this
    _.data = window.dataConfig.data
    _.levels = Math.ceil(_.data[_.$props.type].items.length / _.data[_.$props.type].items_row)
    // console.log(_.levels)
    _.mheight = _.data[_.$props.type].max_height
    _.resizeHandler()
    window.addEventListener('resize', function () {
      _.isMobile = window.innerWidth < window.dataConfig.data.mobile_width
      _.resizeHandler()
    })
  },
  mounted () {
    this.splitInSpans()
  },
  methods: {
    resizeHandler () {
      var _ = this
      if (_.isMobile) {
        _.levels = _.data[_.$props.type].items.length
      } else {
        _.levels = Math.ceil(_.data[_.$props.type].items.length / _.data[_.$props.type].items_row)
      }
      var w = Math.min(window.innerWidth, this.data.max_width)
      this.scaleR = Math.max(0.5, w / this.data.max_width)
      this.scaleR = Math.min(this.scaleR, (this.data.max_width_limit / this.data.max_width))
    },
    splitInSpans () {
      var txt = this.$refs.txtbtn.innerHTML
      var res = ''
      for (var i = 0; i < txt.length; i++) {
        if (txt[i] === '<' && txt[i + 1] === 'b' && txt[i + 2] === 'r' && txt[i + 3] === '>') {
          res += '<span class="ll-container br"></span><br>'
          i = i + 3
        } else {
          res += '<span class="ll-container"><span class="letter">' + txt[i] + '</span><span class="line"></span></span>'
        }
      }
      this.$refs.txtbtn.innerHTML = res
    },
    freezeInteraction (el, time) {
      el.classList.add('freeze')
      setTimeout(function () {
        el.classList.remove('freeze')
      }, time)
    },
    toogle ($event) {
      var el = $event.target
      if (this.opened) {
        this.opened = false
        el.nextElementSibling.classList.remove('opened')
        this.freezeInteraction(el, 500)
      } else {
        this.opened = true
        el.nextElementSibling.classList.add('opened')
        this.freezeInteraction(el, 500)
      }
    },
    openLink (link) {
      window.open(link, '_blank')
    },
    goToItem (index) {
      this.flkty.select(index)
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../scss/_vars.scss';
.component-wrapper.unwrappergrid{
  width: 100%;
  position: relative;
  .white-band{
    position: absolute;
    width: 100%;
  }
  &.darked{
    background-color: black;
    .white-band{
      background-color: white;
    }
  }
  .component-container{
    position: relative;
    /*max-width: $pagewidth;*/
    margin: 0 auto;
    background-color: black;
    box-sizing: border-box;
    .shadow{
      height: 200px;
      width: 100%;
      background-image: url('#{$staticpath}static/unleash/images/spray.png');
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
      transform: translate3d(0,-55%,0);
      position:relative;
      z-index: 0;
    }
  }
  .unwrap-container{
    background-color: white;
    overflow: hidden;
    max-height: 0;
    transition: max-height 0.5s ease-out;
    position:relative;
    z-index: 10;
    &.opened{
      max-height: 850px;
      transition: max-height 0.5s ease-in;
    }
  }
  .unwrap-button{
    background-color: black;
    cursor: pointer;
    position: relative;
    z-index: 10;
    &.freeze{
      pointer-events: none;
    }
    .text-button{
      position: absolute;
      top:50%;
      left: 50%;
      transform: translate3d(-50%,-50%,0);
      color: white;
      font-family: 'space_monoregular';
      line-height: 1;
      font-weight: 100;
      text-transform: uppercase;
      width: 70%;
      text-align: center;
      /deep/ br{
        display: none;
        @media (max-width: $break-mobile) {
          display: initial
        }
      }
      /deep/ .ll-container{
        position: relative;
        min-width: 20px;
        display: inline-block;
        @media (max-width: $break-mobile) {
          min-width: 12px;
        }
        &.br{
          @media (max-width: $break-mobile) {
            width: 0;
          }
        }
        .letter{
          text-align: center;
          position: relative;
          transition: 0.3s;
          display: inline-block;
        }
        .line{
          position: absolute;
          height: 2px;
          width: 60%;
          display: inline-block;
          background-color: black;
          background-color: #FF00FF;
          bottom: 0;
          left: 0;
          transform-origin: center left;
          transform: scaleX(0);
          transition: 0.15s;
        }
        &:hover{
          @media (min-width: $break-mobile) {
            .letter{
              transform: translate3d(0,-25%,0)
            }
            .line{
              transform: scaleX(1);
            }
          }
        }
      }
    }
    &:hover{
      @media (min-width: $break-mobile) {
        cursor: url('#{$staticpath}static/unleash/images/cursor.png'), auto;
        background-color: white;
        .text-button{
          color: black;
        }
      }
    }
  }
  .flex-grid{
    display: flex;
    flex-wrap: wrap;
    // flex-direction: column;
    border: 1px solid darkgrey;
    box-sizing: border-box;
    justify-content: center;
  }
  .col-12 {
    flex-basis: 100%;
  }
  .col-6 {
    flex-basis: 50%;
    flex-grow: 1;
  }
  .col-4 {
    flex-basis: 33%;
  }
  .col-3 {
    flex-basis: 25%;
    @media (max-width: $break-mobile) {
      flex-basis: 100%
    }
  }
  .col-2 {
    flex-basis: 20%;
  }
  .img-wrapper{
    position: relative;
    .img-item{
      position: absolute;
      width: 50%;
      height: 50%;
      top: 50%;
      left: 50%;
      transform: translate3d(-50%,-50%,0);
      background-position: center;
      background-size: contain;
      background-repeat: no-repeat;
      cursor: pointer;
    }
  }
}
</style>
