import { createStore } from 'vuex'

const files = require.context('./modules', false, /\.ts$/)
const modules: any = {}

// 根据当前store中的模块名解析vuex的状态
files.keys().forEach(key => {
  const moduleName = key.replace(/\.\//, '').replace(/\.ts$/, '');
  const store = files(key).default
  // const module = {}
  modules[moduleName] = store
})


export default createStore({
  modules
})
