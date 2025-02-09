const serviceSchema = require('../models/ServiceModel')
const multer = require('multer')
const path = require('path')
const cloudinaryController = require("./CloudinaryController")

const storage = multer.diskStorage({
    filename:function(req,file,cb){
        cb(null,file.originalname)
    }
})



const upload = multer({
    storage:storage,
    limits:{fileSize:1000000}
}).single('myFile')


const fileUpload = async(req,res)=>{
    upload(req,res,async(err)=>{
        if(err){
            res.status(500).json({
                message:"Error while uploading file",
            })
        }else{
            if(req.file == undefined){
                res.status(400).json({
                    message:"No file selected"
                })
            }else{
                const result = await cloudinaryController.uploadFile(req.file.path)
                console.log("upload controller..",result)
                const serviceObj = {
                    serviceName:req.body.serviceName,
                    category:req.body.category,
                    subCategory:req.body.subCategory,
                    type:req.body.type,
                    fees:req.body.fees,
                    area:req.body.area,
                    city:req.body.city,
                    state:req.body.state,
                    serviceprovider:req.body.serviceprovider,
                    imageURL:result.secure_url


                }
                const savedService = await serviceSchema.create(serviceObj)
                res.status(200).json({
                    message:"File Uploaded Successfully",
                    data:savedService
                })
            }
        }
    })
}

const createService = async(req,res)=>{
    try{
        const savedService = await serviceSchema.create(req.body)
        res.status(201).json({
            message:"Service created successfully ",
            data:savedService,
            flag:1
        })
    }catch(error){
        res.status(500).json({
            message:"Server error",
            data:error,
            falg:-1
        })
    }
}

const getAllServices = async(req,res)=>{
    try{
        const services = await serviceSchema.find().populate("category").populate("subCategory").populate("type").populate("serviceprovider")
        res.status(200).json({
            message: "Data fetched Successfully!",
            data:services,
            flag:1
        })
    }catch(error){
        res.status(500).json({
            message:"Server error",
            data:error,
            flag:-1
        })
    }
} 

const getServiceById = async(req,res)=>{
    try{
        const service = await serviceSchema.findById(req.params.id).populate("category").populate("subCategory").populate("type").populate("serviceprovider")
        if(service==null){
            res.status(404).json({
                message:"Service not found",
                flag:-1
            })
        }else{
            res.status(200).json({
                message:"Service found",
                data:service,
                flag:1
            })
        }
    }catch(error){
        res.status(500).json({
            message:"Server Error",
            data:error,
            flag:-1
        })
    }
}

const deleteService = async(req,res)=>{
    try{
        const deletedService = await serviceSchema.findByIdAndDelete(req.params.id).populate("category").populate("subCategory").populate("type").populate("serviceprovider")
        if(deletedService==null){
            res.status(404).json({
                message:"Service not found",
                flag:-1
            })
        }else{
            res.status(200).json({
                message:"Service deleted successfully!",
                data:deletedService,
                flag:1
            })
        }
    }catch(error){
        res.status(500).json({
            message:"Server error",
            data:error,
            flag:-1
        })
    }

}

const updateService = async(req,res)=>{
    try{
        const newService = req.body
        const updatedService = await serviceSchema.findByIdAndUpdate(req.params.id,newService)
        if(updatedService==null){
            res.status(404).json({
                message:"Service not found",
                flag:-1
            })
        }else{
            res.status(200).json({
                message:"Service updated successfully",
                flag:1
            })
        }
    }catch(error){
        res.status(500).json({
            message:"Server error",
            data:error,
            flag:-1
        })
    }
}

const getServiceByServiceProviderId = async(req,res)=>{
    const serviceProviderId = req.params.id
    try{
        const services = await serviceSchema.find({serviceprovider:serviceProviderId})
        // console.log(services)
        if(services && services.length > 0 ){
            res.status(200).json({
                message:"Service Found",
                data:services,
                flag:1
            })
        }else{
            res.status(404).json({
                message:"No service Found",
                flag:-1,
                data:[]
            })
        }

    }catch(error){
        res.status(500).json({
            message:"Internal Server Error",
            data:error.message,
            flag:-1
        })
    }
}

const serviceFilter = async(req,res)=>{
    console.log("Req query...",req.query)
    const services = await serviceSchema.find({serviceName:{$regex:req.query.serviceName,$options: 'i'}}).populate("category").populate("subCategory").populate("type").populate("serviceprovider")
    if(services && services.length>0){
        res.status(200).json({
            message:"Services Found Successfully",
            data:services,
            flag:1
        })
    }else{
        res.status(404).json({
            message:"No Service Found In Database",
            data:[],
            flag:-1
        })
    }
}

module.exports ={
    createService,
    getAllServices,
    getServiceById,
    deleteService,
    updateService,
    getServiceByServiceProviderId,
    fileUpload,
    serviceFilter
}