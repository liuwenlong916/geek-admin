<template>
  <div @click="add">{{ count }}</div>
  <div>doblue:{{ doblue }}</div>
</template>

<script setup>
import { computed } from 'vue'
// import { useStore } from 'vuex'
import { useStore } from '../../store/gvuex'

let store = useStore()
// let count = store.state.count
// 响应式
let count = computed(() => store.state.count)
let doblue = computed(() => store.getters.doblue)
function add() {
  store.commit('add')
  store.dispatch('addAsync')
}
</script>
<style scoped></style>
