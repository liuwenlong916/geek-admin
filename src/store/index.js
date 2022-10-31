// import { createStore } from 'vuex'
import { createStore } from './gvuex'

const store = createStore({
  // state() {
  //   return {
  //     count: 1
  //   }
  // },
  state: 1,
  mutations: {
    add(state) {
      state.count++
    }
  }
})

export default store
