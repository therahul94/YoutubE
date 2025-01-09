import React, { useContext } from 'react'
import Sidebar from "./Sidebar";
import HomeVideos from './HomeVideos';
import { AuthContext } from '../context/AuthProvider';
function Home() {
    const {loading, data} = useContext(AuthContext);
  return (
    <div className='flex'>
        <Sidebar />
        <div className='mt-12 p-5 grid grid-cols-1 md:grid-cols-4 gap-3 h-[calc(100vh-6.625rem)] overflow-y-scroll overflow-x-hidden'>
        {data.map((item)=>{
            if(item.type !== 'video') return false;
            return <HomeVideos key={item.id} video={item?.video}/>
        })}
        </div>
    </div>
  )
}

export default Home