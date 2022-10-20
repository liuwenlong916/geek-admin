<template>
  <h1 @click="add">{{ count }}</h1>
</template>

<script setup>
import { ref } from 'vue'
let count = ref(1)
let color = ref('red')
function add() {
  count.value++
  color.value = Math.random() > 0.5 ? 'blue' : 'red'
}
</script>

<style scoped>
h1 {
  /* color: red; */
  /* 动态样式 */
  color: v-bind(color);
}
</style>
