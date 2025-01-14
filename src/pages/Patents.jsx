import React from 'react'
import {PATENTS} from '../assets/index.js'
import { useNavigate } from 'react-router-dom'
import {motion} from 'framer-motion';
export default function Patents() {
   const navigate = useNavigate()
  return (
    <div className='w-full  z-20 font-primary px-6 md:px-20 lg:px-40 justify-between text-left flex items-center'>
        <div className='w-1/3'>
        <motion.h1 
        whileInView={{opacity:1, x:0}}
        initial= {{x: -100, opacity:0}}
        transition={{duration:0.5}}
        className='text-5xl font-secondary items-center'>PATENTS</motion.h1>
        </div>
        
        <div className='w-2/3 text-right overflow-y-auto max-h-[calc(80vh-100px)]'>
        {PATENTS.map((src, index) => (
            <motion.div key= {index} 
            whileInView={{opacity:1, x:0}}
              initial= {{x: 100, opacity:0}}
              transition={{duration:0.5}}
              className='mx-10 my-5 flex flex-col items-end'>
                <motion.button layoutId={`title-${index}`} className='text-2xl font-secondary hover:text-3xl hover:text-black hover:duration-75 text-right' onClick={() => navigate(`/patents/${index}`)} >{src.title}</motion.button>
                <motion.button layoutId={`number-${index}`} className='text-lg font-secondary '>{src.number}</motion.button>
            </motion.div>
        ))}
        </div>
    </div>
  )
}
