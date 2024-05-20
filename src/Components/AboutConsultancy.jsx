import React from 'react'
import { FaHandPointRight } from "react-icons/fa";
const AboutConsultancy = () => {
  return (
    <div>
    <div className='mx-4 md:mx-10 lg:mx-32 font-poppins my-10'>
        <hr className='border border-t-2 border-gray-600  '/>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-14 md:mt-10'>
            <div data-aos="fade-right" data-aos-duration='1000' className='w-full h-auto overflow-hidden'>
                <img className='w-full h-auto object-cover' src="https://trailmaker.com.np/user/images/abouts/about3.png" alt="students" />
            </div>
            <div data-aos="zoom-in-up" data-aos-duration='1600'>
                <div className='my-2'>
                    <h1 className='font-semibold text-lg text-gray-800'>About Our consultancy</h1>
                </div>
                <div><h1 className=' my-2 font-bold text-xl text-green-600'>We make youre dream come true</h1>
                <p className='text-gray-800 font-normal my-2'>Trailmaker Education Consultancy Pvt. Ltd. was established on 2014. With a motive of delivering reliable, absolute and opportunistic study destinations, TrailMaker has been serving the students rigorously. We believe that every student has the potential to achieve their dreams, and it is committed to providing the highest quality guidance and support to its clients.
                    </p>
                    <div className='flex flex-row justify-start gap-2 items-center
                    '>
                        <FaHandPointRight color='green' />

                    <h1 className='my-2 font-bold text-xl text-green-600'>Vision and Mission</h1>
                    </div>
                    <p className='text-gray-800 font-normal my-2'>Driven by the motto “Better Counseling, Better Future", we are very committed to providing excellent service. We have a rich database of academic to non-academic, Vocational & Educational Qualifications to higher education, Scholarships, Grants and assistantships, Apprenticeships, and traineeships available throughout the world. class. This is the first item's accordion body.</p></div>
            </div>

        </div>
        <hr className='border border-t-2 border-gray-600 md:mt-10 '/>
    </div>
                        </div>
  )
}

export default AboutConsultancy