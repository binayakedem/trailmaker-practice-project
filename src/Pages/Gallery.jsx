import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const Gallery = () => {
    const data=[{
        'id':1,
        'image':'https://vivo.edu.np/assets/img/gallery/img1.png'
    },
    {
        'id':2,
        'image':'https://vivo.edu.np/assets/img/gallery/img2.jpg'
    },
    {
        'id':3,
        'image':'https://vivo.edu.np/assets/img/gallery/img3.jpg'
    },
    {
        'id':4,
        'image':'https://vivo.edu.np/assets/img/gallery/img4.jpg'
    },
    {
        'id':5,
        'image':'https://vivo.edu.np/assets/img/gallery/img5.jpg'
    },
    {
        'id':6,
        'image':'https://vivo.edu.np/assets/img/gallery/img6.jpg'
    },
]
function openImageInNewTab(imageUrl) {
    const win = window.open(imageUrl, '_blank'); // Open in new tab
    win.focus(); // Optionally bring focus to the new tab
  }
  const[val, setVal]=useState(null)
  const [selectedImage, setSelectedImage] = useState(null);
  return (
    <div>
        <div className='flex flex-col'>
       <div className="w-full h-40 md:h-80 overflow-hidden relative">
      <img className="w-full h-full object-cover" src="https://vivo.edu.np/assets/img/gallery/img6.jpg" alt="image" />
      <div className="absolute inset-0 bg-[#062651] bg-opacity-80 flex flex-col items-center justify-end pb-5 gap-4">
        <h1 className="text-white text-lg font-semibold lg:text-3xl lg:font-bold">Welcome to Gallery Section</h1>
        <div className='text-white lg:text-lg font-normal flex flex-row justify-center items-center gap-4'>
        <Link to='/'>Home</Link><p>||</p> <p>Gallery</p>
        </div>
      </div>
    </div>
    <div className='mx-4 md:mx-10 lg:mx-32 font-poppins '>
        <div className='flex flex-row text-[#EC008C] justify-center items-center gap-3 my-6'>
            <p className={`border rounded-3xl py-1 px-6 border-[#EC008C] cursor-pointer ${val=='all'?'bg-[#0C4DA2] text-white border-none':''}`} onClick={()=>setVal('all')}>All</p> <p className={`border rounded-3xl py-1 px-6 border-[#EC008C] cursor-pointer ${val=='photo'?'bg-[#0C4DA2] text-white border-none':''}`} onClick={()=>setVal('photo')}>Photo</p> <p className={`border rounded-3xl py-1 px-6 border-[#EC008C] cursor-pointer ${val=='video'?'bg-[#0C4DA2] text-white border-none':''}`} onClick={()=>setVal('video')}>Video</p>
        </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((d) => (
          <div key={d.id} className='overflow-hidden' data-aos='zoom-in' data-aos-duration='1900'>
            <img
              className='h-full w-full object-cover cursor-pointer'
              src={d.image}
              alt={d.id}
              onClick={() => setSelectedImage(d.image)}
            />
          </div>
        ))}
      </div>

      {/* Conditional rendering for the enlarged image */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative p-4">
            <button
              className="absolute top-2 right-2 text-white text-3xl"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>
            <img
              src={selectedImage}
              alt="Enlarged view"
              className="max-w-screen max-h-screen object-contain"
            />
          </div>
        </div>
      )}
    
    </div>
    </div>
    </div>
  )
}

export default Gallery