const userController = require("../controllers/UserController")
const router = require('express').Router()

router.post("/user",userController.createUser)
router.get("/user",userController.getAllUsers)
router.delete("/user/:id",userController.deleteUser)
router.get("/user/:id",userController.getUserById)
router.put("/user/:id",userController.updateUser)
router.post('/user/login',userController.loginUser)
router.post('/user/isUserExist',userController.isUserExist)
router.post('/user/resetpassword',userController.resetPassword)



module.exports = router