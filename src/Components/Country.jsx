import React from 'react'
import 'aos/dist/aos.css';
import { Link  } from 'react-router-dom';

const Country = () => {
  return (
    <div className='mx-4 md:mx-10 lg:mx-32 font-poppins  bg-gray-50'>
        <div>
            <div className=' text-center mb-2 md:mb-6 lg:mb-10  '>
                <p className='text-[#EC008C] font-semibold text-lg my-2 pt-6'>Countries To Apply</p>
                <h1 className='text-[#005AAB] font-bold text-4xl'>Let Us Arrange Your Expedition To Dreamland</h1>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-2 md:gap-4  mb-2 md:mb-3'>
                <div data-aos="fade-right" data-aos-duration="1000" className='relative overflow-hidden rounded-3xl '>
                    <div className='overflow-hidden  shadow-lg shadow-black border-3'>
                        <img className='w-full h-full object-cover  hover:scale-125 duration-500 ease-in-out cursor-pointer' src="https://assets.traveltriangle.com/blog/wp-content/uploads/2015/09/Auckland.jpg" alt="ukimage" />
                    </div>
                    <div className='absolute inset-0 bg-black opacity-30 cursor-pointer '>
                    </div>
                    <div className='absolute inset-0 font-bold text-3xl font-poppins flex justify-center items-center text-center'>
                        <Link to='/abroad'  className='text-white text-center cursor-pointer hover:translate-y-[-10px] duration-300 ease-in-out'>Study in Siria</Link>
                    </div>

                </div>
                <div data-aos="zoom-in-up" data-aos-duration="1700" className='relative overflow-hidden rounded-3xl '>
                    <div className='overflow-hidden '>
                        <img className='w-full h-full object-cover hover:scale-125 duration-500 ease-in-out cursor-pointer' src="https://media.timeout.com/images/105995781/image.jpg" alt="ukimage" />
                    </div>
                    <div className='absolute inset-0 bg-black opacity-30 cursor-pointer'>
                    </div>
                    <div className='absolute inset-0 font-bold text-3xl font-poppins flex justify-center items-center text-center'>
                        <Link to='/abroad' className='text-white text-center cursor-pointer hover:translate-y-[-10px] duration-300 ease-in-out'>Study in Newzealand</Link>
                    </div>

                </div>

            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-3 bg-white'>
                <div data-aos="zoom-in-up" data-aos-duration='1000' className='relative overflow-hidden rounded-3xl '>
                    <div className='overflow-hidden '>
                        <img className='w-full h-full object-cover hover:scale-125 duration-500 ease-in-out cursor-pointer' src="https://media.cnn.com/api/v1/images/stellar/prod/191011110307-02-australia-beautiful-places.jpg?q=w_2187,h_1230,x_0,y_0,c_fill" alt="ukimage" />
                    </div>
                    <div className='absolute inset-0 bg-black opacity-30 cursor-pointer '>
                    </div>
                    <div className='absolute inset-0 font-bold text-3xl font-poppins flex justify-center items-center text-center'>
                        <Link to='/abroad' className='text-white text-center cursor-pointer hover:translate-y-[-10px] duration-300 ease-in-out'>Study in Astralia</Link>
                    </div>

                </div>
                <div data-aos="zoom-in-up" data-aos-duration='1500' className='relative overflow-hidden rounded-3xl '>
                    <div className='overflow-hidden '>
                        <img className='w-full h-full object-cover hover:scale-125 duration-500 ease-in-out cursor-pointer' src="https://media.timeout.com/images/105995781/image.jpg" alt="ukimage" />
                    </div>
                    <div className='absolute inset-0 bg-black opacity-30 cursor-pointer'>
                    </div>
                    <div className='absolute inset-0 font-bold text-3xl font-poppins flex justify-center items-center text-center'>
                        <Link to='/abroad' className='text-white text-center cursor-pointer hover:translate-y-[-10px] duration-300 ease-in-out'>Study in Cybrus</Link>
                    </div>

                </div>
                <div data-aos="zoom-in-up" data-aos-duration='2000' className='relative overflow-hidden rounded-3xl '>
                    <div className='overflow-hidden '>
                        <img className='w-full h-full object-cover hover:scale-125 duration-500 ease-in-out cursor-pointer' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTi90K6Db_XVeZdPAz4L3UDC-5sAbx5NttK8jG2Wd2qg&s" alt="ukimage" />
                    </div>
                    <div className='absolute inset-0 bg-black opacity-30 cursor-pointer'>
                    </div>
                    <div className='absolute inset-0 font-bold text-3xl font-poppins flex justify-center items-center text-center'>
                        <Link to='/abroad' className='text-white text-center cursor-pointer hover:translate-y-[-10px] duration-300 ease-in-out'>Study in UK</Link>
                    </div>

                </div>

            </div>


        </div>
    </div>
  )
}

export default Country