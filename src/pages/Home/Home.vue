<template>
  <el-scrollbar>
    <main>
      <section>首页</section>
      <span>使用svg：</span>
      <svg-icon name="爆米花" class="icon"></svg-icon>
      <hr />
      <!-- <pre>{{ $route }}</pre> -->
      <span>自动导入图片：</span>
      <img :src="ImgHead" alt="" />
      <img :src="logo" alt="" />
      <img :src="ImgHead" alt="" />
      <hr />
    </main>
  </el-scrollbar>
</template>

<script setup name="_home">
import SvgIcon from '@components/svg/SvgIcon.vue'
</script>
<style scoped lang="scss">
main {
  height: 100%;
  overflow: auto;
}
section {
  font: 700 40px 'diyf';
}
.icon {
  display: inline-block;
  font-size: 20px;
  color: #ff0000;
  animation: 1s scale infinite linear alternate;
}
// 定义动画
@keyframes scale {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(2);
  }
}
</style>
