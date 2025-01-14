import React from 'react'
import {PAPERS} from '../assets/index.js'
import { useNavigate } from 'react-router-dom';
import {motion} from 'framer-motion';
export default function Paper() {
  return (
    <div className='w-full font-primary px-6 md:px-20 lg:px-40 justify-between text-left flex items-center'>
        <div className='w-1/3'>
        <motion.h1 
        whileInView={{opacity:1, x:0}}
        initial= {{x: -100, opacity:0}}
        transition={{duration:0.5}}
        className='text-5xl font-secondary'>PUBLICATIONS</motion.h1>
        </div>
        
        <div className='w-2/3 text-right overflow-y-auto max-h-[calc(80vh-100px)]'>
        {PAPERS.map((src, index) => (
            <motion.div key= {index} 
            whileInView={{opacity:1, x:0}}
              initial= {{x: 100, opacity:0}}
              transition={{duration:0.5}}
            className='mx-10 my-5 flex flex-col items-end'>
                <a href= {src.url} className='text-2xl font-secondary hover:text-3xl hover:duration-75 hover:text-black'>{src.role}</a>
                <a href= {src.url} className='text-lg font-secondary ' >{src.year}</a>
            </motion.div>
        ))}
        </div>
    </div>
  )
}
