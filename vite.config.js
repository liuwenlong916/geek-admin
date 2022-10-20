import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue({ refTransform: true })]
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
