import React, { useState } from 'react'
import { IoReorderThree } from "react-icons/io5";
import { MdExpandMore } from "react-icons/md";
import { Link } from 'react-router-dom';
const PrimaryNav = () => {
  const[toggle, setToggle]=useState(false)
  const[aboutToggle, setAboutToggle]=useState(false)
  const[admissionToggle, setadmissionToggle]=useState(false)
  const[prepToggle, setPrepToggle]=useState(false)
  const[migToggle, setMigToggle]=useState(false)


  return (
    <div className='bg-white sticky top-0 z-50 text-[#0C4DA2] font-semibold'>
    <div className=' bg-white mx-4 md:mx-10 lg:mx-32 font-poppins'>
        <div className='flex flex-col md:flex-row justify-between'>
            <div className='h-20 overflow-hidden flex justify-between md:justify-start items-center'>
                <div>
                <img className='h-20 w-auto object-cover' src='https://vivo.edu.np/assets/img/logo/vivo.png' alt="mylogo" />
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
                    <li className={`${toggle?'hidden':''} flex flex-row justify-center items-center cursor-pointer`} onClick={()=>setadmissionToggle(!admissionToggle)}>Services <MdExpandMore /></li>
                    {
                      admissionToggle?<div className=' border rounded absolute ml-16 top-60 lg:ml-64 lg:top-14 bg-white z-50 flex flex-col justify-start items-center py-6 px-10 gap-4 cursor-pointer' onMouseLeave={()=>setadmissionToggle(!admissionToggle)}>
                       <Link to='/admission'>Admission Guidance</Link>
                       <Link to='/career'>Career Counceling</Link>
                      </div>:''
                    }

                    {/* this is for the migration */}
                    <li className={`${toggle?'hidden':''} flex flex-row justify-center items-center cursor-pointer`} onClick={()=>setMigToggle(!migToggle)}>Migration<MdExpandMore />
                    {
                      migToggle?<div className=' border rounded absolute ml-16 top-60 lg:ml-40 lg:top-14 bg-white z-50 flex flex-col justify-start items-start py-6 px-10 gap-4 cursor-pointer' onMouseLeave={()=>setMigToggle(!migToggle)}>
                       <Link to='/migration'>Partner Visa</Link>
                       <Link to='/migration'>Skilled Migration</Link>
                       <Link to='/migration'>Employed Migration</Link>
                       <Link to='/migration'>Visitor Visa</Link>
                       <Link to='/migration'>Permanent Visa</Link>
                       <Link to='/migration'>Visa Extension</Link>
                       <Link to='/migration'>Temporary Graduate Visa</Link>
                      </div>:''
                    }</li>
                    {/* this is for preparations */}
                    <li className={`${toggle?'hidden':''} flex flex-row justify-center items-center cursor-pointer`} onClick={()=>setPrepToggle(!prepToggle)}>Preparation <MdExpandMore />
                    {
                      prepToggle?<div className=' border rounded absolute  top-60 lg:mr-0 lg:top-14 bg-white z-50 flex flex-col justify-start items-start py-6 px-10 gap-4 cursor-pointer' onMouseLeave={()=>setPrepToggle(!prepToggle)}>
                       <Link to='/ielts'>IELTS</Link>
                       <Link to='/ielts'>GMAT</Link>
                       <Link to='/ielts'>GRE</Link>
                       <Link to='/ielts'>SAT</Link>
                       <Link to='/ielts'>TOEFL</Link>
                       <Link to='/ielts'>English Language</Link>
                      </div>:''
                    }</li>
                    <li className={`${toggle?'hidden':''}`}><Link to="/gallery">Gallery</Link></li>
                    <li className={`${toggle?'hidden':''}`}><Link to="/contact">Contact</Link></li>
            </div>

        </div>
    </div>
    </div>
  )
}

export default PrimaryNav