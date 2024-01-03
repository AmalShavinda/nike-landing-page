import { headerLogo } from '../assets/images'
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai';
import { navLinks } from '../constants'
import { useState } from 'react';

const Nav = () => {

  const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    }

  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href='/'>
          <img src={headerLogo} alt='Logo' width={130} height={29}/>
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-md:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a href={item.href} className='font-montserrat leading-normal text-lg text-slate-gray'>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div onClick={handleNav} className='md:hidden'>
          {!nav ? <AiOutlineMenu size={20}/> : <AiOutlineClose size={20}/>}
        </div>

      {/* Mobile Menu --Start */}
      <div className={!nav ? 'fixed left-[-100%] top-0 w-[60%] h-full border-r border-r-gray-900 bg-white ease-in-out duration-500 z-30' : 'fixed top-0 w-[80%] h-full border-r border-r-gray-900 bg-slate-100 left-0 ease-in-out duration-500 z-10'}>
        <a href='/'>
          <img src={headerLogo} alt='Logo' width={130} height={29} className='mt-8 ml-8 mb-6'/>
        </a>
        <ul className='uppercase p-4'>
          {navLinks.map((item) => (
            <li key={item.label} className='p-4 border-b border-b-gray-600'>
            <a href={item.href} onClick={() => setNav(false)} className='font-montserrat leading-normal text-lg text-slate-gray'>
              {item.label}
            </a>
          </li>
          ))}  
        </ul>
      </div>
      {/* Mobile Menu --End */}

      </nav>
    </header>
  )
}

export default Nav
