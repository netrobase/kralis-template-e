import React from 'react'
import { services } from "@/components/services/page";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ['latin'], weight: "600" });

const OurService = () => {
  return (
    <section className="py-16 bg-[#0F0F0F]">
      <div className="container mx-auto px-4 xl:px-0">
        <h2 className={`${poppins.className} title-section`}>Our Awesome Service</h2>
        <p className='text-center max-w-[514px] mx-auto'>Delivering innovative, efficient, and high-quality solutions to meet your needs seamlessly.</p>
        <div className='grid lg:grid-cols-2 xl:grid-cols-3 gap-5 mt-8 '>

          {services.map((service, index) => (
            <div key={index} className="item-service py-[38px] px-[30px] bg-black rounded-[24px] text-center md:text-start ">
              <div className="logo-service relative w-[60px] h-[60px] mb-4 mx-auto md:mx-0">
                {service.icon}
              </div>
              <h3 className={`${poppins.className} text-[25px] leading-[37px] mb-3`}>{service.title}</h3>
              <p className='text-[#6B6B6B]'>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurService;
