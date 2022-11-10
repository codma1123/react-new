import { useParams } from "react-router-dom";
import PostContainer from "../container/PostContainer";

const PostPage = () => {
  const { id } = useParams()
  

  return <PostContainer postId={parseInt(id, 10)}/>
}

export default PostPage

