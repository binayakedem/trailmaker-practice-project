
import React from 'react'
import { FaInstagram,FaFacebook ,FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const MessageFromMd = () => {
  return (
    <div className='flex flex-col'>
       <div className="w-full h-80 overflow-hidden relative">
      <img className="w-full h-full object-cover" src="https://assets.edvoy.com/~article-banner-large/live/images/articles/29d64dbe-194e-4a79-9145-d60d4ad0cb6d_X_most_popular_cities_for_international_students_in_Canada-banner.jpg" alt="image" />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <h1 className="text-white text-3xl font-bold">Message from MD</h1>
      </div>
    </div>
    <div className='mx-4 md:mx-10 lg:mx-32 font-poppins rounded shadow-sm p-4 my-4 shadow-black text-blue-900'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div data-aos='zoom-in-up' data-aos-duration='1200' className='overflow-hidden justify-center items-center'>
                <img className='object-cover w-full h-full' src="https://img.freepik.com/premium-photo/portrait-businessperson-generation-personalities-new-executives-with-good-ideas-personality-vision_921283-2302.jpg" alt="md" />
            </div>
            <div data-aos='zoom-in-up' data-aos-duration='2000' className='flex flex-col gap-3'>
                <h1 className='font-semibold text-green-700'>Sabin K.C.</h1>
                <h1 className='font-bold text-lg text-blue-800'>Message From MD</h1>
                <p>Progress for me has never been a dream. It has always been a far reality and once single milestone is achieved, there is always another one waiting. It is with this belief that I established Trailmaker Education Consultancy in 2014, a company that was in the business of providing access to Nepalese student to study abroad. Almost instantly, TMEC became a prominent name in its business segment, but like every entrepreneur sticks to their dream, I always wanted to push my company to more prosperous milestones. More than being an education consultant, I always perceived my company as an organization that could make a difference with its quality and genuine suggestion to those who seek help for achieving their dreams.</p>
                <p>Taking a path less travelled, I expanded my company as an international entity, where we now operate from three places in Nepal and in Australia Overcoming every obstacles and challenges with the support of my excellent team, I have been successful in bringing TMEC to a new milestone of global recognition. The journey of TMEC is never ending. But with the support of my team and hard work, I am confident that the company will continue to scale milestones of excellence for years to come.
                </p>
                <div className='flex flex-row justify-start items-center gap-2'>
                <p className='font-semibold text-blue-900'>Find on:</p><MdEmail /><FaInstagram /><FaFacebook /><FaTwitter />

                </div>


            </div>

        </div>
        
    </div>
</div>
  )
}

export default MessageFromMd