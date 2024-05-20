import React, { useState } from 'react'
import logo from '../assets/logo1.png'
import { IoReorderThree } from "react-icons/io5";
import { MdExpandMore } from "react-icons/md";
const PrimaryNav = () => {
  const[toggle, setToggle]=useState(false)
  const[aboutToggle, setAboutToggle]=useState(false)
  const[coursesToggle, setCoursesToggle]=useState(false)

  return (
    <div className='bg-white sticky top-0 z-50 '>
    <div className=' bg-white mx-4 md:mx-10 lg:mx-32 font-poppins'>
        <div className='flex flex-col md:flex-row justify-between'>
            <div className='h-20 overflow-hidden flex justify-between md:justify-start items-center'>
                <div>
                <img className='h-20 w-auto object-cover' src={logo} alt="mylogo" />
                </div>
                <div className=' md:hidden lg:hidden flex justify-center items-center text-3xl text-black font-bold'>
                <IoReorderThree onClick={()=>setToggle(!toggle)}/>
                </div>
            </div>
            <div className={`flex list-none flex-col md:flex-row  justify-start md:justify-between items-start md:items-center gap-8`}>
                    <li className={`${toggle?'hidden':''} flex flex-row justify-center items-center cursor-pointer`} ><a href="/">Home</a></li>
                    <li className={`${toggle?'hidden':''} relative flex flex-row justify-center items-center cursor-pointer py-2`} onClick={()=>setAboutToggle(!aboutToggle)} >About <MdExpandMore /></li>
                    {
                      aboutToggle?<div className='border rounded absolute mx-16 lg:top-14 bg-white z-50 flex flex-col justify-start items-center py-6 px-10 gap-4' onMouseLeave={()=>setAboutToggle(!aboutToggle)}>
                       <a href='/about-consultancy'>Company Profile</a>
                       <a href='/message-from-md'>Message From Md</a>
                      </div>:''
                    }
                    <li className={`${toggle?'hidden':''} flex flex-row justify-center items-center cursor-pointer`}><a href="/country">Country</a> </li>
                    <li className={`${toggle?'hidden':''} flex flex-row justify-center items-center cursor-pointer`} onClick={()=>setCoursesToggle(!coursesToggle)}>Courses <MdExpandMore /></li>
                    {
                      coursesToggle?<div className=' border rounded absolute ml-16 top-60 lg:ml-64 lg:top-14 bg-white z-50 flex flex-col justify-start items-center py-6 px-10 gap-4 cursor-pointer' onMouseLeave={()=>setCoursesToggle(!coursesToggle)}>
                       <a href='/courses'>GMAT</a>
                       <a href='/courses'>IELTS</a>
                      </div>:''
                    }
                    <li className={`${toggle?'hidden':''}`}><a href="/gallery">Gallery</a></li>
                    <li className={`${toggle?'hidden':''} flex flex-row justify-center items-center cursor-pointer`}><a href="/login">Resource</a></li>
                    <li className={`${toggle?'hidden':''}`}><a href="/blog">Blog</a></li>
                    <li className={`${toggle?'hidden':''}`}><a href="/contact">Contact</a></li>
            </div>
            <div className={`flex flex-col md:flex-row justify-end items-start md:items-center gap-4 ${toggle?'hidden':''}`}>
            <button className='bg-green-600 px-4 py-3  text-white md:font-semibold hover:bg-blue-600 duration-500 animation-all ease-in-out'><a href='/login'>Login</a></button>
            <button className='bg-green-600 px-4 py-3  text-white md:font-semibold hover:bg-blue-600 duration-500 animation-all ease-in-out'><a href='/enquiry'>Enquiry</a></button>
            </div>

        </div>
    </div>
    </div>
  )
}

export default PrimaryNav