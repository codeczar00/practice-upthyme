// import arrow from '../assets/dropdown.png'
// import search from '../assets/search.png'
// import account from '../assets/login-icon.png'
// import AddShiftForm from './form.jsx'
// import { useState } from 'react'
// import useShiftStore from './Store.js'

// const Main = () => {

//   const [showForm, setShowForm] = useState(false)
//   const openForm = () => setShowForm(true)
//   const closeForm = () => setShowForm(false)
//   const shifts = useShiftStore((state) => state.shifts)

//   return (
//     <div className="bg-gray-100 pr-8 w-full flex flex-col gap-8">

//       <div className="flex justify-between">

//         <div className='flex gap-2'>
//           <div className='flex gap-4 border-2 border-gray-300 rounded-4xl ml-8 mt-8 pl-4 pr-2 '>
//             <div className='text-indigo-700 font-extrabold'>View Options</div>
//             <button><img className='w-2' src={arrow} alt="arrow" /></button>
//           </div>
//           <div className='flex gap-4 border-2 border-gray-300 rounded-4xl ml-8 mt-8 pl-4 pr-2 '>
//             <div className='text-gray-700 font-extrabold'>Week</div>
//             <button><img className='w-2' src={arrow} alt="arrow" /></button>
//           </div>
//         </div>

//         <div className='flex gap-2'>
//           <div className='flex gap-4 border-2 border-gray-300 rounded-4xl ml-8 mt-8 pl-4 pr-2 '>
//             <div className='text-gray-700 font-extrabold'>Actions</div>
//             <button><img className='w-2' src={arrow} alt="arrow" /></button>
//           </div>
//           <div className='flex gap-4 border-2 border-gray-300 rounded-4xl ml-8 mt-8 pl-4 pr-2 '>
//             <div className='text-gray-700 font-extrabold'>Add</div>
//             <button onClick={openForm}><img className='w-2 cursor-pointer' src={arrow} alt="arrow" /></button>
//           </div>
//         </div>

//       </div>

//       <div className='flex flex-col ml-4 w-full gap-0.5 p-2'>

//         {/* header row */}
//         <div className='grid grid-cols-[minmax(200px,1fr)_repeat(7,minmax(0,1fr))] w-full bg-gray-200 border
//          border-gray-300 rounded-md'>
//           <div className="relative p-2 border-r border-gray-300">
//             <input className="w-full border border-gray-300 rounded-md pl-8 py-1.5" type="text" placeholder="Search" />
//             <img className="w-4 h-4 absolute left-4 top-1/2 transform -translate-y-1/2" src={search} alt="search" />
//           </div>
//           {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((item, index) =>
//             <div className='p-2 text-center border-r border-gray-300' key={index}>
//               {item}
//             </div>
//           )}
//         </div>

//         <div className="grid grid-cols-[minmax(200px,1fr)_repeat(7,minmax(0,1fr))] w-full bg-gray-200 border border-gray-300 rounded-md min-h-[60px]">
//           <div className="relative p-2 border-r border-gray-300">
//             {/* Empty cell at start */}
//           </div>

//           {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day, index) => (
//             <div
//               key={index}
//               className='group flex flex-col items-center justify-center gap-2 p-2 text-center border-r border-gray-300'
//             >
//               {shifts
//                 .filter(shift => shift.employee === "All" && (shift.day === day || shift.day === "All"))
//                 .map((shift, i) => (
//                   <div
//                     key={i}
//                     className="px-3 py-2 rounded-xl shadow-md border border-blue-300 bg-blue-100 text-blue-900 text-sm text-center w-full max-w-[90%]"
//                   >
//                     <div className="font-semibold text-blue-800">{shift.jobTitle}</div>
//                     <div className="text-xs mt-1">{shift.fromTime} {shift.fromPeriod} - {shift.toTime} {shift.toPeriod}</div>
//                   </div>
//                 ))
//               }
//               <button
//                 onClick={openForm}
//                 className={`cursor-pointer hidden ${!showForm ? 'group-hover:block' : ''} text-xl text-blue-600 font-bold mt-2`}
//                 title="Add shift"
//               >
//                 ＋
//               </button>
//             </div>
//           ))}
//         </div>


//         {['Fadhilah Puspasari', 'Fauni Ambarsari', 'Lili Hugton', 'Rao Rabi'].map((name, index) => (
//           <div key={index} className='grid grid-cols-[minmax(200px,1fr)_repeat(7,minmax(0,1fr))] w-full
//            bg-gray-200 border border-gray-300 rounded-md min-h-[60px]'>
//             <div className="relative p-2 border-r border-gray-300">
//               <div className='flex items-center gap-2'>
//                 <div><img className='w-6' src={account} alt="account" /></div>
//                 <div>{name}</div>
//               </div>
//             </div>
//             {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day, i) => {
//               const cellShifts = shifts.filter(
//                 shift => shift.employee === name && shift.day === day
//               );
//               return (
//                 <div className='group flex flex-col items-center justify-center gap-2 p-2 text-center border-r border-gray-300' key={i}>
//                   {cellShifts.map((shift, j) => (
//                     <div
//                       key={`${name}-${day}-${j}`}
//                       className="px-3 py-2 rounded-xl shadow-md border border-blue-300 bg-blue-100 text-blue-900 text-sm text-center w-full max-w-[90%]"
//                     >
//                       <div className="font-semibold text-blue-800">{shift.jobTitle}</div>
//                       <div className="text-xs mt-1">{shift.fromTime} {shift.fromPeriod} - {shift.toTime} {shift.toPeriod}</div>
//                     </div>
//                   ))}

//                   <button
//                     onClick={openForm}
//                     className={`cursor-pointer hidden ${!showForm ? 'group-hover:block' : ''} text-xl text-blue-600 font-bold mt-2`}
//                     title="Add shift"
//                   >
//                     ＋
//                   </button>
//                 </div>
//               )
//             })}
//           </div>
//         ))}
//       </div>

//       <AddShiftForm visible={showForm} onClose={closeForm} />
//     </div>
//   )
// }

// export default Main
