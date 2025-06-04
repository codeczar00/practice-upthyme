import Navbar from './components/navbar'
import Sidebar from './components/sidebar'
// import Main from './components/main'
import MainContent from './components/MainContent'
import ScheduleBar from './components/ScheduleBar'
import './App.css'

const App = () => {

  return (
    <div>
      <Navbar />
      <div className="flex pt-20 bg-gray-100 w-full">
        <Sidebar />
        <div className='flex-1 p-8 mt-2 flex flex-col gap-4'>
          <ScheduleBar />
          <MainContent />
        </div>
      </div>
    </div>
  )
}

export default App
