var THREE = window.THREE
export class ThreeEarth {
  constructor (id) {
    this.domel = document.getElementById(id)

    this.init()
  }
  init () {
    // Scene, Camera, Renderer
    this.renderer = new THREE.WebGLRenderer({antialias: true, alpha: true})
    this.scene = new THREE.Scene()
    this.aspect = this.domel.offsetWidth / this.domel.offsetHeight
    this.camera = new THREE.PerspectiveCamera(45, this.aspect, 0.1, 1500)
    this.cameraRotation = 0
    this.cameraRotationSpeed = 0.001
    this.cameraAutoRotation = true
    // this.orbitControls = new THREE.OrbitControls(this.camera)
    // Lights
    this.spotLight = new THREE.SpotLight(0xffffff, 0.75, 0, 15, 2)
    // Texture Loader
    this.textureLoader = new THREE.TextureLoader()
    // Planet Proto
    this.planetProto()
    this.earth = this.createPlanet({
      surface: {
        size: 0.5,
        material: {
          bumpScale: 0.00,
          specular: new THREE.Color('grey'),
          shininess: 5
        },
        textures: {
          map: '/static/unleash/threeworld/earthtexture.jpg',
          bumpMap: '/static/unleash/threeworld/earthbump.jpg',
          specularMap: '/static/unleash/threeworld/earthspec.jpg'
        }
      },
      atmosphere: {
        size: 0.003,
        material: {
          opacity: 0.8
        },
        textures: {
          map: '/static/unleash/threeworld/earthcloudmap.jpg',
          alphaMap: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/141228/earthcloudmaptrans.jpg'
        },
        glow: {
          size: 0.25,
          intensity: 0.45,
          fade: 5,
          color: 0xff00ff
        }
      }
    })
    // Galaxy
    // this.createGalaxy()
    // Scene, Camera, Renderer Configuration
    this.renderer.setSize(this.domel.offsetWidth, this.domel.offsetHeight)
    this.domel.appendChild(this.renderer.domElement)
    this.camera.position.set(1, 1, 1)
    this.scene.add(this.camera)
    this.scene.add(this.spotLight)
    this.scene.add(this.earth)
    // Light Configurations
    this.spotLight.position.set(2, 0, 2)
    // Mesh Configurations
    this.earth.receiveShadow = true
    this.earth.castShadow = true
    this.earth.getObjectByName('surface').geometry.center()
    this.earth.getObjectByName('surface').rotation.y = -Math.PI / 2
    this.setResizeEvents()
    this.animate()
  }
  planetProto () {
    let _ = this
    this.planetProto = {
      sphere: function (size) {
        let sphere = new THREE.SphereGeometry(size, 32, 32)
        return sphere
      },
      material: function (options) {
        let material = new THREE.MeshPhongMaterial()
        if (options) {
          for (var property in options) {
            material[property] = options[property]
          }
        }
        return material
      },
      glowMaterial: function (intensity, fade, color) {
        // Custom glow shader from https://github.com/stemkoski/stemkoski.github.com/tree/master/Three.js
        let glowMaterial = new THREE.ShaderMaterial({
          uniforms: {
            'c': {
              type: 'f',
              value: intensity
            },
            'p': {
              type: 'f',
              value: fade
            },
            glowColor: {
              type: 'c',
              value: new THREE.Color(color)
            },
            viewVector: {
              type: 'v3',
              value: _.camera.position
            }
          },
          vertexShader: `
            uniform vec3 viewVector;
            uniform float c;
            uniform float p;
            varying float intensity;
            void main() {
              vec3 vNormal = normalize( normalMatrix * normal );
              vec3 vNormel = normalize( normalMatrix * viewVector );
              intensity = pow( c - dot(vNormal, vNormel), p );
              gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
            }`,
          fragmentShader: `
            uniform vec3 glowColor;
            varying float intensity;
            void main() 
            {
              vec3 glow = glowColor * intensity;
              gl_FragColor = vec4( glow, 0.5 );
            }`,
          side: THREE.BackSide,
          blending: THREE.AdditiveBlending,
          transparent: true
        })
        return glowMaterial
      },
      texture: function (material, property, uri) {
        let textureLoader = new THREE.TextureLoader()
        textureLoader.crossOrigin = true
        textureLoader.load(
          uri,
          function (texture) {
            material[property] = texture
            material.needsUpdate = true
          }
        )
      }
    }
  }
  createPlanet (options) {
    // Create the planet's Surface
    let surfaceGeometry = this.planetProto.sphere(options.surface.size)
    let surfaceMaterial = this.planetProto.material(options.surface.material)
    let surface = new THREE.Mesh(surfaceGeometry, surfaceMaterial)
    // Create the planet's Atmosphere
    let atmosphereGeometry = this.planetProto.sphere(options.surface.size + options.atmosphere.size)
    let atmosphereMaterialDefaults = {
      side: THREE.DoubleSide,
      transparent: true
    }
    let atmosphereMaterialOptions = Object.assign(atmosphereMaterialDefaults, options.atmosphere.material)
    let atmosphereMaterial = this.planetProto.material(atmosphereMaterialOptions)
    let atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial)
    // Create the planet's Atmospheric glow
    let atmosphericGlowGeometry = this.planetProto.sphere(options.surface.size + options.atmosphere.size + options.atmosphere.glow.size)
    let atmosphericGlowMaterial = this.planetProto.glowMaterial(options.atmosphere.glow.intensity, options.atmosphere.glow.fade, options.atmosphere.glow.color)
    let atmosphericGlow = new THREE.Mesh(atmosphericGlowGeometry, atmosphericGlowMaterial)
    // Nest the planet's Surface and Atmosphere into a planet object
    let planet = new THREE.Object3D()
    surface.name = 'surface'
    atmosphere.name = 'atmosphere'
    atmosphericGlow.name = 'atmosphericGlow'
    planet.add(surface)
    planet.add(atmosphere)
    planet.add(atmosphericGlow)
    // Load the Surface's textures
    for (let textureProperty in options.surface.textures) {
      this.planetProto.texture(
        surfaceMaterial,
        textureProperty,
        options.surface.textures[textureProperty]
      )
    }
    // Load the Atmosphere's texture
    for (let textureProperty in options.atmosphere.textures) {
      this.planetProto.texture(
        atmosphereMaterial,
        textureProperty,
        options.atmosphere.textures[textureProperty]
      )
    }
    return planet
  }
  createGalaxy () {
    let _ = this
    let galaxyGeometry = new THREE.SphereGeometry(100, 32, 32)
    let galaxyMaterial = new THREE.MeshBasicMaterial({
      side: THREE.BackSide
    })
    _.galaxy = new THREE.Mesh(galaxyGeometry, galaxyMaterial)
    // Load Galaxy Textures
    _.textureLoader.crossOrigin = true
    _.textureLoader.load(
      'https://s3-us-west-2.amazonaws.com/s.cdpn.io/141228/starfield.png',
      function (texture) {
        galaxyMaterial.map = texture
        _.scene.add(_.galaxy)
      }
    )
  }
  setResizeEvents () {
    let _ = this
    // On window resize, adjust camera aspect ratio and renderer size
    window.addEventListener('resize', function () {
      _.camera.aspect = _.domel.offsetWidth / _.domel.offsetHeight
      _.camera.updateProjectionMatrix()
      _.renderer.setSize(_.domel.offsetWidth, _.domel.offsetHeight)
    })
  }
  animate () {
    let _ = this
    _.earth.getObjectByName('surface').rotation.y += 1 / 32 * 0.01 * 1
    _.earth.getObjectByName('atmosphere').rotation.y += 1 / 16 * 0.01 * 1

    // _.cameraRotation += _.cameraRotationSpeed
    _.camera.position.y = 0
    _.camera.position.x = 2 * Math.sin(_.cameraRotation)
    _.camera.position.z = 2 * Math.cos(_.cameraRotation)
    _.camera.lookAt(_.earth.position)

    requestAnimationFrame(function () {
      _.animate()
    })
    _.renderer.render(_.scene, _.camera)
  }
}
