import React from 'react'
import { FaHandPointRight } from "react-icons/fa";
const AboutConsultancy = () => {
  return (
    <div>
    <div className='mx-4 md:mx-10 lg:mx-32 font-poppins my-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-14 md:mt-10'>
            <div className='flex flex-col justify-center items-center gap-2'>
                <div className='flex overflow-hidden'>
                    <img data-aos='zoom-in' data-aos-duration='1000' className='object-cover rounded-lg' src="https://as1.ftcdn.net/v2/jpg/05/28/30/50/1000_F_528305078_ArZ8AIe8uQFTxwlfh3Ir9qMax1eEqlY3.jpg" alt="first picture" />
                </div>
                <div className='grid grid-cols-2 w-full gap-2'>
                    <div className='overflow-hidden'>
                    <img data-aos='zoom-in-up' data-aos-duration='1000' className='h-full w-auto object-cover rounded-lg' src="https://st3.depositphotos.com/3261171/14812/i/450/depositphotos_148121281-stock-photo-international-students-expressing-emotions-at.jpg" alt="" />
                    </div>
                    <div className='overflow-hidden'>
                        <img data-aos='zoom-in-up' data-aos-duration='1000' className='h-full w-auto object-cover rounded-lg' src="https://media.gettyimages.com/id/488157695/photo/studying-abroad-in-london.jpg?s=612x612&w=gi&k=20&c=pY-KH3nuKf0vnIj8zJtHWV3dcupz2rY8_72e2XDQXG8=" alt="" />

                    </div>
                </div>

            </div >
            <div data-aos="zoom-in-up" data-aos-duration='1600'>
                <div className='my-2'>
                    <h1 className='font-semibold text-lg text-[#EC008C]'>About Our consultancy</h1>
                </div>
                <div><h1 className=' my-2 font-bold text-4xl text-[#0C4DA2]'>9+ years of your trust and recomendation </h1>
                <p className='text-gray-800 font-normal my-2'>Vivo Education Consultancy Pvt. Ltd. was established on 2014. With a motive of delivering reliable, absolute and opportunistic study destinations, TrailMaker has been serving the students rigorously. We believe that every student has the potential to achieve their dreams, and it is committed to providing the highest quality guidance and support to its clients.
                    </p>
                    <p className='text-gray-800 font-normal my-2'>Driven by the motto “Better Counseling, Better Future", we are very committed to providing excellent service. We have a rich database of academic to non-academic, Vocational & Educational Qualifications to higher education, Scholarships, Grants and assistantships, Apprenticeships, and traineeships available throughout the world. class. This is the first item's accordion body.</p></div>
            </div>

        </div>
    </div>
                        </div>
  )
}

export default AboutConsultancy