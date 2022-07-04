import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import { visualizer } from 'rollup-plugin-visualizer'
const path = require('path')
import { resolve } from 'path' // 主要用于alias文件路径别名
import viteCompression from 'vite-plugin-compression'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      script: {
        refSugar: true
      }
    }),
    WindiCSS(),
    viteCompression({
      ext: '.gz', // 开启gzip压缩
      deleteOriginFile: false // 是否删除原始文件
    }),
    visualizer() // 开启包分析工具
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
      '@components': resolve(__dirname, '.', 'src/composables')
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
