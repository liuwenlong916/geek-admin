import { defineComponent, ref } from 'vue'
import useStorage from '../utils/hooks/useStorage'
export default defineComponent({
  setup() {
    let title = ref('')
    const todos = useStorage('todosjsx', [{ title: '学习', done: false }])
    const addTodo = () => {
      todos.value.push({ title: title.value, done: false })
      title.value = ''
    }
    return () => (
      <div>
        <input type="text" vModel={title.value}></input>
        <button onClick={addTodo}>添加</button>
        <ul>
          {todos.value.length ? (
            todos.value.map(todo => {
              return <li>{todo.title}</li>
            })
          ) : (
            <li>no list</li>
          )}
        </ul>
      </div>
    )
  }
})
