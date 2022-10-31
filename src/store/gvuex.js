import { inject, reactive } from 'vue'

const STORE_KEY = '__store__'
function createStore(options) {
  return new Store(options)
}

function useStore() {
  return inject(STORE_KEY)
}

class Store {
  constructor(options) {
    this.$options = options
    //判断state类型
    console.log(typeof options.state)
    this._state = reactive({
      data: typeof options.state == 'function' ? options.state() : options.state
    })
    this._mutations = options.mutations
  }
  get state() {
    return this._state.data
  }
  get test() {
    return 'a'
  }

  commit(type, payload) {
    const entry = this._mutations[type]
    entry && entry(this.state, payload)
  }

  install(app) {
    app.provide(STORE_KEY, this)
  }
}

export { createStore, useStore }
