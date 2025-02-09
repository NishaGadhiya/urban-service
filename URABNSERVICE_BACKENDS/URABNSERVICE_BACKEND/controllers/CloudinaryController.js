const cloudinary =  require('cloudinary').v2;

const uploadFile = async (file) => {
    cloudinary.config({
        cloud_name:"dphi3679w",
        api_key:"596789381828161",    
        api_secret:"lLLjplBMuaegJDzOFa81CKemfUk"
    })
    const result = await cloudinary.uploader.upload(file)
    return result
}


module.exports = {
    uploadFile
}