import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { App } from './containers/App'
import './index.css'
import reducer from './reducers/Reducers'
import * as serviceWorker from './serviceWorker'

const initialState = [{ id: Date.now(), author: 'Admin', text: 'some text', date: new Date().toLocaleString() }]
const store = createStore(reducer, initialState);

ReactDOM.render(
  <React.StrictMode>
    <App store={store}/>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
