import React from 'react'
import logo from '../assets/image.png'
const University = () => {
    const university = [
        {
          id: 1,
          image: 'https://vivo.edu.np/assets/img/partners/partner-5.png',
          description: 'This is the first sample description for item one.',
          logo: logo
        },
        {
          id: 2,
          image: 'https://vivo.edu.np/assets/img/partners/partner-0%20copy.png',
          description: 'This is the second sample description for item two.',
          logo: logo
        },
        {
          id: 3,
          image: 'https://vivo.edu.np/assets/img/partners/partner-2copy.png',
          description: 'This is the third sample description for item three.',
          logo: logo
        },
        {
          id: 4,
          image: 'https://vivo.edu.np/assets/img/partners/partner3-m.png',
          description: 'This is the fourth sample description for item four.',
          logo: logo
        }
      ];
  return (

    <div className=' '>
    <div className='  mx-4 md:mx-10 lg:mx-32 bg-white'>
              <div>
                <h1 className='font-bold text-4xl text-[#0C4DA2] text-center mt-10'>Who are Our Partners</h1>
              </div>
           <div className='grid col-span-1 md:grid-cols-2 lg:grid-cols-4  md:gap-4 lg:gap-8'>
            {
              university.map((data)=>(
            <div  data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000" key={data.id} className='bg-white shadow-sm shadow-gray-600 my-4 md:my-6 cursor-pointer rounded-2xl hover:translate-y-[-10px]  duration-500 ease-in-out'>
                <div className='overflow-hidden rounded-t-2xl '>
                    <img className='w-full h-full   object-cover' src={data.image} alt="image" />
                </div>
                <div>
                </div>
            </div>
                ))
            }

        </div>
    </div>
              </div>
  )
}

export default University