import Link from 'next/link';
import React from 'react'
import { FaInstagram, FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className='bg-black'>
      <div className="container mx-auto px-4 2xl:px-0">
        <div className="flex flex-col justify-center items-center md:flex-row md:justify-between gap-[15px] py-[50px]">
          <div>EduWave©Copyright {year}</div>
          <div className="socials">
            <ul className='flex justify-end items-center gap-[12px] '>
              <li><Link href="https://www.facebook.com/netrobase" target='_blank' ><FaFacebookSquare className='text-black' /></Link></li>
              <li><Link href="https://www.instagram.com/netro_base" target='_blank' ><FaInstagram className='text-black' /></Link></li>
              <li><Link href="https://x.com/netrobase" target='_blank' ><FaXTwitter className='text-black' /></Link></li>
              <li><Link href="https://www.linkedin.com/company/netrobase" target='_blank' ><FaLinkedin className='text-black' /></Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
