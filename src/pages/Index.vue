<template>
  <particles></particles>
  <el-form :rules="rules" ref="loginForm" :model="form" label-width="80px" class="form">
    <el-form-item label="账号" prop="name">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="form.password"></el-input>
    </el-form-item>
    <el-form-item class="login-btn">
      <el-button style="margin-left: 90px" type="primary" @click="login">登录</el-button>
    </el-form-item>
  </el-form>
</template>
<script setup>
//背景动画
import Particles from '@/composables/particles/index.vue'
import { storeToRefs } from 'pinia'
import { useMainStore } from '@store/index.js'
import * as THREE from 'three'
import Stats from 'three/examples/jsm/libs/stats.module.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
import { ref, onMounted, reactive } from 'vue'
import { ElMessage } from 'element-plus'
import { useRoute, useRouter } from 'vue-router'
const form = reactive({ name: '', password: '' })
let clock, mixer, stats, container, scene, camera, renderer, controls
let left = ref()
onMounted(() => {
  return
  clock = new THREE.Clock()
  container = left.value
  stats = new Stats()
  container.appendChild(stats.dom)
  renderer = new THREE.WebGLRenderer({ antialias: true, logarithmicDepthBuffer: true })
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(container.clientWidth, container.clientHeight)
  renderer.outputEncoding = THREE.sRGBEncoding
  container.appendChild(renderer.domElement)
  const pmremGenerator = new THREE.PMREMGenerator(renderer)
  scene = new THREE.Scene()
  scene.background = new THREE.Color(0xbfe3dd)
  scene.environment = pmremGenerator.fromScene(new RoomEnvironment(), 0.04).texture
  camera = new THREE.PerspectiveCamera(40, container.clientWidth / container.clientHeight, 0.1, 100)
  camera.position.set(5, 2, 15)
  controls = new OrbitControls(camera, renderer.domElement)
  controls.target.set(0, 0.5, 0)
  controls.update()
  controls.enablePan = false
  controls.enableDamping = true
  const dracoLoader = new DRACOLoader()
  dracoLoader.setDecoderPath('/three/js/libs/draco/gltf/')
  const loader = new GLTFLoader()
  loader.setDRACOLoader(dracoLoader)
  loader.load(
    '/three/models/gltf/LittlestTokyo.glb',
    function (gltf) {
      const model = gltf.scene
      model.position.set(1, 1, 0)
      model.scale.set(0.01, 0.01, 0.01)
      scene.add(model)
      mixer = new THREE.AnimationMixer(model)
      mixer.clipAction(gltf.animations[0]).play()
      animate()
    },
    undefined,
    function (e) {
      console.error(e)
    }
  )

  window.onresize = function () {
    camera.aspect = container.clientWidth / container.clientHeight
    camera.updateProjectionMatrix()
    renderer.setSize(container.clientWidth, container.clientHeight)
  }
})
const animate = () => {
  requestAnimationFrame(animate)
  const delta = clock.getDelta()
  mixer.update(delta)
  controls.update()
  stats.update()
  renderer.render(scene, camera)
}
const loginForm = ref()
const rules = reactive({
  name: [{ required: true, message: '必填', trigger: 'blur' }],
  password: [{ required: true, message: '必填', trigger: 'blur' }]
})
const router = useRouter(),
  route = useRoute()
const mainStore = useMainStore()
const login = () => {
  if (form.name === 'wxx' && form.password === '123') {
    mainStore.$patch(state => {
      state.username = form.name
      state.defaultActive = ''
    })
    router.push({
      name: 'Home',
      params: {
        name: 'wxx',
        age: 18
      }
    })
  } else {
    ElMessage.error('账号密码错误，请重新输入')
  }
}
</script>
<style lang="scss" scoped>
* {
  user-select: none;
}
.el-form {
  width: 400px;
  padding: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 6px;
  background-color: rgba(0, 0, 0, 0.3);
  box-shadow: 0 0 15px 3px rgba(27, 76, 223, 1);
  filter: blur(1px);
  z-index: 1;
}
</style>
