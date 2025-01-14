import React from 'react'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react';
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

  return (
    <div className='w-full  z-20 font-primary px-6 py-10 md:px-20 lg:px-40 max-w-screen-2xl'>
        <div className='justify-between flex'>
            <div className='text-content'>
                <Link to= '/'>Devyansh Batra
                </Link>
                </div>
                <div className='lg:hidden flex items-center'>
                    <button onClick={toggleMenu} className='text-black'>
                        <GiHamburgerMenu />
                    </button>
                
            </div>
            <div className='hidden lg:flex text-content'>
                <Link to= '/experience' className='mx-4'>Experience</Link>
                <Link to= '/projects' className='mx-4'>Projects</Link>
                <Link to= '/patents' className='mx-4'>Patents</Link>
                <Link to= '/papers' className='mx-4'>Publications</Link>
            </div>
        </div>
        <div
        className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} py-4 px-6 w-full mt-2 shadow-lg flex flex-col`}
        >
          <Link to= '/experience' className='mx-4' onClick = {toggleMenu}>Experience</Link>
                <Link to= '/projects' className='mx-4' onClick = {toggleMenu}>Projects</Link>
                <Link to= '/patents' className='mx-4' onClick = {toggleMenu}>Patents</Link>
                <Link to= '/papers' className='mx-4' onClick = {toggleMenu}>Publications</Link>

        </div>
    </div>
  )
}
