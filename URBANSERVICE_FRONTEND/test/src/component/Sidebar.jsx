import React from 'react'
import { Link } from 'react-router-dom'


export const Sidebar = () => {

  const path = window.location.pathname
    

  const serviceProviderLinks =  [
    {
      name:"Dashboard",
      link:"/serviceprovider/dashboard",
      icon:"dashboard"
    },
    {
      name:"Add Service",
      link:"/serviceprovider/addservice",
      icon:"table_view"
    },
    {
      name:"My Service",
      link:"/serviceprovider/myservices",
      icon:"person"
    },
    {
      name:"Profile",
      link:"/serviceprovider/profile",
      icon:"person"
    },
    // {
    //   name:"All services",
    //   link:"/serviceprovider/servicelist"
    // }
  ]


  const userLinks = [
    {
      name:"Dashboard",
      link:"/user/dashboard",
      icon:"dashboard"
    },
    {
      name:"Book Services",
      link:"/user/bookservices",
      icon:"person"
    },
    {
      name:"My Bookings",
      link:"user/bookings",
      icon:"table_view"
    },
    {
      name:"Profile",
      link:"/user/profile",
      icon:"person"
    }
  ]








  return (
    <aside
  className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3 bg-gradient-dark bg-white"
  id="sidenav-main"
>
  <div className="sidenav-header">
    <i
      className="fas fa-times p-3 cursor-pointer text-white opacity-5 position-absolute end-0 top-0 d-none d-xl-none"
      aria-hidden="true"
      id="iconSidenav"
    />
    <a
      className="navbar-brand m-0"
      href=" https://demos.creative-tim.com/material-dashboard/pages/dashboard "
      target="_blank"
    >
      {/* <img
        src="../assets/img/logo-ct.png"
        className="navbar-brand-img h-10"
        alt="main_logo"
      /> */}
      <span className="ms-1 font-weight-bold text-white">
        Urban Services 😃
      </span>
    </a>
  </div>
  <hr className="horizontal light mt-0 mb-2" />
  <div className="collapse navbar-collapse  w-auto " id="sidenav-collapse-main">
    <ul className="navbar-nav">
      {path.includes('serviceprovider')?serviceProviderLinks.map((serviceprovider)=>{
        return(
          <li className="nav-item">
          <Link className="nav-link text-white " to={serviceprovider.link}>
            <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
              <i className="material-icons opacity-10">{serviceprovider.icon}</i>
            </div>
            <span className="nav-link-text ms-1">{serviceprovider.name}</span>
          </Link>
        </li>
        )
      }):userLinks.map((user)=>{
        return(
        <li className="nav-item">
          <Link className="nav-link text-white " to={user.link}>
            <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
              <i className="material-icons opacity-10">{user.icon}</i>
            </div>
            <span className="nav-link-text ms-1">{user.name}</span>
          </Link>
        </li>)
      })}
     
      {/* <li className="nav-item">
        <Link className="nav-link text-white " to="/login">
          <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
            <i className="material-icons opacity-10">login</i>
          </div>
          <span className="nav-link-text ms-1">Sign In</span>
        </Link>
      </li> */}
      <li className="nav-item">
        <Link className="nav-link text-white " to='/logout'>
          <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
            <i className="material-icons opacity-10">assignment</i>
          </div>
          <span className="nav-link-text ms-1">Log Out</span>
        </Link>
      </li>
    </ul>
  </div>
 
</aside>

  )
}
