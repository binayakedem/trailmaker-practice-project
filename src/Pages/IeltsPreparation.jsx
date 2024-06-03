import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoTimerOutline } from "react-icons/io5";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { GrCertificate } from "react-icons/gr";
const IeltsPreparation = () => {
  return (
    <div>
        <div className='flex flex-col'>
       <div className="w-full h-40 md:h-80 overflow-hidden relative">
      <img className="w-full h-full object-cover" src="https://vivo.edu.np/assets/img/country-img/vivo2.jpg" alt="image" />
      <div className="absolute inset-0 bg-[#062651] bg-opacity-80 flex flex-col items-center justify-end pb-5 gap-4">
        <h1 className="text-white text-lg font-semibold lg:text-3xl lg:font-bold">Welcome to IeltsPreparation Section</h1>
        <div className='text-white lg:text-lg font-normal flex flex-row justify-center items-center gap-4'>
        <Link to='/'>Home</Link><p>||</p> <p>IeltsPreparation</p>
        </div>
      </div>
    </div>
    <div className='mx-4 md:mx-10 lg:mx-32 font-poppins bg-[#F5F8F9] px-5'>
      <div className='flex flex-col lg:flex-row justify-center items-start gap-6 my-6'>
        <div data-aos='zoom-in-up' data-aos-duration='2000' className='flex flex-col gap-8 w-full'>
          <h1 className='font-bold text-2xl text-[#0C4DA2]'>Ask Us Custom</h1>
          <input type="text" placeholder='Name*' className='px-4 py-2 rounded-sm w-full bg-white border' />
          <input type="text" placeholder='Email*' className='px-4 py-2 rounded-sm w-full bg-white border' />
          <input type="text" placeholder='Phone*' className='px-4 py-2 rounded-sm w-full bg-white border' />
          <input type="text" placeholder='Subject*' className='px-4 py-2 rounded-sm w-full bg-white border' />
          <input type="textarea" placeholder='Message*' className='px-4 py-10 rounded-sm w-full bg-white border' />
          <button className=' bg-[#0C4DA2] font-semibold text-white py-3 text-lg'>Submit Now</button>
          <div className='relative overflow-hidden'>
            <img className='h-full w-full object-cover' src="https://vivo.edu.np/assets/img/business-visa/business-adds.jpg" alt="" />
            <div className='absolute inset-0 bg-black  text-white bg-opacity-50 flex flex-col justify-end  items-center'>
              <p className='font-semibold'>HIGHER STUDY</p>
              <h1 className='font-bold text-3xl'>HIGHER STUDY</h1>
              <Link to='/contact' className='rounded py-1 px-2 mb-4 bg-[#FFE600] text-black'>Apply VISA</Link>

            </div>
          </div>

        </div>
        <div data-aos='zoom-in' data-aos-duration='1500' className='flex flex-col gap-2'>
          <h1 className='font-bold text-3xl mb-4 text-[#0C4DA2]'>IELTS Course Overview</h1>
          <p className='text-gray-600'>IELTS stands for International English Language Testing System, which is a global state sanctioned trial of English language capability for non-local English language speakers. The International English Language Testing System (IELTS) measures the language proficiency of people who want to study or work where English is used as a language of communication. It uses a nine-band scale to clearly identify levels of proficiency, from non-user (band score 1) through to expert (band score 9). It is jointly managed by the British Council, IDP: IELTS Australia and Cambridge Assessment English.</p>
          <p className='text-gray-600'>There are two types of IELTS test: Academic and General Training. Listening and Speaking are the same for the both tests; however the topic of the Reading and Writing sections differs relying upon which test the candidate takes. IELTS can be taken either on paper or computer depending on the choice of the test taker. The test score is valid for two years from the test date.</p>
          <p className='text-gray-600'>Academic Training (AT): The IELTS Academic test is for people applying for higher education or professional registration in an English speaking environment. It reflects some of the features of academic language and assesses whether you are ready to begin studying or training.</p>
          <p className='text-gray-600'>General Training (GT): The IELTS General Training test is for those who are going to English speaking countries for secondary education, work experience or training programs. It is also a requirement for migration to Australia, Canada, New Zealand and the UK. The test focuses on basic survival skills in broad social and workplace contexts.</p>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
            <div className='flex flex-row justify-center items-center gap-2 border p-4 '>
              <div className='text-4xl text-[#EC008C]'><IoTimerOutline /></div>
              <div className='flex flex-col'>
                <p className='text-[#EC008C]'>Classes</p>
                <p className='font-semibold text-lg text-[#0C4DA2]'>Approx 28 Classes</p>

              </div>
            </div>
            <div className='flex flex-row justify-center items-center gap-2 border p-4'>
              <div className='text-4xl text-[#EC008C]'><IoTimerOutline /></div>
              <div className='flex flex-col'>
                <p className='text-[#EC008C]'>Duration</p>
                <p className='font-semibold text-lg text-[#0C4DA2]'>Approx 12 Classes</p>

              </div>
            </div>
            <div className='flex flex-row justify-center items-center gap-2 border p-4'>
              <div className='text-4xl text-[#EC008C]'><GrCertificate /></div>
              <div className='flex flex-col'>
                <p className='text-[#EC008C]'>
Certificates</p>
                <p className='font-semibold text-lg text-[#0C4DA2]'>Course Certificates</p>

              </div>
            </div>
            <div className='flex flex-row justify-center items-center gap-2 border p-4'>
              <div className='text-4xl text-[#EC008C]'><FaMoneyCheckDollar /></div>
              <div className='flex flex-col'>
                <p className='text-[#EC008C]'>Cost</p>
                <p className='font-semibold text-lg text-[#0C4DA2]'>NRP:21,500</p>

              </div>
            </div>
          </div>

        </div>

      </div>
      
       
      
      
    
    </div>
    </div>
    </div>
  )
}

export default IeltsPreparation