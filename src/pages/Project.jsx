import React from 'react'
import {PROJECTS} from '../assets/index.js'
import { FaExternalLinkAlt } from "react-icons/fa";
import {motion} from 'framer-motion';

export default function Projects() {
  return (
    <div className='w-full font-primary px-6 md:px-20 lg:px-40 justify-between text-left flex items-center'>
        <div className='w-1/3'>
        <motion.h1 
        whileInView={{opacity:1, x:0}}
        initial= {{x: -100, opacity:0}}
        transition={{duration:0.5}}
        className='text-5xl font-secondary'>PROJECTS</motion.h1>
        </div>
        
        <div className='w-2/3 text-right overflow-y-auto max-h-[calc(80vh-100px)]'>
        {PROJECTS.map((src, index) => (
            <motion.div key= {index} 
            whileInView={{opacity:1, x:0}}
              initial= {{x: 100, opacity:0}}
              transition={{duration:0.5}}
            className='mx-10 my-5 flex flex-col items-end'>
                <a href= {src.url} className='text-2xl font-secondary hover:text-3xl hover:text-black hover:duration-75'>{src.title}</a>
                <a href= {src.url} className='text-lg font-secondary text-justify' >{src.description}</a>
                <div className='flex  justify-center items-center'>
                <p className='mx-2'>Visit</p>
                <a  href= {src.url} className='hover:text-gray-500'><FaExternalLinkAlt size={15}/></a>
                </div>
            </motion.div>
        ))}
        </div>
    </div>
  )
}
