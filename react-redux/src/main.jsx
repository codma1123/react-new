import React from 'react'
import ReactDOM from 'react-dom/client'

import { createStore } from 'redux'
import rootReducer from './modules'
import App from './App'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(rootReducer, composeWithDevTools())


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
