<template>
  <div :style="fontstyle">
    <div class="rate">
      <slot></slot>
      <span
        v-for="num in 5"
        :key="num"
        @mouseover="mouseOver(num)"
        @mouseout="mouseOut"
        @click="onRate(num)"
      >
        {{ width >= num ? '★' : '☆' }}</span
      >
      <!-- <span @mouseover="mouseOver(num)" v-for="num in 5" :key="num">☆</span>
      <span class="hollow" :style="fontwidth">
        <span @mouseover="mouseOver(num)" v-for="num in 5" :key="num">★</span>
      </span> -->
    </div>
  </div>
</template>

<script setup>
import themeObj from './enum'
import { computed, ref } from 'vue'
let props = defineProps({
  // value: Number,
  modelValue: Number,
  thema: { type: String, default: 'orange' }
})
let width = ref(props.modelValue)
function mouseOver(i) {
  width.value = i
}
function mouseOut() {
  width.value = props.modelValue
}
let emits = defineEmits(['update:modelValue'])
function onRate(num) {
  // let emits = defineEmits('update-rate')
  // emits('update-rate', num)
  emits('update:modelValue', num)
}
const fontstyle = computed(() => {
  return `color:${themeObj[props.thema]}`
})
// const fontwidth = computed(() => `width:${width.value}em;`)
</script>
<style scoped>
.rate {
  position: relative;
  display: inline-block;
}
.rate > span.hollow {
  position: absolute;
  display: inline-block;
  top: 0;
  left: 0;
  width: 0;
  overflow: hidden;
}
</style>
