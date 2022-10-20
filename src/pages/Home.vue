<template>
  <button @click="toggle">全屏</button>
  <h1>首页</h1>
  <h2>横坐标：{{ x }}纵坐标：{{ y }}</h2>
  <ACC></ACC>
  <TodoList />
</template>
<script setup>
import { useFullscreen } from '@vueuse/core'
// const { isFullscreen, enter, exit, toggle } = useFullscreen()
const { toggle } = useFullscreen()
import ACC from '../components/ACC.vue'
import TodoList from '../components/TodoList.vue'

import useMouse from '../utils/mouse'
const { x, y } = useMouse()
</script>
