import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import './AddService.css'

export const AddService = () => {
  const {register, handleSubmit,reset} = useForm();
  const [categories, setcategories] = useState([])
  const [types,setType] = useState([]) 
  const [subCategories,setsubCategories] = useState([])
  const [serviceproviders,setServiceProvider] = useState([])

    const submitHandler = async(data) => {
        var formData = new FormData()
        formData.append("serviceName",data.serviceName)
        formData.append("category",data.category)
        formData.append("subCategory",data.subCategory)
        formData.append("type",data.type)
        formData.append("fees",data.fees) 
        formData.append("area",data.area)
        formData.append("city",data.city)
        formData.append("state",data.state)
        formData.append("serviceprovider",data.serviceprovider)
        formData.append("myFile",data.myFile[0])
        try{
            const res = await axios.post("http://localhost:4000/services/services",formData)
            if(res.status === 201){
                toast.success('😃 Service Added!', {
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
    }catch(e){
      console.log(e)
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
        console.log(data);
    }

  const loadCategories = async() => {

      const res = await axios.get('http://localhost:4000/categories/category');
      console.log(res.data.data);
      setcategories(res.data.data);

  }

  const loadTypes = async()=>{
    const res = await axios.get('http://localhost:4000/types/type')
    console.log(res.data.data)
    setType(res.data.data)
  }

    const loadSubCategory = async () => {
    const res = await axios.get("http://localhost:4000/subcategories/subcategory")
    console.log(res.data)
    setsubCategories(res.data.data)
  }
    const loadserviceprovider = async () => {
    const res = await axios.get("http://localhost:4000/serviceproviders/provider") 
    console.log(res.data)
    setServiceProvider(res.data.data)
  }
  useEffect(() => {
    
    loadCategories();
    loadTypes()
    loadSubCategory()
    loadserviceprovider()
    
  }, [])

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

<div className="container mt-5">
  <div className="row justify-content-center">
    <div className="col-md-6">
      <div className="card border-primary">
        <div className="card-header bg-primary "> 
          <h4 className="mb-0 text-white">Add Service</h4>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit(submitHandler)}>
          <div className="form-group">
              <label htmlFor="input1">Service Name:</label>
              <input type="text" className="form-control form-control-lg border" {...register('serviceName')} required />
            </div>
            <div className="form-group">
              <label htmlFor="category">Select Category</label>
              <select className="form-control form-control-lg custom-select border" {...register('category')} required>
                <option value="">Select a Category</option>
                {categories?.map((category) => (
                  <option key={category._id} value={category._id}>{category.name}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="subCategory">Select Subcategory</label>
              <select className="form-control form-control-lg custom-select border" {...register('subCategory')} required>
                <option value="">Select a Subcategory</option>
                {subCategories?.map((subcategory) => (
                  <option key={subcategory._id} value={subcategory._id}>{subcategory.name}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="type">Select Type</label>
              <select className="form-control form-control-lg custom-select border" {...register('type')} required>
                <option value="">Select a Type</option>
                {types?.map((type) => (
                  <option key={type._id} value={type._id}>{type.name}</option>
                ))}
              </select>
            </div>
           
            <div className="form-group">
              <label htmlFor="input2">Fees</label>
              <input type="text" className="form-control form-control-lg border" {...register('fees')} required />
            </div>
            <div className="form-group">
              <label htmlFor="input4">Area</label>
              <input type="text" className="form-control form-control-lg border" {...register('area')} required />
            </div>
            <div className="form-group">
              <label htmlFor="input3">City</label>
              <input type="text" className="form-control form-control-lg border" {...register('city')} required />
            </div>
            
            <div className="form-group mb-3">
              <label htmlFor="input5">State</label>
              <input type="text" className="form-control form-control-lg border" {...register('state')} required />
            </div>
            <div className="form-group">
              <label htmlFor="category">Select Category</label>
              <select className="form-control form-control-lg custom-select border" {...register('serviceprovider')} required>
                <option value="">Select a serviceprovider</option>
                {serviceproviders?.map((sp) => (
                  <option key={sp._id} value={sp._id}>{sp.name}</option>
                ))}
              </select>
            </div>
             <div className="form-group mb-3">
              <label htmlFor="input5">Image</label>
              <input type="file" className="form-control form-control-lg border" {...register('myFile')} required />
            </div>
            <button type="submit" className="btn btn-dribbble">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
<style>
  {`.card {
    border: none;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
  }

  .card-header {
    border-radius: 10px 10px 0 0;
    background-color: #007bff; 
    color: #fff; 
    text-align: center;
  }

  .form-group {
    margin-bottom: 20px;
  }

  label {
    font-weight: bold;
  }

  input[type='text'],
  input[type='file'],
  select {
    border: 1px solid #ced4da; 
    border-radius: 5px;
    padding: 10px;
    width: 100%;
    box-sizing: border-box;
  }

  button[type='submit'] {
    background-color: #007bff; 
    border: none;
    border-radius: 5px;
    color: #fff; 
    padding: 10px 20px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  button[type='submit']:hover {
    background-color: #0056b3;
  }`}
</style>


  </div>
  );
};

