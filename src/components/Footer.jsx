import React from 'react'

import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';



export default function Footer() {
  return (
    <div className='w-full font-primary px-6 py-10 md:px-20 lg:px-40 items-center justify-center text-center'>
        <div className='flex justify-between'>
            <div className='flex '>
        <FaGithub className='mx-4 text-xl'/>
        <FaLinkedin className='mx-4 text-xl'/>
        </div>
        
        <span className='text-oneMore'>
            devyanshbatra070@gmail.com
        </span>
        </div>
    </div>
  )
}
