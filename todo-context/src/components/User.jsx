import React, { useContext } from 'react'
import { UserDispatch } from '../App'

const User = ({ user }) => {
  const { username, email, id, active } = user
  const dispatch = useContext(UserDispatch)

  console.log(dispatch)

  return (
    <div>
      <b
        style={{
          cursor: 'pointer',
          color: active ? 'green' : 'black'
        }}
        onClick={() => dispatch({ type: 'TOGGLE_USER', id: user.id})}
      >
        {username}
      </b> 
      <span>({email})</span>
      <button onClick={() => dispatch({ type: 'REMOVE_USER', id: user.id })}></button>
    </div>
  )
}

export default React.memo(User) 