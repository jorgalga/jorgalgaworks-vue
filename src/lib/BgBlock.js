export class BgBlock {
  constructor (i, bgData) {
    this.index = i
    this.data = bgData
    this.visible = false
    this.imageData = undefined
    this.transition = 1
  }
  update (time, vueParent) {
    if (time >= this.data.initTime && time < this.data.initTime + this.transition) {
      var opacity = (time - this.data.initTime) / this.transition
      document.getElementById('bg-block' + this.data.id).style.opacity = opacity
    } else if (time >= this.data.initTime + this.transition && time < this.data.endTime) {
      if (!this.visible) {
        this.visible = true
        vueParent.currentBlock = this.index
        document.getElementById('bullet-' + this.data.id).classList.add('displayed')
        if (!vueParent.imagesLoaded) {
          vueParent.imagesLoaded = true
          vueParent.sortBlocks(this.index)
          vueParent.loadFullsizeImages()
        }
        // console.log('visible!')
        document.getElementById('bg-block' + this.data.id).style.opacity = 1
        vueParent.currentTitle = this.data.title
        vueParent.currentText = this.data.text
      }
    } else if (time >= this.data.endTime && time < this.data.endTime + this.transition) {
      var opacity2 = 1.0 - ((time - this.data.endTime) / this.transition)
      document.getElementById('bg-block' + this.data.id).style.opacity = opacity2
    } else {
      if (this.visible) {
        this.visible = false
        document.getElementById('bullet-' + this.data.id).classList.remove('displayed')
        document.getElementById('bg-block' + this.data.id).style.opacity = 0
      }
    }
  }
  updateBak (time) {
    if (time >= this.data.initTime && time < this.data.endTime) {
      if (!this.visible) {
        this.visible = true
        document.getElementById('bg-block' + this.data.id).classList.remove('faded-out')
        document.getElementById('bg-block' + this.data.id).classList.add('on-top')
        // console.log(this.data.id + ' is visible')
      }
    } else {
      if (this.visible) {
        this.visible = false
        document.getElementById('bg-block' + this.data.id).classList.add('faded-out')
        document.getElementById('bg-block' + this.data.id).classList.remove('on-top')
      }
    }
  }
  fadeFullSize () {
    // console.log(this.imageData.src)
    var el = document.getElementById('bg-block' + this.data.id)
    el.querySelector('.loader').classList.add('hidden')
    el.querySelector('.background-full').style.backgroundImage = 'url(' + this.imageData.src + ')'
    el.querySelector('.background-full').classList.add('loaded')
  }
}
