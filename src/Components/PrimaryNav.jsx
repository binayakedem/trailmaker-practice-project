import React, { useState } from 'react'
import logo from '../assets/logo1.png'
import { IoReorderThree } from "react-icons/io5";
import { MdExpandMore } from "react-icons/md";
import { Link } from 'react-router-dom';
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
                    <li className={`${toggle?'hidden':''} flex flex-row justify-center items-center cursor-pointer`} ><Link to="/">Home</Link></li>
                    <li className={`${toggle?'hidden':''} relative flex flex-row justify-center items-center cursor-pointer py-2`} onClick={()=>setAboutToggle(!aboutToggle)} >About <MdExpandMore /></li>
                    {
                      aboutToggle?<div className='border rounded absolute mx-16 lg:top-14 bg-white z-50 flex flex-col justify-start items-center py-6 px-10 gap-4' onMouseLeave={()=>setAboutToggle(!aboutToggle)}>
                       <Link to='/about-consultancy'>Company Profile</Link>
                       <Link to='/message-from-md'>Message From Md</Link>
                      </div>:''
                    }
                    <li className={`${toggle?'hidden':''} flex flex-row justify-center items-center cursor-pointer`}><Link to="/country">Country</Link> </li>
                    <li className={`${toggle?'hidden':''} flex flex-row justify-center items-center cursor-pointer`} onClick={()=>setCoursesToggle(!coursesToggle)}>Courses <MdExpandMore /></li>
                    {
                      coursesToggle?<div className=' border rounded absolute ml-16 top-60 lg:ml-64 lg:top-14 bg-white z-50 flex flex-col justify-start items-center py-6 px-10 gap-4 cursor-pointer' onMouseLeave={()=>setCoursesToggle(!coursesToggle)}>
                       <Link to='/courses'>GMAT</Link>
                       <Link to='/courses'>IELTS</Link>
                      </div>:''
                    }
                    <li className={`${toggle?'hidden':''}`}><Link to="/gallery">Gallery</Link></li>
                    <li className={`${toggle?'hidden':''} flex flex-row justify-center items-center cursor-pointer`}><Link to="/login">Resource</Link></li>
                    <li className={`${toggle?'hidden':''}`}><Link to="/blog">Blog</Link></li>
                    <li className={`${toggle?'hidden':''}`}><Link to="/contact">Contact</Link></li>
            </div>
            <div className={`flex flex-col md:flex-row justify-end items-start md:items-center gap-4 ${toggle?'hidden':''}`}>
            <button className='bg-green-600 px-4 py-3  text-white md:font-semibold hover:bg-blue-600 duration-500 animation-all ease-in-out'><Link to='/login'>Login</Link></button>
            <button className='bg-green-600 px-4 py-3  text-white md:font-semibold hover:bg-blue-600 duration-500 animation-all ease-in-out'><Link to='/enquiry'>Enquiry</Link></button>
            </div>

        </div>
    </div>
    </div>
  )
}

export default PrimaryNav