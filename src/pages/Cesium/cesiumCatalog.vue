<!--
 * @Descripttion: 描述-
 * @version: v1.0
 * @Author: yichonglou
 * @Date: 2022-07-25 16:09:30
 * @FilePath: \studyByVueClie:\learn\studyByVite\src\pages\Cesium\cesiumCatalog.vue
 * @LastEditors: yichonglou
 * @LastEditTime: 2022-07-26 14:19:03
-->
<template>
  <el-scrollbar ref="scrollbarRef" height="100%">
    <section v-for="item in list" :key="item.id" class="main" :data-anchor="item.anchor">
      <p>{{ item.name }}</p>
      <div class="con">
        <section class="screen" v-for="item1 in item.children" :key="item1.id">
          <el-image style="width: 100%; height: 100%" :src="item1.previewImgSrc" fit="cover" />
          <span>{{ item1.name }}</span>
        </section>
      </div>
    </section>
  </el-scrollbar>
</template>

<script setup>
import { useMainStore } from '@store/index.js'
import { storeToRefs } from 'pinia'
import { animate } from 'popmotion'
import { cesiumlist } from '@composables/MenuList'
import { useRoute, onBeforeRouteUpdate } from 'vue-router'
import { ref, reactive, onMounted, watchEffect } from 'vue'
// 找出初始激活的菜单项
const mainStore = useMainStore()
let { defaultActive } = storeToRefs(mainStore)
const list = reactive(cesiumlist)
const route = useRoute()
const anchor = route.query.anchor
const scrollByAnchor = anchor => {
  // 1. 当前滚动条的位置
  const now = window.scrollY
  // 2. 目标位置（文章信息区域的高度）
  const dist = document.querySelector(`.main[data-anchor="${anchor}"]`).offsetTop
  // 3. 实现滚动动画
  animate({
    from: now, // 当前的位置
    to: dist, // 目标位置
    duration: 700, // 持续时间
    onUpdate: latest => scrollbarRef.value.setScrollTop(latest) // 补间动画
  })
}
const scrollbarRef = ref(null)
onMounted(() => {
  if (anchor) {
    scrollByAnchor(anchor)
  }
})
// 路由更新触发
onBeforeRouteUpdate((to, from, next) => {
  if (to.query.anchor) {
    scrollByAnchor(to.query.anchor)
  }
  next()
})
</script>

<style scoped lang="scss">
.main {
  padding: 10px;
  .con {
    display: flex;
    flex-wrap: wrap;
    padding: 5px;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.1);
    section {
      position: relative;
      width: 16%;
      margin-top: 9px;
      margin-right: 9px;
      aspect-ratio: 1;
      background-color: #fff;
      border-radius: 4px;
      overflow: hidden;
      cursor: pointer;
      span {
        display: inline-block;
        width: 100%;
        text-align: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #fff;
        font-size: 20px;
        font-weight: bold;
        z-index: 1;
      }
    }
  }
}
</style>
<style lang="scss">
@media screen and (max-width: 1580px) {
  .screen {
    width: 15% !important;
    margin-right: 15px !important;
  }
}
@media screen and (max-width: 1580px) and(min-width:1170px) {
  .screen {
    width: 13% !important;
    span {
      font-size: 16px !important;
    }
  }
}
@media screen and (max-width: 1130px) and(min-width:770px) {
  .screen {
    width: 15% !important;
    margin-right: 9px !important;
    span {
      font-size: 14px !important;
    }
  }
}
@media screen and (max-width: 770px) {
  .screen {
    width: 14% !important;
    margin-right: 9px !important;
    span {
      font-size: 12px !important;
    }
  }
}
</style>
