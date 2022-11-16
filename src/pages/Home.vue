<template>
  <button @click="toggle">全屏</button>
  <h1>首页</h1>
  <h2>横坐标：{{ x }}纵坐标：{{ y }}</h2>
  <ACC></ACC>
  <TodoList ref="todoes" />
  <Heading :level="2" ref="heading">标题2</Heading>
  <TodoListJsx></TodoListJsx>
</template>
<script setup>
import { useFullscreen } from '@vueuse/core'
import ACC from '../components/ACC.vue'
import TodoList from '../components/TodoList.vue'
import TodoListJsx from '../components/TodoList'
import { onMounted, ref } from 'vue'
import Heading from '../components/Heading'

import useMouse from '../utils/mouse'
// const { isFullscreen, enter, exit, toggle } = useFullscreen()
const { toggle } = useFullscreen()
const { x, y } = useMouse()
// /**
//  * vue3中$refs使用
//  * 1.定义变量
//  * 2.页面渲染时，变量赋值
//  * 3.mounted获取
//  * 4.<script setup>默认关闭，子组件需配合使用defineExpose开放属性
//  */
let todoes = ref()
let heading = ref()
onMounted(() => {
  console.log(todoes.value, heading.value.tag)
})
</script>
