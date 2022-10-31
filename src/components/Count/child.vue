<template>
  <div>child:{{ count }}</div>
</template>

<script setup>
import { computed } from 'vue'
// import { useStore } from 'vuex'
import { useStore } from '../../store/gvuex'
let store = useStore()
let count = computed(() => {
  return store.state.count
})
</script>
<style scoped></style>
