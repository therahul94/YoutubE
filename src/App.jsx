import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

export default function App(){
  return (
    <div className='p-2'>
      <Navbar />
      <Sidebar />
    </div>
  )
}
