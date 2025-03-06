import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between lg:h-screen bg-black p-8">
      <div className="md:w-1/2 space-y-4 text-center md:text-left " >
        <h1 className="text-red-800 md:text-[58px] text-[30px] font-bold tracking-[0.2px]">
          HIGH QUALITY EDUCATION
        </h1>
        <p className="text-gray-500 text-lg font-normal leading-[30px] tracking-[0.2px] ">
          Providing excellence in education to inspire success and a brighter future.
        </p>
        <div className="space-x-4 py-5">
          <Link href="https://www.kralis.app/" className="bg-red-500 text-white  rounded-md hover:bg-red-600 px-[40px] py-[15px]">
            School Portal
          </Link>
          <Link href="/" className="border border-red-500 text-red-500 rounded-md hover:bg-red-500 hover:text-white px-[25px] py-[15px]">
            About Us
          </Link>
        </div>
      </div>

      <div className="md:w-1/2 flex justify-center" >
        <Image src="/images/sch-9.png" alt="Person thinking with book" className="max-w-sm rounded-3xl" width={250} height={350} />
      </div>
    </section>
  );
}
