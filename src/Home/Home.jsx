import React from 'react'
import image1 from "../imgs/i221.png";

export default function Home() {
  return (
    <div className='w-100 text-white home layout  d-flex flex-column align-items-center justify-content-center'>
      <img src={image1} className='mb-3 mt-5' alt="home_img" />
      <h2 className='my-3'>START FRAMEWORK</h2>
      <div className='d-flex my-2 mb-3'>
        <div className='div1'></div>
        <i class="fa-solid fa-star fa-sm mx-3"></i>
        <div className='div1'></div>
        </div>
        <p className='text-center'>Graphic Artist - Web Designer - Illustrator</p>

        {/* <div className='2'></div> */}

    
    </div>
  )
}
