const subcategorySchema = require('../models/SubCategoryModel')

const createSubCategory = async(req,res)=>{
    try{    
        const savedSubCategory = await subcategorySchema.create(req.body)
        res.status(201).json({
            message: "Successfully created new Sub Category",
            data:savedSubCategory,
            flag:1 
        })

    }catch(error){
        res.status(500).json({
            message:"Error while creating subcategory",
            data:error,
            flag:-1
        })
    }
}

const getAllSubCategory = async(req,res) => {
    try{    
        const categories = await subcategorySchema.find().populate("category")
        res.status(200).json({
            message:"Successfully fetched all Subcategories",
            data:categories,
            flag:1
        })

    }catch(error){
        res.status(500).json({
            message:"Error while fetching Subcategories",
            data:error,
            flag:-1
        })
    }
}

const getSubCategoryById = async(req,res)=>{
    try{
        const subcategory = await subcategorySchema.findById(req.params.id)
        if(subcategory==null){
            res.status(404).json({
                message:"Subcategory not found",
                flag:-1
            })
        }else{
            res.status(200).json({
                message:"Successfully found the subcategory",
                data:subcategory,
                flag:1
            })
        }
    }catch(error){
        res.status(500).json({
            message:"Error whlile getting Subcategory by Id",
            data:error,
            flag:-1
        })
    }
}

const deleteSubCategory = async(req,res)=>{
    try{
        const deletedSubCategory = await subcategorySchema.findByIdAndDelete(req.params.id)
        if(deletedSubCategory===null){
            res.status(404).json({
                message:"Subcategory not found",
                flag:-1
            })
        }else{
            res.status(200).json({
                message:"Successfully deleted Subcategory",
                data:deletedSubCategory,
                flag:1
            })
        }
    }catch(error){
        res.status(500).json({
            message:"Error while deleting Subcategory",
            data:error,
            flag:-1
        })
    }
}

const updateSubCategory = async(req,res)=>{
    try{
        const newSubCategory = req.body
        const updatedSubCategory = await subcategorySchema.findByIdAndUpdate(req.params.id,newSubCategory).populate("category")
        if(updatedSubCategory==null){   
            res.status(404).json({
                message:"Subcategory Not Found!",
                flag:-1
            })
        }else{
            res.status(200).json({
                message:"Subcategory updated successfully",
                flag:1
            })
        }
    }catch(error){
        res.status(500).json({
            message:"Error in updating the Subcategory",
            data:error,
            flag:-1
        })
    }
}




module.exports ={
    createSubCategory,
    getAllSubCategory,
    getSubCategoryById,
    deleteSubCategory,
    updateSubCategory
}