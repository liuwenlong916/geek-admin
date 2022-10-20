import { ref, onMounted, onUnmounted } from 'vue'

export default function useMouse() {
  const x = ref(0)
  const y = ref(0)
  function update(e) {
    x.value = e.x
    y.value = e.y
  }
  onMounted(() => {
    window.addEventListener('mousedown', update)
  })
  onUnmounted(() => {
    window.removeEventListener('mousedown', update)
  })

  return { x, y }
}
