import { createContext, useContext, useReducer, useRef } from 'react'

const initialTodos = [
  {
    id: 1,
    text: '프로젝트 생성하기',
    done: true
  },
  {
    id: 2,
    text: '컴포넌트 스타일링하기',
    done: true
  },
  {
    id: 3,
    text: 'Context 만들기',
    done: false
  },
  {
    id: 4,
    text: '기능 구현하기',
    done: false
  }  
]

const createCustomHook = provider => {
  const context = useContext(provider)
  if(!context) {
    throw new Error('Cannot find TodoProvider')
  }
  return context
}

const TodoStateContext = createContext()
const TodoDispatchContext = createContext()
const TodoNextIdContext = createContext()

export const useTodoState = () => createCustomHook(TodoStateContext)
export const useTodoDispatch = () => createCustomHook(TodoDispatchContext)
export const useTodoNextId = () => createCustomHook(TodoNextIdContext)

const todoReducer = (state, action) => {
  switch(action.type) {
    case 'CREATE':
      return state.concat(action.todo)
    case 'TOGGLE':
      return state.map(todo => todo.id === action.id ? {...todo, done: !todo.done} : todo)
    case 'REMOVE':
      return state.filter(todo => todo.id !== action.id)
    default:
      throw new Error(`unhandled action type: ${action.type}`) 
  }
}

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialTodos)
  const nextId = useRef(0)

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoNextIdContext.Provider value={nextId}>
          {children}
        </TodoNextIdContext.Provider>         
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  )
}
