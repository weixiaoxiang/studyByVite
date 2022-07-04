/*
 *                   江城子 . 程序员之歌
 *
 *               十年生死两茫茫，写程序，到天亮。
 *                   千行代码，Bug何处藏。
 *               纵使上线又怎样，朝令改，夕断肠。
 *
 *               领导每天新想法，天天改，日日忙。
 *                   相顾无言，惟有泪千行。
 *               每晚灯火阑珊处，夜难寐，加班狂。
 *
 *
 * @Descripttion: 描述-
 * @version: v1.0
 * @Author: yichonglou
 * @Date: 2022-06-08 23:23:09
 * @FilePath: \studye:\learn\studyByVite\studyByVite\src\router\index.js
 * @LastEditors: yichonglou
 * @LastEditTime: 2022-06-08 23:23:27
 */
import { createRouter, createWebHashHistory } from 'vue-router'
const cesiumRoutes = [
  {
    path: '/demo1',
    name: 'Demo1',
    component: () => import('@pages/Cesium/Demo.vue'),
    meta: {
      index: 1
    }
  }
]
const threeRoutes = [
  {
    path: '/demo2',
    name: 'Demo2',
    component: () => import('@pages/Three/Demo.vue')
  }
]
const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('@pages/Index.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@pages/404/404.vue')
  },
  {
    path: '/storetest',
    name: 'storetest',
    component: () => import('@/testdemo/storetest.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@pages/Home/Index.vue'),
    redirect: '/_home',
    children: [
      {
        path: '/_home',
        name: '_Home',
        component: () => import('@pages/Home/Home.vue')
      },
      ...cesiumRoutes,
      ...threeRoutes
    ]
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router
