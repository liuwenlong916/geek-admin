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
    this._state = reactive({
      data: typeof options.state == 'function' ? options.state() : options.state
    })
    // this._getters = options.getters
    this._mutations = options.mutations
    this._actions = options.actions
    this._getters = {}
    // const state = this._state.data
    const _state = this.state
    Object.keys(options.getters).forEach(key => {
      Object.defineProperty(this._getters, key, {
        get() {
          const getter = options.getters[key]
          if (getter) {
            // return getter.call(this, state.data)
            return getter.call(this, _state)
          } else {
            console.log('unknown getters type: ' + key)
            return null
          }
        }
      })
    })

    // 修改this指向
    this.commit = this.commit.bind(this)
    this.dispatch = this.dispatch.bind(this)
  }
  get state() {
    return this._state.data
  }

  get getters() {
    return this._getters
  }

  commit(type, payload) {
    const entry = this._mutations[type]
    entry && entry(this.state, payload)
  }

  dispatch(type, payload) {
    const entry = this._actions[type]
    entry && entry(this, payload)
  }

  install(app) {
    app.provide(STORE_KEY, this)
  }
}

export { createStore, useStore }
