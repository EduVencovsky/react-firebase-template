import React from 'react'
import ReactDOM from 'react-dom'
import firebase from 'firebase'
import App from './App'

const firebaseConfig = {
  // put firebase config from the firebase console here
}

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

