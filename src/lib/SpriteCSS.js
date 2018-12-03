export class SpriteCSS {
  constructor (el) {
    this.sprite_el = el
    this.wFrame = 375
    this.frames = 48
    this.currentFrame = 0
    this.url = ''
    this.setResizing()
  }
  setResizing () {
    var _ = this
    var resizeTimer
    window.onresize = function () {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(function () {
        // Run code here, resizing has "stopped"
        resizeHandler()
      }, 250)
    }
    resizeHandler()
    function resizeHandler () {
      var scaleX = window.innerWidth / _.sprite_el.offsetWidth
      var scaleY = window.innerHeight / _.sprite_el.offsetHeight
      if (scaleX > scaleY) {
        _.sprite_el.style.transform = 'translate3d(-50%,-50%,0) scale(' + scaleX + ')'
      } else {
        _.sprite_el.style.transform = 'translate3d(-50%,-50%,0) scale(' + scaleY + ')'
      }
    }
  }
  setFrame (polarPos) {
    this.currentFrame = Math.floor((this.frames - 1) * polarPos) * this.wFrame
    this.sprite_el.style.backgroundPositionX = '-' + this.currentFrame + 'px'
  }
  nextFrame () {
    this.currentFrame += this.wFrame
    this.sprite_el.style.backgroundPositionX = '-' + this.currentFrame + 'px'
  }
  updateBG (path) {
    this.sprite_el.style.backgroundImage = 'url(' + path + ')'
  }
  isAtTheEnd () {
    if (this.currentFrame >= (this.frames - 1) * this.wFrame) {
      return true
    } else {
      return false
    }
  }
}
