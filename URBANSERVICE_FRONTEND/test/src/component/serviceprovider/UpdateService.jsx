import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const UpdateService = () => {

    const id = useParams().id
    const navigate = useNavigate()
    const [categories, setcategories] = useState([])
    const [types,setType] = useState([]) 
    const [subCategories,setsubCategories] = useState([])
    
  
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
    
    useEffect(() => {
      
      loadCategories();
      loadTypes()
      loadSubCategory()

      
    }, [])

    const {register,handleSubmit} = useForm({
        defaultValues: async () => {
            const res = await axios.get("http://localhost:4000/services/service/"+id)
            return{
                serviceName:res.data.data.serviceName,
                fees:res.data.data.fees,
                area:res.data.data.area,
                city:res.data.data.city,
                state:res.data.data.state,
            }
        }
    })



    const submitHandler =  async(data)=>{
        try{
            const res = await axios.put('http://localhost:4000/services/service/'+id,data)
            if(res.status === 200){
                toast.success('😃 Service Updated!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    });
                    // navigate('/serviceprovider/servicelist')
                    window.location.pathname = ('/serviceprovider/myservices')
                    
            }
        }catch(e){
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
<div className="container mt-5">
  <div className="row justify-content-center">
    <div className="col-lg-6 col-md-10 col-12 mx-auto">
      <div className="card border rounded shadow">
        <div className="card-header bg-gradient-primary shadow-primary border-radius-lg py-3 pe-3">
          <h5 className="text-white font-weight-bold text-center mb-0">Update Services</h5>
        </div>
        <div className="card-body p-4">
          <form role="form" className="text-start" onSubmit={handleSubmit(submitHandler)}>
            <div className="mb-3">
              <label htmlFor="serviceName" className="form-label">Service Name</label>
              <input type="text" className="form-control rounded border pl-4" id="serviceName" {...register("serviceName")} />
            </div>
            <div className="mb-3">
              <label htmlFor="category" className="form-label">Category</label>
              <select className="form-control rounded border pl-4" id="category" {...register("category")}>
                <option>Select Category</option>
                {categories?.map((category) => (
                  <option key={category._id} value={category._id}>{category.name}</option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="subCategory" className="form-label">Subcategory</label>
              <select className="form-control rounded border pl-4" id="subCategory" {...register("subCategory")}>
                <option>Select Subcategory</option>
                {subCategories?.map((subcategory) => (
                  <option key={subcategory._id} value={subcategory._id}>{subcategory.name}</option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="type" className="form-label">Type</label>
              <select className="form-control rounded border pl-4" id="type" {...register("type")}>
                <option>Select Type</option>
                {types?.map((type) => (
                  <option key={type._id} value={type._id}>{type.name}</option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="fees" className="form-label">Fees</label>
              <input type="text" className="form-control rounded border pl-4" id="fees" {...register("fees")} />
            </div>
            <div className="mb-3">
              <label htmlFor="area" className="form-label">Area</label>
              <input type="text" className="form-control rounded border pl-4" id="area" {...register("area")} />
            </div>
            <div className="mb-3">
              <label htmlFor="city" className="form-label">City</label>
              <input type="text" className="form-control rounded border pl-4" id="city" {...register("city")} />
            </div>
            <div className="mb-3">
              <label htmlFor="state" className="form-label">State</label>
              <input type="text" className="form-control rounded border pl-4" id="state" {...register("state")} />
            </div>
            <div className="text-center">
              <button type="submit" className="btn bg-gradient-primary w-100 py-2">Update Service</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>





      
      );
    };
