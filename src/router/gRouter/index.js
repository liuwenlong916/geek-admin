import { inject, ref } from 'vue'
import RouterLink from './RouterLink.vue'
import RouterView from './RouterView.vue'
const ROUTER_KEY = '__router__'

class Router {
  constructor(options) {
    this._routes = options.routes
    this._history = options.history
    //响应式数据，更新RouterView
    this.currentUrl = ref(this._history.url)

    this._history.bindEvents(() => {
      this.currentUrl.value = window.location.hash.slice(1)
    })
  }
  install(app) {
    app.provide(ROUTER_KEY, this)
    app.component('router-link', RouterLink)
    app.component('router-view', RouterView)
  }
}

export function useRouter() {
  return inject(ROUTER_KEY)
}

export function createRouter(options) {
  const router = new Router(options)
  return router
}

export function createWebHashHistory() {
  return {
    url: window.location.hash.slice(1) || '1',
    bindEvents(fn) {
      window.addEventListener('hashchange', fn)
    }
  }
}
