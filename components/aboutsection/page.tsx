import React from 'react';
import Image from 'next/image';
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ['latin'], weight: "700" });

const AboutSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 2xl:px-0">
        <div className="grid gap-4 lg:grid-cols-2 lg:gap-8">
          <Image src="/images/img-about.png" alt="img-about" className="" width={600} height={600}/>
          <article className='h-full flex flex-col text-center md:text-start items-start'>
            <h2 className={`${poppins.className} title-section mx-auto md:mx-0`}>About Us</h2>
            <p>Kralis is a revolutionary School Result Management System (SRMS) that streamlines administrative tasks, enhances student engagement, and fosters academic success.</p>
            <ul className='list-about-us mt-4'>
              <li className='text-gray-200'><strong>Here are some of the limitations Kralis aims to overcome -</strong></li>
              <li className='text-[#6B6B6B]'>Limited customization options for report formats and templates.</li>
              <li className='text-[#6B6B6B]'>Initial setup and implementation may require technical expertise.</li>
              <li className='text-[#6B6B6B]'>Lack of real-time updates and notifications for students, parents, and teachers.</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
