const express=require("express")
const router=express.Router()

const messageController=require("../controller/messageController")
router.get("/",messageController.getAllMessages)
router.get("/:_id",messageController.getMessageByCode)
router.post("/",messageController.createNewMessage)
router.put("/:_id",messageController.updateMessage)
router.delete("/:_id",messageController.deleteMessage)

module.exports=router