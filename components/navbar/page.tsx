"use client";

import Link from 'next/link'
import React from 'react'
import { HiOutlineX, HiMenuAlt3 } from 'react-icons/hi';
import { useState } from 'react';

const Navbar = () => {

  const [show, setShow] = useState(false);

  return (
    <div className="container mx-auto px-4 2xl:px-0">
      <div className='p-4 flex justify-between items-center border-b-2 border-gray-950'>
        <div className="text-2xl font-bold font-serif text hover:text-[#FF4343] hover:animate-pulse" ><Link href="/">EduWave</Link></div>
        <HiMenuAlt3 size={30} className='cursor-pointer lg:hidden' onClick={() => setShow(prev => !prev)} />
        <div className={`fixed lg:relative bg-black lg:bg-transparent top-0 w-full h-screen lg:h-auto ${show ? "right-0" : "-right-full"} lg:right-0 flex gap-10 flex-col lg:flex-row justify-center lg:justify-end items-center transition-all duration-300`} >
          <HiOutlineX size={30} className='text-white absolute top-7 right-7 cursor-pointer lg:hidden' onClick={() => setShow(false)} />
          <Link href="/" className='hover:border-b-2 border-[#FF4343]'>Home</Link>
          <Link href="/" className='hover:border-b-2 border-[#FF4343]'>About</Link>
          <Link href="/" className='hover:border-b-2 border-[#FF4343]'>Tutorials</Link>
          <Link href="https://www.kralis.app/" className='hover:border-b-2 border-[#FF4343]'>Portal</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
