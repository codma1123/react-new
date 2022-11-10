import { useEffect } from "react"
import { useParams } from "react-router-dom"


const Post = ({ post }) => {
  const { title, body } = post

  return (
    <div>
      <h1>{title}</h1>
      <p>{body}</p>
    </div>
  )
}

export default Post