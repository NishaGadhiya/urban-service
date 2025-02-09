import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import './Payment.css'

export const Payment = () => {

  const {register,handleSubmit,reset} = useForm()
  const [payment,setPayment] = useState([])
  const id = useParams().id
  console.log(id)

  const userId = localStorage.getItem('id')
  const [addressId,setaddressId] = useState('')
  const [address,setaddress] = useState()

  const getUserById = async () => {
    try{
      const res = await axios.get('http://localhost:4000/users/user/' + userId)
      console.log("User by id..",res.data.data)
      console.log("Address.........",res.data.data.address)
      setaddress(res.data.data.address)
    }catch(error){
      console.log(error)
    }
  }

  const handleClick = (id)=>{
    const addressId = id
    console.log("Address Id...",addressId)
    setaddressId(addressId)
  }

  const deleteAddress = async (id) => {
    console.log(id)

    try{
      const res = await axios.delete('http://localhost:4000/address/address/' + id)
      console.log(res.data)
      getUserById()
    }catch(error){
      console.log(error)
    }
  }

  useEffect(()=>{
    getUserById()
  },[])




  const handleFormSubmit = async(data)=>{
    try{
      const obj = {
        "status":"Booked",
        // "address":addressId,
      }
      console.log("Object to be changed...",obj)
      const res = await axios.put("http://localhost:4000/bookings/booking/updatestatus/"+id,obj)
      setPayment(res.data.data)
      toast.success('😃 Payment Successful!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
      console.log("res data....",res.data.data)
    }catch(error){
      console.log(error.message)
    }
  }


  const submitHandler = async (data) => {
    try{
      data.user = userId
      const res = await axios.post('http://localhost:4000/address/address',data)
      console.log("Address in submithandler...........",res.data.data)
      reset()
      getUserById()
    }catch(error){
      console.log(error)
    }
  }

  return (
    <>
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
<div className="container-fluid1 py-4 ">
           <div className="row">
            <div className="col-md-7 mt-4 mx-3 ">
              <div className="card ">
                <div className="card-header pb-0 px-3">
                  <h4 className="mb-0">Address Information</h4>
                </div>
                {/* {addresses?.map((address) => { */}
                    <div className="card-body pt-4 p-3  ">
                      <ul
                        className="list-group bg-gradient-default"
                        style={{ border: "1px solid black" }}
                      >
                        <li className="list-group-item border-0 d-flex p-4 mb-2 bg-gray-100 border-radius-lg">
                          <div className="d-flex flex-column">
                            <span className="mb-2 text-xs">
                              Address :-
                              <span className="text-dark font-weight-bold ms-sm-2">
                                {address?.address}
                              </span>
                            </span>
                            <span className="mb-2 text-xs">
                              City Name :-
                              <span className="text-dark font-weight-bold ms-sm-2">
                                {address?.city}
                              </span>
                            </span>
                            <span className="mb-2 text-xs">
                              State :-
                              <span className="text-dark font-weight-bold ms-sm-2 ">
                                {address?.state}
                              </span>
                            </span>
                            <span className="text-xs">
                              Postal Code:{" "}
                              <span className="text-dark ms-sm-2 font-weight-bold">
                                {address?.postalCode}
                              </span>
                            </span>
                          </div>
                          <div className="ms-auto text-end">
                            <button
                              className="btn btn-link bg-gradient-danger text-danger text-gradient px-3 mb-auto"
                              style={{ width: "110px", marginTop: "3px" }}
                              value={address?._id}
                              onClick={() => {
                                deleteAddress(address?._id);
                              }}
                            >
                              <i className="material-icons text-sm me-3">
                                delete
                              </i>
                              Delete
                            </button>
                            <br />

                            <Link
                              to={`/user/payment/updateaddress/${address?._id}`}
                              className="btn btn-link bg-gradient-info text-info text-gradient px-3  mb-auto"
                              style={{ width: "110px", marginTop: "9px" }}
                              value={address?._id}
                            >
                              <i className="material-icons text-sm me-3">
                                edit
                              </i>
                              Update
                            </Link>
                            <br />
                            <button
                              className="btn btn-link bg-gradient-success text-success text-gradient px-3  mb-auto"
                              style={{ width: "110px", marginTop: "9px" }}
                              value={address?._id}
                              onClick={() => handleClick(address?._id)}
                            >
                              <i
                                className="material-icons text-sm me-3"
                                type="checkbox"
                              >
                                add
                              </i>
                              Select
                            </button>
                          </div>
                        </li>
                      </ul>
                    </div>
                {/* })} */}
              </div>
            </div> 

            <div className="col-lg-4 col-md-8 mt-4 col-12 mx-auto mt-4">
              <div className="card z-index-0 fadeIn3 fadeInBottom">
                <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                  <div className="bg-gradient-primary shadow-primary border-radius-lg py-3 pe-1">
                    <h4 className="text-white font-weight-bolder text-center mt-2 mb-0">
                      Add Address
                    </h4>
                  </div>
                </div>
                <div className="card-body">
                  <form
                    role="form"
                    className="text-start"
                    onSubmit={handleSubmit(submitHandler)}
                  >
                    <div className="input-group input-group-outline my-3">
                      <input
                        type="text"
                        placeholder="Enter Address.."
                        {...register("address")}
                        className="form-control"
                      />
                    </div>

                    <div className="input-group input-group-outline my-3">
                      <input
                        type="text"
                        placeholder="Enter City.."
                        {...register("city")}
                        className="form-control"
                      />
                    </div>

                    <div className="input-group input-group-outline my-3">
                      <input
                        type="text"
                        placeholder="Enter State.."
                        {...register("state")}
                        className="form-control"
                      />
                    </div>

                    <div className="input-group input-group-outline mb-3">
                      <input
                        type="number"
                        placeholder="Enter Postal Code.."
                        {...register("postalCode")}
                        className="form-control"
                      />
                    </div>

                    <div className="text-center">
                      <input
                        type="submit"
                        // value="sign In"
                        className="btn bg-gradient-primary w-100 my-4 mb-2"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
    {/* <form onSubmit={handleSubmit(submitHandler)}>
    <div className="container mt-5 px-5">
  <div className="mb-4">
    <h2>Confirm order and pay</h2>
    <span>
      please make the payment, after that you can enjoy all the features and
      benefits.
    </span>
  </div>
  <div className="row">
    <div className="col-md-8">
      <div className="card p-3">
        <h6 className="text-uppercase">Payment details</h6>
        <div className="inputbox mt-3">
          {" "}
          <input
            type="text"
            name="name"
            className="form-control"
            // required="required"
          />{" "}
          <span>Name on card</span>{" "}
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="inputbox mt-3 mr-2">
              {" "}
              <input
                type="text"
                name="name"
                className="form-control"
                // required="required"
              />{" "}
              <i className="fa fa-credit-card" /> <span>Card Number</span>
            </div>
          </div>
          <div className="col-md-6">
            <div className="d-flex flex-row">
              <div className="inputbox mt-3 mr-2">
                {" "}
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  // required="required"
                />{" "}
                <span>Expiry</span>{" "}
              </div>
              <div className="inputbox mt-3 mr-2">
                {" "}
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  // required="required"
                />{" "}
                <span>CVV</span>{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 mb-4">
          <h6 className="text-uppercase">Billing Address</h6>
          <div className="row mt-3">
            <div className="col-md-6">
              <div className="inputbox mt-3 mr-2">
                {" "}
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  // required="required"
                />{" "}
                <span>Street Address</span>{" "}
              </div>
            </div>
            <div className="col-md-6">
              <div className="inputbox mt-3 mr-2">
                {" "}
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  // required="required"
                />{" "}
                <span>City</span>{" "}
              </div>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-md-6">
              <div className="inputbox mt-3 mr-2">
                {" "}
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  // required="required"
                />{" "}
                <span>State/Province</span>{" "}
              </div>
            </div>
            <div className="col-md-6">
              <div className="inputbox mt-3 mr-2">
                {" "}
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  // required="required"
                />{" "}
                <span>Zip code</span>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 mb-4 d-flex justify-content-between">
        <span>Previous step</span>
        {/* <button className="btn btn-success px-3">Pay</button> */}
        {/* <input type='submit' className='btn btn-success px-3' value='Pay'/>
      </div>
    </div>
  </div>
</div>
</form> */} 
<>
  <div className="container mt-5 px-5">
    <div className="mb-4">
      <h2>Confirm order and pay</h2>
      <span>
        Please make the payment, after that you can enjoy all the features and
        benefits.
      </span>
    </div>
    <div className="row">
      <div className="col-md-8">
        <div className="card p-3">
          <h6 className="text-uppercase">Payment details</h6>
          <div className="inputbox mt-3">
            {" "}
            <input
              type="text"
              name="name"
              className="form-control"
              
              required
              pattern="[A-Za-z\s]+"
              title="Please enter alphabets only"
              onChange={(e) =>
                e.target.setCustomValidity(
                  e.target.validity.patternMismatch ? "Please enter alphabets only" : ""
                )
              }
            />{" "}
            <span>Name on card</span>{" "}
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="inputbox mt-3 mr-2">
                {" "}
                <input
                  type="text"
                  name="cardNumber"
                  className="form-control"
                  
                  required
                  pattern="\d{16}"
                  title="Please enter a valid 16-digit card number"
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, '');
                    e.target.value = value.substring(0, 16);
                    e.target.setCustomValidity(
                      e.target.validity.patternMismatch ? "Please enter a valid 16-digit card number" : ""
                    );
                  }}
                />{" "}
                <i className="fa fa-credit-card" /> <span>Card Number</span>
              </div>
            </div>
            <div className="col-md-6">
              <div className="d-flex flex-row">
                <div className="inputbox mt-3 mr-2">
                  {" "}
                  <input
                    type="text"
                    name="expiry"
                    className="form-control"
                    
                    required
                    pattern="(0[1-9]|1[0-2])\/([0-9]{2})"
                    title="Please enter a valid expiry date in the format MM/YY"
                    onChange={(e) =>
                      e.target.setCustomValidity(
                        e.target.validity.patternMismatch ? "Please enter a valid expiry date in the format MM/YY" : ""
                      )
                    }
                  />{" "}
                  <span>Expiry</span>{" "}
                </div>
                <div className="inputbox mt-3 mr-2">
                  {" "}
                  <input
                    type="password"
                    name="cvv"
                    className="form-control"
                    
                    required
                    pattern="\d{3}"
                    title="Please enter a valid 3-digit CVV"
                    onChange={(e) => {
                      const value = e.target.value.replace(/\D/g, '');
                      e.target.value = value.substring(0, 3);
                      e.target.setCustomValidity(
                        e.target.validity.patternMismatch ? "Please enter a valid 3-digit CVV" : ""
                      );
                    }}
                  />{" "}
                  <span>CVV</span>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 mb-4">
            <h6 className="text-uppercase">Billing Address</h6>
            <div className="row mt-3">
              <div className="col-md-6">
                <div className="inputbox mt-3 mr-2">
                  {" "}
                  <input
                    type="text"
                    name="streetAddress"
                    className="form-control"
                    
                    required
                    pattern="[A-Za-z\s]+"
                    title="Please enter alphabets only"
                    onChange={(e) =>
                      e.target.setCustomValidity(
                        e.target.validity.patternMismatch ? "Please enter alphabets only" : ""
                      )
                    }
                  />{" "}
                  <span>Street Address</span>{" "}
                </div>
              </div>
              <div className="col-md-6">
                <div className="inputbox mt-3 mr-2">
                  {" "}
                  <input
                    type="text"
                    name="city"
                    className="form-control"
                    
                    required
                    pattern="[A-Za-z\s]+"
                    title="Please enter alphabets only"
                    onChange={(e) =>
                      e.target.setCustomValidity(
                        e.target.validity.patternMismatch ? "Please enter alphabets only" : ""
                      )
                    }
                  />{" "}
                  <span>City</span>{" "}
                </div>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-md-6">
                <div className="inputbox mt-3 mr-2">
                  {" "}
                  <input
                    type="text"
                    name="state"
                    className="form-control"
                    
                    required
                    pattern="[A-Za-z\s]+"
                    title="Please enter alphabets only"
                    onChange={(e) =>
                      e.target.setCustomValidity(
                        e.target.validity.patternMismatch ? "Please enter alphabets only" : ""
                      )
                    }
                  />{" "}
                  <span>State/Province</span>{" "}
                </div>
              </div>
              <div className="col-md-6">
                <div className="inputbox mt-3 mr-2">
                  {" "}
                  <input
                    type="text"
                    name="zipCode"
                    className="form-control"
                    required
                    pattern="\d{5}"
                    title="Please enter a valid 5-digit ZIP code"
                    onChange={(e) =>
                      e.target.setCustomValidity(
                        e.target.validity.patternMismatch ? "Please enter a valid 5-digit ZIP code" : ""
                      )
                    }
                  />{" "}
                  <span>Zip code</span>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 mb-4 d-flex justify-content-between">
          <span>Previous step</span>
          <button className='btn btn-success px-3' onClick={handleFormSubmit}>Pay</button>
        </div>
      </div>
    </div>
  </div>
