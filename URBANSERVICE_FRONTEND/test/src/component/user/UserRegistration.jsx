import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

export const UserRegistration = () => {
  
  const {register,handleSubmit} = useForm()

  const submitHandler = async(data)=>{
    try{
        const res = await axios.post("http://localhost:4000/users/user",data)
        console.log(res.data.data)
        window.location.pathname = "/user/dashboard"
    }catch(error){
        console.log(error.message)
    }
  }
    
  
  
  
  
return (
    <div className="page-header min-vh-100">
      <div className="container">
        <div className="row">
          <div className="col-6 d-lg-flex d-none h-100 my-auto pe-0 position-absolute top-0 start-0 text-center justify-content-center flex-column">
            <div
              className="position-relative bg-gradient-primary h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center"
              style={{
                backgroundImage:
                  'url("../assets/img/illustrations/illustration-signup.jpg")',
                backgroundSize: "cover",
              }}
            ></div>
          </div>
          <div className="col-xl-4 col-lg-5 col-md-7 d-flex flex-column ms-auto me-auto ms-lg-auto me-lg-5">
            <div className="card">
              <div className="card-header">
                <h4 className="font-weight-bolder">Sign Up</h4>
                <p className="mb-0">
                  Enter your email and password to register
                </p>
              </div>
              <div className="card-body">
                <form role="form" onSubmit={handleSubmit(submitHandler)}>
                  <div>
                    <input
                      type="radio"
                      className="input-form-check"
                      value="65ccb8aa9a50ad86fbda41ae"
                      checked
                      {...register("role")}
                    />
                    <label className="form-label">User</label>
                  </div>
                  <label className="form-label">Name:</label>
                  <div className="input-group input-group-outline mb-3">
                    <input
                      type="text"
                      className="form-control"
                      {...register("name")}
                    />
                  </div>
                  <label className="form-label">Email:</label>
                  <div className="input-group input-group-outline mb-3">
                    <input
                      type="email"
                      className="form-control"
                      {...register("email")}
                    />
                  </div>
                  <label className="form-label">Password:</label>
                  <div className="input-group input-group-outline mb-3">
                    <input
                      type="password"
                      className="form-control"
                      {...register("password")}
                    />
                  </div>
                  <label className="form-label">Contact:</label>
                  <div className="input-group input-group-outline mb-3">
                    <input
                      type="text"
                      className="form-control"
                      {...register("contact")}
                    />
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn btn-lg bg-gradient-primary btn-lg w-100 mt-4 mb-0"
                    >
                      Sign Up
                    </button>
                  </div>
                </form>
              </div>
              <div className="card-footer text-center pt-0 px-lg-2 px-1 bg-light">
                <p className="mb-2 text-sm mx-auto">
                  Already have an account?
                  <Link
                    to="/login"
                    className="text-primary text-gradient font-weight-bold"
                  >
                    Sign In
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
//     <div className="page-header min-vh-100">
//   <div className="container">
//     <div className="row">
//       <div className="col-6 d-lg-flex d-none h-100 pe-0 position-absolute top-0 start-0 text-center justify-content-center flex-column">
//         <div
//           className="position-relative bg-gradient-primary h-100 m-0 px-7 border-radius-lg d-flex flex-column justify-content-center"
//           style={{
//             backgroundImage:
//               'url("../assets/img/illustrations/illustration-signup.jpg")',
//             backgroundSize: "cover",
//           }}
//         ></div>
//       </div>
//       <div className="col-xl-6 col-lg-7 col-md-12 d-flex flex-column ms-auto me-auto ms-lg-auto me-lg-0">
//         <div className="card h-100">
//           <div className="card-header">
//             <h4 className="font-weight-bolder">Sign Up</h4>
//             <p className="mb-0">
//               Enter your email and password to register
//             </p>
//           </div>
//           <div className="card-body">
//             <form role="form" onSubmit={handleSubmit(submitHandler)}>
//               <div>
//                 <input
//                   type="radio"
//                   className="input-form-check"
//                   value="65ccb8aa9a50ad86fbda41ae"
//                   checked
//                   {...register("role")}
//                 />
//                 <label className="form-label">User</label>
//               </div>
//               <label className="form-label">Name:</label>
//               <div className="input-group input-group-outline mb-3">
//                 <input
//                   type="text"
//                   className="form-control"
//                   {...register("name")}
//                 />
//               </div>
//               <label className="form-label">Email:</label>
//               <div className="input-group input-group-outline mb-3">
//                 <input
//                   type="email"
//                   className="form-control"
//                   {...register("email")}
//                 />
//               </div>
//               <label className="form-label">Password:</label>
//               <div className="input-group input-group-outline mb-3">
//                 <input
//                   type="password"
//                   className="form-control"
//                   {...register("password")}
//                 />
//               </div>
//               <label className="form-label">Contact:</label>
//               <div className="input-group input-group-outline mb-3">
//                 <input
//                   type="text"
//                   className="form-control"
//                   {...register("contact")}
//                 />
//               </div>
//               <div className="text-center">
//                 <button
//                   type="submit"
//                   className="btn btn-lg bg-gradient-primary btn-lg w-100 mt-4 mb-0"
//                 >
//                   Sign Up
//                 </button>
//               </div>
//             </form>
//           </div>
//           <div className="card-footer text-center pt-0 px-lg-2 px-1 bg-light">
//             <p className="mb-2 text-sm mx-auto">
//               Already have an account?
//               <Link
//                 to="/"
//                 className="text-primary text-gradient font-weight-bold"
//               >
//                 Sign In
//               </Link>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>

   
  
  

  )
}
