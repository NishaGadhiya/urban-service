const router = require('express').Router();
const uploadController = require('../controllers/FileUploadController')


router.post('/upload',uploadController.fileUpload)
router.get('/allservices',uploadController.getAllServices)


module.exports = router