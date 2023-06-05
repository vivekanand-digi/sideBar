import React from 'react'
import SideBar from './pages/SideBar';
import './App.css';
import { Route, Routes } from 'react-router-dom';



const App = () => {
  return (
    <div className='App '>
      <Routes>
        <Route path='/' element={<SideBar />}>  </Route>
      </Routes>
    </div>

  )
}

export default App
