import React from 'react'
import {headerLogo} from '../assets/images'
import {hamburger} from '../assets/icons';

function Nav() {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href="/" >
          <img src={headerLogo} alt="header Logo" height={29} width={130} />
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden text-slate-500'>
          <li>Home</li>
          <li>About Us</li>
          <li>Products</li>
          <li>Contact Us</li>
        </ul>
        <div className='hidden max-lg:block'>
          <img src={hamburger} alt=" hamburger" width={25} height={25} />
        </div>
      </nav>
    </header>
  )
}

export default Nav