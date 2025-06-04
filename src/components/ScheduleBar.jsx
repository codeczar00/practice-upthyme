import calicon from '../assets/cal-icon.png'
import text from '../assets/text.png'
import refresh from '../assets/refresh.png'
import permission from '../assets/permission.png'
import error from '../assets/error.png'
import jobs from '../assets/suitcase.png'
import settings from '../assets/settings.png'

const ScheduleBar = () => {

  return (
    
      <div className='bg-white px-6 py-4 rounded-lg flex justify-between items-center'>
        {/* Right Side */}
        <div className='flex gap-4 items-center'>
          <div><img src={calicon} alt="calendar" /></div>
          <div><img src={text} alt="text" /></div>
          <div><img src={refresh} alt="refresh" /></div>
        </div>

        {/* Left Side */}
        <div className='flex gap-12'>
          <div className='flex items-center gap-2'>
            <div className=' text-[#505759]'>Permissions</div>
            <div><img src={permission} alt="permission" /></div>
          </div>
          <div className='flex items-center gap-4'>
            <div><img src={error} alt="error" /></div>
            <div className='flex items-center border border-[#8B939C66] rounded-[100px] pr-3'>
                <div><img src={jobs} alt="jobs" /></div>
                <div className='text-[#002C76] font-bold'>Jobs</div>
            </div>
            <div className='flex items-center gap-1 border border-[#8B939C66] rounded-[100px] p-2'>
                <div><img src={settings} alt="jobs" /></div>
                <div className='text-[#002C76] font-bold'>Settings</div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default ScheduleBar
