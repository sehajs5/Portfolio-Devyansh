import React from 'react'
import coverPhoto from '../assets/coverPhoto.jpg'
export default function Home() {
  return (
    <div className='w-full  z-20 font-primary px-6 pt-10 md:px-20 lg:px-40 justify-between flex items-center'>
      <div className='w-full lg:w-1/2 lg:p-8'>
        <p className='text-oneMore text-justify'>
          I am Devyansh Batra, currently a passionate computer science student pursuing my bachelors in engineering. I have found myself to be profoundly interested in innovation and machine learning. I have curated multiple projects on tensorflow, CNN and other stuff using Python. I am Python developer with keen eye for unnoticed instances in my surroundings. I have over 25 patents and over 10 research papers published. I am a keen learner and welcome challenges with open arms. Hope you enjoy my profile.
        </p>
        <h1 className='text-7xl text-content font-secondary pt-10'>
          Innovator & Developer
        </h1>
      </div >
      
      <div className='w-full lg:w-1/2 lg:p-8'>
      <img src={coverPhoto} className='rounded-3xl'/>
      </div>
    </div>
  )
}
