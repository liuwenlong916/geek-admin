<template>
  <div>
    <component :is="component"></component>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from './index'

const router = useRouter()

const component = computed(() => {
  const route = router._routes.find(route => {
    return route.path === router.currentUrl.value
  })
  return route ? route.component : null
})
</script>
<style scoped></style>
