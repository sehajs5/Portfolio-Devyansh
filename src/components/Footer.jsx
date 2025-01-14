import React from 'react'

import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';



export default function Footer() {
  return (
    <div className='w-full font-primary px-6 py-10 md:px-20 lg:px-40 items-center justify-center text-center'>
        <div className='flex justify-between'>
            <div className='flex '>
        <a href='https://github.com/devyanshbatra'><FaGithub className='mx-4 text-xl'/></a>
        <a href= 'https://www.linkedin.com/in/devyansh-batra-02822b246/'><FaLinkedin className='mx-4 text-xl'/></a>
        </div>
        
        <span className='text-oneMore'>
            devyanshbatra070@gmail.com
        </span>
        </div>
    </div>
  )
}
