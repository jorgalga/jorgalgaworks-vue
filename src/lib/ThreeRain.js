var THREE = window.THREE
var CANNON = window.CANNON
export class ThreeRain {
  constructor (el) {
    this.domel = el
    this.init()
    this.animate()
    this.setResizeEvents()
    this.setCanon()
    this.addElements()
  }
  init () {
    this.camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 1000)
    this.camera.position.set(0, 0, 10)
    this.renderer = new THREE.WebGLRenderer({antialias: true})
    this.renderer.setPixelRatio(window.devicePixelRatio)
    this.renderer.setSize(this.domel.offsetWidth, this.domel.offsetHeight)
    this.domel.appendChild(this.renderer.domElement)
    this.scene = new THREE.Scene()
    this.scene.background = new THREE.Color(0xb0b0b0)
    var helper = new THREE.GridHelper(32, 32)
    helper.rotation.x = Math.PI / 2
    this.scene.add(helper)
  }
  setResizeEvents () {
    let _ = this
    // On window resize, adjust camera aspect ratio and renderer size
    window.addEventListener('resize', function () {
      resizehandler()
    })
    function resizehandler () {
      _.camera.aspect = _.domel.offsetWidth / _.domel.offsetHeight
      _.camera.updateProjectionMatrix()
      _.renderer.setSize(_.domel.offsetWidth, _.domel.offsetHeight)
    }
    resizehandler()
  }
  setCanon () {
    // Setup our world
    var world = new CANNON.World()
    world.gravity.set(0, 0, -9.82) // m/s²
    // Create a sphere
    var radius = 1 // m
    var sphereBody = new CANNON.Body({
      mass: 5, // kg
      position: new CANNON.Vec3(0, 0, 10), // m
      shape: new CANNON.Sphere(radius)
    })
    world.addBody(sphereBody)

    // Create a plane
    var groundBody = new CANNON.Body({
      mass: 0 // mass == 0 makes the body static
    })
    var groundShape = new CANNON.Plane()
    groundBody.addShape(groundShape)
    world.addBody(groundBody)

    var fixedTimeStep = 1.0 / 60.0 // seconds
    var maxSubSteps = 3

    // Start the simulation loop
    var lastTime;
    (function simloop (time) {
      requestAnimationFrame(simloop)
      if (lastTime !== undefined) {
        var dt = (time - lastTime) / 1000
        world.step(fixedTimeStep, dt, maxSubSteps)
      }
      // console.log('Sphere z position: ' + sphereBody.position.z)
      lastTime = time
    })()
  }
  loadSVG () {
    let _ = this
    // instantiate a loader
    var loader = new THREE.SVGLoader()
    // load a SVG resource
    loader.load(
      // resource URL
      '/static/unleash/svg/icon-grapes.svg',
      // called when the resource is loaded
      function (data) {
        console.log('loaded')
        var paths = data.paths
        var group = new THREE.Group()
        for (var i = 0; i < paths.length; i++) {
          var path = paths[ i ]
          var material = new THREE.MeshBasicMaterial({
            color: path.color,
            side: THREE.DoubleSide,
            depthWrite: false
          })
          var shapes = path.toShapes(true)
          for (var j = 0; j < shapes.length; j++) {
            var shape = shapes[ j ]
            var geometry = new THREE.ShapeBufferGeometry(shape)
            var mesh = new THREE.Mesh(geometry, material)
            group.add(mesh)
          }
        }
        _.scene.add(group)
      },
      // called when loading is in progresses
      function (xhr) {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded')
      },
      // called when loading has errors
      function (error) {
        console.log('An error happened: ' + error)
      }
    )
  }
  addElements () {
    var geometry = new THREE.BoxGeometry(1, 1, 1)
    var material = new THREE.MeshBasicMaterial({color: 0x00ff00})
    var cube = new THREE.Mesh(geometry, material)
    this.scene.add(cube)
  }
  animate () {
    let _ = this
    requestAnimationFrame(function () {
      _.animate()
    })
    _.renderer.render(_.scene, _.camera)
  }
}