</>





<style>
   {`
   body{

    background-color: #eee;
}

.container{

    height: 100vh;

}


.card{
    border:none;
}

.form-control {
    border-bottom: 2px solid #eee !important;
    border: none;
    font-weight: 600
}

.form-control:focus {
    color: #495057;
    background-color: #fff;
    border-color: #8bbafe;
    outline: 0;
    box-shadow: none;
    border-radius: 0px;
    border-bottom: 2px solid blue !important;
}



.inputbox {
    position: relative;
    margin-bottom: 20px;
    width: 100%
}

.inputbox span {
    position: absolute;
    top: 7px;
    left: 11px;
    transition: 0.5s
}

.inputbox i {
    position: absolute;
    top: 13px;
    right: 8px;
    transition: 0.5s;
    color: #3F51B5
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0
}

.inputbox input:focus~span {
    transform: translateX(-0px) translateY(-15px);
    font-size: 12px
}

.inputbox input:valid~span {
    transform: translateX(-0px) translateY(-15px);
    font-size: 12px
}

.card-blue{

    background-color: #492bc4;
}

.hightlight{

    background-color: #5737d9;
    padding: 10px;
    border-radius: 10px;
    margin-top: 15px;
    font-size: 14px;
}

.yellow{

    color: #fdcc49; 
}

.decoration{

    text-decoration: none;
    font-size: 14px;
}

.btn-success {
    color: #fff;
    background-color: #492bc4;
    border-color:#492bc4;
}

.btn-success:hover {
    color: #fff;
    background-color:#492bc4;
    border-color: #492bc4;
}


.decoration:hover{

    text-decoration: none;
    color: #fdcc49; 
}
.form-control:invalid {
  border-color: red;
}



`}
// </style>

