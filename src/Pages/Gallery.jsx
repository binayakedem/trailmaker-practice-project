import React from 'react'
import { FaUserAlt } from "react-icons/fa";
const Gallery = () => {
  return (
    <div className='flex flex-col'>
       <div className="w-full h-80 overflow-hidden relative">
      <img className="w-full h-full object-cover" src="https://media.istockphoto.com/id/1218961153/photo/art-museum.jpg?s=612x612&w=0&k=20&c=9fK54fu1mjzFjDOSqg_jfrMy4Hkp8vsmImB7rLrbhJs=" alt="image" />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <h1 className="text-white text-3xl font-bold">Welcome to Gallery Section</h1>
      </div>
    </div>
    <div className='mx-4 md:mx-10 lg:mx-32 font-poppins rounded   text-gray-700'>
        <div>
            <h1 className='text-center font-semibold text-xl my-8 text-green-600'>Welcome to Our Gallery</h1>
        </div>
        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
            <div data-aos="zoom-out-down" data-aos-duration='1200' className='p-2 overflow-hidden border flex flex-col cursor-pointer'>
                <img className='object-cover w-full h-full hover:scale-95 duration-500 ease-in-out' src="https://plus.unsplash.com/premium_photo-1661775605160-739074fd0011?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <h1 className='font-semibold text-blue-600 text-lg text-center'>Success Story</h1>
            </div>
            <div data-aos="zoom-out-up" data-aos-duration='1000' className='p-2 overflow-hidden border flex flex-col cursor-pointer'>
                <img className='object-cover w-full h-full  hover:scale-95 duration-500 ease-in-out' src="https://media.istockphoto.com/id/467924545/photo/art-gallery.jpg?s=612x612&w=0&k=20&c=YUMv3RQCcOHsgbsckEGhlD3nAPg_VVnpHPcYm3y2jjo=" alt="" />
                <h1 className='font-semibold text-blue-600 text-lg text-center'>Student Life</h1>
            </div>
            <div  data-aos="zoom-in" data-aos-duration='1900' className='p-2 overflow-hidden border flex flex-col cursor-pointer'>
                <img className='object-cover w-full h-full hover:scale-95 duration-500 ease-in-out' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9iG38hulFCaQ5OoKDvuOF-Lc1AYNO3IypgQ&usqp=CAU" alt="" />
                <h1 className='font-semibold text-blue-600 text-lg text-center'>Studying</h1>
            </div>
            <div data-aos="zoom-in-up" data-aos-duration='2000' className='p-2 overflow-hidden border flex flex-col cursor-pointer'>
                <img className='object-cover w-full h-full hover:scale-95 duration-500 ease-in-out' src="https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg" alt="" />
                <h1 className='font-semibold text-blue-600 text-lg text-center'>Company</h1>
            </div>
            <div data-aos="zoom-out-down" data-aos-duration='1700' className='p-2 overflow-hidden border flex flex-col cursor-pointer'>
                <img className='object-cover w-full h-full hover:scale-95 duration-500 ease-in-out' src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <h1 className='font-semibold text-blue-600 text-lg text-center'>Graduation ceremony</h1>
            </div>
            <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500"className='p-2 overflow-hidden border flex flex-col cursor-pointer'>
                <img className='object-cover w-full h-full hover:scale-95 duration-500 ease-in-out' src="https://www.shutterstock.com/image-photo/graduate-male-student-wearing-ceremony-260nw-2164102547.jpg" alt="" />
                <h1 className='font-semibold text-blue-600 text-lg text-center'>Success Story</h1>
            </div>

        </div>

    </div>
</div>
  )
}

export default Gallery