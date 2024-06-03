import React, { useState } from 'react'
import { FaArrowRight } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Abroad = () => {
    const[toggle,setToggle]=useState('')
  return (
    <div>

<div className="w-full h-40 md:h-80 overflow-hidden relative">
      <img className="w-full h-full object-cover" src="https://miro.medium.com/v2/resize:fit:1168/1*tRBMVt415ETJqiinu0rXAA.jpeg" alt="image" />
      <div className="absolute inset-0 bg-[#062651] bg-opacity-80 flex flex-col items-center justify-end pb-5 gap-4">
        <h1 className="text-white text-lg font-semibold lg:text-3xl lg:font-bold">Welcome to Country Section</h1>
        <div className='text-white lg:text-lg font-normal flex flex-row justify-center items-center gap-4'>
        <Link to='/'>Home</Link><p>||</p> <p>Country</p>
        </div>
      </div>
    </div>
    <div className='mx-4 md:mx-10 lg:mx-32'>
        <div className='grid grid-cols-1 md:grid-cols-2 md:gap-5 mt-10'>
            <div className=''> 
                <div className='flex flex-col gap-4 bg-[#062651] text-white p-4'>
                <div className='flex flex-row justify-between items-center font-semibold hover:border-l-4 border-white'>
                    <p>Australia</p><FaArrowRight />
                </div>
                <div className='flex flex-row justify-between items-center font-semibold hover:border-l-4 border-white'>
                    <p>USA</p><FaArrowRight />
                </div>
                <div className='flex flex-row justify-between items-center font-semibold hover:border-l-4 border-white'>
                    <p>Norway</p><FaArrowRight />
                </div>
                <div className='flex flex-row justify-between items-center font-semibold hover:border-l-4 border-white'>
                    <p>UK</p><FaArrowRight />
                </div>
                <div className='flex flex-row justify-between items-center font-semibold hover:border-l-4 border-white'>
                    <p>Canada</p><FaArrowRight />
                </div>
                </div>
                <div className='mt-10 mb-4 bg-blue-50 p-4 rounded'>
                <h1 className='text-[#062651] font-bold text-4xl mb-4'>Ask Us Custom</h1>
                <div className='flex flex-col gap-4'>
                    <input type="text" placeholder='Name*' className='py-2 px-4 border w-full rounded'/>
                    <input type="text" placeholder='Name*' className='py-2 px-4 border w-full rounded'/>
                    <input type="text" placeholder='Name*' className='py-2 px-4 border w-full rounded'/>
                    <input type="text" placeholder='Name*' className='py-2 px-4 border w-full rounded'/>
                    <input type="text" placeholder='Name*' className='py-2 px-4 border w-full rounded'/>
                    <button className='cursor-pointer bg-[#0C4DA2] rounded-md w-1/4 text-white font-semibold py-2 '>Submit Now</button>
                </div>
            </div>
            <div className='flex flex-col'>
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
            </div>
            <div>
                <div className='overflow-hidden'>
                    <img className='object-cover h-full w-full' src="https://vivo.edu.np/assets/img/about/aboad.jpg" alt="" />
                </div>
                <div>
                    <p className='my-3'>Australia is world famous for its natural wonders and wide open spaces, its beaches, deserts, “the bush”, and “the Outback”. Australia is one of the world’s most highly urbanized countries; it is well known for the attractions of its large cities such as Sydney, Melbourne, Brisbane, and Perth. Australia is the only continent covered by a single country with truly unique landscapes, natural wonders and extraordinary experiences for travellers. Australian education system is best and suits the tuition fees and living expenses in Australia is quite flexible for international students as compared to other country</p>
                </div>
                <div className='flex flex-col gap-4 text-gray-700'>
                    <h1 className='font-semibold text-3xl text-[#0C4DA2] my-3'>Why Study in Australia?</h1>
                    <p>According to the United Nations, Australia is the second-best country in the world to live, due to its excellent quality of life index. Australia is on top because it has great access to education, high life expectation and socioeconomic well-being. Australia is more affordable than most other destinations and offers a high standard of quality education, excellent living condition and a multicultural society. Australia’s Higher Education Institutions rank among the world best. A degree from any University in Australia gives you a CRICOS code which depicts that it is globally recognized. This diverse country has a huge variety of opportunities for someone studying abroad.</p>
                    <p>International students have a wide variety of choice when it comes to studying in Australia. Australia is home to 43 universities in total, with 40 Australian, two international and one private university. It’s a case of quality as well as quantity, with six Australian universities ranking in the internationally renowned top 100. Australia is a diverse melting pot of cultures. The sheer amount of cultures that abound offers the chance to step outside of your usual comfort zone and experience something new, but also to feel a sense of belonging in the multicultural setting. Some of the benefits of living in a multicultural society include wonderful culinary offerings, public international celebrations and the chance to learn a different language.</p>
                </div>
            </div>
            

        </div>
    </div>
    </div>
  )
}

export default Abroad