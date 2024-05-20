import React from 'react'
import { FaUserAlt } from "react-icons/fa";
const Blog = () => {
  return (
    <div className='flex flex-col'>
       <div className="w-full h-80 overflow-hidden relative">
      <img className="w-full h-full object-cover" src="https://media2.thrillophilia.com/images/photos/000/025/058/original/1619851207_shutterstock_1725788194.jpg?gravity=center&width=1280&height=642&crop=fill&quality=auto&fetch_format=auto&flags=strip_profile&format=jpg&sign_url=true" alt="image" />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <h1 className="text-white text-3xl font-bold">Welcome to Blog Section</h1>
      </div>
    </div>
    <div className='mx-4 md:mx-10 lg:mx-32 font-poppins rounded shadow-sm p-4 my-4 shadow-black text-blue-900'>
        <div className='flex flex-col gap-2'>
            <div data-aos="zoom-in" data-aos-duration='1000' className='flex flex-row gap-2'>

            <div className='overflow-hidden flex justify-center items-center rounded'>
                <img className='object-cover h-full w-auto' src="https://img.freepik.com/free-photo/smiling-female-student-writing-essay-sitting-with-laptop-floor_176420-20219.jpg" alt="" />
            </div>
            <div className='overflow-hidden flex justify-center items-center rounded'>
                <img className='object-cover h-full w-auto' src="https://www.scholarshiptab.com/pictures/blog/700/412615730_best-countries-tostudy-abroad.png" alt="conry" />

            </div>
            </div>
            <div className='flex flex-col gap-3 my-6'>
                <h1 className='font-semibold text-blue-900 text-lg'>A Comprehensive Guide to Convert GPA to Percentage</h1>
                <p className='flex flex-row gap-1 justify-start items-center'><FaUserAlt />By Rajendra Sighn</p>
            </div>
            <div data-aos="zoom-in" data-aos-duration='2000' className='flex flex-col gap-4'>
                <p>GPA stands for Grade Point Average which is a calculation of your average grade result. This score is calculated yearly or for the course as a whole chosen by the student. This system is mainly accounted for in high schools and universities in the US. Each result is given a number which is known as the grade point. The higher the result, the higher the grade point.</p>
                <p>A student may be required to have a GPA score of 3.5 or higher which is considered promising at universities abroad. Compared to colleges and universities, high schools may have less demanding admission requirements that can enable a student to apply with a GPA score as low as 2.5 or 2.0. Many colleges and universities consider a student’s GPA as one of the factors in determining eligibility for scholarships, financial aid, and support programs. Students with a GPA score lower than 2.0 may lose out on acquiring financial support</p>

            </div>
            <div data-aos="zoom-in" data-aos-duration='1300' className='flex flex-col gap-4 my-4'>
                <h1 className='font-semibold text-blue-900 text-lg'>When and where is a GPA score required?  </h1>
                <p>GPA stands for Grade Point Average which is a calculation of your average grade result. This score is calculated yearly or for the course as a whole chosen by the student. This system is mainly accounted for in high schools and universities in the US. Each result is given a number which is known as the grade point. The higher the result, the higher the grade point.</p>
                <p>A student may be required to have a GPA score of 3.5 or higher which is considered promising at universities abroad. Compared to colleges and universities, high schools may have less demanding admission requirements that can enable a student to apply with a GPA score as low as 2.5 or 2.0. Many colleges and universities consider a student’s GPA as one of the factors in determining eligibility for scholarships, financial aid, and support programs. Students with a GPA score lower than 2.0 may lose out on acquiring financial support</p>

            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
            <div data-aos="zoom-in-up" data-aos-duration='1500' className='flex flex-col gap-4 my-4'>
                <h1 className='font-semibold text-blue-900 text-lg'>When and where is a GPA score required?  </h1>
                <p>GPA stands for Grade Point Average which is a calculation of your average grade result. This score is calculated yearly or for the course as a whole chosen by the student. This system is mainly accounted for in high schools and universities in the US. Each result is given a number which is known as the grade point. The higher the result, the higher the grade point.</p>
                <p>A student may be required to have a GPA score of 3.5 or higher which is considered promising at universities abroad. Compared to colleges and universities, high schools may have less demanding admission requirements that can enable a student to apply with a GPA score as low as 2.5 or 2.0. Many colleges and universities consider a student’s GPA as one of the factors in determining eligibility for scholarships, financial aid, and support programs. Students with a GPA score lower than 2.0 may lose out on acquiring financial support</p>

            </div>
            <div data-aos="zoom-in" data-aos-duration='1000' className='overflow-hidden'>
                <img className='object-cover h-full w-full' src="https://img.freepik.com/premium-photo/friends-students-group-studying-with-laptop-park-outdoors-education-scholarship-learning-portrait-happy-people-black-man-women-with-computer-research-university-college_590464-136120.jpg" alt="group" />
            </div>

            </div>

            

        </div>
    </div>
</div>
  )
}

export default Blog