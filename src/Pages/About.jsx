import React from 'react'
import { FaHandPointRight } from "react-icons/fa";
const About = () => {
  return (
    <div>
        <div className="w-full h-80 overflow-hidden relative">
      <img className="w-full h-full object-cover" src="https://st.depositphotos.com/1518767/3918/i/950/depositphotos_39184527-stock-photo-business-people-in-office-at.jpg" alt="image" />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <h1 className="text-white text-3xl font-bold">About Us</h1>
      </div>
    </div>
    <div className='mx-4 md:mx-10 lg:mx-32 font-poppins my-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-14 md:mt-10'>
            <div className='flex flex-col justify-center items-center gap-2'>
                <div className='flex overflow-hidden'>
                    <img data-aos='zoom-in' data-aos-duration='1000' className='object-cover rounded-lg' src="https://vivo.edu.np/assets/img/about/about-4.jpg" alt="first picture" />
                </div>
                <div className='grid grid-cols-2 w-full gap-2'>
                    <div className='overflow-hidden'>
                    <img data-aos='zoom-in-up' data-aos-duration='1000' className='h-full w-auto object-cover rounded-lg' src="https://vivo.edu.np/assets/img/country-img/c-4.jpg" alt="" />
                    </div>
                    <div className='overflow-hidden'>
                        <img data-aos='zoom-in-up' data-aos-duration='1000' className='h-full w-auto object-cover rounded-lg' src="https://vivo.edu.np/assets/img/country-img/c-5.jpg" alt="" />

                    </div>
                </div>

            </div >
            <div data-aos="zoom-in-up" data-aos-duration='1600'>
                <div><h1 className=' my-2 font-bold text-4xl text-[#0C4DA2]'>About Vivo</h1>
                <p className='text-gray-800 font-normal my-2'>Vivo Education (VE), Established in 2012, is an educational consultancy which delivers two services: Test Preparation (IELTS/TOEFL/SAT) and Study Abroad Counseling (Australia,UK,USA,Canada,New Zealand). Located in the heart of Kathmandu valley, Putalisadak VE is committed to cater genuine, updated and quality service to prospective students who plan to shape their academic career abroad.</p>
                    <p className='text-gray-800 font-normal my-2'>Vivo Education has established itself as a leading institution that provides honest, credible, and authentic education and migration counseling advice for studying around the globe. We offer end-to-end counseling services to our students. Over team of experts passionately assist students and take the hassle out of selecting.</p></div>
                    <div>
                        <h1 className='font-semibold text-[#0C4DA2] text-lg '>Our Vision</h1>
                        <p className='text-gray-600'>To become Nepal’s Leading Education consultant and guide students to achieve their dreams.</p>
                    </div>
                    <div>
                        <h1 className='font-semibold text-[#0C4DA2] text-lg '>Our Mission</h1>
                        <p className='text-gray-600'>Vivo Education offers ethical, unbiased, genuine, and quality professional education services. We help our students to connect with institutions of higher learning overseas.</p>
                    </div>
            </div>

        </div>
    </div>
                        </div>
  )
}

export default About