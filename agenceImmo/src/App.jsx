import { useState } from 'react'
import { Routes, Route, Link, Outlet, useParams } from 'react-router-dom';
import Main from './Components/Properties';
import Home from './Components/Home';
import './App.css'

function App() {

  return (
    <div>
      <Routes>
        <Route element={<Layout/>}>
          <Route path='/' element={<Main />}/>
          <Route path='/home' element={<Home />}/>
        </Route>
      </Routes>
    </div>
  )
}

function Layout() {
  return (
    <Outlet />
  )
}

export default App
