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
// import ES6Promise from 'es6-promise'
import * as THREE from 'three'
// import VRControls from 'three-vrcontrols-module'
import VREffect from 'three-vreffect-module'
// import WebVRPolyfill from 'webvr-polyfill'
import * as webvrui from 'webvr-ui'
import {TweenLite} from 'gsap'
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
      var container
      // var mesh
      // var startTime
      var images = [
        {file: '/static/chroma/slider-0.png'},
        {file: '/static/chroma/slider-1.png'},
        {file: '/static/chroma/slider-2.png'},
        {file: '/static/chroma/slider-3.png'},
        {file: '/static/chroma/slider-4.png'}
      ]
      // Last time the scene was rendered.
      // var lastRenderTime = 0
      // Currently active VRDisplay.
      var vrDisplay
      // How big of a box to render.
      var boxSize = 7
      // Various global THREE.Objects.
      var scene
      // var cube
      var skybox
      var controls
      var effect
      var camera
      // EnterVRButton for rendering enter/exit UI.
      var vrButton

      // Setup three.js WebGL renderer. Note: Antialiasing is a big performance hit.
      // Only enable it if you actually need to.
      var renderer = new THREE.WebGLRenderer({antialias: true, alpha: true})
      renderer.setPixelRatio(window.devicePixelRatio)
      // Append the canvas element created by the renderer to document body element.
      container = document.getElementById('vrw-container')
      container.appendChild(renderer.domElement)

      // Create a three.js scene.
      scene = new THREE.Scene()

      // Create a three.js camera.
      // var aspect = window.innerWidth / window.innerHeight
      var aspect = container.clientWidth / container.clientHeight
      // camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 10000)
      camera = new THREE.PerspectiveCamera(70, aspect, 0.001, 100)
      camera.target = new THREE.Vector3(0, 0, 0)
      // controls = new VRControls(camera)
      // controls.standing = true
      // camera.position.y = controls.userHeight
      camera.lookAt(camera.target)
      camera.position.set(0, 0.05, 1.2)

      // Apply VR stereo rendering to renderer.
      effect = new VREffect(renderer)
      effect.setSize(container.clientWidth, container.clientHeight)

      // Add a repeating grid as a skybox.
      var loader = new THREE.TextureLoader()
      loader.load('/static/box1.png', onTextureLoaded)

      // Create 3D objects.
      // var geometryCube = new THREE.BoxGeometry(0.5, 0.5, 0.5)
      // var materialCube = new THREE.MeshNormalMaterial()
      // cube = new THREE.Mesh(geometryCube, materialCube)

      // var loader2 = new THREE.TextureLoader()
      // loader2.load('/static/texture.png', onTextureLoaded2)

      // Position cube mesh to be right in front of you.
      // cube.position.set(0, 1, -1)

      // Add cube mesh to your three.js scene
      // scene.add(cube)

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
        // camera.position.set(0, controls.userHeight, 1)
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
        vrButton.hide()
      })
      document.getElementById('vrw-container').addEventListener('mousemove', mousemoveHandler)
      initScene()
      initGradient()

      // Methods
      function mousemoveHandler (e) {
        var cx = (e.clientX / container.clientWidth) * 2 - 1
        var cy = (e.clientY / container.clientHeight) * 2 - 1
        for (var i = 0; i < pointsArray.length; i++) {
          pointsArray[i].rotation.y = (Math.PI / 2) * 0.2 * cx
          pointsArray[i].rotation.x = (Math.PI / 2) * 0.1 * cy
        }
      }
      function onTextureLoaded (texture) {
        texture.wrapS = THREE.RepeatWrapping
        texture.wrapT = THREE.RepeatWrapping
        texture.repeat.set(boxSize, boxSize)
        var geometry = new THREE.BoxGeometry(boxSize, boxSize, boxSize)
        var material = new THREE.MeshBasicMaterial({
          map: texture,
          color: 0xcc88aa,
          side: THREE.BackSide
        })
        // Align the skybox to the floor (which is at y=0).
        skybox = new THREE.Mesh(geometry, material)
        skybox.position.y = 1
        scene.add(skybox)
        // For high end VR devices like Vive and Oculus, take into account the stage
        // parameters provided.
        setupStage()
      }
      /*
      function onTextureLoaded2 (texture) {
        var material = new THREE.MeshBasicMaterial({
          map: texture
        })
        cube.material = material
      }
      */
      var currentId = 0
      var current = 0
      // var target = 0
      var blendValue = 0
      // var step = 0.05
      // https://gist.github.com/gre/1650294
      // function ease (t) { return t<.5 ? 8*t*t*t*t : 1-8*(--t)*t*t*t };
      // function ease (t) { return t<.5 ? 2*t*t : -1+(4-2*t)*t }
      function ease (t) { return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1 }

      // Request animation frame loop function
      function animate (timestamp) {
        // var delta = Math.min(timestamp - lastRenderTime, 500)
        // lastRenderTime = timestamp
        // Apply rotation to cube mesh
        // cube.rotation.y += delta * 0.0006
        // cube.rotation.z -= delta * 0.0001
        // Only update controls if we're presenting.
        if (vrButton.isPresenting()) {
          controls.update()
        }
        // controls.update()
        if (material) {
          var dir = current - blendValue
          blendValue += dir / 100
          material.uniforms.blend.value = ease(blendValue)
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
        effect.setSize(container.clientWidth, container.clientHeight)
        camera.aspect = container.clientWidth / container.clientHeight
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
        // cube.position.set(0, controls.userHeight, 0)
      }
      function loadImage (filename, c) {
        var img = new Image()
        img.addEventListener('load', function (e) {
          c(this)
        })
        img.src = filename
      }
      function changeSource (id) {
        material.uniforms.sourceTex.value = images[ id ].texture
        points.geometry.attributes.source.array = images[ id ].buffer
        points.geometry.attributes.source.needsUpdate = true
      }
      function changeTarget (id) {
        material.uniforms.targetTex.value = images[ id ].texture
        points.geometry.attributes.target.array = images[ id ].buffer
        points.geometry.attributes.target.needsUpdate = true
      }
      function selectImage (id) {
        if (currentId === id) return
        currentId = id
        if ( current === 1 )changeSource(id)
        else changeTarget(id)
        current = 1 - current
      }
      function initGradient () {
        TweenLite.to(document.getElementById('progress-bar'), 8, {
          scaleX: 1,
          delay: 1,
          onComplete: function () {
            selectImage((currentId + 1) % images.length)
            TweenLite.to(document.getElementById('progress-bar'), 1, {
              scaleX: 0,
              onComplete: function () {
                initGradient()
              }
            })
          }
        })
      }
      // vars
      var material
      var points
      function initScene () {
        images.forEach(function (i, id) {
          loadImage(i.file, function (img) {
            i.image = img
            i.texture = new THREE.Texture(img)
            i.texture.flipY = false
            i.texture.needsUpdate = true
            var copy = new Image()
            copy.src = i.file
            copy.addEventListener('click', function (e) {
              selectImage(id)
            })
            document.getElementById('selector').appendChild(copy)
            sortPixels(img, function (res) {
              i.buffer = res
              i.loaded = true
              generateMesh()
            })
          })
        })
      }
      var hslA = new THREE.Color('hsl(0, 100%, 50%)')
      var hslB = new THREE.Color('hsl(0, 100%, 50%)')
      var pointsArray = []
      function generateMesh () {
        if (images.some(function (i) { return i.loaded !== true })) { return }
        var w = images[0].image.width
        var h = images[0].image.height
        var ptr = 0
        var positions = new Float32Array(w * h * 3)

        for (var y = 0; y < w; y++) {
          for (var x = 0; x < h; x++) {
            positions[ ptr * 3 + 0 ] = x
            positions[ ptr * 3 + 1 ] = y
            positions[ ptr * 3 + 2 ] = 0
            ptr++
          }
        }
        var geometry = new THREE.BufferGeometry()
        geometry.addAttribute('position', new THREE.BufferAttribute(positions, 3))
        geometry.addAttribute('source', new THREE.BufferAttribute(images[0].buffer, 2))
        geometry.addAttribute('target', new THREE.BufferAttribute(images[1].buffer, 2))
        // var loader = new THREE.TextureLoader()
        material = new THREE.RawShaderMaterial({
          uniforms: {
            sourceTex: { type: 't', value: images[0].texture },
            targetTex: { type: 't', value: images[1].texture },
            blend: { type: 'f', value: 0 },
            size: { type: 'f', value: 2.1 }, // window.devicePixelRatio },
            dimensions: { type: 'v2', value: new THREE.Vector2(w, h) }
          },
          vertexShader: document.getElementById('particle-vs').textContent,
          fragmentShader: document.getElementById('particle-fs').textContent
        })
        points = new THREE.Points(geometry, material)
        pointsArray.push(points)
        // points.rotation.x = (Math.PI / 2) * -0.05
        // points.rotation.y = (Math.PI / 2) * 0.1
        scene.add(points)
        renderer.render(scene, camera)
        // startTime = performance.now()
        // document.getElementById('loading').style.display = 'none'
      }
      function sortPixels (img, callback) {
        var canvas = document.createElement('canvas')
        canvas.width = img.naturalWidth
        canvas.height = img.naturalHeight
        var ctx = canvas.getContext('2d')
        ctx.drawImage(img, 0, 0)
        var data = ctx.getImageData(0, 0, canvas.width, canvas.height)
        var buffer = data.data
        var rgb = []
        var c = new THREE.Color()
        for (var j = 0; j < buffer.length; j += 4) {
          c.setRGB(buffer[ j ], buffer[ j + 1 ], buffer[ j + 2 ])
          rgb.push({ c: c.clone(), id: j / 4 })
        }
        rgb.sort(function (a, b) {
          a.c.getHSL(hslA)
          b.c.getHSL(hslB)
          // return a.c.getHSL().h - b.c.getHSL().h
          // return a.c.getHSL().s - b.c.getHSL().s
          return hslA.s - hslB.s
          // return b.c.getHSL().l - a.c.getHSL().l
        })
        var ptr = 0
        var res = new Float32Array(img.width * img.height * 2)
        rgb.forEach(function (e) {
          res[ ptr ] = e.id % img.width
          res[ ptr + 1 ] = Math.floor(e.id / img.width)
          ptr += 2
        })
        callback(res)
      }
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#vrw-container{
  background-color: white;
  width: 100vw;
  height: 80vh;
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
  opacity: 0.8;
  background-color: white;
  transform: scaleX(0.0);
  transform-origin: top left
}
</style>
