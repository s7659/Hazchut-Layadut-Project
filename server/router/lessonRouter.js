
const express=require("express")
const router=express.Router()
const multer = require("multer")
const path =require("path")


//const LessonVideoController=require("../controller/LessonVideoController")
const verifyJWT=require("../middleware/verifyJWT")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../public/upload/'));
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 100);
        cb(null, uniqueSuffix + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });
const lessonController=require("../controller/LessonController")
router.get("/",lessonController.getAllLessons)
router.get("/:_id",lessonController.getLessonByCode)
router.post("/" ,upload.single('path'),lessonController.createNewLesson)
router.get("/",lessonController.getLessonByCategory)
router.put("/:_id",lessonController.updateLesson)
router.delete("/:_id",lessonController.deleteLesson)

module.exports=router