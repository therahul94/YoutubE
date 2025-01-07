import React from 'react'
import Sidebar from "./Sidebar";
import HomeVideos from './HomeVideos';
function Home() {
  return (
    <div className='flex'>
        <Sidebar />
        <HomeVideos />
    </div>
  )
}

export default Home