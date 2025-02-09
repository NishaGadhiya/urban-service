import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

export const FetchDetails = () => {

    const navigate = useNavigate()
    const cards = [
        {
            id:1,
            title:"Card 1",
            content:"This is the content of card1",
            imageURL:"https://via.placeholder.com/150"
        }
    ]


    const submitBooking = async()=>{
        const serviceProviderId = services?.serviceprovider?._id
        console.log("service provider...",services)
        const userId = localStorage.getItem('id')
        const id1 = id
        const fees = services.fees 

        const obejctToSubmit = {
            service:id1,
            serviceprovider:serviceProviderId,
            user:userId,
            total:fees
        }
        console.log("obj to sbmit",obejctToSubmit)
        try{
            const res = await axios.post("http://localhost:4000/bookings/booking",obejctToSubmit)
            console.log("Submited object..",obejctToSubmit)
            console.log(res.data.data)
            navigate('/user/payment/'+res?.data?.data._id)
        }catch(error){
            console.log(error)
        }
    }

    

    const id = useParams().id

    const [services,setService] = useState()

    const fetchData = async ()=>{
        // alert("ok")
        try{
            const res = await axios.get("http://localhost:4000/services/service/"+id)
            console.log("serv...",res.data.data)
            const responseData = res.data.data
            console.log("response data",responseData)
            setService(responseData);

           
        }catch(error){
            console.log("Error", error)
        }
    }

    useEffect(()=>{
        fetchData()
    },[])

  return (
  <div className="container mt-5">
  <h2 className="text-center mb-4">Service Details</h2>
  <div className="card border rounded shadow">
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
          <div className="text-center">
            <button onClick={() => { submitBooking() }} className="btn btn-primary mt-3">Confirm Booking</button>
          </div>
        </div>
      </div>
      <div className="col-md-6 overflow-hidden">
        <img src={services?.imageURL} className="img-fluid rounded-right" alt="Service" style={{ height:"100%", objectFit:"fill"  }} />
      </div>
    </div>
  </div> 
</div>

  
  
  
  
  
  
  
  )
}
