export class SpriteCSS {
  constructor (el, m) {
    this.sprite_el = el
    this.mobile = m
    if (this.mobile) {
      this.wFrame = 375
    } else {
      this.hFrame = 720
    }
    this.frames = 0
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
    if (this.mobile) {
      this.currentFrame = Math.floor((this.frames - 2) * polarPos) * this.wFrame
      this.sprite_el.style.backgroundPositionX = '-' + this.currentFrame + 'px'
    } else {
      this.currentFrame = Math.floor((this.frames - 2) * polarPos) * this.hFrame
      this.sprite_el.style.backgroundPositionY = '-' + this.currentFrame + 'px'
    }
  }
  nextFrame () {
    if (this.mobile) {
      this.currentFrame += this.wFrame
      this.sprite_el.style.backgroundPositionX = '-' + this.currentFrame + 'px'
    } else {
      this.currentFrame += this.hFrame
      this.sprite_el.style.backgroundPositionY = '-' + this.currentFrame + 'px'
    }
  }
  updateBG (path) {
    if (path) {
      this.sprite_el.style.backgroundImage = 'url(' + path + ')'
    } else {
      this.sprite_el.style.backgroundImage = 'url(' + this.url + ')'
    }
  }
  isAtTheEnd () {
    if (this.mobile) {
      if (this.currentFrame >= (this.frames - 2) * this.wFrame) {
        return true
      } else {
        return false
      }
    } else {
      if (this.currentFrame >= (this.frames - 2) * this.hFrame) {
        return true
      } else {
        return false
      }
    }
  }
}
