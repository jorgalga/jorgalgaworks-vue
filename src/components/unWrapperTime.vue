<template>
  <div class="component-wrapper unwrappertime" v-bind:class="$props.flipped + ' ' + $props.white">
    <div class="white-band" v-bind:style="'height:'+160*scaleR+'px'"></div>
    <div class="component-container " v-bind:style="'max-width:'+(data.max_width - 30)*scaleR+'px'">
      <div class="unwrap-button" @click.prevent="toogle($event)" v-bind:style="'height:'+160*scaleR+'px'">
        <div ref="txtbtn" v-html="$props.type" class="text-button" v-bind:style=" 'letter-spacing:'+20*scaleR+'px;font-size:'+48*scaleR+'px'"></div>
        <div ref="txtdate" v-html="$props.date" class="text-date" v-bind:style="isMobile ? 'letter-spacing:'+4*scaleR+'px;font-size:'+40*scaleR+'px' :'letter-spacing:'+10*scaleR+'px;font-size:'+64*scaleR+'px'"></div>
      </div>
      <div ref="wcontainer" class="unwrap-container">
        <div class="flex-grid">
          <div class="col">
            <div class="" v-bind:style="isMobile ? '' : 'padding:'+20*scaleR+'px'">
              <div v-for="(item) in data.agenda_list[$props.type]" v-bind:class="'time-item ' + item.class" :key="item.id" >
                <div class="time" v-html="item.time"></div>
                <div class="text" v-html="item.text"></div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="bg-image" v-bind:class="type">
            </div>
          </div>
        </div>
      </div>
      <div ref="shadow" v-bind:class="'shadow ' + $props.sdisplay" v-bind:style="'height:'+ 250 * scaleR +'px'">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'unWrappertime',
  props: ['type', 'date', 'flipped', 'classopened', 'white', 'sdisplay'],
  data () {
    return {
      scaleR: 1,
      itemActive: 0,
      isMobile: window.innerWidth < window.dataConfig.data.mobile_width
    }
  },
  created () {
    let _ = this
    _.data = window.dataConfig.data
    _.opened = false
    _.resizeHandler()
    window.addEventListener('resize', function () {
      _.isMobile = window.innerWidth < window.dataConfig.data.mobile_width
      _.resizeHandler()
    })
  },
  mounted () {
    if (this.$props.classopened) {
      this.$refs.wcontainer.classList.add('opened')
      this.$refs.txtdate.classList.add('opened')
      this.$refs.txtbtn.classList.add('opened')
      this.opened = true
    }
    this.splitInSpans()
  },
  methods: {
    resizeHandler () {
      var w = Math.min(window.innerWidth, this.data.max_width)
      this.scaleR = Math.max(0.5, w / this.data.max_width)
      this.scaleR = Math.min(this.scaleR, (this.data.max_width_limit / this.data.max_width))
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
        this.$refs.txtdate.classList.remove('opened')
        this.$refs.txtbtn.classList.remove('opened')
        this.$refs.wcontainer.classList.remove('opened')
        this.freezeInteraction(el, 500)
      } else {
        this.opened = true
        this.$refs.txtdate.classList.add('opened')
        this.$refs.txtbtn.classList.add('opened')
        this.$refs.wcontainer.classList.add('opened')
        this.freezeInteraction(el, 500)
      }
    },
    splitInSpans () {
      // console.log(this.$refs.txtbtn.innerHTML)
      var txt = this.$refs.txtbtn.innerHTML
      var res = ''
      for (var i = 0; i < txt.length; i++) {
        res += '<span class="ll-container"><span class="letter">' + txt[i] + '</span><span class="line"></span></span>'
      }
      this.$refs.txtbtn.innerHTML = res
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
.component-wrapper.unwrappertime{
  width: 100%;
  background-color: black;
  position: relative;
  &.whitened{
    background-color: white;
  }
  .white-band{
    background-color: white;
    position: absolute;
    width: 100%;
  }
  .component-container{
    position: relative;
    /*max-width: $pagewidth;*/
    margin: 0 auto;
    box-sizing: border-box;
  }
  &.inverse{
    .col:nth-child(1){
      order:2;
    }
    .col:nth-child(2){
      order:1;
    }
    .text-button.opened{
      left: 75%;
    }
    .text-date.opened{
      left: 25%;
    }
  }
  .shadow{
    height: 200px;
    width: 100%;
    background-image: url('#{$staticpath}static/unleash/images/spray.png');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    transform: translate3d(0,-55%,0);
    display: none;
    &.displayed{
      display: block;
    }
  }
  .bg-image{
    display: inline-block;
    width: 100%;
    height: 100%;
    background-color: black;
    &.day_1{
      background-image: url('#{$staticpath}static/unleash/images/Unleash_Web_Agenda_Day1.jpg');
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
    }
    &.day_2{
      background-image: url('#{$staticpath}static/unleash/images/Unleash_Web_Agenda_Day2.jpg');
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
    }
    &.day_3{
      background-image: url('#{$staticpath}static/unleash/images/Unleash_Web_Agenda_Day3.jpg');
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
    }
  }
}
.unwrappertime {
  .unwrap-button{
    background-color: black;
    cursor: pointer;
    position: relative;
    z-index: 10;
    &.freeze{
      pointer-events: none;
    }
    .text-date{
      position: absolute;
      top:50%;
      left: 75%;
      width: 50%;
      text-align: center;
      transform: translate3d(-50%,-50%,0);
      -webkit-text-stroke-width: 1px;
      -webkit-text-stroke-color: white;
      font-family: 'overpass_blackregular';
      line-height: 1;
      font-weight: 100;
      text-transform: uppercase;
      opacity: 0;
      transition: 0;
      @media (max-width: $break-mobile) {
        -webkit-text-stroke-width: 0.25px;
      }
      &.opened{
        left: 75%;
        opacity: 1;
      }
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
      &.opened{
        left: 25%;
      }
      /deep/ .ll-container{
        position: relative;
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
        .text-date{
          color: transparent;
          -webkit-text-stroke-width: 1px;
          -webkit-text-stroke-color: black;
        }
      }
    }
  }
  .unwrap-container{
    background-color: white;
    overflow: hidden;
    max-height: 0;
    transition: max-height 0.5s ease-out;
    position: relative;
    z-index: 10;
    &.opened{
      max-height: 850px;
      transition: max-height 0.5s ease-in;
    }
    .time-item{
      padding: 5px 0;
      margin: 5px 25px;
      font-family: 'space_monoregular';
      font-weight: 800;
      @media (max-width: $break-mobile) {
        font-size: 14px;
        margin: 5px 15px;
      }
      &.magenta-txt{
        margin: 20px 25px;
        color: $magenta;
        border-top: 1px solid $magenta;
        border-bottom: 1px solid $magenta;
        @media (max-width: $break-mobile) {
          margin: 15px 15px;
        }
      }
      .time{
        display: inline-block;
      }
      .text{
        padding-left: 30px;
        display: inline-block;
        @media (max-width: $break-mobile) {
          padding-left: 15px;
        }
      }
    }
  }
  .flex-grid{
    display: flex;
    border: 0;
    box-sizing: border-box;
  }
  .col{
    flex-grow: 0;
  }
  .col:nth-child(1){
    flex-basis: 50%;
    border: 1px solid grey
  }
  .col:nth-child(2){
    flex-basis: 50%;
    border: 1px solid grey
  }
  @media (max-width: $break-mobile) {
    .flex-grid{
      display: block;
    }
  }
}

@keyframes  coming {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes  going {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>
