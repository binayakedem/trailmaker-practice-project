import React from 'react'
import busineman from '../assets/pngwing.com.png'
const MeetConsult = () => {
  return (
    <div className='mx-4 md:mx-10 lg:mx-32 font-poppins'>
        <div className='flex flex-col justify-center items-center bg-gray-200'>
            <div>
                <p className='text-gray-800 text-lg font-semibold mb-4 pt-10'>Professional People</p>
                <h1 className='text-green-600 font-bold text-xl'>Meet Our Regular Visa Immigration Consultants Team</h1>
            </div>
            <div data-aos="zoom-in-up" data-aos-duration='1400' className='grid grid-cols-1 md:grid-cols-2 '>
                <div className='h-90 w-auto     overflow-hidden'>
                    <img className='h-90 w-90 object-cover' src={busineman} alt=" mainconsultant" />
                </div>
                <div className='flex justify-center items-center flex-col'><h1 className='font-bold text-xl text-green-600 mb-4'>Mr. Dhiraj Jha</h1><p>I am a consultant at a consultancy that offers a variety of courses. Our range spans diverse subjects, designed to meet various professional and educational needs. We provide customized training solutions and support, ensuring our clients achieve their learning and career goals.</p></div>
                
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 my-6'>
                <div className='relative'>
                    <div className='overflow-hidden'>
                    <img className='h-full w-full object-cover' src="https://img.freepik.com/free-photo/handsome-young-businessman-suit_273609-6513.jpg" alt="image" />
                    </div>
                    <div className='absolute inset-0 bg-black opacity-0 cursor-pointer flex items-end  hover:opacity-50 duration-500 ease-in-out'>
                         <h1 className='font-semibold text-lg text-white opacity-100'>Mr.Kiran Shah</h1>
                         
                    </div>
                </div>
                <div className='relative'>
                    <div className='overflow-hidden'>
                    <img className='h-full w-full object-cover' src="https://www.westend61.de/images/0001528008pw/confident-businessman-standing-with-arms-crossed-against-building-SBOF02854.jpg" alt="image" />
                    </div>
                    <div className='absolute inset-0 bg-black opacity-0 cursor-pointer flex items-end  hover:opacity-70 duration-500 ease-in-out'>
                         <h1 className='font-semibold text-lg text-white opacity-100'>Mr.Dhiren Sakya</h1>
                         
                    </div>
                </div>
                <div className='relative'>
                    <div className='overflow-hidden'>
                    <img className='h-full w-full object-cover' src="https://www.shutterstock.com/image-photo/smiling-young-middle-eastern-man-600nw-2063524544.jpg" alt="image" />
                    </div>
                    <div className='absolute inset-0 bg-black opacity-0 cursor-pointer flex items-end  hover:opacity-50 duration-500 ease-in-out'>
                         <h1 className='font-semibold text-lg text-white opacity-100'>Mr.Rajen Bhatt</h1>
                         
                    </div>
                </div>

            </div>

        </div>
    </div>
  )
}

export default MeetConsult