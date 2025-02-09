import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import './ServiceList.css'
import { Link } from 'react-router-dom';
import { Navbar } from '../Navbar';

export const ServiceList = () => {

    const [services,setServices] = useState([])

    const getData = async () => {
        try{
            const res = await axios.get("http://localhost:4000/services/service")
            setServices(res.data.data)
            console.log(res.data.data)
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
        getData()
    },[])

    const deleteService = async (id) => { 
        try{
            const res = await axios.delete("http://localhost:4000/services/service/"+id);
            if(res.status === 200){
                toast.success('😃 Service Deleted!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    });
            }
            getData();

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




  return (
    <div>
        <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
/>
<div className="container">
  <h1 className="display-4 mb-4">Service List</h1>
  <table className="table table-striped table-bordered">
    <thead className="table-dark">
      <tr>
        <th scope="col">Name</th>
        <th scope="col">Category</th>
        <th scope="col">Subcategory</th>
        <th scope="col">Type</th>
        <th scope="col">Fees</th>
        <th scope="col">Area</th>
        <th scope="col">City</th>
        <th scope="col">State</th>
        <th scope="col">ServiceProvider</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>
      {
        services?.map((service) => {
          return (
            <tr key={service?._id}>
              <td>{service?.serviceName}</td>
              <td>{service?.category?.name}</td>
              <td>{service?.subCategory?.name}</td>
              <td>{service?.type?.name}</td>
              <td>{service?.fees}</td>
              <td>{service?.area}</td>
              <td>{service?.city}</td>
              <td>{service?.state}</td>
              <td>{service?.serviceprovider?.name}</td>
              <td>
                <button className="btn btn-danger mb-2" onClick={() => { deleteService(service?._id) }}>Delete</button>
                <Link to={`/serviceprovider/updateservice/${service._id}`} className="btn btn-primary">Update</Link>
              </td>
            </tr>
          )
        })
      }
    </tbody>
  </table>
</div>


    </div>




  )
}



