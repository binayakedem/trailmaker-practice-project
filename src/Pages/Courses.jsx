import React from 'react';
const Courses = () => {
  return (
    <div>
        <div className="w-full h-80 overflow-hidden relative">
      <img className="w-full h-full object-cover" src="https://www.shutterstock.com/image-photo/elearning-education-internet-technology-webinar-260nw-1139995139.jpg" alt="image" />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <h1 className="text-white text-3xl font-bold">Welcome to Courses Section</h1>
      </div>
    </div>
    <div className='mx-4 md:mx-10 lg:mx-32 font-poppins '>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 my-4'>
            <div data-aos='zoom-in-up' data-aos-duration="2000" className='flex flex-col'>
                <div className='overflow-hidden flex justify-center items-center'>
                    <img className='object-cover h-full w-full' src="https://d39eazhratf38c.cloudfront.net/Pictures/1024x536/1/3/7/60137_152122_657310.jpg" alt="examination" />
                </div>
                <div data-aos="zoom-in" data-aos-duration="1200" className='flex flex-col gap-3'>
                    <h1 className=" my-4 font-semibold text-xl text-blue-700">GMAT Test Preparation</h1>
                    <p className="font-sm text-sm text-gray-700">The GMAT (Graduate Management Admission Test) is a computer-adaptive standardized exam that consists of four sections: Analytical Writing Assessment (AWA), Integrated Reasoning (IR), Quantitative Reasoning (QR), and Verbal Reasoning (VR). The AWA section requires test takers to analyze an argument and present their ideas in a written format. The IR section assesses the ability to evaluate and interpret complex data from various sources. The QR section tests quantitative problem-solving skills, while the VR section assesses verbal reasoning and reading comprehension abilities. The test adapts to the test taker's performance, with questions becoming more or less difficult based on correct or incorrect answers, respectively.</p>
                </div>
                <div data-aos="zoom-in" data-aos-duration="1200" className='flex flex-col gap-3'>
                    <h1 className=" my-4 font-semibold text-xl text-blue-700">Benefits of GMAT Class</h1>
                    <p className="font-sm text-sm text-gray-700">Taking a GMAT class offers numerous benefits, including structured guidance and expert instruction that help improve test-taking strategies and overall performance, access to comprehensive study materials and practice tests tailored to the exam's content and format, personalized feedback and support to address weaknesses, and the opportunity to connect and collaborate with fellow test takers, fostering a supportive learning environment. Ultimately, a GMAT class enhances preparation efficiency, boosts confidence, and maximizes the chances of achieving a high score necessary for admission into top business schools. </p>
                </div>

            </div>
            <div data-aos="zoom-in" data-aos-duration="1200" className="flex flex-col  gap-2  ">
                <div className='bg-gray-100 shadow-sm shadow-gray-500 p-8 rounded-sm'>
                <h1 className="font-bold text-lg text-blue-800">Get Consulting</h1>
                <div className='my-2'>
                    <input className='p-2 my-4 w-full border' type="text" placeholder='Full name' />
                    <input className='p-2 my-4 w-full border' type="text" placeholder='Email Address' />
                    <input className='p-2 my-4 w-full border' type="text" placeholder='Phone' />
                    <input className='p-2 my-4 w-full border' type="text" placeholder='Courses' />
                    <input className='px-2 py-10 my-4 w-full border' type="text" placeholder='Message' />
                    <button className='w-full bg-green-600 text-white font-semibold py-2'>Send Message</button>
                </div>
                </div>
                <div data-aos="zoom-in" data-aos-duration="1200" className='flex flex-col gap-3'>
                    <h1 className=" my-4 font-semibold text-xl text-blue-700">What you need to know</h1>
                    <p className="font-sm text-sm text-gray-700">Duration: 30 minutes Format: You are presented with an argument and you need to analyze its reasoning and provide a well-structured critique. This section measures your ability to think critically and communicate your ideas effectively.</p>
                </div>
                <div data-aos="zoom-in" data-aos-duration="1200" className='flex flex-col gap-3'>
                    <h1 className=" my-4 font-semibold text-xl text-blue-700">Scoring Format</h1>
                    <p className="font-sm text-sm text-gray-700">The GMAT (Graduate Management Admission Test) is scored on a scale of 200 to 800, with the majority of test takers scoring between 400 and 600. The score is determined based on the number of correct answers, the difficulty level of the questions answered, and the number of questions attempted. The Verbal and Quantitative sections are each scored on a scale of 0 to 60, while the Integrated Reasoning section is scored on a scale of 1 to 8. The Analytical Writing Assessment is scored separately on a scale of 0 to 6. The overall GMAT score is a composite of the Verbal and Quantitative scores and ranges from 200 to 800.</p>
                </div>
                

            </div>

        </div>
    
    </div>
      
    </div>
  )
}

export default Courses
