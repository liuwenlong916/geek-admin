<template>
  <div>关于页面 {{ score }}</div>
  <Parent></Parent>
  <Child></Child>
  <rate-easy :value="1" thema="yellow"></rate-easy>
  <!-- <rate :value="score" @update-rate="updateRate">课程评分：</rate> -->
  <rate v-model="score">课程评分：</rate>
  <my-rate v-model="score">课程评分：</my-rate>
</template>

<script setup>
import { ref } from 'vue'
import Rate from '../components/Rate/index.vue'
import MyRate from '../components/Rate/MyRate.vue'
import RateEasy from '../components/Rate/RateEasy.vue'
import Parent from '../components/Count/parent.vue'
import Child from '../components/Count/child.vue'
// let a = ref('1')
let score = ref(1)
// function updateRate(value) {
//   score.value = value
// }
</script>

<style scoped>
div {
  color: red;
}
</style>
