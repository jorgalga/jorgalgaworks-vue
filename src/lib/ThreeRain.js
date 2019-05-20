var THREE = window.THREE
var CANNON = window.CANNON
export class ThreeRain {
  constructor (el, info) {
    this.domel = el
    this.init()
    this.setResizeEvents()
    // this.addElements()
    this.setCanon()
    this.rObjects = []
    this.interactiveObj = []
    for (var i = 0; i < info.length; i++) {
      this.addElements(info[i])
    }
    this.animate()
    this.mouseRaycaster()
  }
  init () {
    this.camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 1000)
    this.camera.position.set(0, 0, 10)
    this.renderer = new THREE.WebGLRenderer({antialias: true})
    this.renderer.setPixelRatio(window.devicePixelRatio)
    this.renderer.setSize(this.domel.offsetWidth, this.domel.offsetHeight)
    this.domel.appendChild(this.renderer.domElement)
    this.scene = new THREE.Scene()
    this.raycaster = new THREE.Raycaster()
    /*
    this.scene.background = new THREE.Color(0xb0b0b0)
    var helper = new THREE.GridHelper(32, 32)
    helper.rotation.x = Math.PI / 2
    this.scene.add(helper)
    */
  }
  mouseRaycaster () {
    var _ = this
    document.getElementsByClassName('tags-container')[0].addEventListener('click', function (event) {
      // do something
      var mouseX = (event.offsetX / event.target.offsetWidth) * 2 - 1
      var mouseY = -(event.offsetY / event.target.offsetHeight) * 2 + 1
      console.log(event)
      var mouse = new THREE.Vector2(mouseX, mouseY)
      _.raycaster.setFromCamera(mouse, _.camera)
      var intersects = _.raycaster.intersectObjects(_.interactiveObj)
      for (var i = 0; i < intersects.length; i++) {
        intersects[i].object.material.color.set(0xff00ff)
        // alert('click')
        // window.open('/tickets?mode=test', '_self')
        var customevent = new Event('gotoTickets')
        document.dispatchEvent(customevent)
      }
    })
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
  addCannon (i) {
    var radius = 1 // m
    var sphereBody = new CANNON.Body({
      mass: 100, // kg
      position: new CANNON.Vec3(0, 0, 10), // m
      shape: new CANNON.Sphere(radius)
    })
    this.world.addBody(sphereBody)
  }
  updateCannon (i) {
    var _ = this
    var vecZERO = new CANNON.Vec3(0, 0, 0)
    _.rObjects[i].three.position.x = _.rObjects[i].cannon.position.x
    _.rObjects[i].three.position.y = _.rObjects[i].cannon.position.z
    _.rObjects[i].three.position.z = _.rObjects[i].cannon.position.y
    if (this.rObjects[i].three.position.y <= -4.5) {
      _.rObjects[i].cannon.sleep()
      requestAnimationFrame(function () {
        _.rObjects[i].cannon.velocity = vecZERO
        _.rObjects[i].cannon.angularVelocity = vecZERO
        _.rObjects[i].cannon.position = new CANNON.Vec3(_.rObjects[i].info.position.x, _.rObjects[i].info.position.z, 10)
        _.rObjects[i].cannon.wakeUp()
      })
    }
  }
  setCanon () {
    var _ = this
    // Setup our world
    _.world = new CANNON.World()
    _.world.gravity.set(0, 0, -0.5) // m/s²
    // Create a sphere
    /*
    var radius = 1 // m
    var sphereBody = new CANNON.Body({
      mass: 5, // kg
      position: new CANNON.Vec3(0, 0, 10), // m
      shape: new CANNON.Sphere(radius)
    })
    world.addBody(sphereBody)
    */
    // Create a plane
    /*
    var groundBody = new CANNON.Body({
      mass: 0, // mass == 0 makes the body static,
      position: new CANNON.Vec3(0, 0, -5) // m
    })
    var groundShape = new CANNON.Plane()
    groundBody.addShape(groundShape)
    this.world.addBody(groundBody)
    */
    var fixedTimeStep = 1.0 / 60.0 // seconds
    var maxSubSteps = 3
    // Start the simulation loop
    var lastTime;
    (function simloop (time) {
      requestAnimationFrame(simloop)
      if (lastTime !== undefined) {
        var dt = (time - lastTime) / 1000
        _.world.step(fixedTimeStep, dt, maxSubSteps)
        /*
        if (_.cube) {
          _.cube.position.x = sphereBody.position.x
          _.cube.position.y = sphereBody.position.z
          _.cube.position.z = sphereBody.position.y
          if (_.cube.position.y <= -8) {
            sphereBody.position.x = 0
            sphereBody.position.z = 10
            sphereBody.position.y = 0
            sphereBody.velocity.x = 0
            sphereBody.velocity.z = 0
            sphereBody.velocity.y = 0
          }
        }
        */
      }
      lastTime = time
    })()
  }
  addElements (obj) {
    var _ = this
    var plane = {}
    // instantiate a loader
    var loader = new THREE.TextureLoader()
    // load a resource
    loader.load(
      // resource URL
      obj.src,
      // onLoad callback
      function (texture) {
        // in this example we create the material when the texture is loaded
        var geometry = new THREE.PlaneGeometry(obj.size, obj.size)
        var material = new THREE.MeshBasicMaterial({
          map: texture,
          transparent: true
        })
        plane = new THREE.Mesh(geometry, material)
        plane.position.x = obj.position.x
        plane.position.y = (obj.position.y + 10) * 2
        plane.position.z = obj.position.z
        plane.rotation.z = obj.rotation.z * (Math.PI / 180)
        _.scene.add(plane)
        // cannon
        var radius = 1 // m
        var sphereBody = new CANNON.Body({
          mass: 5, // kg
          position: new CANNON.Vec3(obj.position.x, obj.position.z, (obj.position.y + 10) * 1.75), // m
          shape: new CANNON.Sphere(radius)
        })
        sphereBody.collisionResponse = 0
        _.world.addBody(sphereBody)
        _.rObjects.push({three: plane, cannon: sphereBody, info: obj})
        _.interactiveObj.push(plane)
      },
      // onProgress callback currently not supported
      undefined,
      // onError callback
      function (err) {
        console.error('An error happened.' + err)
      }
    )
  }
  animate () {
    let _ = this
    requestAnimationFrame(function () {
      for (var i = 0; i < _.rObjects.length; i++) {
        _.updateCannon(i)
      }
      _.animate()
    })
    _.renderer.render(_.scene, _.camera)
  }
}
