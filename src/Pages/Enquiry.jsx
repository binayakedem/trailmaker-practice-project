import React from 'react'
import enquiry from '../assets/enquiry.jpg'
const Enquiry = () => {
  return (
    <div className='flex flex-col'>
       <div className="w-full h-80 overflow-hidden relative">
      <img className="w-full h-full object-cover" src="https://png.pngtree.com/thumb_back/fh260/background/20220311/pngtree-tablet-screen-with-enquiries-on-search-bar-being-accessed-by-hand-photo-image_12597588.jpg" alt="image" />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <h1 className="text-white text-3xl font-bold">Welcome to Enquiry Section</h1>
      </div>
    </div>
    <div className='mx-4 md:mx-10 lg:mx-32 font-poppins'>
        <div className='border my-4 grid grid-cols-1 md:grid-cols-2 gap-2'>
            <div data-aos='zoom-in-up' data-aos-duration='1000' className='bg-blue-50 p-10 shadow rounded-sm'>
                <div className='flex flex-col gap-3'>
                <input className='border w-full py-2 rounded' type="text" placeholder='Enter Name' />
                <input className='border w-full py-2 rounded' type="text" placeholder='Enter Location' />
                <input className='border w-full py-2 rounded' type="email" placeholder='Enter Email' />
                <input className='border w-full py-2 rounded' type="number" placeholder='Enter Number' />
                <input className='border w-full py-2 rounded' type="number" placeholder='Enter age' />
                <input className='border w-full py-2 rounded' type="text" placeholder='Enter Education' />
                </div>
                <select
        id="status"
        name="status"
        className="mt-3 border block w-full pl-3  pr-10 py-3 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
      >
        <option value="United States">Marital Status</option>
        <option value="Canada">Married</option>
        <option value="Mexico">Unmarried</option>
      </select>
                <select
        id="country"
        name="country"
        className="mt-3 border block w-full pl-3  pr-10 py-3 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
        <option value="United States">Purpose</option>
        <option value="Canada">IELTS Booiking</option>
        <option value="Mexico">PTE Booking</option>
        <option value="United Kingdom">Dualingo Booking</option>
        <option value="United Kingdom">Councelling</option>
      </select>
      <select
        id="country"
        name="country"
        className="mt-3 border block w-full pl-3  pr-10 py-3 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
        <option value="United States">Country</option>
        <option value="Canada">Australia</option>
        <option value="Mexico">Canada</option>
        <option value="United Kingdom">Denmark</option>
        <option value="United Kingdom">UK</option>
      </select>
      <input className='w-full h-28 border my-3 rounded'type="textarea" placeholder='Enter message' />
      <button className='bg-green-600 hover:bg-blue-600 duration-500 ease-in-out text-white font-semibold py-2 px-4 rounded-md'>Submit</button>

            </div>
            <div data-aos='zoom-in' data-aos-duration='2000' className='h-[660px] overflow-hidden hidden md:flex flex-col'>
            < h1 className='text-xl font-bold text-[#1778BE] text-center mt-6 mb-4'> Apply For A Consultation Directly</h1>
                <img className='w-auot h-[820px] object-cover' src={enquiry} alt="Enquiry " />
            </div>

        </div>
    </div>
</div>
  )
}

export default Enquiry