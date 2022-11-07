import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue({ refTransform: true }), vueJsx()]
  //设置别名
  //import{resolve} from 'path'
  // const path = require('path')
  // resolve: {
  //   // 配置路径别名
  //   alias: {
  //     '@': './src' //path.resolve(__dirname, './src')
  //   }
  // }
})
