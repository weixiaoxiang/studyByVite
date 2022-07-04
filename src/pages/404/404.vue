<!--
 * @Descripttion: 描述-
 * @version: v1.0
 * @Author: yichonglou
 * @Date: 2022-06-09 09:16:51
 * @FilePath: \studye:\learn\studyByVite\studyByVite\src\pages\404\404.vue
 * @LastEditors: yichonglou
 * @LastEditTime: 2022-06-09 11:15:37
-->

<template>
  <div class="page-404">
    <el-result icon="warning" title="404" sub-title="您访问的页面不存在~~~~">
      <template #extra>
        <el-button type="primary" @click="back">返回首页</el-button>
      </template>
    </el-result>
  </div>
</template>
<script setup>
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()
const name = route.name
const back = () => {
  router.push({ name: 'Home' })
}
</script>
<style lang="scss" scoped>
.page-404 {
  @apply w-screen h-screen relative;
  .el-result {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
