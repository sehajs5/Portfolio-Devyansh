import React from 'react'
import { EXPERIENCES } from '../assets/index.js'
export default function Experience() {
  return (
    <div className='w-full  z-20 font-content px-6 md:px-20 lg:px-40 justify-between text-left flex justify-between'>
        <div className='lg:w-1/3'>
            <h1 className='text-5xl font-secondary'>EXPERIENCE</h1>
        </div>
        <div className='lg:w-2/3 justify-end text-right overflow-y-auto max-h-[calc(80vh-100px)]'>
        {
            EXPERIENCES.map((src, index)=> (
                <div key={index}>
                    <h2 className='text-5xl font-secondary mb-2'>{src.position}</h2>
                    <h3 className='text-lg mb-2 font-extrabold'>{src.company}</h3>
                    <p className='text-sm mb-2'>{src.description}</p>
                    <h4 className='text-sm mb-10'>{src.period}</h4>
                </div>
            ))
        }
        
        </div>
    </div>
  )
}
