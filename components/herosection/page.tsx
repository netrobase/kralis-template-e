import Image from 'next/image';
import Link from 'next/link';
import { Poppins, Passion_One, Inter } from "next/font/google";

const fontpoppins = Poppins({ subsets: ['latin'], weight: "400" });
const fontPassionOne = Passion_One({ subsets: ['latin'], weight: "400" });
const fontInter = Inter({ subsets: ['latin'], weight: "700" });

export default function HeroSection() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between lg:h-screen h-screen bg-black p-8">
      <div className="md:w-1/2 space-y-4 text-center md:text-left ">
        <h1 className={`bg-gradient-to-r from-[#C10505] to-[#045EE1] max-w-max rounded-md py-2 px-[30px] text-[20px] tracking-[0.2px] ${fontpoppins.className} mt-2 mx-auto md:mx-0`}>
          WELCOME TO EDUWAVE
        </h1>
        <p className={`text-[30px] md:text-[45px] leading-[50px] tracking-[0.2px] ${fontPassionOne.className}`}>
          Empowering seamless learning and smart education management.
        </p>
        <div className="py-0 md:py-4">
          <Link href="https://www.kralis.app/" className={`px-[20px] py-[11px] bg-[#045EE1] rounded-md ${fontInter.className}`}>
            School Portal
          </Link>
        </div>
      </div>

      <div className="md:w-1/2 flex justify-center" >
        <Image src="/images/sch-9.png" alt="Person thinking with book" className="max-w-sm rounded-3xl" width={250} height={350} />
      </div>
    </section>
  );
}
