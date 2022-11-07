import { defineComponent, toRefs } from 'vue'

export default defineComponent({
  props: {
    level: {
      type: Number,
      required: true
    }
  },
  setup(props, { slots }) {
    const { level } = toRefs(props)
    const tag = 'h' + level.value

    return () => <tag>{slots.default()}</tag>
  }
})
