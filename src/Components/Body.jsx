import React from 'react'
import {Link} from 'react-router-dom'
const Body = () => {
  const backgroundStyle = {
    backgroundImage: `url(https://vivo.edu.np/assets/img/bg/carousel3.png)`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Black with 50% transparency
};

  return (
    <div style={backgroundStyle} className='h-[85vh] w-[100vw] bg-black bg-opacity-50'>
        <div className=' mx-4 md:mx-10 lg:mx-32 font-poppins '>
        <div className='grid grid-cols-1 md:grid-cols-2 h-[100vh] place-items-center'>
  <div className='flex flex-col justify-start '>
    <h1 className='my-1 text-4xl font-bold text-[#EC008C]'>Now,</h1>
    <h2 className=' my- text-2xl font-bold text-[#0C4DA2]'>Vivo  Educational  Pvt. Ltd.</h2>
    <h1 className='font-bold text-4xl mb-2 text-[#EC008C]'>Help To Study Abroad</h1>
    <p className='font-sm  text-black font-semibold text-sm'>With the motto of “Better counselling, Better Future,” TMEC is recognized as one of the best education consulting organizations in Nepal.</p>
    <div className='flex flex-row justify-start items-center gap-6 my-6'>
      <button className='bg-blue-600 px-4 py-3  text-white font-semibold hover:bg-[#EC008C] duration-500 animation-all ease-in-out'><a href='/contact'>Book Now</a></button>
    </div>
  </div>
</div>


        </div>
    </div>
  )
}

export default Body