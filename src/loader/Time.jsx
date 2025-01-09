import moment from 'moment';
import React from 'react'

export default function Time({time}){
    const videotime = moment()?.startOf("day")?.seconds(time)?.format("H:mm:ss");
  return (
    <div>
        <span className='absolute bottom-3 right-2 bg-black text-white px-2 py-1 text-xs rounded-md'>{videotime}</span>
    </div>
  )
}
