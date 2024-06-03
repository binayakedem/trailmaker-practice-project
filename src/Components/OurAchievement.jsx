import React from 'react'

const OurAchievement = () => {
  return (
    <div className='my-8'>
      <div className='relative'>
        <img className=' w-full object-cover h-64' src="https://media.cnn.com/api/v1/images/stellar/prod/191011110307-02-australia-beautiful-places.jpg?q=w_2187,h_1230,x_0,y_0,c_fill" alt="" />
        <div className='absolute inset-0 bg-[#000000] bg-opacity-50 text-white '>
          <div className='text-center my-4'>
            <h1 className='text-[#EC008C] font-semibold text-lg'>Our Achievement</h1>
            <h1 className='text-4xl font-bold'>So Far Have Achieved</h1>
          </div>
          <div className=' mx-4 md:mx-10 lg:mx-32 font-poppins justify-center items-center grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8'>
            <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className='flex flex-col my-2'>
              <h1 className='font-semibold text-3xl'>25k+</h1>
              <p className='text-xl'>Happy Students</p>
            </div>
            <div  data-aos="zoom-in" data-aos-duration='1000' className='flex flex-col'>
              <h1 className='font-semibold text-3xl'>80+</h1>
              <p className='text-xl'>Countries Affiliation</p>
            </div>
            <div data-aos="zoom-in-down" data-aos-duration='1000' className='flex flex-col'>
              <h1 className='font-semibold text-3xl'>360</h1>
              <p className='text-xl'> Top University Partner</p>
            </div>
            <div data-aos="zoom-out-down" data-aos-duration='1000' className='flex flex-col'>
              <h1 className='font-semibold text-3xl'>23k+</h1>
              <p className='text-xl'>Visa & Immigration</p>
            </div>


          </div>
        </div>

      </div>
    </div>
  )
}

export default OurAchievement