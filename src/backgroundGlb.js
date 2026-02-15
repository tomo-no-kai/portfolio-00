// 背景GLB用サンプル
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

export function initBackgroundGLB(containerId, modelPath) {
  const container = document.getElementById(containerId)
  const width = container.clientWidth
  const height = container.clientHeight

  const scene = new THREE.Scene()

  // カメラ（斜め上から中央を見下ろす）
  const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100)
  camera.position.set(2, 3, 10)
  camera.lookAt(0, -1, 0)

  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
  renderer.setSize(width, height)
  container.appendChild(renderer.domElement)

  // ライティング
  const ambient = new THREE.AmbientLight(0xffffff, 1) // 全方向に均一な光
  scene.add(ambient)

  // GLB読み込み
  let model = null
  const loader = new GLTFLoader()
  loader.load(modelPath, (gltf) => {
    model = gltf.scene

    // スケール調整
    model.scale.set(5.5, 5.5, 5.5) // 適宜調整
    model.position.set(0.4, -3.2, 0)

    scene.add(model)
  })
  

  // アニメーション（スクロールで回転）
  function animate() {
    requestAnimationFrame(animate)
    if (model) {
      const scrollY = window.scrollY
      model.rotation.y = scrollY * 0.010
    }
    
    renderer.render(scene, camera)
  }
  animate()

  window.addEventListener('resize', () => {
    const w = container.clientWidth
    const h = container.clientHeight
    camera.aspect = w / h
    camera.updateProjectionMatrix()
    renderer.setSize(w, h)
  })
}