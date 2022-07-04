<template>
  <el-scrollbar>
    <main>
      <section>首页</section>
      <pre>{{ $router }}</pre>
      <!-- <pre>{{ $route }}</pre> -->
    </main>
  </el-scrollbar>
</template>

<script setup>
import { ref, reactive } from 'vue'
</script>

<style scoped lang="scss">
main {
  height: 100%;
  overflow: auto;
}
section {
  font: 700 40px 'diyf';
}
</style>
