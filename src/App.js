import React from 'react'
import {RouterProvider ,createBrowserRouter } from 'react-router-dom' 
import Home from './Home/Home'
import About from './About/About'
import Contact from './Contact/Contact'
import Layout from './Layout/Layout'
import Portfolio from './Portfolio/Portfolio'
import './index.css';




export default function App() {

  let roots = createBrowserRouter([
    {
      path: "", element: <Layout/>, children: [
        { index: true, element: <Home/> },
        { path: "contact", element: <Contact/> },
        { path: "portfolio", element: <Portfolio/> },
        { path: "about", element: <About/> }
      ]
    }
  ])
  return (
    <RouterProvider router={roots}/>
    
  )

}
