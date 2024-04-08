const express=require("express")
const router=express.Router()

const UserController=require("../controller/UserController")
// const verifyJWT = require("../middleware/verifyJWT")

// router.use(verifyJWT)
router.get("/", UserController.getAllUsers)
router.get("/managers", UserController.getAllManagers)
router.post("/", UserController.createNewUser)
router.put("/", UserController.upDateUser)
router.delete("/:id", UserController.deleteUser)
router.get("/id", UserController.getUserById)
module.exports=router
