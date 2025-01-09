import React from 'react'
import {PATENTS} from '../assets/index.js'
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate, useParams } from 'react-router-dom';
export default function PatentDesc() {
    const navigate =useNavigate()
    const { id } = useParams(); // Get the id from the URL
    const patent = PATENTS[parseInt(id, 10)]
  return (
    <div className='w-full  z-20 font-primary px-6 pt-10 md:px-20 lg:px-40 justify-between text-left items-center'>
        <button onClick={()=> navigate('/patents')} className='mb-4'><IoMdArrowBack size={24}/></button>
        {patent ? (
            <div className='flex w-full justify-between items-start '>
            <div className='w-1/2 mx-4'>
            <h3 className='text-3xl mb-4'>{patent.title}</h3>
            <h4 className='text-xl mb-4'>{patent.number}</h4>
            <p className='text-lg text-justify mb-4'>{patent.description}</p>
            </div>
            <div className='w-1/2 mx-4 justify-end'>
            <img src = {patent.imageDes} className='w-full max-w-xs md:max-w-sm lg:max-w-md h-auto object-contain'/>
            </div>
            </div>
        ):(
            <p>Patent Not Found</p>
        )}

        
    </div>
  )
}
