import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <div className=' h-screen lg:mx-24 text-black flex flex-col'>
    <Header/>
    <Outlet/>
    <div className='mt-auto'>
    <Footer/>
    </div>
    </div>
  )
}

export default App
