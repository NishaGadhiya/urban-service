import React, { useEffect, useState } from 'react'
import './Details.css'
import axios from 'axios'
import { useParams } from 'react-router-dom'

export const BookServiceDetails = () => {
  
  
  const cards = [
    {
      id:1,
      title:"Card-1",
      content:"This is the content of Card-1",
      imageURL:'https://via.placeholder.com/150'
    }
  ]
  
  const submitBooking = async()=>{
    const serviceProviderId = services.serviceprovider
    const userId = localStorage.getItem('id')
    const id1 = id
    const amount = services.fees
    
    const objToSubmit = {
      service:id1,
      serviceprovider:serviceProviderId,
      user:userId,
      total:amount
    }

    try{
      const res = await axios.post('http://localhost:4000/bookings/booking',objToSubmit)
    }catch(error){
      console.log("error")
    }
  }
  
  const [services,setServices] = useState([])
  const id = useParams().id

  const submitHnadler = async()=>{
    try{
      const res = await axios.get("http://localhost:4000/services/service/",id)
      setServices(res.data.data)
    }catch(error){
      console.log('Error in fetching data from server')
    }
  } 
  
  useEffect(()=>{
    submitHnadler()
  },[])
  
  return (
    <div className="container mt-5">
    <div className="row">
      {cards.map((card) => (
        <div key={card.id} className="col-md-4 mb-4">
          <div className="card">
            <img
              src={services.imageURL}
              className="card-img-top"
              alt={`Card ${services._id}`}
            />

            <div className="card-body">
              <h5 className="card-title">{services.serviceName}</h5>
              <p className="card-text">{services?.category?.name}</p>
              <p className="card-text">{services?.subCategory?.name}</p>
              <p className="card-text">{services?.type?.name}</p>
              <p className="card-text">{services?.fees}</p>
              <p className="card-text">{services?.area}</p>
              <p className="card-text">{services?.city}</p>
              <p className="card-text">{services?.state}</p>
              <button className="btn btn-primary" onClick={()=>{submitBooking()}}>
              Confirm Booking
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}
