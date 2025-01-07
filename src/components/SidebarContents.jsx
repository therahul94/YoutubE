import React from 'react'

function SidebarContents({logo, content}) {
  return (
    <div className='flex items-center space-x-1 rounded-md cursor-pointer hover:bg-gray-300 duration-300'>
        <div className='px-3 py-2'>
            <img src={`/${logo}.svg`} alt='no-img' className='w-6'/>
        </div>
        <div className='text-sm'>
            {content}
        </div>
    </div>
  )
}

export default SidebarContents