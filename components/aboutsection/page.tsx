import React from 'react';
import Image from 'next/image';
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ['latin'], weight: "700" });

const AboutSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 xl:px-0">
        <div className="grid gap-4 lg:grid-cols-2 lg:gap-8">
          <Image src="/images/img-about.png" alt="img-about" className="" width={600} height={600}/>
          <article className='h-full flex flex-col justify-center items-start'>
            <h2 className={`${poppins.className} title-section`}>About Us</h2>
            <p>Kralis is a revolutionary School Result Management System (SRMS) that streamlines administrative tasks, enhances student engagement, and fosters academic success.</p>
            <ul className='list-about-us nt-4'>
              <li><strong>Here are some of the limitations Kralis aims to overcome -</strong></li>
              <li>Limited customization options for report formats and templates.</li>
              <li>Initial setup and implementation may require technical expertise.</li>
              <li>Lack of real-time updates and notifications for students, parents, and teachers.</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
