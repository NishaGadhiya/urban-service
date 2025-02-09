const router = require('express').Router()
const categoryController = require('../controllers/CategoryController')

router.post("/category",categoryController.createCategory)
router.get("/category",categoryController.getAllCategory)
router.get("/category/:id",categoryController.getCategoryById)
router.delete("/category/:id",categoryController.deleteCategory)
router.put("/category/:id",categoryController.updateCategory)

module.exports = router