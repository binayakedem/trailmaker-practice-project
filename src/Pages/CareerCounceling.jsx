import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Service from '../Components/Service'
const CareerCounceling = () => {
  return (
    <div>
        <div className='flex flex-col'>
       <div className="w-full h-40 md:h-80 overflow-hidden relative">
      <img className="w-full h-full object-cover" src="https://media.licdn.com/dms/image/D4D12AQFmYNszYdipwg/article-cover_image-shrink_720_1280/0/1684215751586?e=2147483647&v=beta&t=7Wcmqhclj7cBITszMr2D4tmRdGfJcrMaNqIOIKGR980" alt="image" />
      <div className="absolute inset-0 bg-[#062651] bg-opacity-80 flex flex-col items-center justify-end pb-5 gap-4">
        <h1 className="text-white text-lg font-semibold lg:text-3xl lg:font-bold">Welcome to CareerCounceling Section</h1>
        <div className='text-white lg:text-lg font-normal flex flex-row justify-center items-center gap-4'>
        <Link to='/'>Home</Link><p>||</p> <p>CareerCounceling</p>
        </div>
      </div>
    </div>
    <div className='mx-4 md:mx-10 lg:mx-32 font-poppins bg-[#F5F8F9] px-5'>
      <div className='flex flex-col lg:flex-row justify-center items-start gap-6 my-6'>
        <div className='grid grid-cols-1 md:grid-cols-2  gap-2 md:gap-10'>
          <div data-aos='zoom-in-down' data-aos-duration='2000' className='overflow-hidden'>
            <img className='h-full w-full object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa5QU41CpzM0V5RKhRl3xag_407axTJ8poc1YheDW4rT3FTA_ki8ZWmJBxk5ocsYzcMJ4&usqp=CAU" alt="" />
          </div>
          <div data-aos='zoom-out' data-aos-duration='2000'>
          <p className='text-gray-600'>Studying abroad can be the best part of a student’s college years, but it’s not easy to decide for a student when there are too many options. Our counselors guide students through the process of researching, choosing, and preparing for programs that best suit their requirements. We are here to guide them so they can make the right decision. We never compromise while giving the right information, and productive suggestions in choosing the best possible institution and destination. We are incredibly enthusiastic to assist each student to ensure their offer with the best provider that they select. Besides finding the right institution, visa documentation is also another pivotal part in studying abroad. Students can’t afford to make even a small mistake in the process of abroad studies.</p>
           
          </div>
        </div>
      </div>
          <div data-aos='zoom-in' data-aos-duration='2000'>
            <p className='text-gray-600'>With our years of experience in visa consulting, we make sure every document is in place before lodging the application. Thousands of applicants have succeeded in obtaining student visas to their dream destination with our assistance. We are experienced and up to date with the documentation process, and offer complete solutions for the applications. Vivo’s professional yet friendly counselors are there to build a good relationship and friendship to assist every student in their study, visa, travel, career or accommodation queries.</p>
          </div>
    </div>
    <Service/>
    </div>
    </div>
  )
}

export default CareerCounceling