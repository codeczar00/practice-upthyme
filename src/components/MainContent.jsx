import IconsRow from "./IconsRow"
import search from '../assets/search.png'
import change from '../assets/change-user.png'
import dayinfo from '../assets/dayinfo.png'
import magic from '../assets/magic.png'
import upndown from '../assets/upndown.png'
import clock from '../assets/clock-icon.png'
import bar from '../assets/bar-icon.png'
import { users } from "./users"
import { useState } from "react"

const MainContent = () => {

  const [selectedIndex, setSelectedIndex] = useState(null); //For applying selected div styles!


  return (
    <div className="bg-white flex flex-col gap-1 items-center rounded-lg">

      {/* First Row of Options */}
      <IconsRow />

      {/*Table */}
      <div className="border-[#EAEAEA] rounded-lg m-6 border">

        {/* header row */}
        <div className='grid grid-cols-[minmax(200px,1fr)_repeat(7,minmax(0,1fr))] border-b border-[#EAEAEA]'>
          <div className="relative flex gap-1 items-center p-2">
            <input className="w-full border border-[#EAEAEA] rounded-md pl-1 py-1" type="text" placeholder="Search" />
            <img className="w-4 h-4 absolute right-10 top-1/2 transform -translate-y-1/2" src={search} alt="search" />
            <img className="w-6 h-6" src={change} alt="userchange" />
          </div>
          {['Mon 8/26', 'Tue 8/27', 'Wed 8/28', 'Thu 8/29', 'Fri 8/30', 'Sat 8/31', 'Sun 9/1'].map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`p-2 flex flex-col gap-1 items-center border-l border-[#EAEAEA] cursor-pointer
                ${selectedIndex === index ? 'bg-[#CCDFFF]' : ''}`}>
              <div className={`w-full text-center rounded-[100px] px-2 py-1 ${selectedIndex === index ?
                'bg-[linear-gradient(90deg,_#002C76_10%,_#C2CCB4_100%)] text-white' : ''}`}>
                {item}
              </div>
              <div><img src={dayinfo} alt="dayinfo" /></div>
            </div>
          ))}
        </div>

        {/* Unassigned Shifts Row */}
        <div className='grid grid-cols-[minmax(200px,1fr)_repeat(7,minmax(0,1fr))] border-b border-[#EAEAEA]'>
          <div className="flex gap-2 items-center p-2">
            <img className="w-6 h-6" src={upndown} alt="search" />
            <div className="text-[#3F4648]">Unassigned Shifts</div>
            <img className="w-4 h-4" src={magic} alt="userchange" />
          </div>
          {['Mon 8/26', 'Tue 8/27', 'Wed 8/28', 'Thu 8/29', 'Fri 8/30', 'Sat 8/31', 'Sun 9/1'].map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`p-2 flex flex-col gap-1 items-center border-l border-[#EAEAEA]
                ${selectedIndex === index ? 'bg-[#CCDFFF]' : ''}`}>

            </div>
          ))}
        </div>

        {/* Users Shifts */}
        {/* {users.map((user, userIndex) => (
          <div key={userIndex}
            className="grid grid-cols-[minmax(200px,1fr)_repeat(7,minmax(0,1fr))] border-b border-[#EAEAEA]">
            <div className="">
              <div><img src={user.icon} alt="icon" /></div>
              <div>
                <div>{user.name}</div>
                
              </div>
            </div>

           
            {['Mon 8/26', 'Tue 8/27', 'Wed 8/28', 'Thu 8/29', 'Fri 8/30', 'Sat 8/31', 'Sun 9/1'].map((day, dayIndex) => (
              <div
                key={dayIndex}
                
                className='p-2 flex flex-col gap-1 items-center border-l border-[#EAEAEA] '
              >
              </div>
            ))}
          </div>
        ))} */ }



      </div>
    </div>
  )
}

export default MainContent
