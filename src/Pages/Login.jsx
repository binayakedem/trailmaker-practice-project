import React, { useState } from 'react'
import enquiry from '../assets/60.jpg'
const Login = () => {
    const[toggle, setToggle]=useState(false)
  return (
    <div className='flex flex-col '>
       <div className="w-full h-80 overflow-hidden relative">
      <img className="w-full h-full object-cover" src="https://adm.dookinternational.com/dook/images/country/ayaU4YxX1678875913.jpg" alt="image" />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <h1 className="text-white text-3xl font-bold">{toggle?<p>Welcome to Login Section</p>:<p>Welcome to Register Section</p>}</h1>
      </div>
    </div>
    <div className='mx-4 md:mx-10 lg:mx-32 font-poppins'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
            <div data-aos="zoom-in-up" data-aos-duration="1200" className='flex flex-col justify-start items-start w-full gap-4 my-4 bg-blue-100 p-20 rounded-l'>
                <h1 className='text-xl font-semibold text-black'>{toggle?<p>Login</p>:<p>Register</p>}</h1>
                {!toggle?
                 <input className='w-full py-3 border rounded my-2' type="text" placeholder='Enter your name' />:""
                }
                <input className='w-full py-3 border rounded my-2' type="email" placeholder='Enter your email' />
                <input className='w-full py-3 border rounded my-2' type="password" placeholder='Enter your password' />
                <div>
                    <div className='mb-4'>{toggle?
                        <button className='bg-green-600 px-6 py-2 text-white font-semibold rounded-md hover:bg-blue-600 duration-300 ease-in-out'>Login</button>:
                    <button className='bg-green-600 px-6 py-2 text-white font-semibold rounded-md hover:bg-blue-600 duration-300 ease-in-out'>Register</button>
                        }
                    </div>
                    <div>
                    {!toggle?<p className='flex flex-row gap-1'><span>Already have an account?</span><span className='cursor-pointer text-blue-600' onClick={()=>setToggle(!toggle)}>Login</span></p>:<p className='flex flex-row gap-1'><span>Don't have an account?</span><span className='cursor-pointer text-blue-600' onClick={()=>setToggle(!toggle)}>Register</span></p>
                    }
                    </div>  
                </div>
            </div>
            <div data-aos="zoom-in" data-aos-duration="1200" className='h-auto w-auto overflow-hidden'>
                <img className='h-50 w-auto object-cover' src={enquiry} alt="" />
            </div>

        </div>
    </div>
</div>
  )
}

export default Login