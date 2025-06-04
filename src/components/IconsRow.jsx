import down from '../assets/dropdown.png'
import menubar from '../assets/menubar.png'
import right from '../assets/right.png'
import left from '../assets/left.png'
import smcalend from '../assets/smcalend.png'

const IconsRow = () => {
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
            <div className='text-[#505759] font-bold'>August 26 - Sep 1</div>
            <div><img src={right} alt="right" /></div>
          </div>
          <div><img className='p-1 border border-[#8B939C66] rounded-[100px]' src={smcalend} alt="calendar" /></div>
        </div>
        
        {/* Right Side Divs */}
        <div className='flex gap-4 items-center'>
          <div className='flex gap-0.5 items-center border border-[#8B939C66] rounded-[100px] px-2 p-0.5'>
            <div className='text-[#505759] font-bold pl-1'>Actions</div>
            <div><img src={down} alt="dropdown" /></div>
          </div>
          <div className='flex gap-0.5 items-center border border-[#8B939C66] rounded-[100px] px-2 p-0.5'>
            <div className='text-[#505759] font-bold pl-1'>Add</div>
            <div><img src={down} alt="dropdown" /></div>
          </div>
          <div className='bg-[#002C76] text-white font-bold border border-[#8B939C66] rounded-[100px] px-2 p-0.5'>
            Publish (10)
          </div>
        </div>
      </div>
  )
}

export default IconsRow
