import down from '../assets/dropdown.png'
import menubar from '../assets/menubar.png'
import right from '../assets/right.png'
import left from '../assets/left.png'
import smcalend from '../assets/smcalend.png'
import { useState } from 'react'
import AddShiftForm from './form'

const IconsRow = () => {

  const [showForm, setShowForm] = useState(false)
  const openForm = () => setShowForm(true)
  const closeForm = () => setShowForm(false)
  const [showOptions, setShowOptions] = useState(false); //For add shift

  return (
    <div className="flex justify-between items-center p-4 w-full">

      {/* Left Side Divs */}
      <div className='flex items-center gap-4'>
        <div className='flex gap-0.5 items-center border border-[#8B939C66] rounded-[100px] pl-1 p-0.5'>
          <div className='text-[#002C76] font-bold px-2'>View Options</div>
          <div><img src={down} alt="dropdown" /></div>
        </div>
        <div><img className='p-1 border border-[#8B939C66] rounded-[100px]' src={menubar} alt="menubar" /></div>
        <div className='flex gap-0.5 items-center border border-[#8B939C66] rounded-[100px] px-2 p-0.5'>
          <div className='text-[#505759] font-bold pl-1'>Week</div>
          <div><img src={down} alt="dropdown" /></div>
        </div>
        <div className='flex gap-2 items-center border border-[#8B939C66] rounded-[100px] p-0.5 px-4'>
          <div><img src={left} alt="left" /></div>
          <div className='text-[#505759] font-bold'>June 2 - June 9</div>
          <div><img src={right} alt="right" /></div>
        </div>
        <div><img className='p-1 border border-[#8B939C66] rounded-[100px]' src={smcalend} alt="calendar" /></div>
      </div>

      {/* Right Side Divs */}
      <div className='relative flex gap-4 items-center'>
        <div className='flex gap-0.5 items-center border border-[#8B939C66] rounded-[100px] px-2 p-0.5'>
          <div className='text-[#505759] font-bold pl-1'>Actions</div>
          <div><img src={down} alt="dropdown" /></div>
        </div>
        <div
          className="cursor-pointer flex gap-0.5 items-center border border-[#8B939C66] rounded-full px-2 py-0.5"
          onClick={() => setShowOptions(!showOptions)}>
          <div className="text-[#505759] font-bold pl-1">Add</div>
          <div><img src={down} alt="dropdown" /></div>
        </div>
        {showOptions && (
          <div
            className="absolute w-[180px] min-h-[150px] top-9 right-4 rounded-xl p-2
              flex flex-col gap-1 bg-white shadow-[0px_3px_16px_1px_rgba(47,47,45,0.14)] z-50"
          >
            <div onClick={() => { openForm(); setShowOptions(false);}} 
              className="text-[#505759] px-4 py-1 hover:bg-gray-100 cursor-pointer">Add single shift</div>
            <div className="text-[#505759] px-4 py-1 hover:bg-gray-100 cursor-pointer">Add multiple shift</div>
            <div className="text-[#505759] px-4 py-1 hover:bg-gray-100 cursor-pointer">Add from shift templates</div>
            <hr className="mx-4 my-1 border-gray-300" />
            <div className="text-[#505759] px-4 py-1 hover:bg-gray-100 cursor-pointer">Add unavailability</div>
          </div>
        )}
        <div className='bg-[#002C76] text-white font-bold border border-[#8B939C66] rounded-[100px] px-2 p-0.5'>
          Publish (10)
        </div>
      </div>
      <AddShiftForm visible={showForm} onClose={closeForm} />
    </div>
  )
}

export default IconsRow
