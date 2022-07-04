<template>
  <el-row>
    <el-col :xs="12" :sm="13" :md="14" :lg="16" :xl="17" class="left">
      <div ref="left"></div>
    </el-col>
    <el-col :xs="12" :sm="11" :md="10" :lg="8" :xl="7" class="right">
      <el-form :rules="rules" ref="loginForm" :model="form" label-width="80px">
        <el-form-item label="账号" prop="name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item class="login-btn">
          <el-button type="primary" @click="login">登录</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>
<script setup>
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
.left {
  float: left;
  width: 70vw;
  height: 100vh;
  div {
    width: 100%;
    height: 100%;
  }
}
.right {
  float: right;
  width: 30vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .login-btn {
    &:deep(.el-form-item__content) {
      justify-content: center;
    }
  }
}
</style>
