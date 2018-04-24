<template>
  <div class="hello">
    <div id="vrw-container">
      <div id="ui">
        <div id="vr-button"></div>
        <a id="magic-window" href="#">Try it without a headset</a>
      </div>
    </div>
  </div>
</template>

<script>
// import ES6Promise from 'es6-promise'
import * as THREE from 'three'
import VRControls from 'three-vrcontrols-module'
import VREffect from 'three-vreffect-module'
// import WebVRPolyfill from 'webvr-polyfill'
import * as webvrui from 'webvr-ui'
export default {
  name: 'VRWorld',
  data () {
    return {
      msg: ''
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      /*
      * Debug parameters.
      */
      var WebVRConfig = {
        /**
        * webvr-polyfill configuration
        */
        // Forces availability of VR mode.
        // FORCE_ENABLE_VR: true, // Default: false.
        // Complementary filter coefficient. 0 for accelerometer, 1 for gyro.
        // K_FILTER: 0.98, // Default: 0.98.
        //  How far into the future to predict during fast motion.
        // PREDICTION_TIME_S: 0.040, // Default: 0.040 (in seconds).
        // Flag to disable touch panner. In case you have your own touch controls
        // TOUCH_PANNER_DISABLED: true, // Default: false.
        // Enable yaw panning only, disabling roll and pitch. This can be useful for
        // panoramas with nothing interesting above or below.
        // YAW_ONLY: true, // Default: false.
        // Enable the deprecated version of the API (navigator.getVRDevices).
        // ENABLE_DEPRECATED_API: true, // Default: false.
        // Scales the recommended buffer size reported by WebVR, which can improve
        // performance. Making this very small can lower the effective resolution of
        // your scene.
        BUFFER_SCALE: 0.5 // default: 1.0
        // Allow VRDisplay.submitFrame to change gl bindings, which is more
        // efficient if the application code will re-bind it's resources on the
        // next frame anyway.
        // Dirty bindings include: gl.FRAMEBUFFER_BINDING, gl.CURRENT_PROGRAM,
        // gl.ARRAY_BUFFER_BINDING, gl.ELEMENT_ARRAY_BUFFER_BINDING,
        // and gl.TEXTURE_BINDING_2D for texture unit 0
        // Warning: enabling this might lead to rendering issues.
        // DIRTY_SUBMIT_FRAME_BINDINGS: true // default: false
      }
      // Last time the scene was rendered.
      var lastRenderTime = 0
      // Currently active VRDisplay.
      var vrDisplay
      // How big of a box to render.
      var boxSize = 8
      // Various global THREE.Objects.
      var scene
      var cube
      var skybox
      var controls
      var effect
      var camera
      // EnterVRButton for rendering enter/exit UI.
      var vrButton

      // Setup three.js WebGL renderer. Note: Antialiasing is a big performance hit.
      // Only enable it if you actually need to.
      var renderer = new THREE.WebGLRenderer({antialias: true})
      renderer.setPixelRatio(window.devicePixelRatio)
      // Append the canvas element created by the renderer to document body element.
      document.getElementById('vrw-container').appendChild(renderer.domElement)

      // Create a three.js scene.
      scene = new THREE.Scene()

      // Create a three.js camera.
      var aspect = window.innerWidth / window.innerHeight
      camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 10000)
      controls = new VRControls(camera)
      controls.standing = true
      camera.position.y = controls.userHeight

      // Apply VR stereo rendering to renderer.
      effect = new VREffect(renderer)
      effect.setSize(window.innerWidth, window.innerHeight)

      // Add a repeating grid as a skybox.
      var loader = new THREE.TextureLoader()
      loader.load('/static/box.png', onTextureLoaded)

      // Create 3D objects.
      var geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5)
      var material = new THREE.MeshNormalMaterial()
      cube = new THREE.Mesh(geometry, material)

      var loader2 = new THREE.TextureLoader()
      loader2.load('/static/texture.png', onTextureLoaded2)

      // Position cube mesh to be right in front of you.
      cube.position.set(0, controls.userHeight, -1)

      // Add cube mesh to your three.js scene
      scene.add(cube)

      window.addEventListener('resize', onResize, true)
      window.addEventListener('vrdisplaypresentchange', onResize, true)

      // Initialize the WebVR UI.
      var uiOptions = {
        color: 'black',
        background: 'white',
        corners: 'square'
      }
      vrButton = new webvrui.EnterVRButton(renderer.domElement, uiOptions)
      vrButton.on('exit', function () {
        camera.quaternion.set(0, 0, 0, 1)
        camera.position.set(0, controls.userHeight, 0)
      })
      vrButton.on('hide', function () {
        document.getElementById('ui').style.display = 'none'
      })
      vrButton.on('show', function () {
        document.getElementById('ui').style.display = 'inherit'
      })
      document.getElementById('vr-button').appendChild(vrButton.domElement)
      document.getElementById('magic-window').addEventListener('click', function () {
        // vrButton.requestEnterFullscreen()
      })

      // Methods
      function onTextureLoaded (texture) {
        texture.wrapS = THREE.RepeatWrapping
        texture.wrapT = THREE.RepeatWrapping
        texture.repeat.set(boxSize, boxSize)
        var geometry = new THREE.BoxGeometry(boxSize, boxSize, boxSize)
        var material = new THREE.MeshBasicMaterial({
          map: texture,
          color: 0xBE1020,
          side: THREE.BackSide
        })
        // Align the skybox to the floor (which is at y=0).
        skybox = new THREE.Mesh(geometry, material)
        skybox.position.y = boxSize / 2
        scene.add(skybox)
        // For high end VR devices like Vive and Oculus, take into account the stage
        // parameters provided.
        setupStage()
      }

      function onTextureLoaded2 (texture) {
        var material = new THREE.MeshBasicMaterial({
          map: texture
        })
        cube.material = material
      }

      // Request animation frame loop function
      function animate (timestamp) {
        var delta = Math.min(timestamp - lastRenderTime, 500)
        lastRenderTime = timestamp
        // Apply rotation to cube mesh
        cube.rotation.y += delta * 0.0006
        cube.rotation.z -= delta * 0.0001
        // Only update controls if we're presenting.
        if (vrButton.isPresenting()) {
          controls.update()
        }
        // Render the scene.
        effect.render(scene, camera)
        if (vrDisplay) {
          vrDisplay.requestAnimationFrame(animate)
        } else {
          window.requestAnimationFrame(animate)
        }
      }

      function onResize (e) {
        effect.setSize(window.innerWidth, window.innerHeight)
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
      }

      // Get the HMD, and if we're dealing with something that specifies
      // stageParameters, rearrange the scene.
      function setupStage () {
        if (navigator.getVRDisplays) {
          navigator.getVRDisplays().then(function (displays) {
            if (displays.length > 0) {
              vrDisplay = displays[0]
              if (vrDisplay.stageParameters) {
                setStageDimensions(vrDisplay.stageParameters)
              }
              vrDisplay.requestAnimationFrame(animate)
            }
          })
        } else {
          window.requestAnimationFrame(animate)
        }
      }
      function setStageDimensions (stage) {
        // Make the skybox fit the stage.
        var material = skybox.material
        scene.remove(skybox)
        // Size the skybox according to the size of the actual stage.
        var geometry = new THREE.BoxGeometry(stage.sizeX, boxSize, stage.sizeZ)
        skybox = new THREE.Mesh(geometry, material)
        // Place it on the floor.
        skybox.position.y = boxSize / 2
        scene.add(skybox)
        // Place the cube in the middle of the scene, at user height.
        cube.position.set(0, controls.userHeight, 0)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#vrw-container{
  background-color: aliceblue;
  width: 100vw;
  height: 100vh;
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
</style>
