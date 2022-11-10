import React, { useContext, useRef } from "react"
import { UserDispatch } from "../App"
import useInputs from "../hooks/useInput"

const CreateUser = () => {

  const nextId = useRef(4)
  const dispatch = useContext(UserDispatch)
  const [{ username, email}, onChange] = useInputs({
    username: '',
    email: ''
  })
  
  return (
    <div>
      <input
        name="username"      
        placeholder="계정명"
        onChange={onChange}
        value={username}
      />
      <input
        name="email"
        placeholder="이메일"
        onChange={onChange}
        value={email}
      />
      <button onClick={() => {
        dispatch({
          type: 'CREATE_USER',
          user: {
            id: nextId.current,
            email,
            username
          }
        })
        nextId.current++
      }}>등록</button>      
    </div>    
  )
}

export default React.memo(CreateUser)