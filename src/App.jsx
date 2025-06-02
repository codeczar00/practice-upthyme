import Navbar from './components/navbar'
import Sidebar from './components/sidebar'
import Main from './components/main'
import './App.css'

const App = () => {

  return (
    <>
      <Navbar />
      <div className='flex'>
        <Sidebar/>
        <Main />
      </div>
    </>
  )
}

export default App
