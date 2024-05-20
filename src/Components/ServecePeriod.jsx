import React from 'react'
import Slider from "react-slick";
const ServecePeriod = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };
  return (
    <div className='mx-4 md:mx-10 lg:mx-32 font-poppins'>
      <hr className='border border-black'/>
      <div>
        <h1 className='font-bold text-xl text-green-600 text-center my-8'>Providing quality service since 2014 A.D.</h1>
      </div>
        <div className=''>
        <div className="slider-container">
        <Slider {...settings}>
          <div  className='bg-gray-50 mb-3 shadow-md p-2 cursor-pointer mx-2'>
          <div className='overflow-hidden'><img className='object-cover hover:scale-125 duration-1000 ease-in-out' src='https://c8.alamy.com/comp/2JK6ER0/a-wooden-block-with-the-words-building-organizational-culture-modern-approach-to-working-with-people-in-a-team-creative-concept-2JK6ER0.jpg' alt="counseling" /></div>
          <div>
            <h1 className='font-bold text-xl text-green-600 my-2'>Global Reach</h1>
            <p className='text-gray-800'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam modi excepturi tempora esse rem totam, nemo ratione non saepe harum!</p>
          </div>
          </div>
          <div  className='bg-gray-50 mb-3 shadow-md p-2 cursor-pointer mx-2'>
          <div className='overflow-hidden'><img className='object-cover hover:scale-125 duration-1000 ease-in-out' src='https://c8.alamy.com/comp/KWT7R5/smiling-beauty-female-home-tutor-explaining-school-education-content-KWT7R5.jpg' alt="counseling" /></div>
          <div>
            <h1 className='font-bold text-xl text-green-600 my-2'>Personal approach</h1>
            <p className='text-gray-800'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam modi excepturi tempora esse rem totam, nemo ratione non saepe harum!</p>
          </div>
          </div>    
          <div  className='bg-gray-50 mb-3 shadow-md p-2 cursor-pointer mx-2'>
          <div className='overflow-hidden'><img className='object-cover hover:scale-125 duration-1000 ease-in-out' src='https://c8.alamy.com/comp/2GNHDD4/hand-writing-sign-user-experience-internet-concept-the-overall-experience-of-a-person-using-a-product-business-woman-holding-jigsaw-puzzle-piece-2GNHDD4.jpg' alt="counseling" /></div>
          <div>
            <h1 className='font-bold text-xl text-green-600 my-2'>Global Reach</h1>
            <p className='text-gray-800'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam modi excepturi tempora esse rem totam, nemo ratione non saepe harum!</p>
          </div>
          </div>
          
          <div  className='bg-gray-50 mb-3 shadow-md p-2 cursor-pointer mx-2'>
          <div className='overflow-hidden'><img className='object-cover hover:scale-125 duration-1000 ease-in-out' src='https://c8.alamy.com/comp/HBNHT7/global-business-consultant-solution-HBNHT7.jpg' alt="counseling" /></div>
          <div>
            <h1 className='font-bold text-xl text-green-600 my-2'>Global Reach</h1>
            <p className='text-gray-800'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam modi excepturi tempora esse rem totam, nemo ratione non saepe harum!</p>
          </div>
          </div>
          </Slider>
    </div>
        </div>
        <hr className=' border-t-gray-700 border-2 mb-10 mt-8'/>
    </div>
  )
}

export default ServecePeriod