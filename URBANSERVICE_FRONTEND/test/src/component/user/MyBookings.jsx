import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const MyBookings = () => {
  
  
  const [user,setUser] = useState([])
  const id = localStorage.getItem('id')
  const fetchBooking = async()=>{
    try{
      if(id!==undefined && id!==null){
        const res = await axios.get('http://localhost:4000/bookings/booking/',id)
        console.log(res.data.data)
        setUser(res.data.data) 
      }
    }catch(error){
      alert('No Booking Found')
    }
  }
  
//   const deleteBooking = async(id)=>{
//     try{
//         const res = await axios.delete("http://localhost:4000/bookings/booking/"+id);
//         if(res.status === 200){
//             fetchBooking()
//         }
//     }catch(error){
//       console.log(error)
//         toast.error('😣 Internal Error!', {
//             position: "top-right",
//             autoClose: 5000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//             theme: "light",
//           });
//     }
// }
  
  useEffect(()=>{
    if (id != undefined || id !== null) {
      console.log("id.......", id);
      fetchBooking();
    }
  },[])
  
  
  
  
  return (
    <>
<div className="col-md-12">
  <div className="card shadow" style={{ backgroundColor: "#f0f0f0" }}>
    <div className="card-header bg-secondary">
      <h4 className="card-title text-white mb-0">My Bookings</h4>
      <p className="card-category text-white mb-2">Here are your booked services</p>
    </div>
    <div className="card-body table-responsive">
      <table className="table table-hover custom-table">
        <thead>
          <tr>
            <th className="align-middle">Service Name</th>
            <th className="align-middle">Total Amount</th>
            <th className="align-middle">Status</th>
            {/* <th className='align-middle'>Action</th> */}
          </tr>
        </thead>
        <tbody>
          {user?.map((user, index) => (
            <tr key={index}>
              <td>{user?.service?.serviceName}</td>
              <td>{user?.total}</td>
              <td>{user?.status}</td>
              {/* <td><button className="btn btn-danger" onClick={() => {deleteBooking(user._id)}}>Delete</button></td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <style>{
      `.custom-table {
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      }

      .custom-table th,
      .custom-table td {
        padding: 12px;
        vertical-align: middle;
      }

      .custom-table th {
        font-weight: bold;
        text-align: left;
        color: #343a40;
        background-color: #f8f9fa;
      }

      .custom-table tbody tr:nth-of-type(odd) {
        background-color: #f8f9fa;
      }

      .custom-table tbody tr:hover {
        background-color: #e9ecef;
      }`
    }
    </style>
  </div>
</div>

  </>
  )
}
