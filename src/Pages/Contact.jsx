import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { Link } from 'react-router-dom'
import { IoCallSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { MdAccessTimeFilled } from "react-icons/md";
const Contact = () => {
  return (
    <div className='flex flex-col'>
       <div className="w-full h-40 md:h-80 overflow-hidden relative">
      <img className="w-full h-full object-cover" src="https://st2.depositphotos.com/1265075/7446/i/450/depositphotos_74468913-stock-photo-contact-us-icons-on-cubes.jpg" alt="image" />
      <div className="absolute inset-0 bg-[#062651] bg-opacity-80 flex flex-col items-center justify-end pb-5 gap-4">
        <h1 className="text-white text-lg font-semibold lg:text-3xl lg:font-bold">Welcome to Contact Section</h1>
        <div className='text-white lg:text-lg font-normal flex flex-row justify-center items-center gap-4'>
        <Link to='/'>Home</Link><p>||</p> <p>Contact Us</p>
        </div>
      </div>
    </div>
    <div className='mx-4 md:mx-10 lg:mx-32 font-poppins '>
        <div className=' my-4 grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div data-aos='zoom-in-up' data-aos-duration='1000' className=' p-10 shadow rounded-sm'>
              <div><h1 className='text-xl font-bold text-[#0C4DA2] mb-10'>Send Us A Message</h1></div>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
                  <div className='flex flex-col gap-4'>
                <input className='border w-full p-3 rounded bg-[#F0F3FF] text-white' type="text" placeholder='Enter Name' />
                <input className='border w-full p-3 rounded bg-[#F0F3FF]' type="email" placeholder='Enter Email' />
                  </div>
                  <div className='flex flex-col gap-4'>
                <input className='border w-full p-3 rounded bg-[#F0F3FF]' type="number" placeholder='Enter Phone' />
                <input className='border w-full p-3 rounded bg-[#F0F3FF]' type="text" placeholder='Enter Subject' />
                  </div>
                </div>             
      <input className='w-full h-28 bg-[#F0F3FF] border p-3 my-3 rounded'type="textarea" placeholder='Enter message' />
      <button className='border-2 text-[#0C4DA2] hover:bg-[#0C4DA2] duration-500 ease-in-out hover:text-white font-semibold py-3 px-5 rounded-md'>Send Message</button>
            </div>
            <div data-aos='zoom-in' data-aos-duration='2000' className='flex flex-col text-gray-700'>
              <div className='flex flex-col gap-3 mb-4'>
                <h1 className='text-blue-600 font-semibold text-lg'>Get In Touch</h1>
              </div>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div className='flex flex-col gap-4'>
                <div className='flex flex-col gap-4 bg-[#F0F3FF] p-4'>
                    <div className='flex flex-row justify-start  items-center gap-2 font-semibold text-xl'>
                    <FaLocationDot  className='text-[#EF018D] text-3xl'/>
                      <h1 className='text-[#0C4DA2]'>Address</h1>
                    </div>
                    <div>
                      <p className='text-[#6F6F6F]'>Mid-Baneshwor,</p>
                      <p className='text-[#6F6F6F]'> Kathmandu</p>
                    </div>
                    
                  </div>
                  <div className='flex flex-col gap-4 bg-[#F0F3FF] p-4'>
                    <div className='flex flex-row justify-start  items-center gap-2 font-semibold text-xl'>
                    <IoCallSharp  className='text-[#EF018D] text-3xl'/>
                      <h1 className='text-[#0C4DA2]'>Call Us</h1>
                    </div>
                    <div>
                      <p className='text-[#6F6F6F]'>01-4480026</p>
                      <p className='text-[#6F6F6F]'> +977 9851315160</p>
                    </div>
                    
                  </div>
                </div>
                <div className='flex flex-col gap-4'>
                <div className='flex flex-col gap-4 bg-[#F0F3FF] p-4'>
                    <div className='flex flex-row justify-start  items-center gap-2 font-semibold text-xl'>
                    <MdEmail  className='text-[#EF018D] text-3xl'/>
                      <h1 className='text-[#0C4DA2]'>Email Us</h1>
                    </div>
                    <div>
                      <p className='text-[#6F6F6F]'>info@wallabieseducation.com</p>
                      <p className='text-[#6F6F6F]'> vivoedu2013@gmail.com</p>
                    </div>
                    
                  </div>
                  <div className='flex flex-col gap-4 bg-[#F0F3FF] p-4'>
                    <div className='flex flex-row justify-start  items-center gap-2 font-semibold text-xl'>
                    <MdAccessTimeFilled  className='text-[#EF018D] text-3xl'/>
                      <h1 className='text-[#0C4DA2]'>Open Hours</h1>
                    </div>
                    <div>
                      <p className='text-[#6F6F6F]'>Monday - Friday</p>
                      <p className='text-[#6F6F6F]'> 9:00AM - 05:00PM</p>
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

export default Contact