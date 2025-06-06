import IconsRow from "./IconsRow"
import search from '../assets/search.png'
import change from '../assets/change-user.png'
import magic from '../assets/magic.png'
import upndown from '../assets/upndown.png'
import clock from '../assets/clock-icon.png'
import bar from '../assets/bar-icon.png'
import person from '../assets/person.png'
import dots from '../assets/threedots.png'
import AddShiftForm from './form.jsx'
import useShiftStore from './Store.js'
import { users, week } from "./users"
import { useState } from "react"
import ShiftDropCell from "./shift-cell.jsx"
import ShiftBox from "./shift-box.jsx"

const MainContent = () => {

  const [showForm, setShowForm] = useState(false)
  const openForm = () => setShowForm(true)
  const closeForm = () => setShowForm(false)

  const [selectedIndex, setSelectedIndex] = useState(null); //For applying selected div styles!
  const shifts = useShiftStore((state) => state.shifts)

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
          {week.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`p-2 flex flex-col gap-1 items-center border-l border-[#EAEAEA] cursor-pointer
                ${selectedIndex === index ? 'bg-[#CCDFFF]' : ''}`}>
              <div className={`w-full text-center rounded-[100px] px-2 py-1 ${selectedIndex === index ?
                'bg-[linear-gradient(90deg,_#002C76_10%,_#C2CCB4_100%)] text-white' : ''}`}>
                {item}
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-0.5">
                  <div><img className="w-4" src={clock} alt="clock" /></div>
                  <div className="text-[#3F4648] text-xs gap-1">48:00</div>
                </div>
                <div className="flex items-center ">
                  <div><img className="w-4" src={bar} alt="bar" /></div>
                  <div className="text-[#3F4648] text-xs gap-1">8</div>
                </div>
                <div className="flex items-center">
                  <div><img className="w-4" src={person} alt="person" /></div>
                  <div className="text-[#3F4648] text-xs gap-1">8</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Users Shifts */}
        {users.map((user, userIndex) => (
          <div key={userIndex}
            className="grid grid-cols-[minmax(200px,1fr)_repeat(7,minmax(0,1fr))] border-b border-[#EAEAEA]">
            {user.name === 'Unassigned Shifts' ? (
              <div className="flex gap-2 items-center p-2">
                <img className="w-6 h-6" src={upndown} alt="search" />
                <div className="text-[#3F4648]">{user.name}</div>
                <img className="w-4 h-4" src={magic} alt="userchange" />
              </div>
            ) : (
              <div className={`p-2 flex items-center ${userIndex === 0 || userIndex === 2 ? 'gap-5' : 'gap-4'}`}>
                {user.icon && <div><img src={user.icon} alt="icon" /></div>}
                <div className="flex flex-col items-start">
                  <div className="text-[#3F4648]">{user.name}</div>
                  <div className="flex gap-2">
                    <div className="flex gap-1 items-center">
                      <div className="text-[#3F4648]">{user.shift}</div>
                      <div><img src={clock} alt="clock" /></div>
                    </div>
                    <div className="flex gap-1 items-center">
                      <div className="text-[#3F4648]">{user.bar}</div>
                      <div><img src={bar} alt="bar" /></div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {week.map((weekDay, index) => {
              const [_, dateStr] = weekDay.split(', '); // dateStr = "6/2"
              const matchedEntries = shifts.filter(entry => {
                const entryDate = new Date(entry.date);
                const entryDateStr = `${entryDate.getMonth() + 1}/${entryDate.getDate()}`;
                return (entryDateStr === dateStr && entry.user === user.name);
              });

              return (
                <div key={index} className='group p-2 relative items-center border-l border-[#EAEAEA]'>

                  <ShiftDropCell user={user} date={dateStr}>
                    {matchedEntries.map((entry) => (
                      <ShiftBox
                        key={entry.id}
                        entry={entry}
                        date={dateStr}
                        user={user.name}
                      />
                    ))}
                  </ShiftDropCell>

                  {matchedEntries.length > 0 ? null : (
                    <button
                      onClick={openForm}
                      className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[90%]
                        l-20 bottom-6 cursor-pointer hidden ${!showForm ? 'group-hover:block' : ''} text-xl text-blue-600 font-bold`}
                      title="Add shift"
                    >
                      ＋
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
      <AddShiftForm visible={showForm} onClose={closeForm} />

      {/* Footer Icons */}
      <div className="pr-6 pl-6 flex items-center justify-between gap-2 pb-4 w-full">
        {/* Left: Weekly Totals */}
        <div className="flex items-center mr-4 gap-2">
          <div className="font-[700] text-[16px]">Weekly Totals</div>
          <div><img src={dots} alt="dots" /></div>
        </div>

        {/* Right: Metric Boxes */}
        <div className="flex items-center gap-2 flex-1 justify-end">
          <div className="flex justify-center items-center gap-2 rounded-[8px] bg-[#F6F7F7] px-3 py-1 flex-1 h-[35px] ">
            <div><img src={clock} alt="clock" /></div>
            <div className="font-[700] text-[16px] ">Hours</div>
            <div>182:00</div>
          </div>
          <div className="flex justify-center items-center gap-2 rounded-[8px] bg-[#F6F7F7] px-3 py-1 flex-1 h-[35px]">
            <div><img src={clock} alt="bar" /></div>
            <div className="font-[700] text-[16px] ">Shifts</div>
            <div>29</div>
          </div>
          <div className="flex justify-center items-center gap-2 rounded-[8px] bg-[#F6F7F7] px-3 py-1 flex-1 h-[35px]">
            <div><img className="w-5" src={person} alt="person" /></div>
            <div className="font-[700] text-[16px] ">Users</div>
            <div>6</div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default MainContent
