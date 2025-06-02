import arrow from '../assets/down.png'
import search from '../assets/search.png'
import account from '../assets/login-icon.png'

const Main = () => {

  return (
    <div className="bg-gray-100 pr-8 w-full flex flex-col gap-8">

      <div className="flex justify-between">

        <div className='flex gap-2'>
          <div className='flex gap-4 border-2 border-gray-300 rounded-4xl ml-8 mt-8 pl-4 pr-2 '>
            <div className='text-indigo-700 font-extrabold'>View Options</div>
            <button><img className='w-2' src={arrow} alt="arrow" /></button>
          </div>
          <div className='flex gap-4 border-2 border-gray-300 rounded-4xl ml-8 mt-8 pl-4 pr-2 '>
            <div className='text-gray-700 font-extrabold'>Week</div>
            <button><img className='w-2' src={arrow} alt="arrow" /></button>
          </div>
        </div>

        <div className='flex gap-2'>
          <div className='flex gap-4 border-2 border-gray-300 rounded-4xl ml-8 mt-8 pl-4 pr-2 '>
            <div className='text-gray-700 font-extrabold'>Actions</div>
            <button><img className='w-2' src={arrow} alt="arrow" /></button>
          </div>
          <div className='flex gap-4 border-2 border-gray-300 rounded-4xl ml-8 mt-8 pl-4 pr-2 '>
            <div className='text-gray-700 font-extrabold'>Add</div>
            <button><img className='w-2' src={arrow} alt="arrow" /></button>
          </div>
        </div>

      </div>

      <div className='flex flex-col ml-4 w-full gap-0.5 p-2'>

        <div className='grid grid-cols-[minmax(200px,1fr)_repeat(7,minmax(0,1fr))] w-full bg-gray-200 border
         border-gray-300 rounded-md'>
          <div className="relative p-2 border-r border-gray-300">
            <input className="w-full border border-gray-300 rounded-md pl-8 py-1.5" type="text" placeholder="Search" />
            <img className="w-4 h-4 absolute left-4 top-1/2 transform -translate-y-1/2" src={search} alt="search" />
          </div>
          {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((item, index) =>
            <div className='p-2 text-center border-r border-gray-300' key={index}>
              {item}
            </div>
          )}
        </div>

        <div className='grid grid-cols-[minmax(200px,1fr)_repeat(7,minmax(0,1fr))] w-full bg-gray-200 border
         border-gray-300 rounded-md'>
          <div className="relative p-2 border-r border-gray-300">
            
          </div>
          {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((item, index) =>
            <div className='flex flex-col items-center justify-center gap-2 p-2 text-center border-r border-gray-300' key={index}>
              <div draggable className='w-full p-2 border-2 border-red-600 rounded-sm'>Sales Associate</div>
              <div draggable className='w-full p-2 border-2 border-green-600 rounded-sm'>Sales Associate</div>
            </div>
          )}
        </div>

        {['Fadhilah Puspasari', 'Fauni Ambarsari', 'Lili Hugton', 'Rao Rabi'].map((name) => (
          <div key={name} className='grid grid-cols-[minmax(200px,1fr)_repeat(7,minmax(0,1fr))] w-full
           bg-gray-200 border border-gray-300 rounded-md min-h-[60px]'>
            <div className="relative p-2 border-r border-gray-300">
              <div className='flex items-center gap-2'>
                <div><img className='w-6' src={account} alt="account" /></div>
                <div>{name}</div>
              </div>
            </div>
            {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((item, index) =>
              <div className='p-2 text-center border-r border-gray-300' key={index}>
                
              </div>
            )}
          </div>
        ))}



      </div>

    </div>
  )
}

export default Main
