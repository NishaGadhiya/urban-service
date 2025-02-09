const roleController = require('../controllers/RoleController')
const router = require('express').Router()

router.post("/role",roleController.createRole)
router.get("/role",roleController.getAllRoles)
router.delete("/role/:id",roleController.deleteRole)
router.get("/role/:id",roleController.getRoleById)
router.put("/role/:id",roleController.updateRole)

module.exports = router