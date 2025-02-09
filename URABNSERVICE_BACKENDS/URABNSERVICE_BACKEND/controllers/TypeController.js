const typeSchema = require('../models/TypeModel')

const createType = async(req,res)=>{
    try{
        const savedType= await typeSchema.create(req.body)
        res.status(201).json({
            message:"Type created successfully",
            data:savedType,
            flag:1
        })
    }catch(error){
        res.status(500).json({
            message:"Error while creating type",
            data: error,
            flag:-1
        })
    }
}

const getAllType = async(req,res)=>{
    try{   
        const types =  await typeSchema.find() 
        res.status(200).json({
            message:"Types got successfully",
            data:types,
            flag:1
        })

    }catch(error){
        res.status(500).json({
            message:"Error while getting all Types",
            data:error,
            flag:-1
        })
    }
}

const getTypeById = async (req,res)=>{
    try{    
        const type = await typeSchema.findById(req.params.id)
        if(type==null){
            res.status(404).json({
                message:'No Type found with given id',
                flag:-1
            })
        }else{
            res.status(200).json({
                message: 'Type found by Id',
                data:type,
                flag:1
            })
        }

    }catch(error){
        res.status(500).json({
            message:"Error while getting Type",
            data:error,
            flag:-1
        })
    }
}

const deleteType = async (req,res)=>{
    try{
        const deletedType = await typeSchema.findByIdAndDelete(req.params.id)
        if(deletedType===null){
            res.status(404).json({
                message:"Type not found",
                flag:-1
            })
        }else{
            res.status(200).json({
                message:"Type deleted successfully",
                data:deletedType,
                flag:1
            })
        }
    }catch(error){
        res.status(500).json({
            message:"Error while deleting Type",
            data:error,
            flag:-1
    })
}
}

const updateType = async (req,res)=>{
    try{
        const newType = req.body
        const  updatedType = await typeSchema.findByIdAndUpdate(req.params.id,newType)
        if(updatedType==null){
            res.status(404).json({
                message:"Error while updating Type",
                flag:-1
            })
        }else{
            res.status(200).json({
                message:"Type updated successfully",
                flag:1
            })
        }
    }catch(error){
        res.status(500).json({
            message:"Error while updating Type",
            data:error,
            flag:-1
        })
    }
}
module.exports = {
    createType,
    getAllType,
    getTypeById,
    deleteType,
    updateType
}