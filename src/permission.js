import router from './router'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { storeToRefs } from 'pinia'
import { useMainStore } from '@store/index.js'

NProgress.configure({ showSpinner: false })

router.beforeEach((to, from, next) => {
  const mainStore = useMainStore()
  const { username } = storeToRefs(mainStore)
  NProgress.start()
  if (to.path === '/') {
    next()
  } else {
    if (username.value) {
      next()
    } else {
      console.log('拦截')
      next('/')
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})
