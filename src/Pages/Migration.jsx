import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoIosCheckboxOutline } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
const Migration = () => {
    const[toggle,setToggle]=useState('')
  return (
    <div>
        <div className='flex flex-col'>
       <div className="w-full h-40 md:h-80 overflow-hidden relative">
      <img className="w-full h-full object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhgLNFEjOn0kqr6zbjMDyst1NLIraEWmKTMT2HzYfloqYBq4en8oAMLLW95DC_cGLI6Y8&usqp=CAU" alt="image" />
      <div className="absolute inset-0 bg-[#062651] bg-opacity-80 flex flex-col items-center justify-end pb-5 gap-4">
        <h1 className="text-white text-lg font-semibold lg:text-3xl lg:font-bold">Welcome to Migration Section</h1>
        <div className='text-white lg:text-lg font-normal flex flex-row justify-center items-center gap-4'>
        <Link to='/'>Home</Link><p>||</p> <p>Migration</p>
        </div>
      </div>
    </div>
    <div className='mx-4 md:mx-10 lg:mx-32 font-poppins bg-[#F5F8F9] px-5'>
      <div className='flex flex-col lg:flex-row justify-center items-start gap-6 my-6'>
        <div data-aos="fade-up" data-aos-duration='1200' className='flex flex-col gap-8 w-full'>
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
        <div className='flex flex-col gap-2'>
          <h1 className='font-bold text-3xl mb-4 text-[#0C4DA2]'> Overview</h1>
          <div data-aos='zoom-in-down' data-aos-duration='2000' className='overflow-hidden'>
            <img className='h-full w-full object-cover' src="https://vivo.edu.np/assets/img/country-img/vivo4.jpg" alt="" />
          </div>
          <p data-aos='zoom-out' data-aos-duration='2000' className='text-gray-600'>Under Partner Visa Stream, the applicant may be sponsored by their Australian spouse or interdependent partner, who must be an Australian citizen, resident in Australia. Once a temporary partner visa is issued, it is valid for the entire waiting period until the immigration department decides on your permanent partner visa application. Once you have been approved by a Visa Permanent Partner, you can stay in Australia with benefits. You must apply for a temporary and permanent visa, which you can do by completing the application and sending it to the right bodies so that it can be reviewed. If you have met the criteria for this Australian visa after the assessment, a temporary partner visa can be provided to you.</p>

          <div data-aos="fade-down" data-aos-duration='1900'>
            <h1 className='font-semibold text-3xl text-[#0C4DA2] my-5'>Necessary Documents</h1>
            <div className='flex flex-row gap-2 items-center'>
            <IoIosCheckboxOutline className='text-[#EC008C]'/> <p className=''>Two Recently taken photos must be attach</p>
            </div>
            <div className='flex flex-row gap-2 items-center'>
            <IoIosCheckboxOutline className='text-[#EC008C]'/> <p className=''>A valid passport</p>
            </div>
            <div className='flex flex-row gap-2 items-center'>
            <IoIosCheckboxOutline className='text-[#EC008C]'/> <p className=''>Travel insurance policy</p>
            </div>
            <div className='flex flex-row gap-2 items-center'>
            <IoIosCheckboxOutline className='text-[#EC008C]'/> <p className=''>Proof of accommodation</p>
            </div>
            <div className='flex flex-row gap-2 items-center'>
            <IoIosCheckboxOutline className='text-[#EC008C]'/> <p className=''>Proof of paid visa fee</p>
            </div>
          </div>
          <div data-aos="zoom-in-down" data-aos-duration='1200' className='flex flex-col'>
            <div className=' flex flex-col justify-center  bg-white border'>
                <div className='flex flex-row justify-between items-center p-1'>
                <p className='font-semibold text-[#0C4DA2] '>How long does it take for a Transit Visa to process?</p><FaPlus className='cursor-pointer'  onClick={()=>setToggle('1')}/>
                </div>
                <div className='border'>
                    {
                        toggle=='1'?<div>
                            <p>The European business visa is mainly for people who want to participate in business meetings, conferences in Europe. Visa holders are not allowed to work or seek employment in Europe. Individuals and circumstances influence how long it takes to apply for a business visa.</p>
                        </div>:''
                    }
                </div>
            </div>
            <div className=' flex flex-col justify-center  bg-white border'>
                <div className='flex flex-row justify-between items-center p-1'>
                <p className='font-semibold text-[#0C4DA2] '>How long does it take for a Transit Visa to process?</p><FaPlus className='cursor-pointer'  onClick={()=>setToggle('2')}/>
                </div>
                <div className='border'>
                    {
                        toggle=='2'?<div>
                            <p>The European business visa is mainly for people who want to participate in business meetings, conferences in Europe. Visa holders are not allowed to work or seek employment in Europe. Individuals and circumstances influence how long it takes to apply for a business visa.</p>
                        </div>:''
                    }
                </div>
            </div>
            <div className=' flex flex-col justify-center  bg-white border'>
                <div className='flex flex-row justify-between items-center p-1'>
                <p className='font-semibold text-[#0C4DA2] '>How long does it take for a Transit Visa to process?</p><FaPlus className='cursor-pointer'  onClick={()=>setToggle('3')}/>
                </div>
                <div className='border'>
                    {
                        toggle=='3'?<div>
                            <p>The European business visa is mainly for people who want to participate in business meetings, conferences in Europe. Visa holders are not allowed to work or seek employment in Europe. Individuals and circumstances influence how long it takes to apply for a business visa.</p>
                        </div>:''
                    }
                </div>
            </div>
            <div className=' flex flex-col justify-center  bg-white border'>
                <div className='flex flex-row justify-between items-center p-1'>
                <p className='font-semibold text-[#0C4DA2] '>How long does it take for a Transit Visa to process?</p><FaPlus className='cursor-pointer'  onClick={()=>setToggle('4')}/>
                </div>
                <div className='border'>
                    {
                        toggle=='4'?<div>
                            <p>The European business visa is mainly for people who want to participate in business meetings, conferences in Europe. Visa holders are not allowed to work or seek employment in Europe. Individuals and circumstances influence how long it takes to apply for a business visa.</p>
                        </div>:''
                    }
                </div>
            </div>
            <div className=' flex flex-col justify-center  bg-white border'>
                <div className='flex flex-row justify-between items-center p-1'>
                <p className='font-semibold text-[#0C4DA2] '>How long does it take for a Transit Visa to process?</p><FaPlus className='cursor-pointer'  onClick={()=>setToggle('5')}/>
                </div>
                <div className='border animate-all duration-1000 '>
                    {
                        toggle=='5'?<div>
                            <p className='py-6'>The European business visa is mainly for people who want to participate in business meetings, conferences in Europe. Visa holders are not allowed to work or seek employment in Europe. Individuals and circumstances influence how long it takes to apply for a business visa.</p>
                        </div>:''
                    }
                </div>
            </div>

          </div>



          
          <div>

          </div>

        </div>

      </div>
      
       
      
      
    
    </div>
    </div>
    </div>
  )
}

export default Migration