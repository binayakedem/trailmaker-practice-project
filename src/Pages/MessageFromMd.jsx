
import React from 'react'
import { FaInstagram,FaFacebook ,FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const MessageFromMd = () => {
  return (
    <div className='flex flex-col'>
       <div className="w-full h-80 overflow-hidden relative">
      <img className="w-full h-full object-cover" src="https://assets.edvoy.com/~article-banner-large/live/images/articles/29d64dbe-194e-4a79-9145-d60d4ad0cb6d_X_most_popular_cities_for_international_students_in_Canada-banner.jpg" alt="image" />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <h1 className="text-white text-3xl font-bold">Message From Director</h1>
      </div>
    </div>
    <div className='mx-4 md:mx-10 lg:mx-32 font-poppins rounded shadow-sm p-4 my-4  text-blue-900'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div data-aos='zoom-in-up' data-aos-duration='1200' className='overflow-hidden justify-center items-center'>
                <img className='object-cover w-full h-full' src="https://vivo.edu.np/assets/img/about/director2.jpg" alt="md" />
            </div>
            <div data-aos='zoom-in-up' data-aos-duration='2000' className='flex flex-col gap-3 border p-6'>
                <h1 className='font-semibold  text-[#EC008C]'>Sabin K.C.</h1>
                <h1 className='font-bold text-lg text-[#0C4DA2]'>Message From Director</h1>
                <p>It is my pleasure to welcome you all to VIVO Education Consultancy’s official website. Diversity and inclusion of thought, skill and experience makes VIVO Education more competitive, more service oriented to navigate the constantly changing global higher education field.</p>
                <p>We offer quality test preparation classes, study abroad and visit visa counseling, preparation and documentation services. We specialize in placing students in USA, Australia, New Zealand and Japan. With our team of experts in education and immigration, we are constantly assisting our students for scholarships and normal admission at foreign institutions.</p>
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