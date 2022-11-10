import { createGlobalStyle } from 'styled-components'

import { globalColor } from './module/global'
import TodoTemplate from './components/TodoTemplate'
import TodoHead from './components/TodoHead'
import TodoList from './components/TodoList'
import TodoCreate from './components/TodoCreate'
import Users from './components/Users'

import { TodoProvider } from './TodoContext'
import { UserProvider } from './UserContext'


const GlobalStyle = createGlobalStyle`
  body {
    background: ${globalColor.gray};
  }
`

const App = () => {
  
  return (
    <>
      <UserProvider>
        <GlobalStyle />
        <Users />
      </UserProvider>        
    </>
  )
}

export default App
