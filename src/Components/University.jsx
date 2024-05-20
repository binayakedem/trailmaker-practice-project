import React from 'react'
import logo from '../assets/image.png'
const University = () => {
    const university = [
        {
          id: 1,
          image: 'https://media2.thrillophilia.com/images/photos/000/025/058/original/1619851207_shutterstock_1725788194.jpg?gravity=center&width=1280&height=642&crop=fill&quality=auto&fetch_format=auto&flags=strip_profile&format=jpg&sign_url=true',
          description: 'This is the first sample description for item one.',
          logo: logo
        },
        {
          id: 2,
          image: 'https://media.cnn.com/api/v1/images/stellar/prod/191011110307-02-australia-beautiful-places.jpg?q=w_2187,h_1230,x_0,y_0,c_fill',
          description: 'This is the second sample description for item two.',
          logo: logo
        },
        {
          id: 3,
          image: 'https://www.shutterstock.com/image-photo/auckland-cityscape-north-island-new-260nw-293790506.jpg',
          description: 'This is the third sample description for item three.',
          logo: logo
        },
        {
          id: 4,
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTi90K6Db_XVeZdPAz4L3UDC-5sAbx5NttK8jG2Wd2qg&s',
          description: 'This is the fourth sample description for item four.',
          logo: logo
        },
        {
          id: 5,
          image: 'https://www.planetware.com/photos-large/USNY/usa-best-places-new-york.jpg',
          description: 'This is the fifth sample description for item five.',
          logo: logo
        },
        {
          id: 6,
          image: 'https://media2.thrillophilia.com/images/photos/000/178/977/original/1573729587_shutterstock_704449474.jpg?gravity=center&width=1280&height=642&crop=fill&quality=auto&fetch_format=auto&flags=strip_profile&format=jpg&sign_url=true',
          description: 'This is the sixth sample description for item six.',
          logo: logo
        },
        {
          id: 7,
          image: 'https://www.holidify.com/images/bgImages/KUALA-LUMPUR.jpg',
          description: 'This is the seventh sample description for item seven.',
          logo: logo
        },
        {
          id: 8,
          image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/37/b6/73/caption.jpg?w=800&h=-1&s=1',
          description: 'This is the eighth sample description for item eight.',
          logo: logo
        },
      ];
  return (
    <div className='mx-4 md:mx-10 lg:mx-32 bg-white'>
      <hr className='border border-t-black mt-20 h-1 w-full'/>
              <div>
                <h1 className='font-bold text-xl text-green-600 text-center mt-10'>Our Association with These Worldwide Universities</h1>
              </div>
           <div className='grid col-span-1 md:grid-cols-2 lg:grid-cols-3  md:gap-4 lg:gap-8'>
            {
                university.map((data)=>(
            <div  data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000" key={data.id} className='bg-white shadow-sm shadow-gray-600 my-4 md:my-6 cursor-pointer rounded-2xl hover:translate-y-[-10px]  duration-500 ease-in-out'>
                <div className='overflow-hidden rounded-t-2xl '>
                    <img className='w-full h-full   object-cover' src={data.image} alt="image" />
                </div>
                <div>
                    <div className='h-10 w-10 overflow-hidden'>
                        <a href="https://www.universityliving.com/blog/admission-guide/top-10-universities-in-usa-for-international-students/">
                            <img className='w-full h-full object-cover' src={logo} alt="logo" />
                        </a>
                    </div>
                    <p className='font-poppins text-gray-800'>{data.description}</p>
                </div>
            </div>
                ))
            }

        </div>
    </div>
  )
}

export default University