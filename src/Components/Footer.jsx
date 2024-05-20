import React from 'react'
import logo from '../assets/logo1.png'
import { FaVoicemail } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className='bg-[#1778BE] text-white '>
        <div className='mx-4 md:mx-10 lg:mx-32 font-poppins'>
            <div className='flex flex-col md:flex-row gap-4 py-8'>
                <div className='h-20 w-90 bg-white'>
                    <img className='h-20 w-auto object-cover' src={logo} alt="logo" />
                    <p className='bg-white text-black'>Trailmaker believes that every student has the potential to study abroad for better study and career.</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    <div className='flex flex-col gap-1'>
                        <h1 className='font-semibold text-xl'>Explore</h1>
                        <a className='text-sm' href="/company-profile">Company Profile</a>
                        <a className='text-sm' href="/message-from-md">Message from MD</a>
                        <a className='text-sm' href="/gallery">Gallery</a>
                        <a className='text-sm' href="/inquiry">Inquiry</a>
                        <a className='text-sm' href="/contact">Contact</a>
                    </div>
                    <div className='flex flex-col gap-1 '>
                        <h1 className='font-semibold text-xl'>Our Services</h1>
                        <a className='text-sm' href="/denmark">Study in Denmark</a>
                        <a className='text-sm' href="/australia">Study in Australia</a>                    </div>
                    <div className='flex flex-col gap-1'>
                        <h1 className='font-semibold text-xl'>Contact Us</h1>
                        <p className='text-sm'>info@trailmaker.com.np</p>
                        <p className='text-sm'>Putalisadak,Kathmandu,Nepal</p>
                        <p className='text-sm'>Sun - Fri: 9.00 AM to 10.00 PM</p>
                      </div>
                    <div className='flex flex-col gap-1'>
                        <h1 className='font-semibold text-xl'>Subscribe To Newsletter</h1>
                        <p className='text-sm'>Enter your mail address to receive our updates, offers and study abroad.</p>
                        <div className='flex flex-row justify-start items-center'>
                            <input className='py-2' type="email" placeholder=' Enter your email' />
                            <button className='bg-green-600 py-2  font-semibold px-2 hover:bg-green-500 duration-75 easy-in-out' type='submit'>Send</button>
                        </div>
                        </div>
                </div>

            </div>

        </div>
    </div>
  )
}

export default Footer