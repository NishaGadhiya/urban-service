const router = require( 'express' ).Router()
const serviceProviderController = require('../controllers/ServiceProviderController')

router.post("/provider",serviceProviderController.createServiceProvider)
router.get("/provider",serviceProviderController.getAllServiceProviders)
router.get("/provider/:id",serviceProviderController.getServiceProviderById)
router.delete("/provider/:id",serviceProviderController.deleteServiceProvider)
router.put("/provider/:id",serviceProviderController.updateServiceProvider)
router.post("/provider/login",serviceProviderController.loginServiceProvider)





module.exports = router