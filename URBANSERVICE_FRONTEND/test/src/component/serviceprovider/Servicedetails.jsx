import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const Servicedetails = () => {

    const cards = [
        {
            id:1,
            title:"Card 1",
            content:"This is content of Card1",
            imageURL:"https://via.placeholder.com/150"
        }
    ]
    const id = useParams().id
    const [services,setservices] = useState([])


    useEffect(()=>{
        submitHandler()
    },[])



    const submitHandler = async()=>{
        try{
            const res = await axios.get("http://localhost:4000/services/service/"+id)
            console.log(res.data.data)
            setservices(res.data.data)
        }catch(error){
            console.log(error)
        }
    }

  return (
<div className="container mt-5">
  <div className="card border rounded shadow">
    <h2 className="card-header text-center bg-transparent mb-0">Service Details</h2>
    <div className="card-body">
      <div className="row no-gutters">
        <div className="col-md-6">
          <div className="card-body">
            <h5 className="card-title mb-4">{services?.serviceName}</h5>
            <div className="details-item mb-3">
              <h6 className="card-subtitle text-muted">Type:</h6>
              <p className="card-text">{services?.type?.name}</p>
            </div>
            <div className="details-item mb-3">
              <h6 className="card-subtitle text-muted">Category:</h6>
              <p className="card-text">{services?.category?.name}</p>
            </div>
            <div className="details-item mb-3">
              <h6 className="card-subtitle text-muted">Subcategory:</h6>
              <p className="card-text">{services?.subCategory?.name}</p>
            </div>
            <div className="details-item mb-3">
              <h6 className="card-subtitle text-muted">Fees:</h6>
              <p className="card-text">{services?.fees}</p>
            </div>
            <div className="details-item mb-3">
              <h6 className="card-subtitle text-muted">Location:</h6>
              <p className="card-text">{services?.city}, {services?.area}, {services?.state}</p>
            </div>
            <div className="details-item mb-3">
              <h6 className="card-subtitle text-muted">Service Provider:</h6>
              <p className="card-text">{services?.serviceprovider?.name}</p>
            </div>
            
          </div>
        </div>
        <div className="col-md-6">
          <img src={services?.imageURL} className="card-img img-fluid rounded-right" alt="Service" style={{ height: "100%", objectFit: "cover" }} />
        </div>
      </div>
    </div>
  </div>
</div>

  
  )
}