</div>
</>
// {/* <>
// <form onsubmit={handleSubmit(submitHandler)}>
// <div className="container mt-5 px-5">
//   <div className="mb-4">
//     <h2>Confirm order and pay</h2>
//     <span>
//       Please make the payment, after that you can enjoy all the features and
//       benefits.
//     </span>
//   </div>
//   <div className="row">
//     <div className="col-md-8">
//       <div className="card p-3">
//         <h6 className="text-uppercase">Payment details</h6>
//         <div className="inputbox mt-3">
//           <input
//             type="text"
//             name="name"
//             className="form-control"
//             placeholder="Name on card"
//           />
//           <span>Name on card</span>
//         </div>
//         <div className="row">
//           <div className="col-md-6">
//             <div className="inputbox mt-3 mr-2">
//               <input
//                 type="text"
//                 name="name"
//                 className="form-control"
//                 placeholder="Card Number"
//               />
//               <i className="fa fa-credit-card" />
//               <span>Card Number</span>
//             </div>
//           </div>
//           <div className="col-md-6">
//             <div className="d-flex flex-row">
//               <div className="inputbox mt-3 mr-2">
//                 <input
//                   type="text"
//                   name="name"
//                   className="form-control"
//                   placeholder="Expiry"
//                 />
//                 <span>Expiry</span>
//               </div>
//               <div className="inputbox mt-3 mr-2">
//                 <input
//                   type="text"
//                   name="name"
//                   className="form-control"
//                   placeholder="CVV"
//                 />
//                 <span>CVV</span>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="mt-4 mb-4">
//           <h6 className="text-uppercase">Billing Address</h6>
//           <div className="row mt-3">
//             <div className="col-md-6">
//               <div className="inputbox mt-3 mr-2">
//                 <input
//                   type="text"
//                   name="name"
//                   className="form-control"
//                   placeholder="Street Address"
//                 />
//                 <span>Street Address</span>
//               </div>
//             </div>
//             <div className="col-md-6">
//               <div className="inputbox mt-3 mr-2">
//                 <input
//                   type="text"
//                   name="name"
//                   className="form-control"
//                   placeholder="City"
//                 />
//                 <span>City</span>
//               </div>
//             </div>
//           </div>
//           <div className="row mt-2">
//             <div className="col-md-6">
//               <div className="inputbox mt-3 mr-2">
//                 <input
//                   type="text"
//                   name="name"
//                   className="form-control"
//                   placeholder="State"
//                 />
//                 <span>State</span>
//               </div>
//             </div>
//             <div className="col-md-6">
//               <div className="inputbox mt-3 mr-2">
//                 <input
//                   type="text"
//                   name="name"
//                   className="form-control"
//                   placeholder="Zip code"
//                 />
//                 <span>Zip code</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="mt-4 mb-4 d-flex justify-content-between">
//         <span>Previous step</span>
//        <Link to='/user/dashboard'> <input
//           type="submit"
//           className="btn btn-success px-3"
//           value="Pay"
//         /></Link>
//       </div>
//     </div>
//   </div>
// </div>
// </form>
// <style>
//   {`
//   .btn:hover,
//   .btn:focus {
//     opacity: 0.8;
//   }

//   .form-control:hover,
//   .form-control:focus {
//     border-color: #80bdff;
//     box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
//   }

//   .inputbox:hover input {
//     border-color: #80bdff;
//     box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
//   }

//   .inputbox:hover i,
//   .inputbox:hover span {
//     color: #80bdff;
//   }`}
// </style>
// </> */}
  )
}

