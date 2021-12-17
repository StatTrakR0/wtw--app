import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import store from './app/store'
import { Provider } from 'react-redux'
import Weather from './features/Weather/Weather'

import { fetchUsers } from './features/users/usersSlice'

import './api/server'

store.dispatch(fetchUsers())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <Weather />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
