import React, { useEffect, useState, useTransition } from 'react'
import ReactDOM from 'react-dom';
import $ from 'jquery';
// import useEffect from 'react'

export default function Contact() {

  function hi(x, y) {
    let v = $("#" + y + "").val()
    if (v != " ") {
      $("#" + x + "").css("bottom", "0px")
    }
    if (v == "") {
      $("#" + x + "").css("bottom", "-65px")
    }
  }
  return <div className='layout bg-white h-auto'>
    <div className='contact text-center mt-5'>
      <h2 className='mb-3'>CONATCT SECTION</h2>
      <div className='d-flex w-100 justify-content-center my-2 mb-3'>
        <div className='div1'></div>
        <i class="fa-solid fa-star fa-sm mx-3"></i>
        <div className='div1'></div>
      </div>
    </div>
    <div className='container mt-5'>
      <div className="my-4 form m-auto overflow-hidden">
        <label htmlFor="userName" id="forUserName" className="form-label">userName:</label>
        <input type="text" onKeyUp={() => hi("forUserName", "userName")} className="form-control border-0 border-bottom" id="userName" placeholder="userName" />
      </div>
      <div className="my-4 form m-auto overflow-hidden">
        <label htmlFor="userAge" id="forUserAge" className="form-label">userAge:</label>
        <input type="text" onKeyUp={() => hi("forUserAge", "userAge")} className="form-control border-0 border-bottom" id="userAge" placeholder="userAge" />
      </div>
      <div className="my-4 form m-auto overflow-hidden">
        <label htmlFor="userEmail" id="foruserEmail" className="form-label">userEmail:</label>
        <input type="email" onKeyUp={() => hi("foruserEmail", "userEmail")} className="form-control border-0 border-bottom" id="userEmail" placeholder="userEmail" />
      </div>
      <div className="my-4 form m-auto overflow-hidden">
        <label htmlFor="userPassword" id="foruserPassword" className="form-label">userPassword:</label>
        <input type="text" onKeyUp={() => hi("foruserPassword", "userPassword")} className="form-control border-0 border-bottom" id="userPassword" placeholder="userPassword" />
      </div>
      <div className="my-4 form m-auto">
        <button type='button' className='btn btn-contact'>Send Message</button>
      </div>
    </div>
  </div>
}
