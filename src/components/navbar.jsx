import logo from '../assets/logo.png'
import search from '../assets/search.png'
import account from '../assets/login-icon.png'
import down from '../assets/down.png'

const Navbar = () => {

    return (
      <>
        <nav className="flex gap-8 p-6 justify-between">  

          <div className='flex gap-12 items-center'>
            <div><img className='w-20' src={logo} alt="logo" /></div>
            <div className="relative w-full max-w-sm">
                <input className="w-full border-2 border-gray-300 rounded-md pl-8 py-1" type="text" placeholder="Search Anything"/>
                <img className="w-4 h-4 absolute right-4 top-1/2 transform -translate-y-1/2" src={search} alt="search" />
            </div>
          </div>

          <div className='flex items-center gap-2'>
            <div><img className='w-6' src={account} alt="account" /></div>  
            <div>Fauni Ambarsari</div>  
            <div><img className='w-4' src={down} alt="arrow" /></div>  
          </div>
        </nav>
      </>
    )
}

export default Navbar
