import React from 'react'
import { FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import {data} from '../Json/review'
import Slider from "react-slick";
const Review = () => {
    const backgroundStyle = {
        backgroundImage: `url(https://media.cnn.com/api/v1/images/stellar/prod/191011110307-02-australia-beautiful-places.jpg?q=w_2187,h_1230,x_0,y_0,c_fill)`,         backgroundPosition: 'center', 
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat', 
      };
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <div style={backgroundStyle}     className=' bg-white'>
      <div className='py-10'>
            <h1 className='font-bold text-xl text-green-600 text-center'>What Are They Talking About Us?</h1>

        </div>
    <div  className='grid grid-cols-1 lg:grid-cols-2 mx-4 md:mx-10 lg:mx-32'>
        
            {
                data.map((d)=>(

            <div data-aos="zoom-in-up" data-aos-duration='1000' key={d.id} className=' flex flex-col w-auto bg-white py-4 px-14 md:20 rounded-lg shadow-sm shadow-black m-4 slider-container'>
                <div className='flex flex-row gap-4 justify-start items-center mb-4'>
                    <div className='h-32 w-32 overflow-hidden rounded-full shadow-sm '><img className='w-full h-full object-cover' src={d.profilePicture} alt="profile" /></div>
                    <div className='flex flex-col'><p className='font-poppins font-bold text-lg text-center text-green-600'>{d.name}</p> <p className='text-gray-700 font-poppins flex flex-row items-center gap-2'><FaLocationDot /><span>{d.location}</span></p></div>
                </div>
                <div className='flex flex-row gap-1 mb-4'>
                    <span><FaStar color='yellow' /></span>
                    <span><FaStar color='yellow' /></span>
                    <span><FaStar color='yellow' /></span>
                    <span><FaStar color='yellow' /></span>
                    <span><FaStar color='yellow' /></span>
                </div>
                <div><p>{d.message}</p></div>
            </div>
            
        ))
    }
      
    </div>
    </div>
  )
}

export default Review