/*
 * @Descripttion: 描述-
 * @version: v1.0
 * @Author: yichonglou
 * @Date: 2022-06-13 14:22:58
 * @FilePath: \studye:\learn\studyByVite\studyByVite\src\composables\MenuList.js
 * @LastEditors: yichonglou
 * @LastEditTime: 2022-06-13 16:20:02
 */
const ollist = []
const cesiumlist = [
  {
    name: '新建Demo1',
    id: 'c-1',
    path: '/demo1'
  }
]
const threelist = [
  {
    name: '新建Demo2',
    id: 't-1',
    path: '/demo2'
  }
]

export default [
  {
    name: 'Cesium',
    icon: 'Pear',
    children: cesiumlist
  },
  {
    name: 'Three',
    icon: 'share',
    children: threelist
  }
]
