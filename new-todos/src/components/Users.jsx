import { useEffect, useReducer, useState } from "react"

import User from "./User";
import { getUsers, useUserDispatch, useUserState } from "../UserContext";
import axios from "axios";

const Users = () => {
  
  const [userId, setUserId] = useState(null)  
  const state = useUserState()
  const dispatch = useUserDispatch()

  const { data: users, loading, error } = state.users

  const fetchData = () => {
    getUsers(dispatch)
  }

  useEffect(() => {
    const token = axios.CancelToken.source()
    getUsers(dispatch)
  }, [])

  console.log(loading)
  
  if (loading) return <div>로딩중...</div>
  if (error) return <div>에러가 발생했습니다.</div>
  if (!users) return <button onClick={fetchData}>불러오기</button> 

  return (
    <>
      <ul>
        {users.map(user => (
            <li
              key={user.id}
              onClick={() => setUserId(user.id)}
              style={{ cursor: 'pointer' }}
            >
              {user.username} ({user.name})
            </li>
          ))}
      </ul>
      <button onClick={fetchData}>다시 불러오기</button>
      {userId && <User id={userId} />}
    </>
  )
}

export default Users