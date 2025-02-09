// import React from 'react'
import React, { useEffect, useState } from 'react'
import { Button, TextField } from '@mui/material';
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCol,
    MDBContainer,
    MDBRow,
} from "mdb-react-ui-kit";
// import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { customLoader } from '../customLoader';
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet';


const PaymentDemo = () => {


    const [isLoading, setisLoading] = useState(false)
    const [cardNumber, setCardNumber] = useState('');
    const [cardNumberError, setCardNumberError] = useState(null);
    const id = useParams().id
    const [expiryMonth, setExpiryMonth] = useState('');
    const [expiryYear, setExpiryYear] = useState('');
    const [expiryDateError, setExpiryDateError] = useState(null);
    const navigate = useNavigate()
    const { register, handleSubmit, reset } = useForm();


    const userId = localStorage.getItem("id")
    const [addressId, setaddressId] = useState('')
    const [addresses, setaddresses] = useState([])

    const getuserbyid = async () => {

        try {
            const res = await axios.get("http://localhost:4000/users/user/" + userId)
            console.log(res.data.data)
            setaddresses(res.data.data.addresses)
        } catch (error) {
            console.log(error)
        }
    }

    const handleSelectclick = (id) => {

        const addressId = id
        console.log(addressId)
        setaddressId(addressId)
    }

    const deleteaddress = async (id) => {

        console.log(id)

        try {

            const res = await axios.delete("http://localhost:4000/address/address/" + id)
            console.log(res.data)
            getuserbyid()

        } catch (error) {

            console.log(error)

        }
    }

    useEffect(() => {
        validateExpiryDate();
        getuserbyid()

    }, [expiryMonth, expiryYear]);

    const handleCardNumberChange = (event) => {
        const newCardNumber = event.target.value.replace(/\D/g, '');


        if (newCardNumber.length > 16) {
            setCardNumberError('Card number cannot exceed 16 digits.');
            return;
        }


        const formattedCardNumber = newCardNumber
            .replace(/(.{4})/g, '$1 ')
            .trim();

        setCardNumber(formattedCardNumber);
        setCardNumberError(null);
    };

    const handleExpiryChange = (event) => {
        const newValue = event.target.value.replace(/\D/g, '');


        if (newValue.length === 6) {
            setExpiryMonth(newValue.slice(0, 2));
            setExpiryYear(newValue.slice(2));
        } else {

            if (newValue.length === 1 && parseInt(newValue) <= 1) {
                setExpiryMonth(newValue);
            } else if (newValue.length == 2 && parseInt(newValue) <= 12) {
                setExpiryMonth(newValue);
            } else {
                setExpiryDateError('Invalid credentials.');
            }
        }
    };

    const validateExpiryDate = () => {

        if (!expiryMonth || !expiryYear) {
            return;
        }

        setisLoading(true)
        const currentMonth = new Date().getMonth() + 1;
        const currentYear = new Date().getFullYear();
        setisLoading(false)
        if (expiryYear < currentYear || (expiryYear === currentYear && expiryMonth < currentMonth)) {
            setExpiryDateError('Card has expired. Please enter a future expiry date.');
        } else {
            setExpiryDateError(null);
            setisLoading(false)
        }

    };



    const handleFormSubmit = async () => {


        if (!cardNumber || cardNumber.length !== 19) {
            setCardNumberError('Invalid card number. Please enter 16 digits.');
            return;
        }

        if (!expiryMonth || !expiryYear) {
            setExpiryDateError('Please enter a valid expiry date in MM/YYYY format.');
            return;
        }

        try {

            const data = {
                "status": "Done",
                "address": addressId
            }

            setisLoading(true)
            const res = await axios.put(
              "http://localhost:4000/book/bookStatus/" + id,
              data
            );
            console.log(res.data)
            setisLoading(false)

            if (res.status === 200) {
                toast.success('🦄 Booking done successfully..', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            }
            navigate("/user/bookings")
            // alert("Booking done...")

        } catch (error) {

            console.log(error)
        }

        console.log('Card number:', cardNumber);
        console.log('Expiry:', expiryMonth + '/' + expiryYear);

        setCardNumber('');
        setExpiryMonth('');
        setExpiryYear('');
    };

    const submithandler = async (data) => {

        try {

            data.user = userId
            const res = await axios.post("http://localhost:4000/address/address", data)
            console.log(res.data)
            reset()
            getuserbyid()

        } catch (error) {

            console.log(error)
        }

    }

    return (
      <>
        <Helmet>
          <link href="../../assets/css/BookSerImg.css" rel="stylesheet" />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900|Roboto+Slab:400,700"
          />

          <link href="../../assets/css/nucleo-icons.css" rel="stylesheet" />
          <link href="../../assets/css/nucleo-svg.css" rel="stylesheet" />

          <script
            src="https://kit.fontawesome.com/42d5adcbca.js"
            crossorigin="anonymous"
          ></script>
          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons+Round"
            rel="stylesheet"
          />

          <link
            id="pagestyle"
            href="../../assets/css/material-dashboard.css?v=3.0.0"
            rel="stylesheet"
          />
        </Helmet>
        <div className="container-fluid1 py-4 ">
          <div className="row">
            <div className="col-md-7 mt-4 mx-3 ">
              <div className="card ">
                <div className="card-header pb-0 px-3">
                  <h4 className="mb-0">Address Information</h4>
                </div>
                {addresses?.map((address) => {
                  return (
                    <div className="card-body pt-4 p-3  ">
                      <ul
                        className="list-group bg-gradient-default"
                        style={{ border: "1px solid black" }}
                      >
                        <li className="list-group-item border-0 d-flex p-4 mb-2 bg-gray-100 border-radius-lg">
                          <div className="d-flex flex-column">
                            {/* <h5 className="mb-3 ">Address :- {address.address}</h5> */}
                            <span className="mb-2 text-xs">
                              Address :-
                              <span className="text-dark font-weight-bold ms-sm-2">
                                {address.address}
                              </span>
                            </span>
                            <span className="mb-2 text-xs">
                              City Name :-
                              <span className="text-dark font-weight-bold ms-sm-2">
                                {address.city}
                              </span>
                            </span>
                            <span className="mb-2 text-xs">
                              State :-
                              <span className="text-dark font-weight-bold ms-sm-2 ">
                                {address.state}
                              </span>
                            </span>
                            <span className="text-xs">
                              Postal Code:{" "}
                              <span className="text-dark ms-sm-2 font-weight-bold">
                                {address.postalCode}
                              </span>
                            </span>
                          </div>
                          <div className="ms-auto text-end">
                            <button
                              className="btn btn-link bg-gradient-danger text-danger text-gradient px-3 mb-auto"
                              style={{ width: "110px", marginTop: "3px" }}
                              value={address._id}
                              onClick={() => {
                                deleteaddress(address._id);
                              }}
                            >
                              <i className="material-icons text-sm me-3">
                                delete
                              </i>
                              Delete
                            </button>
                            <br />

                            <Link
                              to={`/user/paymentdemo/updateaddress/${address._id}`}
                              className="btn btn-link bg-gradient-info text-info text-gradient px-3  mb-auto"
                              style={{ width: "110px", marginTop: "9px" }}
                              value={address._id}
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
                              value={address._id}
                              onClick={() => handleSelectclick(address._id)}
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
                  );
                })}
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
                    onSubmit={handleSubmit(submithandler)}
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

          <>
            <ToastContainer
              position="top-center"
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
            {isLoading ? (
              <customLoader />
            ) : (
              <>
                <MDBRow
                  className="d-flex justify-content-center py-5"
                  style={{ borderRadius: "15px" }}
                >
                  <MDBCol md="7" lg="5" xl="4">
                    <MDBCard style={{ color: "black" }}>
                      <MDBCardBody className="p-4">
                        <MDBRow className="d-flex align-items-center">
                          <MDBCol size="9">
                            <TextField
                              label="Card Number"
                              id="form1"
                              type="text"
                              placeholder="1234 5678 9012 3457"
                              value={cardNumber}
                              onChange={handleCardNumberChange}
                              error={!!cardNumberError} // Set error state based on cardNumberError
                              helperText={cardNumberError}
                            />
                          </MDBCol>

                          <MDBCol size="3">
                            <img
                              src="https://img.icons8.com/color/48/000000/visa.png"
                              alt="visa"
                              width="64px"
                            />
                          </MDBCol>

                          <MDBCol size="9">
                            <TextField
                              label="Cardholder's Name"
                              id="form2"
                              type="text"
                              placeholder="Cardholder's Name"
                            />
                          </MDBCol>

                          <MDBCol size="6">
                            <TextField
                              label="Expiration"
                              id="form2"
                              type="text"
                              placeholder="MM/YYYY"
                              onChange={handleExpiryChange}
                              error={!!expiryDateError} // Set error state based on cardNumberError
                              helperText={expiryDateError}
                            />
                          </MDBCol>

                          <MDBCol size="3">
                            <TextField
                              label="CVV"
                              id="form2"
                              type="text"
                              placeholder="&#9679;&#9679;&#9679;"
                            />
                          </MDBCol>

                          <MDBCol size="3">
                            <Button
                              color="info"
                              variant="contained"
                              rounded
                              size="lg"
                              onClick={handleFormSubmit}
                            >
                              pay
                            </Button>
                          </MDBCol>
                        </MDBRow>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </MDBRow>
              </>
            )}
          </>
        </div>
      </>
    );
}

export default PaymentDemo