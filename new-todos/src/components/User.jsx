import axios from "axios"
import { useEffect } from "react"
import { useAsync } from "react-async"
import { useUserDispatch, useUserState } from "../UserContext"

const getUser = async ({ id }) => {
  const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
  return res.data
}

const User = ({ id }) => {
  const state = useUserState()
  const dispatch = useUserDispatch()

  useEffect(() => {
    getUser(dispatch, id)
  }, [dispatch, id])

  const { data: user, loading, error } = state.user;

  if (loading) return <div>로딩중..</div>
  if (error) return <div>에러가 발생했습니다</div>
  if (!user) return null

  return (
    <div>
      <h2>{user.username}</h2>
      <p>
        <b>Email:</b> {user.email}
      </p>
    </div>
  );
}

export default User