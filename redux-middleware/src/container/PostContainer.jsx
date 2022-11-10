import { useDispatch, useSelector } from "react-redux"
import Post from "../components/Post"
import { getPost } from "../modules/posts"
import { useEffect } from "react"


const PostContainer = ({ postId }) => {
  const { data, loading, error } = useSelector(
    state => state.posts.post[postId]
  ) || {
    loading: false,
    data: null,
    error: null
  }  
  const dispatch = useDispatch()

  useEffect(() => {    
    if (data) return
    dispatch(getPost(postId))
    
  }, [dispatch, postId, data])

  if (loading) return <div>로딩중</div>
  if (error) return <div>에러 발생</div>
  if (!data) return null

  return <Post post={data} />
}

export default PostContainer