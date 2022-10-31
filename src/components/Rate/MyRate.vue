<template>
  <div>
    <slot></slot>
    <span
      v-for="item in 5"
      :key="item"
      @mouseover="mouseOver(item)"
      @mouseout="mouseOut"
      @click="onRate(item)"
    >
      {{ rate >= item ? '★' : '☆' }}
    </span>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue'
let props = defineProps({
  modelValue: Number
})

let rate = ref(props.modelValue)

function mouseOver(i) {
  rate.value = i
}

function mouseOut() {
  rate.value = props.modelValue
}

let emits = defineEmits(['update:modelValue'])
function onRate(i) {
  emits('update:modelValue', i)
}
</script>
<style scoped></style>
