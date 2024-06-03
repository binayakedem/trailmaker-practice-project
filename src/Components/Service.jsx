import React from 'react'

const Service = () => {
  const data=[
    {
      id:1,
      image:'https://www.shutterstock.com/image-photo/male-college-student-meeting-campus-600nw-1704719680.jpg',
      name:'VISA ASSISTANCCE',
      description:'Our proper planning ensures to achieve maximum.'
    },
    {
      id:2,
      image:'https://c8.alamy.com/comp/2NJ169B/career-counseling-text-word-on-white-paper-on-gray-background-2NJ169B.jpg',
      name:'STUDY ABROAD',
      description:'For years, we have been helping to study their desired country'
    },
    {
      id:3,
      image:'https://static.vecteezy.com/system/resources/thumbnails/020/822/157/small_2x/graduation-cap-with-earth-globe-concept-of-global-business-study-abroad-educational-back-to-school-education-in-global-world-study-abroad-business-in-universities-in-worldwide-language-study-photo.jpg',
      name:'TEST PREPARATION',
      description:'Qualify yourself with various tests and get help in foreign scopes.'
    },
    {
      id:4,
      image:'https://images.pexels.com/photos/4778611/pexels-photo-4778611.jpeg?cs=srgb&dl=pexels-cottonbro-4778611.jpg&fm=jpg',
      name:'ADMISSION GUIDE',
      description:'VIVO will help you with admission to various colleges.'
    },
    {
      id:5,
      image:'https://c8.alamy.com/comp/KWT7R5/smiling-beauty-female-home-tutor-explaining-school-education-content-KWT7R5.jpg',
      name:'CAREER COUNSELLING',
      description:'For years, we have been helping people to choose their career.'
    },
    {
      id:5,
      image:'https://c8.alamy.com/comp/KWT7R5/smiling-beauty-female-home-tutor-explaining-school-education-content-KWT7R5.jpg',
      name:'INSURANCE',
      description:'We also offer insurance. Explore more of our insurance service.'
    },

  ]
  return (
    <div className='mx-4 md:mx-10 lg:mx-32 font-poppins my-10'>
      <div className='flex flex-col justify-center items-center'>
        <div className='my-10 text-center'>
          <p className='text-[#EC008C] font-semibold text-lg mb-4'>Featured Services</p>
          <h1 className='text-[#0C4DA2] font-bold text-4xl'>Our Services</h1>
        </div>
       
        <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 '>
          {
            data.map((d)=>(
          <div data-aos="zoom-in-up" data-aos-duration='1600' key={d.id} className='bg-gray-100 shadow-sm rounded-md shadow-gray-50 flex flex-row justify-between items-start'>
          <div className='overflow-hidden h-60 w-auto'><img className='object-cover h-full w-auto hover:scale-125 duration-1000 ease-in-out' src={d.image} alt="counseling" /></div>
          <div className='text center  flex flex-col justify-center p-9'>
            <h1 className='font-bold text-xl text-[#0C4DA2] my-2 text-center'>{d.name}</h1>
            <p className='text-gray-900 text-center'>{d.description}</p>
          </div>
          </div>
          
        ))
      }
        </div>
      </div>
    </div>
  )
}

export default Service