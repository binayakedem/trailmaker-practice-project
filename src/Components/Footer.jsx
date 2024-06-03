import React from 'react'
import { CiFacebook ,CiYoutube,CiInstagram ,CiTwitter } from "react-icons/ci";
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div className=' text-black bg-gray-100 pt-10'>
        <div className='mx-4 md:mx-10 lg:mx-32 font-poppins flex flex-col justify-center items-center mb-5'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                <div className='flex flex-col'>
                    <div className='my-2'>
                        <img className='object-cover h-24 w-46' src="https://vivo.edu.np/assets/img/logo/vivo.png" alt="logo" />
                    </div>
                    <div className='flex flex-row justify-center items-center gap-3 text-[#0C4DA2] text-lg'>
                        <p>Follow us:</p>
                        <CiFacebook/> <CiYoutube/> <CiInstagram/> <CiTwitter/>
                    </div>
                </div>
                <div className='flex flex-col'>
                        <h1 className='text-[#0C4DA2] font-semibold text-xl mb-2'>Migration</h1>
                        <Link to='/' className='text-gray-600 '>Partner Visa</Link>
                        <Link to='/' className='text-gray-600 '>Visitor Visa</Link>
                        <Link to='/' className='text-gray-600 '>Permanent Visa</Link>
                        <Link to='/' className='text-gray-600 '>Visa Extension</Link>
                    </div>
                    <div className='flex flex-col'>
                        <h1 className='text-[#0C4DA2] font-semibold text-xl mb-2'>Quick Links</h1>
                        <Link to='/about' className='text-gray-600 '>About Us</Link>
                        <Link to='/contact' className='text-gray-600 '>Contact</Link>
                        <Link to='/admission' className='text-gray-600 '>Study Abroad</Link>
                        <Link to='/admission' className='text-gray-600 '>Services</Link>
                    </div>
                    <div className='flex flex-col'>
                        <h1 className='text-[#0C4DA2] font-semibold text-xl mb-2'>Contacts</h1>
                        <Link to='/' className='text-gray-600 '> Putalisadak, Kathmandu</Link>
                        <Link to='/' className='text-gray-600 '> +977 01-4241358</Link>
                        <Link to='/' className='text-gray-600 '> info@vivo.edu.np</Link>
                        <Link to='/' className='text-gray-600 '> vivoedu2013@gmail.com</Link>
                    </div>

            </div>
          
        
        </div>
        <div className='bg-[#002649] text-white py-1'>
                <p className='text-center'>Copyright &copy; 2022.All right reserved.|| Design and Develop by Prabidhi Enterprises</p>
            </div>
    </div>
  )
}

export default Footer