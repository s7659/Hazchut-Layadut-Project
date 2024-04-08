
const express=require("express")
const router=express.Router()

const lessonController=require("../controller/LessonController")
router.get("/",lessonController.getAllLessons)
router.get("/:_id",lessonController.getLessonByCode)
router.post("/",lessonController.createNewLesson)
router.get("/",lessonController.getLessonByCategory)
router.put("/:_id",lessonController.updateLesson)
router.delete("/:_id",lessonController.deleteLesson)

module.exports=router