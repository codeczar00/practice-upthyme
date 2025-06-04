import logo from '../assets/upthyme.png'
import search from '../assets/search.png'
import account from '../assets/account.png'
import down from '../assets/dropdown.png'
import crown from '../assets/crown.png'

const Navbar = () => {

    return (
      <nav className='shadow-md shadow-[#3F43431F] h-20 fixed w-full z-50 bg-white pt-6 pr-8 pl-8 pb-4 flex justify-between'>

        {/* Left Search bar and logo */}
        <div className='flex items-center gap-12'> 
          <div><img className='w-36 h-8' src={logo} alt="upthyme" /></div>
          <div className='relative'>
            <input placeholder='Search Anything' className='w-100 border-1 border-[#8B939C66] rounded-2xl px-4 py-2' type="text" />
            <img className='absolute top-3 right-4' src={search} alt="search" />
          </div>
        </div>

        {/* Right Account Name and Logo */}
        <div className='flex items-center gap-4'> 
          <div className='relative'>
            <img className='w-10' src={account} alt="account" />
            <div className='absolute right-0 bottom-[-3px] border-1 border-white flex items-center justify-center 
              w-4 h-4 rounded-full bg-[linear-gradient(148.19deg,_#B07914_-32.4%,_#6D1079_44.32%,_#3553C0_121.04%)]'>
              <img src={crown} alt="crown" />
            </div>
          </div>
          <div className='font-[Open_Sans_Hebrew] text-[#555555] font-bold'>Fauni Ambarsari</div>
          <div><img className='w-5' src={down} alt="dropdown" /></div>
        </div>
      </nav>
    )
}

export default Navbar
