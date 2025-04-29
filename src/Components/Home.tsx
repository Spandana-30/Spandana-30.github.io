import React from 'react';
import Profileimg from "../assets/Image.jpg"

export const Home = () => {
  return (
    <div className='text-blue-750 bg-green-100 animate-slideFromLeft flex w-full justify-between items-start animation-slideFromLeft p-10 md:p-20 '>
        <div className='md:w-2/4 md:pt-10'>
        <h1 className='text-3xl md:text-6xl text-green-950 font-serif font-bold flex leading-normal tracking-tighter'>Hello, I am </h1>
        <h1 className='text-5xl md:text-6xl  font-bold text-green-950 font-serif flex leading-normal tracking-tighter'>Spandana</h1>
        <h4 className='text-xl md:text-2xl tracking-tight text-green-950 font-serif'>I’m a BCA graduate and Junior Full Stack Developer intern.</h4>
        <button className="mt-5 md:md-10 text-green-100 py02 px-3 text-sm font-serif md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-green-950">
          Contact Me
        </button>
        </div>
        
        <div>
        <img 
            src={Profileimg}
            alt="My Profile Picture" 
           className="  gap-6 w-100 h-100 rounded-full mt-10 p- mx-auto"
          />
      </div>
    </div>
  )
}