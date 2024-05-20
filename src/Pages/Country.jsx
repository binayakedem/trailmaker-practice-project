import React from 'react';
const Country = () => {
  return (
    <div>
        <div className="w-full h-80 overflow-hidden relative">
      <img className="w-full h-full object-cover" src="https://media2.thrillophilia.com/images/photos/000/025/058/original/1619851207_shutterstock_1725788194.jpg?gravity=center&width=1280&height=642&crop=fill&quality=auto&fetch_format=auto&flags=strip_profile&format=jpg&sign_url=true" alt="image" />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <h1 className="text-white text-3xl font-bold">Welcome to Country Section</h1>
      </div>
    </div>
    <div className='mx-4 md:mx-10 lg:mx-32 font-poppins '>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-10'>
            <div data-aos='zoom-in-up' data-aos-duration="2000" className='flex flex-col'>
                <div className='overflow-hidden flex justify-center items-center'>
                    <img className='object-cover h-full w-full' src="https://www.timeshighereducation.com/student/sites/default/files/styles/default/public/copenhagen.jpg?itok=N4D-qb3e" alt="" />
                </div>
                <div data-aos="zoom-in" data-aos-duration="1200" className='flex flex-col gap-3 '>
                    <h1 className=" my-4 font-semibold text-xl text-blue-700">The Study, Work and Live in the Denmark</h1>
                    <p className="font-sm  ">Denmark, a Scandinavian country located in Northern Europe, is renowned for its rich history, stunning landscapes, and progressive social policies. With a population known for its high quality of life, Denmark consistently ranks among the happiest nations globally. The capital city, Copenhagen, epitomizes modern urban living, featuring a harmonious blend of historic architecture, innovative design, and sustainable practices. Denmark is characterized by its flat terrain, picturesque coastlines, and numerous islands, including famous ones like Zealand and Funen. The country has a strong maritime tradition, reflecting its historical significance as a seafaring nation. Denmark is also recognized for its commitment to renewable energy and environmental sustainability, exemplified by its wind energy initiatives. Cultural highlights include a thriving arts scene, contemporary design, and a cuisine celebrated for its emphasis on fresh, locally sourced ingredients. Additionally, Denmark has a constitutional monarchy, and its political landscape is marked by a robust welfare system and a commitment to social equality.</p>
                </div>
                <div data-aos="zoom-in" data-aos-duration="1200" className='flex flex-col gap-3'>
                    <h1 className=" my-4 font-semibold text-xl text-blue-700">National Experts Visa Types</h1>
                    <p className="font-sm  text-gray-700">Denmark offers several visa types for individuals with specialized skills and expertise to work in the country. Some of the key visa options for national experts include:</p>
                    
                    <div className='text-blue-800 my-2 flex flex-col gap-2 '>
                        <li>Tourist Visa (Schengen Visa)</li>
                        <li>Business Visa</li>
                        <li>Work Visa</li>
                        <li>Student Visa</li>
                        <li>Family Reunification Visa</li>

                    </div>
                </div>

            </div>
            <div data-aos="zoom-in" data-aos-duration="1200" className="flex flex-col  gap-2  p-4 my-6">
                <h1 className="font-bold text-lg text-blue-800">Get Consulting</h1>
                <div className='my-2'>
                    <input className='p-2 my-4 w-full border' type="text" placeholder='Full name' />
                    <input className='p-2 my-4 w-full border' type="text" placeholder='Email Address' />
                    <input className='p-2 my-4 w-full border' type="text" placeholder='Phone' />
                    <input className='p-2 my-4 w-full border' type="text" placeholder='Country' />
                    <input className='p-2 my-4 w-full border' type="text" placeholder='Message' />
                    <button className='w-full bg-green-600 text-white font-semibold py-2'>Send Message</button>
                </div>
                <div data-aos="zoom-in" data-aos-duration="1200" className='flex flex-col gap-3'>
                    <h1 className=" my-4 font-semibold text-xl text-blue-700">Why Choose Denmark?</h1>
                    <p className="font-sm  text-gray-700">Choosing to study in Denmark offers a multifaceted experience driven by the country's commitment to excellence in education, innovation, and quality of life. Renowned for its high-caliber universities, Denmark provides a world-class education with a focus on interactive and collaborative learning. The availability of programs in English broadens accessibility for international students, while the opportunity to engage in cutting-edge research projects contributes to academic growth. Denmark's strong social welfare system ensures students' well-being, offering healthcare and safety nets. The Danish emphasis on a healthy work-life balance extends to the education sector, fostering an environment conducive to both academic achievement and personal fulfillment. Cultural diversity is embraced, providing students with a global perspective and fostering an inclusive atmosphere. With a reputation for safety, sustainability, and high living standards, Denmark stands out as an ideal destination for those seeking a holistic and enriching study abroad experience.</p>
                </div>
                <div data-aos="zoom-in" data-aos-duration="1200" className='flex flex-col gap-3'>
                    <h1 className=" my-4 font-semibold text-xl text-blue-700">What you need to know</h1>
                    <p className="font-sm  text-gray-700">The cost of studying in Denmark encompasses various elements, with tuition fees and living expenses being the primary considerations. For EU/EEA and Swiss citizens, tuition is generally free, while non-EU/EEA students may incur fees ranging from DKK 45,000 to DKK 120,000 per academic year, dependent on the chosen program. Living expenses, including accommodation, food, transportation, insurance, and personal items, typically range from DKK 6,000 to DKK 10,000 monthly. Rent for student housing falls between DKK 3,000 to DKK 6,000 per month, contingent on location and accommodation type. Health insurance, a mandatory requirement, costs approximately DKK 2,000 to DKK 3,000 annually. Additionally, students should allocate funds for study materials, estimating around DKK 1,000 to DKK 2,000 per semester. These figures provide a general overview, and prospective students are encouraged to consult specific universities for precise and updated information on costs and potential financial aid opportunities.</p>
                </div>
                

            </div>

        </div>
    
    </div>
    
      
    </div>
  )
}

export default Country
