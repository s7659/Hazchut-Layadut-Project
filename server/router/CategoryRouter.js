const express=require("express")
const router=express.Router()
const verifyJWT = require("../middleware/verifyJWT")

const categoryController=require("../controller/CategoryController")
router.get("/",categoryController.getAllCategorys)
router.get("/:_id",categoryController.getCategoryByCode)
router.post("/",categoryController.createNewCategory)
router.put("/:_id",categoryController.updateCategory)
router.delete("/:_id",categoryController.deleteCategory)

module.exports=router