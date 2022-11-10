import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import TodoList from "../components/TodoList"
import TodoInsert from "../components/TodosInsert"
import { RootState } from "../modules"

import { addTodo, toggleTodo, removeTodo } from "../modules/todos"

const TodoApp = () => {
  const todos = useSelector((state: RootState) => state.todos)
  const dispatch = useDispatch()

  const onInsert = (text: string) => dispatch(addTodo(text))
  const onToggle = (id: number) => dispatch(toggleTodo(id))
  const onRemove = (id: number) => dispatch(removeTodo(id))

  return (
    <>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
    </>    
  )
}

export default TodoApp