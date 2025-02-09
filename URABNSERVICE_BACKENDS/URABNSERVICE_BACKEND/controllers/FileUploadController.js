const multer = require('multer');
const path = require('path');
const cloudinaryController = require("./CloudinaryController")
const serviceSchema = require('../models/ServiceModel')


const storage = multer.diskStorage({
    filename:function(req,file,cb){
        cb(null,file.originalname)
    }
})

const  getAllServices = async(req,res)=>{
    const allservices = await serviceSchema.find()
    res.status(200).json({
        message:"All services fetched",
        data:allservices
    })
}

const upload = multer({
    storage:storage,
    limits:{fileSize:1000000}
}).single('myFile')

const fileUpload = async(req,res)=>{
    upload(req,res,async(err)=>{
        if(err){
            res.status(500).json({
                message:"Error while uploading file"
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


module.exports = {
    fileUpload,
    getAllServices
}