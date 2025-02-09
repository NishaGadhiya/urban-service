import React from 'react'
import { Link } from 'react-router-dom'

export const Registration = () => {
  return (
    <>
      {/* <main className="main-content">
      <div
        className="page-header align-items-start min-vh-100"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80")'
        }}
      >
      <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
        <div class="card text-center shadow-card rounded">
        <div class="card-header bg-light">
            Welcome to Urban Services Registration
        </div>
        <div class="card-body bg-cover">
            <h5 class="card-title">Create Your Urban Services Account</h5>
            <p class="card-text">Please select your desired registration type to get started with Urban Services.</p>
            <div className='mt-4'>
                <Link to="/serviceprovider/registration" class="btn  btn-lg hover-effect btn-dribbble me-3">Serviceprovider</Link>
                <Link to="/user/registration" class="btn  btn-lg hover-effect btn-dribbble">User</Link>
            </div>
        </div>
        <div className="card-footer text-muted text-center bg-light">
              Already have an account? <Link to="/" className="text-primary">Log in here</Link>
        </div>
        </div>
        </div>
      </div>
    </div>
    </div>
    </main> */}
    
    <div className="container position-sticky z-index-sticky top-0">
      <div className="row">
        <div className="col-12">
          {/* Navbar */}
          <nav className="navbar navbar-expand-lg blur border-radius-xl top-0 z-index-3 shadow position-absolute my-3 py-2 mx-auto">
            <div className="container-fluid ps-2 pe-0 me-5">
            <span className="navbar-brand me-12">
                Local Services 😃
            </span>
            <div className="collapse navbar-collapse m-auto">
            <span className="navbar-text me-10">
                Welcome to Local Services!
            </span>
            <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                <Link className="nav-link me-2" to="/">
                <i className="fas fa-user-circle opacity-6 text-dark me-1" aria-hidden="true" />
                    Sign in
                </Link>
                </li>
            </ul>
            </div>
        </div>
    </nav>

          {/* End Navbar */}
        </div>
      </div>
    </div>
    
    <main className="main-content ">
  <div
    className="page-header align-items-start min-vh-100"
    style={{
      backgroundImage:
        'url("https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80")'
    }}
  >
    <div className="container my-auto">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card text-center shadow-card rounded ">
            <div className="card-header bg-light">
              Welcome to Local Services Registration
            </div>
            <div className="card-body bg-cover">
              <h5 className="card-title">Create Your Local Services Account</h5>
              <p className="card-text">Please select your desired registration type to get started with Urban Services.</p>
              <div className="mt-4">
                <Link to="/serviceprovider/registration" className="btn  btn-lg hover-effect btn-dribbble me-3">Serviceprovider</Link>
                <Link to="/user/registration" className="btn  btn-lg hover-effect btn-dribbble">User</Link>
              </div>
            </div>
            <div className="card-footer text-muted text-center bg-light">
              Already have an account? <Link to="/login" className="text-primary">Log in here</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>

  </>
  








  )
}
