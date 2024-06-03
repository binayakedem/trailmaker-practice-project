import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoIosCheckboxOutline } from "react-icons/io";
const AdmissionGuidance = () => {
  return (
    <div>
        <div className='flex flex-col'>
       <div className="w-full h-40 md:h-80 overflow-hidden relative">
      <img className="w-full h-full object-cover" src="https://st2.depositphotos.com/3591429/11430/i/450/depositphotos_114301818-stock-photo-students-studying-together.jpg" alt="image" />
      <div className="absolute inset-0 bg-[#062651] bg-opacity-80 flex flex-col items-center justify-end pb-5 gap-4">
        <h1 className="text-white text-lg font-semibold lg:text-3xl lg:font-bold">Welcome to AdmissionGuidance Section</h1>
        <div className='text-white lg:text-lg font-normal flex flex-row justify-center items-center gap-4'>
        <Link to='/'>Home</Link><p>||</p> <p>AdmissionGuidance</p>
        </div>
      </div>
    </div>
    <div className='mx-4 md:mx-10 lg:mx-32 font-poppins bg-[#F5F8F9] px-5'>
      <div className='flex flex-col lg:flex-row justify-center items-start gap-6 my-6'>
        <div className='grid grid-cols-1 md:grid-cols-2  gap-2 md:gap-10'>
          <div data-aos='zoom-in-down' data-aos-duration='2000' className='overflow-hidden'>
            <img className='h-full w-full object-cover' src="https://plus.unsplash.com/premium_photo-1681248156124-10c713d5074a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          </div>
          <div data-aos='zoom-in-up' data-aos-duration='2000'>
          <p className='text-gray-600'>Applying to Australian Institutions is easy, Although it will take some time and careful planning. Step by step guide to applying to universities in Australia:</p>
            <div className='flex flex-row gap-2 items-center'>
            <IoIosCheckboxOutline className='text-[#EC008C]'/> <p className=''>Ensure you meet all the requirements</p>
            </div>
            <div className='flex flex-row gap-2 items-center'>
            <IoIosCheckboxOutline className='text-[#EC008C]'/> <p className=''>Find a course and select your Universities\Colleges</p>
            </div>
            <div className='flex flex-row gap-2 items-center'>
            <IoIosCheckboxOutline className='text-[#EC008C]'/> <p className=''>Work out how you want to apply</p>
            </div>
            <div className='flex flex-row gap-2 items-center'>
            <IoIosCheckboxOutline className='text-[#EC008C]'/> <p className=''>Take your English Language Exam</p>
            </div>
            <div className='flex flex-row gap-2 items-center'>
            <IoIosCheckboxOutline className='text-[#EC008C]'/> <p className=''>Send off Applications</p>
            </div>
            <div className='flex flex-row gap-2 items-center'>
            <IoIosCheckboxOutline className='text-[#EC008C]'/> <p className=''> Financial Part</p>
            </div>
            <div className='flex flex-row gap-2 items-center'>
            <IoIosCheckboxOutline className='text-[#EC008C]'/> <p className=''>Fee Payment</p>
            </div>
            <div className='flex flex-row gap-2 items-center'>
            <IoIosCheckboxOutline className='text-[#EC008C]'/> <p className=''>Apply your Visa</p>
            </div>
            <div className='flex flex-row gap-2 items-center'>
            <IoIosCheckboxOutline className='text-[#EC008C]'/> <p className=''>Start Planning Your Journey</p>
            </div>
            <div className='flex flex-row gap-2 items-center'>
            <IoIosCheckboxOutline className='text-[#EC008C]'/> <p className=''>Arrive in Australia to begin your studies</p>
            </div>
          </div>
          

        </div>

      </div>
      
       
      
      
    
    </div>
    </div>
    </div>
  )
}

export default AdmissionGuidance