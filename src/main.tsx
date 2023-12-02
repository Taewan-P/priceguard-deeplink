import './index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

const root = document.getElementById('root')

if (!root) throw new Error('Error! Cannot find root element')

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
