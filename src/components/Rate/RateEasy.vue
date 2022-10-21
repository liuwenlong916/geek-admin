<template>
  <div :style="fontstyle">
    {{ rate }}
  </div>
</template>

<script setup>
import themeObj from './enum'
import { computed } from 'vue'
let props = defineProps({
  value: Number,
  thema: { type: String, default: 'orange' }
})

const rate = computed(() => {
  return '★★★★★☆☆☆☆☆'.slice(5 - props.value, 10 - props.value)
})
const fontstyle = computed(() => {
  return `color:${themeObj[props.thema]}`
})
</script>
<style scoped></style>
