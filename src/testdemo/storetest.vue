<template>
  {{ mainStore.info }}---
  {{ mainStore.count }}
  <el-button type="primary" @click="test">测试1</el-button>
  <hr class="mb-20px mt-20px" />
  {{ info }}---
  {{ count }}
  <el-button type="primary" @click="test2">测试2</el-button>
  <hr class="mb-20px mt-20px" />
  <h1>getter的使用：{{ mainStore.count10 }}</h1>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useMainStore } from '@store/indextest.js'
import { ref, reactive, toRefs, toRef } from 'vue'

const mainStore = useMainStore()
const test = () => {
  mainStore.count += 10
  mainStore.info += '!'
}

let { count, info } = storeToRefs(mainStore)
const test2 = () => {
  // 第一种方式
  // count.value++
  // info.value += '~'
  // console.log(count, info)
  // 第二种方式
  mainStore.$patch(state => {
    state.count += 10
    state.info = 'pinia批量更新'
  })
  // 第三种方式：通过 actions 来修改数据
  // mainStore.changeState()
  // mainStore.changeStates(10)
}
</script>

<style scoped lang="scss"></style>
