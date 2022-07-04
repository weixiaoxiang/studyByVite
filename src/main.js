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
 * @Date: 2022-06-08 22:59:49
 * @FilePath: \studye:\learn\studyByVite\studyByVite\src\main.js
 * @LastEditors: yichonglou
 * @LastEditTime: 2022-06-08 23:22:37
 */

import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'virtual:windi.css' // *引入windicss

import router from './router'
import './permission' // permission.js
import { createPinia } from 'pinia'
import piniaPluginPersist from 'pinia-plugin-persist'
// 创建pinia实例
const pinia = createPinia()
pinia.use(piniaPluginPersist)
const app = createApp(App)

app.use(pinia)
app.use(ElementPlus)
app.use(router)

// 如果您正在使用CDN引入，请删除下面一行。
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.mount('#app')
