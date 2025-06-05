import IconsRow from "./IconsRow"
import search from '../assets/search.png'
import change from '../assets/change-user.png'
import dayinfo from '../assets/dayinfo.png'
import magic from '../assets/magic.png'
import upndown from '../assets/upndown.png'
import clock from '../assets/clock-icon.png'
import bar from '../assets/bar-icon.png'
import persons from '../assets/persons.png'
import AddShiftForm from './form.jsx'
import useShiftStore from './Store.js'
import { users, week } from "./users"
import { useState } from "react"

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
              <div><img src={dayinfo} alt="dayinfo" /></div>
            </div>
          ))}
        </div>

        {/* Unassigned Shifts Row */}
        <div className='grid grid-cols-[minmax(200px,1fr)_repeat(7,minmax(0,1fr))] border-b border-[#EAEAEA]'>
          <div className="flex gap-2 items-center p-2 min-h-[70px]">
            <img className="w-6 h-6" src={upndown} alt="search" />
            <div className="text-[#3F4648]">Unassigned Shifts</div>
            <img className="w-4 h-4" src={magic} alt="userchange" />
          </div>
          {week.map((weekDay, index) => {

            const [_, dateStr] = weekDay.split(', '); // dateStr = "6/2"
            const matchedEntries = shifts.filter(entry => {
              const entryDate = new Date(entry.date);
              const entryDateStr = `${entryDate.getMonth() + 1}/${entryDate.getDate()}`;
              return entryDateStr === dateStr && entry.user === "unassigned";
            });

            return (
              <div key={index} className='group p-2 flex flex-col gap-1 items-center border-l border-[#EAEAEA]'>

                {matchedEntries.map((entry, i) => (
                  Array.from({ length: entry.user === users.name ? Number(entry.spot) - 1 : Number(entry.spot) }).map((_, spotIndex) => (
                    <div
                      key={`${i}-${spotIndex}`}
                      className='w-full h-auto pl-2 rounded-[10px] flex flex-col border-[1.5px] border-l-[4px]'
                      style={{ borderColor: entry.color, }}
                      title={`${entry.shiftTitle} - ${entry.job}`}
                    >
                      <div className="flex items-center gap-2">
                        <div className="font-bold text-[#3F4648] text-[12px]">
                          {`${entry.timeFrom.slice(0, entry.timeFrom.indexOf(':'))}${entry.timeFrom.slice(-2)} - ${entry.timeEnd.slice(0, entry.timeEnd.indexOf(':'))}${entry.timeEnd.slice(-2)}`}
                        </div>
                        <div><img src={persons} alt="bande" /></div>
                      </div>
                      <div className="text-[#3F4648] text-[12px]">{entry.job}</div>
                    </div>
                  ))
                ))}

                {matchedEntries.length > 0 ? null : (
                  <button
                    onClick={openForm}
                    className={`cursor-pointer hidden ${!showForm ? 'group-hover:block' : ''} text-xl text-blue-600 font-bold mt-3`}
                    title="Add shift"
                  >
                    ＋
                  </button>
                )}
              </div>
            );
          })}
        </div>

        {/* Users Shifts */}
        {users.map((user, userIndex) => (
          <div key={userIndex}
            className="grid grid-cols-[minmax(200px,1fr)_repeat(7,minmax(0,1fr))] border-b border-[#EAEAEA]">
            <div className={`p-2 flex items-center ${userIndex === 0 || userIndex === 2 ? 'gap-5' : 'gap-4'}`}>
              <div><img src={user.icon} alt="icon" /></div>
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
            {week.map((weekDay, index) => {
              const [_, dateStr] = weekDay.split(', '); // dateStr = "6/2"
              const matchedEntries = shifts.filter(entry => {
                const entryDate = new Date(entry.date);
                const entryDateStr = `${entryDate.getMonth() + 1}/${entryDate.getDate()}`;
                return (entryDateStr === dateStr && entry.user === user.name);
              });

              return (
                <div key={index} className='group p-2 flex flex-col gap-1 items-center border-l border-[#EAEAEA]'>

                  {matchedEntries.map((entry, i) => (
                    Array.from({ length: Number(entry.spot) }).map((_, spotIndex) => (
                      <div
                        key={`${i}-${spotIndex}`}
                        className='w-full h-auto pl-2 rounded-[10px] flex flex-col border-[1.5px] border-l-[4px]'
                        style={{ borderColor: entry.color, }}
                        title={`${entry.shiftTitle} - ${entry.job}`}
                      >
                        <div className="flex items-center gap-2">
                          <div className="font-bold text-[#3F4648] text-[12px]">
                            {`${entry.timeFrom?.slice(0, entry.timeFrom.indexOf(':'))}${entry.timeFrom?.slice(-2)} - ${entry.timeEnd?.slice(0, entry.timeEnd.indexOf(':'))}${entry.timeEnd?.slice(-2)}`}
                          </div>
                          <div><img src={persons} alt="bande" /></div>
                        </div>
                        <div className="text-[#3F4648] text-[12px]">{entry.job}</div>
                      </div>
                    ))
                  ))}

                  {matchedEntries.length > 0 ? null : (
                    <button
                      onClick={openForm}
                      className={`cursor-pointer hidden ${!showForm ? 'group-hover:block' : ''} text-xl text-blue-600 font-bold mt-3`}
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
    </div>
  )
}

export default MainContent