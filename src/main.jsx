import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Timer from './timer.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Timer />
  </React.StrictMode>,
)
