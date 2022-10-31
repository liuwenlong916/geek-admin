import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
// import store from '../src/store/gvuex'
createApp(App).use(router).use(store).mount('#app')

//TODO: 代码格式化 git
