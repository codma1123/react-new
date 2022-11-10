import { useRef, useState, useMemo, useCallback, useReducer, createContext } from 'react'
import produce from 'immer'

import CreateUser from './components/CreateUser'
import UserList from './components/UserList'
import useInputs from './hooks/useInput'

const countActiveUsers = users => users.filter(user => user.active).length

export const UserDispatch = createContext(null)
    
const initialState = {
  users: [
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active: true
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active: false
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active: false
    }    
  ]
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'CREATE_USER':
      return produce(state, draft => {
        draft.users.push(action.user)
      })

    case 'TOGGLE_USER':
      return produce(state, draft => {
        const user = draft.users.find(user => user.id === action.id)
        user.active = !user.active
        
      })
    
    case 'REMOVE_USER':
      return produce(state, draft => {
        const index = draft.users.findIndex(user => user.id === action.id)
        draft.users.splice(index, 1)
      })
    
    default: 
      return state    
  }
}

function App() {  
  const [state, dispatch] = useReducer(reducer, initialState)
  const { users } = state
  const count = useMemo(() => countActiveUsers(users), [users])

  return (
    <div className="App">
      <UserDispatch.Provider value={dispatch}>
        <CreateUser />
        <UserList users={users} />
        <div>활성 사용자수 : {count}</div>
      </UserDispatch.Provider>  
    </div>
  )
}

export default App
