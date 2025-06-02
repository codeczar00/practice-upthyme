import { useState } from 'react'
import menu from '../assets/menu-icon.png'

const Sidebar = () => {

  const [isopen, setIsOpen] = useState(false)

  return (
    <>
      <div className={`${isopen ? "bg-blue-100 w-48 p-6" : "w-20 p-4"} 
                flex flex-col items-center transition-all duration-200 ease-in-out h-screen`}>
        <button
          onClick={() => setIsOpen(!isopen)}
          className={`w-10 h-10 text-center bg-blue-300 text-indigo-700 font-bold rounded-full 
              transition-colors ${isopen ? "self-end" : "self-center"}`}>
          {isopen ? '<' : '>'}
        </button>

        <div className='flex gap-2 items-center mt-12'>
          {isopen && (
            <div className='text-indigo-800 font-medium'>Dashboard</div>
          )}
          <button className='p-2 hover:bg-blue-200 rounded-md transition-colors'>
            <img className='w-6' src={menu} alt="menu" />
          </button>
        </div>
      </div>
    </>
  )
}

export default Sidebar
