import React from 'react'
import {PATENTS} from '../assets/index.js'
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate, useParams } from 'react-router-dom';
import {motion} from 'framer-motion';
export default function PatentDesc() {
    const navigate =useNavigate()
    const { id } = useParams(); // Get the id from the URL
    const patent = PATENTS[parseInt(id, 10)]
  return (
    <div className='w-full  z-20 font-primary px-6 pt-10 md:px-20 lg:px-40 justify-between text-left items-center'>
        <motion.button 
        whileInView={{opacity:1, x:0}}
        initial= {{x: -100, opacity:0}}
        transition={{duration:0.5}}
        onClick={()=> navigate('/patents')} className='mb-4'><IoMdArrowBack size={24}/></motion.button>
        {patent ? (
            <div className='lg:flex-row flex flex-col w-full justify-between items-start '>
            <div className='lg:w-1/2 mx-4'>
            <motion.h3 
            layoutId={`title-${id}`}
            className='text-3xl mb-4'>{patent.title}</motion.h3>
            <motion.h4 
            layoutId={`number-${id}`}
            className='text-xl mb-4'>{patent.number}</motion.h4>
            <motion.p 
            whileInView={{opacity:1, x:0}}
            initial= {{x: -100, opacity:0}}
            transition={{duration:0.5}}
            className='text-lg text-justify mb-4'>{patent.description}</motion.p>
            </div>
            <div className='lg:w-1/2 mx-4 justify-end'>
            <motion.img 
            whileInView={{opacity:1, x:0}}
            initial= {{x: 100, opacity:0}}
            transition={{duration:0.5}}
            src = {patent.imageDes} className='w-full max-w-xs md:max-w-sm lg:max-w-md h-auto object-contain'/>
            </div>
            </div>
        ):(
            <p>Patent Not Found</p>
        )}

        
    </div>
  )
}
