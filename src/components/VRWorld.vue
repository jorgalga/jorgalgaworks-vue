<template>
  <div class="hello">
    <div id="vrw-container">
      <div id="ui">
        <div id="vr-button"></div>
        <a id="magic-window" href="#">Try it without a headset</a>
      </div>
      <div id="selector"></div>
      <div id="loading">Loading</div>
      <div id="progress-bar"></div>
      <div class="gradient"></div>
    </div>
  </div>
</template>
<script>
import * as THREE from 'three'
import VRControls from 'three-vrcontrols-module'
import VREffect from 'three-vreffect-module'
import * as webvrui from 'webvr-ui'
import {ThreeChroma} from '../lib/three-chromatography'
// import {ThreeDTour} from '../lib/three-3Dtour'
export default {
  name: 'VRWorld',
  data () {
    return {
      lastRenderTime: 0, // Last time the scene was rendered.
      vrDisplay: null, // Currently active VRDisplay.
      boxSize: 9, // How big of a box to render.
      scene: null,
      controls: null,
      effect: null,
      camera: null,
      vrButton: null, // EnterVRButton for rendering enter/exit UI.
      renderer: null,
      skybox: null,
      cube: null,
      threeChroma: null,
      threeDTour: null
    }
  },
  mounted () {
    this.container = document.getElementById('vrw-container')
    this.aspect = this.container.clientWidth / this.container.clientHeight
    this.onLoad()
  },
  methods: {
    onLoad () {
      // Setup three.js WebGL renderer. Note: Antialiasing is a big performance hit.
      // Only enable it if you actually need to.
      this.renderer = new THREE.WebGLRenderer({antialias: true})
      this.renderer.setPixelRatio(window.devicePixelRatio)

      // Append the canvas element created by the renderer to document body element.
      this.container.appendChild(this.renderer.domElement)

      // Create a three.js scene.
      this.scene = new THREE.Scene()

      // Create a three.js camera.
      this.camera = new THREE.PerspectiveCamera(75, this.aspect, 0.1, 10000)
      // setup VRControls
      this.controls = new VRControls(this.camera)
      this.controls.standing = true
      this.camera.position.y = this.controls.userHeight

      // Apply VR stereo rendering to renderer.
      this.effect = new VREffect(this.renderer)
      this.effect.setSize(this.container.clientWidth, this.container.clientHeight)

      // Add a repeating grid as a skybox.
      this.addSkybox()
      // this.addSkySphere()

      // Create 3D objects.
      var geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5)
      var material = new THREE.MeshNormalMaterial()
      this.cube = new THREE.Mesh(geometry, material)
      // Position cube mesh to be right in front of you.
      this.cube.position.set(0, this.controls.userHeight, -1)
      // Add cube mesh to your three.js scene
      // this.scene.add(this.cube)

      window.addEventListener('resize', this.onResize, true)
      window.addEventListener('vrdisplaypresentchange', this.onResize, true)

      // Initialize the WebVR UI.
      var uiOptions = {
        color: 'black',
        background: 'white',
        corners: 'square'
      }

      var _ = this
      this.vrButton = new webvrui.EnterVRButton(this.renderer.domElement, uiOptions)
      this.vrButton.on('exit', function () {
        _.camera.quaternion.set(0, 0, 0, 1)
        _.camera.position.set(0, _.controls.userHeight, 0)
      })
      this.vrButton.on('hide', function () {
        document.getElementById('ui').style.display = 'none'
        _.container.style.height = '100vh'
      })
      this.vrButton.on('show', function () {
        document.getElementById('ui').style.display = 'inherit'
        _.container.style.height = ''
      })
      document.getElementById('vr-button').appendChild(this.vrButton.domElement)
      document.getElementById('magic-window').addEventListener('click', function () {
        // this.vrButton.requestEnterFullscreen()
        _.vrButton.requestEnterFullscreen().catch((e) => {
          if (e.message === 'e.manager.enterFullscreen(...).then is not a function') {
            console.log('webvr-ui fullscreen hotfix')
          } else {
            return e
          }
        })
      })
      // Chroma
      this.threeChroma = new ThreeChroma(this.container, this.renderer, this.camera, this.scene, this.controls)
      this.threeChroma.init()

      // this.threeDTour = new ThreeDTour(this.container, this.renderer, this.camera, this.scene, this.controls)
      // this.threeDTour.init()
    },
    addSkybox () {
      var loader = new THREE.TextureLoader()
      loader.load('/static/box1.png', onTextureLoaded)
      var _ = this
      function onTextureLoaded (texture) {
        texture.wrapS = THREE.RepeatWrapping
        texture.wrapT = THREE.RepeatWrapping
        texture.repeat.set(_.boxSize, _.boxSize)
        var geometry = new THREE.BoxGeometry(_.boxSize, _.boxSize, _.boxSize)
        var material = new THREE.MeshBasicMaterial({
          map: texture,
          color: 0xcc88aa,
          side: THREE.BackSide
        })
        // Align the skybox to the floor (which is at y=0).
        _.skybox = new THREE.Mesh(geometry, material)
        _.skybox.position.y = _.boxSize / 2
        _.scene.add(_.skybox)
        // For high end VR devices like Vive and Oculus, take into account the stage
        // parameters provided.
        _.setupStage()
      }
    },
    addSkySphere () {
      var geometry = new THREE.SphereGeometry(500, 60, 40)
      geometry.scale(-1, 1, 1)
      var material = new THREE.MeshBasicMaterial({
        map: new THREE.TextureLoader().load('/static/paris.jpg')
      })

      var mesh = new THREE.Mesh(geometry, material)
      this.scene.add(mesh)
    },
    setupStage () {
      var _ = this
      if (navigator.getVRDisplays) {
        navigator.getVRDisplays().then(function (displays) {
          if (displays.length > 0) {
            _.vrDisplay = displays[0]
            if (_.vrDisplay.stageParameters) {
              _.setStageDimensions(_.vrDisplay.stageParameters)
            }
            _.vrDisplay.requestAnimationFrame(_.animate)
          }
        })
      } else {
        window.requestAnimationFrame(_.animate)
      }
    },
    animate (timestamp) {
      var delta = Math.min(timestamp - this.lastRenderTime, 500)
      this.lastRenderTime = timestamp

      // Apply rotation to cube mesh
      this.cube.rotation.y += delta * 0.0006

      // Only update controls if we're presenting.
      if (this.vrButton.isPresenting()) {
        this.controls.update()
      } else {
        this.controls.update()
      }
      // Render the scene.
      this.effect.render(this.scene, this.camera)
      if (this.vrDisplay) {
        this.vrDisplay.requestAnimationFrame(this.animate)
      } else {
        window.requestAnimationFrame(this.animate)
      }
    },
    setStageDimensions (stage) {
      // Make the skybox fit the stage.
      var material = this.skybox.material
      this.scene.remove(this.skybox)

      // Size the skybox according to the size of the actual stage.
      var geometry = new THREE.BoxGeometry(stage.sizeX, this.boxSize, stage.sizeZ)
      this.skybox = new THREE.Mesh(geometry, material)

      // Place it on the floor.
      this.skybox.position.y = this.boxSize / 2
      this.scene.add(this.skybox)

      // Place the cube in the middle of the scene, at user height.
      this.cube.position.set(0, this.controls.userHeight, 0)
    },
    onResize (e) {
      this.aspect = this.container.clientWidth / this.container.clientHeight
      this.effect.setSize(this.container.clientWidth, this.container.clientHeight)
      this.camera.aspect = this.aspect
      this.camera.updateProjectionMatrix()
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#vrw-container{
  background-color: white;
  width: 100%;
  height: 100vh;
  position: relative;
}
#ui {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-family: 'Karla', sans-serif;
  z-index: 1;
}
a#magic-window {
  display: block;
  color: grey;
  margin-top: 1em;
}
#selector{
  position: absolute;
  top: 10px;
  left: 0;
  right: 0;
  text-align: center;
}

#loading{
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  text-align:center;
  z-index:2000;
  opacity: 0;
  color: white;
  transition: 0.5s;
  pointer-events: none;
}
#vr-button{
  box-shadow: 0 3px 5px rgba(0,0,0,.4);
  background-color: white
}
.gradient{
  background: linear-gradient(transparent, white);
  width: 100%;
  height: 20%;
  position: absolute;
  bottom: 0;
  left:0;
}
#progress-bar{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 6px;
  opacity: 0.6;
  background-color: pink;
  transform: scaleX(0.0);
  transform-origin: top left
}
</style>
