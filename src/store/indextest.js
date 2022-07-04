// store/index.ts
import { defineStore } from 'pinia'
// 1. 定义容器、导出容器
// 参数1：容器的ID，必须是唯一的，后面Pinia会把所有的容器挂载到根容器
// 参数2：一些选项对象，也就是state、getter和action
// 返回值：一个函数，调用即可得到容器实例

export const useMainStore = defineStore('maintest', {
  // 类似于Vue2组件中的data，用于存储全局状态数据，但有两个要求
  // 1. 必须是函数，目的是为了在服务端渲染的时候避免交叉请求导致的数据状态污染
  // 2. 必须是箭头函数，这样是为了更好的 TS 类型推导
  state: () => {
    return {
      info: 'pinia 可以使用',
      count: 10
    }
  },
  // 开启数据缓存
  persist: {
    enabled: true,
    strategies: [
      {
        // 自定义名称
        key: 'test_store',
        // 保存位置，默认保存在sessionStorage
        storage: localStorage,
        // 指定要持久化的数据，默认所有 state 都会进行缓存，你可以通过 paths 指定要持久化的字段，其他的则不会进行持久化。
        paths: ['count']
      }
    ]
  },
  // 类似于组件的computed，用来封装计算属性，具有缓存的功能
  getters: {
    // 函数接收一个可选参数：state状态对象
    count10(state) {
      return state.count + 10
    },
    count11(state) {
      return this.count + 11
    },
    // 若使用this.count，则必须指明返回数据的类型
    count12() {
      return this.count + 12
    }
  },

  // 类似于vue2组件的methods，用于封装业务逻辑，修改state
  //  注意：不能使用箭头函数来定义actions，因为箭头函数绑定外部的this
  actions: {
    changeState() {
      this.count += 5
      this.info = 'actions修改数据'
    },
    changeStates(num) {
      this.count += num + 2
      this.info = 'actions修改数据'
    }
  }
})

// 2. 使用容器中的 state
// 3. 通过 getter 修改 state
// 4. 使用容器中的 action 同步和异步请求
