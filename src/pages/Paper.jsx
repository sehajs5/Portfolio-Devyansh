import React from 'react'
import {PAPERS} from '../assets/index.js'
import { useNavigate } from 'react-router-dom';
import {motion} from 'framer-motion';
export default function Paper() {
  return (
    <div className='w-full font-primary px-6 md:px-20 lg:px-40 justify-between text-left lg:flex lg:flex-row flex flex-col items-center'>
        <div className='lg:w-1/3'>
        <motion.h1 
        whileInView={{opacity:1, x:0}}
        initial= {{x: -100, opacity:0}}
        transition={{duration:0.5}}
        className='lg:text-5xl text-4xl font-secondary'>PUBLICATIONS</motion.h1>
        </div>
        
        <div className='lg:w-2/3 lg:text-right text-center overflow-y-auto max-h-[calc(80vh-100px)]'>
        {PAPERS.map((src, index) => (
            <motion.div key= {index} 
            whileInView={{opacity:1, x:0}}
              initial= {{x: 100, opacity:0}}
              transition={{duration:0.5}}
            className='mx-10 my-5 flex flex-col items-end'>
                <a href= {src.url} className='text-2xl font-secondary hover:text-xl hover:duration-75 hover:text-black'>{src.role}</a>
                <a href= {src.url} className='text-lg font-secondary ' >{src.year}</a>
            </motion.div>
        ))}
        </div>
    </div>
  )
}
