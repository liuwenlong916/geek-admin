<template>
  <div>
    <input type="text" v-model="title" @keydown.enter="addTodo" />
    <button @click="deleteDone">清除</button>
    <ul v-if="todos.length">
      <li v-for="item in todos" :key="item.title">
        <input type="checkbox" v-model="item.done" />
        <span :class="{ done: item.done }">{{ item.title }}</span>
      </li>
    </ul>
    <div v-else>暂无数据</div>
    <div>
      全选 <input type="checkbox" v-model="allDone" />
      <span>{{ active }}/{{ all }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import useStorage from '../utils/hooks/useStorage'

let title = ref('')
// let todos = ref([{ title: '吃饭', done: false }])
let todos = useStorage('todos', [{ title: '吃饭', done: false }])

let active = computed(() => {
  return todos.value.filter(v => !v.done).length
})

let all = computed(() => {
  return todos.value.length
})

let allDone = computed({
  //get:function(){}
  get() {
    return active.value == 0
  },
  set(value) {
    todos.value.forEach(v => {
      v.done = value
    })
  }
})
function addTodo() {
  todos.value.push({
    title: title.value,
    done: false
  })
  title.value = ''
}

function deleteDone() {
  todos.value = todos.value.filter(item => !item.done)
}
defineExpose({
  deleteDone
})
</script>
<style scoped>
.done {
  color: gray;
  text-decoration: line-through;
}
</style>
