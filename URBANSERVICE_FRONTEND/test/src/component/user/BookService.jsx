import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './BookServiceImage.css'
import { Servicedetails } from '../serviceprovider/Servicedetails';
import { Helmet } from 'react-helmet';
import { Navbar } from '../Navbar';

export const BookService = () => {
  
    const navigate = useNavigate()
    const [services, setServices] = useState([])

   const searchService = async(e)=>{
    try{
      const res = await axios.get("http://localhost:4000/services/servicefilter",{
        params:{
          serviceName:e.target.value
        }
      })
      console.log("res in searchservice...",res.data.data)
      setServices(res.data.data)
    }catch(error){
      setServices([])
      console.log("Error.....",error.message)
    }
   }

  const displayService = async()=>{
    try{
        const res = await axios.get('http://localhost:4000/services/service')
            if(res.status === 200){
                console.log("Success")
                console.log(res.data.data)
                setServices(res.data.data)
           }else{
            console.log("error")
           } 

    }catch(error){
        toast.error('😣 Internal Error!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
    }
  }
  
  
  
  
  useEffect(()=>{
    displayService()
  },[])
  
  
  
  
    return (
    // <div className='d-flex flex-wrap'>
    //         {
    //             services?.map((service)=>{
    //                 return<> 
    //                     <div className="card">
    //                         <img className="card-img-top" src={service?.imageURL} alt="Card image cap"/>
    //                         <div className="card-body">
    //                             <h3 className="card-title">{service?.serviceName}</h3>
    //                             <h5 className="card-title">Fees:{service?.fees}</h5>
    //                             <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    //                             <Link to={`/user/fetchservice/${service._id}`} className="btn btn-primary">Book Now</Link>
    //                         </div>
    //                     </div>

                     
    //                 </>
    //             })
    //         }
    //     </div>

  //   <div
  //   className="container mt-5"
  //   style={{ marginLeft: `5%`, maxWidth: `80%` }}
  // >
  //   <h1 className="mb-4">Book a Service</h1>
  //   <div className="row">
  //     {services.map((service) => (
  //       <div key={service._id} className="col-md-4 mb-4">
  //         <div className="card">
  //           <img
  //             src={service.imageURL}
  //             className="card-img-top"
  //             alt={`Card ${service._id}`}
  //           />
  //           <div className="card-body">
  //             <h5 className="card-title">{service?.serviceName}</h5>
  //             <p className="card-text">{service?.fees}</p>
  //             <button className="btn btn-primary">
  //               {/* <Link to={`/user/bookservicedetials/${service._id}`} style={{color:`white`}}>Book Now</Link> */}
  //               <Link to={`/user/fetchdetails/${service._id}`} style={{color:`white`}}>Book Now</Link>
  //             </button>
  //           </div>
  //         </div>
  //       </div>
  //     ))}
  //   </div>
  // </div>

//   <>

//   <div className="container justify-content-center">
//     <div className="row">
//       <div className="col-md-8">
//         <div className="input-group mb-3 input-group-outline mb-3 m-3 border border-primary">
//           <input
//             type="text"
//             className="form-control input-text"
//             placeholder="Search services...."
//             aria-label="Recipient's username"
//             onChange={(e) => {
//               searchService(e);
//             }}
//             aria-describedby="basic-addon2"
//           />
//           <i className="fa fa-search m-3 border" />
//         </div>
//       </div>
//     </div>
//   </div>
//   <div
//     className="container mt-5"
//     style={{ marginLeft: `5%`, maxWidth: `80%` }}
//   >
//     <h1 className="mb-4">Book a Service</h1>
//     <div className="row">
//       {services.map((service) => (
//         <div key={service._id} className="col-md-4 mb-4">
//           <div className="card">
//             <img
//               src={service.imageURL}
//               className="card-img-top"
//               alt={`Card ${service._id}`}
//             />
//             <div className="card-body">
//               <h5 className="card-title">{service?.serviceName}</h5>
//               <p className="card-text">{service?.fees}</p>
//               <button className="btn btn-primary">
//                 <Link
//                   to={`/user/fetchdetails/${service._id}`}
//                   style={{ color: `white` }}
//                 >
//                   BOOK NOW
//                 </Link>
//               </button>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
// </>
        <>
          <>
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="input-group mb-3 m-3 rounded border shadow-sm" style={{ background: "linear-gradient(to right, #f0f0f0, #e0e0e0)" }}>
          <input
              type="text"
              className="form-control input-text rounded"
              style={{ paddingLeft: "10px", paddingRight:"10px" }} 
              placeholder="Search services..."
              aria-label="Search services"
              onChange={(e) => {
              searchService(e);
              }}
              aria-describedby="basic-addon2"
          />
        <div className="input-group-append">
          <span className="input-group-text border-0 bg-transparent rounded-right" style={{ backgroundColor: "#007bff", color: "#ffffff" }}>
          <i className="fa fa-search"  style={{paddingRight:"10px"}}/>
          </span>
        </div>
        </div>
      </div>
    </div>
  </div>

  <div className="container mt-5">
  <h1 className="text-center mb-4">Book a Service</h1>
  <div className="row">
    {services.map((service) => (
      <div key={service._id} className="col-md-4 mb-4">
        <div className="card h-100 border rounded shadow-sm" style={{ position: "relative" }}>
          <img
            src={service.imageURL}
            className="card-img-top rounded-top"
            alt={`Service ${service._id}`}
            loading="lazy"
            style={{ maxHeight: "300px", objectFit: "cover" }} // Added styling for the image
          />
          <div className="card-body">
            <h5 className="card-title">{service?.serviceName}</h5>
            <p className="card-text">{service?.fees}</p>
            <button className="btn btn-primary btn-block">
              <Link
                to={`/user/fetchdetails/${service._id}`}
                className="text-white"
              >
                BOOK NOW
              </Link>
            </button>
          </div>
          <style>
            {`
              .card:hover {
                transform: translateY(-5px);
                transition: transform 0.3s ease;
                background-color: #f8f9fa;
              }
            `}
          </style>
        </div>
      </div>
    ))}
  </div>
</div>


</>

</>

  )
}
