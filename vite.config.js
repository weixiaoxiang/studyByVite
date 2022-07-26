import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import { visualizer } from 'rollup-plugin-visualizer'
const path = require('path')
import { resolve } from 'path' // 主要用于alias文件路径别名
import viteCompression from 'vite-plugin-compression'
import ViteRestart from 'vite-plugin-restart' // 自动重启vite服务
import Components from 'unplugin-vue-components/vite' // 按需加载自定义组件
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import AutoImport from 'unplugin-auto-import/vite'
import {
  createStyleImportPlugin,
  // AndDesignVueResolve,
  // VantResolve,
  ElementPlusResolve
  // NutuiResolve,
  // AntdResolve
} from 'vite-plugin-style-import'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import vueSetupExtend from 'vite-plugin-vue-setup-extend-plus'
import ViteImages from 'vite-plugin-vue-images'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      script: {
        refSugar: true
      }
    }),
    // WindiCSS 库引入
    WindiCSS(),
    // 压缩
    viteCompression({
      ext: '.gz', // 开启gzip压缩
      deleteOriginFile: false // 是否删除原始文件
    }),
    visualizer(), // 开启包分析工具
    // 修改vite.config.jd文件后自动重启
    ViteRestart({
      restart: ['my.config.[jt]s']
    }),
    // 按需引入UI库
    // Components({
    //   dts: true,
    //   dirs: ['src/components', 'src/pages'], // 按需加载的文件夹
    //   resolvers: [ElementPlusResolver()] // ElementPlus按需加载
    // }),
    // 自动引入UI库message等组件样式
    // createStyleImportPlugin({
    //   resolves: [
    //     // AndDesignVueResolve(),
    //     // VantResolve()
    //     ElementPlusResolve()
    //     // NutuiResolve(),
    //     // AntdResolve()
    //   ]
    // }),
    // 用于自动导入vue函数
    // AutoImport({
    //   imports: ['vue', 'vue-router', 'vuex', '@vueuse/head'],
    //   // 可以选择auto-import.d.ts生成的位置，使用ts建议设置为'src/auto-import.d.ts'
    //   dts: 'src/auto-import.d.ts'
    // }),
    // 用于生成svg雪碧图
    createSvgIconsPlugin({
      // Specify the icon folder to be cached
      iconDirs: [path.resolve(process.cwd(), 'src/svg')],
      // Specify symbolId format
      symbolId: 'icon-[dir]-[name]'
    }),
    // setup语法糖name增强，使vue3语法糖支持name属性。
    vueSetupExtend(),
    // 自动导入图像，同级目录的文件名不能重复！
    ViteImages({
      dirs: ['src/assets'], // 图像目录的相对路径
      extensions: ['jpg', 'jpeg', 'png', 'svg', 'webp'], // 有效的图像扩展
      customResolvers: [], // 覆盖名称->图像路径解析的默认行为
      customSearchRegex: '([a-zA-Z0-9]+)' // 重写搜索要替换的变量的Regex。
    })
  ],
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        //生产环境时移除console.log()
        drop_console: true,
        drop_debugger: true
      }
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, '.', 'src'),
      '@assets': resolve(__dirname, '.', 'src/assets'),
      '@store': resolve(__dirname, '.', 'src/store'),
      '@styles': resolve(__dirname, '.', 'src/styles'),
      '@pages': resolve(__dirname, '.', 'src/pages'),
      '@composables': resolve(__dirname, '.', 'src/composables'),
      '@components': resolve(__dirname, '.', 'src/components')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        // additionalData: '@import"@/assets/css/globalstyle.scss";'
        // 👆这样写是不行的。因为如果项目中其他的css文件有@forward关键字，就会提示错误
        additionalData: '@use "@/styles/index.scss" as *;'
        // 👆这样写是可以的，但是要注意
        // 一定要将其他地方引入该css文件的地方删除，如index.html,否则会提示已经加载该module的错误！！！
      }
    }
  },
  // 是否自动在浏览器打开
  open: true,
  // 是否开启 https
  https: false,
  // 服务端渲染
  ssr: false,
  /**
   * 在生产中服务时的基本公共路径。
   * @default '/'
   */
  base: './',
  /**
   * 与“根”相关的目录，构建输出将放在其中。如果目录存在，它将在构建之前被删除。
   * @default 'dist'
   */
  outDir: 'dist',

  // 反向代理
  server: {
    port: 8080,
    // 是否自动在浏览器打开
    open: true,
    // 是否开启 https
    https: false,
    proxy: {
      '/api': {
        target: 'https://blog.csdn.net/weixin_45292658',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  }
})
