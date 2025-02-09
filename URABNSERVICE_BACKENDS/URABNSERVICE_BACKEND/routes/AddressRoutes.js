const router = require('express').Router()
const addressController = require('../controllers/AddressController')

router.post('/address',addressController.createAddress)
router.get('/address',addressController.getAddress)
router.get('/address/:id',addressController.getAddressById)
router.delete('/address/:id',addressController.deleteAddress)
router.put('/address/:id',addressController.updateAddress)

module.exports = router

