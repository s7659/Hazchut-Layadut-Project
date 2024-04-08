const express=require("express")
const router=express.Router()

const secondCategoryController=require("../controller/secondCategoryController")
router.get("/",secondCategoryController.getAllSecondCategorys)
router.get("/:Code",secondCategoryController.getSecondCategoryByCode)
router.post("/",secondCategoryController.createNewSecondCategory)
router.put("/:Code",secondCategoryController.updateSecondCategory)
router.delete("/:Code",secondCategoryController.deleteSecondCategory)

module.exports=router