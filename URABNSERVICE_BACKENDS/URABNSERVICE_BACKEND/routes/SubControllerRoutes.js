const router = require('express').Router()
const subCategoryController = require('../controllers/SubCategoryController')

router.post("/subcategory",subCategoryController.createSubCategory)
router.get("/subcategory",subCategoryController.getAllSubCategory)
router.get("/subcategory/:id",subCategoryController.getSubCategoryById)
router.delete("/subcategory/:id",subCategoryController.deleteSubCategory)
router.put("/subcategory/:id",subCategoryController.updateSubCategory)



module.exports = router


