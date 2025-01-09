import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='w-full  z-20 font-primary px-6 py-10 md:px-20 lg:px-40 max-w-screen-2xl'>
        <div className='justify-between flex'>
            <div className='text-content'>
                <Link to= '/'>Devyansh Batra
                </Link>
            </div>
            <div className='flex text-content'>
                <Link to= '/experience' className='mx-4'>Experience</Link>
                <Link to= '/projects' className='mx-4'>Projects</Link>
                <Link to= '/patents' className='mx-4'>Patents</Link>
                <Link to= '/papers' className='mx-4'>Publications</Link>
            </div>
        </div>
    </div>
  )
}
