const roleSchema = require('../models/RoleModel')

const createRole = async (req, res) => {

    try{

        const savedRole = await roleSchema.create(req.body);
        res.status(201).json({
            message: "Role Created Successfully",
            data:savedRole,
            flag: 1
        })

    }catch(error){
        
        res.status(500).json({
            message: "Server Error",
            flag: -1,
            data:error
        })
    }

}

const getAllRoles = async (req,res) => {
    try{
        const roles = await roleSchema.find()
        res.status(200).json({
            message:'Get all roles',
            data:roles
        })

    }catch(error){
        res.status(500).json({
            message:"Error in getting Roles",
            data:error,
            flag:-1
        })
    }
}

const deleteRole = async (req,res) => {
    try{
        const id = req.params.id
        const deletedRole = await roleSchema.findByIdAndDelete(id)
        if(deletedRole == null){
            res.status(404).json({
                message:'Role not found',
                flag:-1
            })
        }else{
            res.status(200).json({
                message:'Role deleted successfully',
                data:deletedRole,
                flag:1
            })
        }

    }catch(error){
        res.status(500).json({
            message:'Error in deleting role',
            data:error,
            flag:-1
        })
    }
}

const getRoleById = async (req,res) => {
    try{
        const id = req.params.id
        const role = await roleSchema.findById(id)
        if(role==null){
            res.status(404).json({
                message:'Role not found',
                flag:-1
            })
        }else{
            res.status(200).json({
                message:'Role found',
                data:role,
                flag:1
            })
        } 

    }catch(error){
        res.status(500).json({
            message:'Error in getting role by id',
            data:error,
            flag:-1
        })
    }
}

const updateRole = async (req,res) => {
    const id =req.params.id
    const  newRole=req.body
    
    try{
        const updatedRole = await roleSchema.findByIdAndUpdate(id,newRole)
        if(updatedRole===null){
            res.status(404).json({
                message:'Role not found',
                flag:-1
            })

        }else{
            res.status(200).json({
                message:'Role updated successfully',
                flag:1
            })
        }

     }catch(error){
        res.status(500).json({
            message:'Error in updateing the role',
            data:error,
            flag:-1
        })
     }
}





module.exports={
    createRole,
    getAllRoles,
    deleteRole,
    getRoleById,
    updateRole
}