<!--
 * @Descripttion: 描述-
 * @version: v1.0
 * @Author: yichonglou
 * @Date: 2022-06-10 09:35:50
 * @FilePath: \studyByVueClie:\learn\studyByVite\src\pages\Home\Index.vue
 * @LastEditors: yichonglou
 * @LastEditTime: 2022-07-26 14:12:20
-->
<template>
  <el-container style="height: 100%">
    <el-header>好好学习 天天向上</el-header>
    <el-container style="height: calc(100% - 60px)">
      <el-aside width="200px">
        <el-scrollbar style="height: calc(100vh - 60px); background-color: #545c64">
          <el-menu
            active-text-color="#ffd04b"
            background-color="#545c64"
            class="el-menu-vertical-demo"
            :default-active="defaultActive"
            text-color="#fff"
            :unique-opened="true"
            :router="false"
            @select="handleSelect"
          >
            <el-sub-menu v-for="i1 in lists" :key="i1.name" :index="i1.name" @click="clickMenu(i1.name)">
              <template #title>
                <el-icon>
                  <component :is="i1.icon" style="width: 20px; height: 20px" />
                </el-icon>
                <span>{{ i1.name }}</span>
              </template>
              <div v-for="i2 in i1.children" :key="i2.id" @click.stop="clickMenu(i1.name, i2.name)">
                <el-menu-item :index="i2.name">
                  {{ i2.name }}
                </el-menu-item>
              </div>
            </el-sub-menu>
          </el-menu>
        </el-scrollbar>
      </el-aside>
      <div style="flex: 1; height: 100%; overflow: hidden">
        <router-view v-slot="{ Component }">
          <keep-alive>
            <transition :name="transitionName">
              <component :is="Component" />
            </transition>
          </keep-alive>
        </router-view>
      </div>
    </el-container>
  </el-container>
</template>

<script setup>
import lists from '@composables/MenuList.js'
import { storeToRefs } from 'pinia'
import { useMainStore } from '@store/index.js'
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import { onBeforeRouteUpdate } from 'vue-router'
// 找出初始激活的菜单项
const mainStore = useMainStore()
let { defaultActive } = storeToRefs(mainStore)
onMounted(() => {
  ElMessage({
    message: `欢迎您来到GIS小学生学习鱼塘~~~~`,
    type: 'success'
  })
})
const handleSelect = (key, keyPath) => {
  mainStore.$patch(state => {
    state.defaultActive = key
  })
}
const router = useRouter()
const clickMenu = (name, anchor) => {
  if (!anchor) {
    mainStore.$patch(state => {
      state.defaultActive = ''
    })
  }
  if (name === 'Cesium') {
    router.push({
      path: '/cesiumCatalog',
      query: {
        anchor: anchor
      }
    })
  }
  if (name === 'Three') {
    router.push({
      path: '/threeCatalog',
      query: {
        anchor: anchor
      }
    })
  }
}
const a = ref(0)
const transitionName = ref('slide')
onBeforeRouteUpdate((to, form) => {
  if (to.meta.index > form.meta.index) {
    transitionName.value = 'slide-left'
  } else {
    transitionName.value = 'slide-right'
  }
  mainStore.$patch(state => {
    state.currentSort = to.meta.index
  })
})
</script>
<style scoped lang="scss">
* {
  user-select: none;
}
.el-header {
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
  font-family: 'diyf';
  color: #fff;
  background-color: #0b83f4;
}
.el-aside {
  height: 100%;
  .el-menu {
    height: 100%;
    border: none;
  }
}
.el-main {
  width: 100%;
  height: calc(100vh - 60px);
  div {
    width: 100%;
    height: 100%;
    box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.1);
  }
}
</style>
<style lang="css">
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  width: 100%;
  height: 100%;
  will-change: transform;
  transition: all 300ms cubic-bezier(0.55, 0, 0.1, 1);
  position: absolute;
  backface-visibility: hidden;
}
.slide-right-enter-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(3%, 0, 0);
}
.slide-left-enter-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-3%, 0, 0);
}
</style>
