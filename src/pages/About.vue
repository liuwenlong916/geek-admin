<template>
  <div>关于页面 {{ score }}</div>
  <rate-easy :value="1" thema="yellow"></rate-easy>
  <!-- <rate :value="score" @update-rate="updateRate">课程评分：</rate> -->
  <rate v-model="score">课程评分：</rate>
</template>

<script setup>
import { ref } from 'vue'
import Rate from '../components/Rate/index.vue'
import RateEasy from '../components/Rate/RateEasy.vue'
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
