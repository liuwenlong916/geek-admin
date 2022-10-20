import { watchEffect, ref } from 'vue'

export default function useStorage(name, value = []) {
  console.log(value)
  let data = ref(
    JSON.parse(localStorage.getItem(name) || JSON.stringify(value))
  )
  //自动监听内部变量
  watchEffect(() => {
    localStorage.setItem(name, JSON.stringify(data.value))
  })
  return data
}
