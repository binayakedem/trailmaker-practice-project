import React from 'react'

const Service = () => {
  const data=[
    {
      id:1,
      image:'https://www.shutterstock.com/image-photo/male-college-student-meeting-campus-600nw-1704719680.jpg',
      name:'College Admissions Counseling',
      description:'We provide guidance on selecting the right college, filling out applications, and preparing for interviews. Our consultants have a proven track record of helping students get admitted to top colleges and universities in the US and abroad.'
    },
    {
      id:2,
      image:'https://c8.alamy.com/comp/2NJ169B/career-counseling-text-word-on-white-paper-on-gray-background-2NJ169B.jpg',
      name:'Career Counseling',
      description:'Our career counseling service is designed to help students explore career options and choose a career that is best suited to their skills, interests, and goals.'
    },
    {
      id:3,
      image:'https://static.vecteezy.com/system/resources/thumbnails/020/822/157/small_2x/graduation-cap-with-earth-globe-concept-of-global-business-study-abroad-educational-back-to-school-education-in-global-world-study-abroad-business-in-universities-in-worldwide-language-study-photo.jpg',
      name:'Study Abroad Counseling',
      description:'We provide guidance on selecting the right university, filling out applications, and preparing for interviews.'
    },
    // {
    //   id:4,
    //   image:'https://images.pexels.com/photos/4778611/pexels-photo-4778611.jpeg?cs=srgb&dl=pexels-cottonbro-4778611.jpg&fm=jpg',
    //   name:'Test Preparation',
    //   description:'We provide test preparation services for a wide range of standardized tests, including the SAT, ACT, GRE, GMAT, and TOEFL.'
    // },
    // {
    //   id:5,
    //   image:'https://c8.alamy.com/comp/KWT7R5/smiling-beauty-female-home-tutor-explaining-school-education-content-KWT7R5.jpg',
    //   name:'Personalized Tutoring',
    //   description:'We offer personalized tutoring services in a variety of subjects, including Math, Science, English, and Foreign Languages.'
    // },

  ]
  return (
    <div className='mx-4 md:mx-10 lg:mx-32 font-poppins my-10 bg-gray-200'>
      <div className='flex flex-col justify-center items-center'>
        <div className='my-10 text-center'>
          <p className='text-gray-800 text-lg font-semibold mb-4'>Our Services</p>
          <h1 className='text-green-600 font-bold text-xl'>Personalized approach to education and career guidance</h1>
        </div>
        <div className='overflow-hidden h-96'>
          <img className='w-full h-auto object-cover cursor-pointer hover:scale-110 duration-1000 ease-in-out' src="https://cdn.pixabay.com/photo/2018/03/10/12/00/teamwork-3213924_1280.jpg" alt="service " />
        </div>
        <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 '>
          {
            data.map((d)=>(
          <div data-aos="zoom-in-up" data-aos-duration='1600' key={d.id} className='bg-gray-50 mb-3 shadow-md p-2 cursor-pointer'>
          <div className='overflow-hidden'><img className='object-cover hover:scale-125 duration-1000 ease-in-out' src={d.image} alt="counseling" /></div>
          <div>
            <h1 className='font-bold text-xl text-green-600 my-2'>{d.name}</h1>
            <p className='text-gray-800'>{d.description}</p>
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