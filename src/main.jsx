import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Login from './routes/login/Login.jsx'
import SignUp from './routes/signUp/signUp.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>,
)
