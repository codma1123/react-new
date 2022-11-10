import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk'

import counter from 'store/actions/counter.js';
import api from 'store/actions/api'

const reducers = combineReducers({
  counter,
  api,
})


const store = createStore(reducers, applyMiddleware(thunk));

export default store;