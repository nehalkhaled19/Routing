import React from 'react'
import { NavLink, Link } from 'react-router-dom'



export default function Nav() {
    window.addEventListener("scroll", function () {

        var navbar = document.querySelector(".navbar")
        var scrolled = document.documentElement.scrollTop
        if (scrolled > 0) {
            navbar.classList.add("scrolled")
        }
        else {
            navbar.classList.remove("scrolled")
        }


    })

    return <>
        <nav className="navbar py-4 navbar-expand-lg bg-body-tertiary w-100 fixed-top">
            <div className="container   ">
                <Link className='navbar-brand text-white' to="">START FRAMEWORK</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 me-4 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => isActive ? "nav-link m-2 text-white p-2 active" : "nav-link m-2 text-white p-2 "} to="about">ABOUT</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => isActive ? "nav-link m-2 text-white p-2 active" : "nav-link m-2 text-white p-2 "} to="portfolio">PORTFOLIO</NavLink>

                        </li>
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => isActive ? "nav-link m-2 text-white p-2 active" : "nav-link m-2 text-white p-2 "} to="contact">CONTACT</NavLink>

                        </li>
                    </ul>

                </div>
            </div>
        </nav>


    </>

}
