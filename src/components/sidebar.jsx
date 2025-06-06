import dashboard from '../assets/open.png'
import menu from '../assets/menu.png'
import person from '../assets/person.png'
import suitcase from '../assets/suitcase.png'
import time from '../assets/time.png'
import calendar from '../assets/calendar.png'
import clock from '../assets/clock.png'
import upload from '../assets/upload.png'


const Sidebar = () => {

  return (
    <div className="bg-white w-20 h-[780px] flex flex-col 
        items-center border-r-[3px] border-r-[#E5EFFF80]">

        {/* Dashboard and Menu */}
      <div className='flex flex-col gap-4 p-5 border-b-1 border-gray-200'>
        <div><img src={dashboard} alt="dashboard" /></div>
        <div><img src={menu} alt="menu" /></div>
      </div>

        {/* Person and Suitcase */}
      <div className='flex flex-col gap-4 p-5 border-b-1 border-gray-200'>
        <div><img src={person} alt="person" /></div>
        <div><img src={suitcase} alt="suitcase" /></div>
      </div>

        {/* Remaining Icons */}
      <div className='flex flex-col gap-4 p-5 border-b-1 border-gray-200'>
        <div><img src={time} alt="time" /></div>
        <div><img src={calendar} alt="calendar" /></div>
        <div><img src={clock} alt="clock" /></div>
        <div><img src={upload} alt="upload" /></div>
      </div>

    </div>
  )
}

export default Sidebar

