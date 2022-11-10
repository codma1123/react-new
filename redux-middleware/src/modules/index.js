import { combineReducers } from 'redux'
import { counterRecuder as counter } from "./couter";
import posts from './posts'


const rootReducer = combineReducers({ counter, posts })

export default rootReducer