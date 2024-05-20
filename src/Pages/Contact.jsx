import React from 'react'
import enquiry from '../assets/enquiry.jpg'
const Contact = () => {
  return (
    <div className='flex flex-col'>
       <div className="w-full h-80 overflow-hidden relative">
      <img className="w-full h-full object-cover" src="https://st2.depositphotos.com/1265075/7446/i/450/depositphotos_74468913-stock-photo-contact-us-icons-on-cubes.jpg" alt="image" />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <h1 className="text-white text-3xl font-bold">Welcome to Contact Section</h1>
      </div>
    </div>
    <div className='mx-4 md:mx-10 lg:mx-32 font-poppins '>
        <div className=' my-4 grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div data-aos='zoom-in-up' data-aos-duration='1000' className='bg-blue-50 p-10 shadow rounded-sm'>
              <div><h1 className='text-xl font-semibold text-green-600 mb-10'>Send Us A Message</h1></div>
                <div className='flex flex-col gap-3'>
                <input className='border w-full py-2 rounded' type="text" placeholder='Enter Name' />
                <input className='border w-full py-2 rounded' type="email" placeholder='Enter Email' />
                <input className='border w-full py-2 rounded' type="number" placeholder='Enter Phone' />
                <input className='border w-full py-2 rounded' type="text" placeholder='Enter Subject' />
                </div>             
      <input className='w-full h-28 border my-3 rounded'type="textarea" placeholder='Enter message' />
      <button className='bg-green-600 hover:bg-blue-600 duration-500 ease-in-out text-white font-semibold py-2 px-4 rounded-md'>Send Message</button>
            </div>
            <div data-aos='zoom-in' data-aos-duration='2000' className='flex flex-col text-gray-700'>
              <div className='flex flex-col gap-3 mb-4'>
                <h1 className='text-blue-600 font-semibold text-lg'>Love To Listen From You. Get In Touch</h1>
                <p>We are very much dedicated in providing quality service and best counseling.</p>
              </div>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                <div className='flex flex-col gap-2'>
                  <div className='flex flex-col gap-2'>
                  <h1 className='font-semibold text-blue-900 '>Kathmandu/Nepal Office:</h1>
                  <p> Contact Person: SabinKC</p>
                  <p> Phone: +977-01-4010510</p>
                  <p>Cell: +977-9841790629</p>
                  <p>Email: infotrailmaker@gmail.com</p>
                  <p>PutalisadakChowk, Kathmandu, Nepal</p>
                  </div>
                  <div className='flex flex-col gap-2'>
                    <h1 className='font-semibold text-blue-900'>Sydney Australia:</h1>
                    <p>Contact Person: Narayan Prasad Dahal</p>
                    <p>Phone: +61406064990</p>
                    <p>Email: infotrailmaker@gmail.com</p>
                    <p>Suite 204 Level 2309 PittStreet Sydney, Australia</p>
                  </div>
                </div>
                <div className='flex flex-col gap-2'>
                  <div className='flex flex-col gap-2'>
                    <h1 className='font-semibold text-blue-900'>Chitwan/Nepal Office:</h1>
                    <p>Contact Person: Raja Baskota</p>
                    <p>Cell: +977-9841306223</p>
                    <p>Email: infotrailmaker@gmail.com</p>
                    <p>LionsChowk-10, Bharatpur, Chitwan, Nepal</p>

                  </div>
                  <div className='flex flex-col gap-2'>
                    <h1 className='font-semibold text-blue-900'>Banepa/Nepal Office:</h1>
                    <p>Contact Person: Asmin Thapa</p>
                    <p>Phone: +977-11-664371</p>
                    <p>Cell: +977-9841542492</p>
                    <p>Email: infobanepa@gmail.com</p>
                    <p>ChandaniChowk, Banepa-10, Kavre, Nepal</p>
                  </div>

                </div>

              </div>

            </div>

        </div>
    </div>
</div>
  )
}

export default Contact