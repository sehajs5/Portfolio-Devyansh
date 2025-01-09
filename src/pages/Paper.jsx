import React from 'react'
import {PAPERS} from '../assets/index.js'
import { useNavigate } from 'react-router-dom';

export default function Patents() {
    const navigate = useNavigate();
  return (
    <div className='w-full font-primary px-6 md:px-20 lg:px-40 justify-between text-left flex items-center'>
        <div className='w-1/3'>
        <h1 className='text-5xl font-secondary'>PUBLICATIONS</h1>
        </div>
        
        <div className='w-2/3 text-right overflow-y-auto max-h-[calc(80vh-100px)]'>
        {PAPERS.map((src, index) => (
            <div key= {index} className='mx-10 my-5 flex flex-col items-end'>
                <a href= {src.url} className='text-2xl font-secondary hover:text-3xl hover:text-black'>{src.role}</a>
                <a href= {src.url} className='text-lg font-secondary ' >{src.year}</a>
            </div>
        ))}
        </div>
    </div>
  )
}
