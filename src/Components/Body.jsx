import React from 'react'
import {Link} from 'react-router-dom'
const Body = () => {
  const backgroundStyle = {
    backgroundImage: `url(https://img.freepik.com/premium-photo/beautiful-woman-wearing-graduation-cap-ceremony-robe-holding-degree-looking-positive-happy-standing-smiling-with-confident-smile_255667-15633.jpg)`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Black with 50% transparency
};

  return (
    <div style={backgroundStyle} className='h-[100vh] w-[100vw] bg-black bg-opacity-50'>
        <div className=' mx-4 md:mx-10 lg:mx-32 font-poppins '>
        <div className='grid grid-cols-1 md:grid-cols-2 h-[100vh] place-items-center'>
  <div className='flex flex-col justify-start '>
    <h1 className='my-2 text-4xl font-semibold text-green-600'>Trail<span className='text-blue-600'>Maker</span></h1>
    <h2 className=' my-2 text-2xl font-bold text-red-600'>Educational Consultancy Pvt. Ltd.</h2>
    <p className='font-sm  text-black'>With the motto of “Better counselling, Better Future,” TMEC is recognized as one of the best education consulting organizations in Nepal.</p>
    <div className='flex flex-row justify-start items-center gap-6 my-6'>
      <button className='bg-blue-600 px-4 py-3 rounded text-white font-semibold hover:bg-green-600 duration-500 animation-all ease-in-out'><a href='/contact'>Contact Us Now</a></button>
      <button className='bg-blue-600 px-4 py-3 rounded text-white font-semibold hover:bg-green-600 duration-500 animation-all ease-in-out'><a href='/company-profile'>Explore Now</a></button>
    </div>
  </div>
</div>


        </div>
    </div>
  )
}

export default Body