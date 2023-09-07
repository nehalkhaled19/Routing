import React from 'react'
import $ from 'jquery';
import image1 from "../imgs/poert1.png"
import image2 from "../imgs/port2.png";
import image3 from "../imgs/port3.png";


export default function Portfolio() {


  return <div className='layout bg-white h-auto pb-4'>
    <div className='contact text-center mt-4'>
      <h2 className='mb-3'>PORTFOLIO COMPONENT</h2>
      <div className='d-flex w-100 justify-content-center my-2 mb-3'>
        <div className='div1'></div>
        <i class="fa-solid fa-star fa-sm mx-3"></i>
        <div className='div1'></div>
      </div>
    </div>
    <div className='container'>
      <div className='row gy-4 py-3'>
        <div className='col-md-4'>
          <div className='hold position-relative'>
            <img src={image1} className='  w-100 rounded-3' alt="img1" data-bs-toggle="modal" data-bs-target="#exampleModal" />
            <div className='  w-100 layer position-absolute top-0 bottom-0 d-flex align-items-center justify-content-center' data-bs-toggle="modal" data-bs-target="#exampleModal">
              <i class=" fa-solid fa-plus fa-2xl text-white" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
            </div>
          </div>
        </div>
        <div className='col-md-4'>
          <div className='hold position-relative'>
            <img src={image2} className='  w-100 rounded-3' alt="img1" data-bs-toggle="modal" data-bs-target="#exampleModal2" />
            <div className='  w-100 layer position-absolute top-0 bottom-0 d-flex align-items-center justify-content-center' data-bs-toggle="modal" data-bs-target="#exampleModal2">
              <i class=" fa-solid fa-plus fa-2xl text-white" data-bs-toggle="modal" data-bs-target="#exampleModal2"></i>
            </div>
          </div>
        </div>
        <div className='col-md-4'>
          <div className='hold position-relative'>
            <img src={image3} className='  w-100 rounded-3' alt="img1" data-bs-toggle="modal" data-bs-target="#exampleModal3" />
            <div className='  w-100 layer position-absolute top-0 bottom-0 d-flex align-items-center justify-content-center' data-bs-toggle="modal" data-bs-target="#exampleModal3">
              <i class=" fa-solid fa-plus fa-2xl text-white" data-bs-toggle="modal" data-bs-target="#exampleModal3"></i>
            </div>
          </div>
        </div>
        <div className='col-md-4'>
          <div className='hold position-relative'>
            <img src={image1} className='  w-100 rounded-3' alt="img1" data-bs-toggle="modal" data-bs-target="#exampleModal" />
            <div className='  w-100 layer position-absolute top-0 bottom-0 d-flex align-items-center justify-content-center' data-bs-toggle="modal" data-bs-target="#exampleModal">
              <i class=" fa-solid fa-plus fa-2xl text-white" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
            </div>
          </div>
        </div>
        <div className='col-md-4'>
          <div className='hold position-relative'>
            <img src={image2} className='  w-100 rounded-3' alt="img1" data-bs-toggle="modal" data-bs-target="#exampleModal2" />
            <div className='  w-100 layer position-absolute top-0 bottom-0 d-flex align-items-center justify-content-center' data-bs-toggle="modal" data-bs-target="#exampleModal2">
              <i class=" fa-solid fa-plus fa-2xl text-white" data-bs-toggle="modal" data-bs-target="#exampleModal2"></i>
            </div>
          </div>
        </div>
        <div className='col-md-4'>
          <div className='hold position-relative'>
            <img src={image3} className='  w-100 rounded-3' alt="img1" data-bs-toggle="modal" data-bs-target="#exampleModal3" />
            <div className='  w-100 layer position-absolute top-0 bottom-0 d-flex align-items-center justify-content-center' data-bs-toggle="modal" data-bs-target="#exampleModal3">
              <i class=" fa-solid fa-plus fa-2xl text-white" data-bs-toggle="modal" data-bs-target="#exampleModal3"></i>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog  modal-dialog-centered ">
        <div class="modal-content">
          <div class="modal-body p-0">
            <img src={image1} className='w-100 ' alt="img1" />
          </div>

        </div>
      </div>
    </div>
    <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog  modal-dialog-centered ">
        <div class="modal-content">
          <div class="modal-body p-0">
            <img src={image2} className='w-100 ' alt="img1" />
          </div>

        </div>
      </div>
    </div>
    <div class="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog  modal-dialog-centered ">
        <div class="modal-content">
          <div class="modal-body p-0">
            <img src={image3} className='w-100 ' alt="img1" />
          </div>
        </div>
      </div>
    </div>
  </div>
}
