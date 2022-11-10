import React from 'react'
import ReactDOM from 'react-dom/client'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './App'
import './index.scss'
import logger from 'redux-logger'

import { composeWithDevTools } from 'redux-devtools-extension'
import ReduxThunk from 'redux-thunk'

import rootReducer from './modules/index'
import { BrowserRouter } from 'react-router-dom'

const store = createStore(
  rootReducer, 
  composeWithDevTools(applyMiddleware(ReduxThunk, logger))
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
)
