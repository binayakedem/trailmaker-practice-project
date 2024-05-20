import React from 'react'
import { IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { IoTimerSharp } from "react-icons/io5";
import { FaFacebookF,FaTwitterSquare ,FaInstagramSquare,FaPinterestSquare } from "react-icons/fa";
const SecondaryNav = () => {
  return (
    <div className='bg-[#1778BE] text-white z-50 py-2 text-sm'>
        <div className='mx-4 md:mx-10 lg:mx-32'>
            <div className='grid grid-cols-1 md:grid-cols-2 justify-between items-center'>
                <div className='flex flex-row flex-wrap justify-between items-center'>
                    <div className='flex flex-row gap-2'>
                    <IoIosMail  className='cursor-pointer'/>
                    <p>info@trailmaker.com.np</p>
                    </div>
                    <div className='flex flex-row gap-2'>
                    <FaLocationDot   className='cursor-pointer'/>
                    <p>Putalisadak, Kathmandu, Nepal</p>
                    </div>
                    <div className='flex flex-row gap-2'>
                    <IoTimerSharp   className='cursor-pointer' />
                    <p>Sun-Fri:9:00 AM to 10:00 PM</p>
                    </div>


                </div>
                <div className='flex flex-row flex-wrap  justify-start md:justify-end items-center gap-3'>
                    <div><p>Follow Us On:</p></div>
                    <FaFacebookF   className='cursor-pointer'/>
                    <FaTwitterSquare   className='cursor-pointer'/>
                    <FaInstagramSquare    className='cursor-pointer'/>
                    <FaPinterestSquare   className='cursor-pointer'/>
                    

                </div>

            </div>

        </div>
    </div>
  )
}

export default SecondaryNav