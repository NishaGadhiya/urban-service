const router = require('express').Router()
const typeController = require('../controllers/TypeController')

router.post("/type",typeController.createType)
router.get("/type",typeController.getAllType)
router.get("/type/:id",typeController.getTypeById)
router.delete("/type/:id",typeController.deleteType)
router.put("/type/:id",typeController.updateType)





module.exports= router