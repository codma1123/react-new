import * as postsAPI from '../api/posts'
import { 
  handleAsyncActions,
  reducerUtils,
  createPromiseThunk,
  createPromiseThunkById,
  handleAsyncActionsById,
} from '../lib/asyncUtils'


/*  action types  */
const GET_POSTS = 'GET_POSTS'
const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS'
const GET_POSTS_ERROR = 'GET_POSTS_ERROR'

const GET_POST = 'GET_POST'
const GET_POST_SUCCESS = 'GET_POST_SUCCESS'
const GET_POST_ERROR = 'GET_POST_ERROR'


export const getPosts = createPromiseThunk(GET_POSTS, postsAPI.getPosts)
export const getPost = createPromiseThunkById(GET_POST, postsAPI.getPostById)

const initialState = {
  posts: reducerUtils.initial(),
  post: {}
}

export default function posts(state = initialState, action) {

  switch (action.type) {
    case GET_POSTS:
    case GET_POSTS_SUCCESS:
    case GET_POSTS_ERROR:
      return handleAsyncActions(GET_POSTS, 'posts', true)(state, action);

    case GET_POST:
    case GET_POST_SUCCESS:
    case GET_POST_ERROR:
      return handleAsyncActionsById(GET_POST, 'post')(state, action);

    default:
      return state
  }

} 
