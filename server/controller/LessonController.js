const Lesson = require("../models/Lesson");
const secondCategory = require("../models/SecondCategory");
const { patch } = require("../router/messageRouter");

const getAllLessons=async(req,res)=>{
    const lessons=await Lesson.find().lean()
    res.json(lessons)
}

const createNewLesson=async(req,res)=>{
    const{name,code,categoryCode,type,path,active,present}=req.body
    if(!name||!code||!path){
        return res.status(404).json({message:'Code and name is required'})
    }
    const date=new Date()
    const duplicate=await Lesson.findOne({path}).lean()
    if(duplicate){
        return res.status(404).json({message:"this password alrady exsist"})
    }

    const duplicate1=await Lesson.findOne({code}).lean()
    if(duplicate1){
        return res.status(404).json({message:"this password alrady exsist"})
    }

    const lesson=await Lesson.create({name,code,categoryCode,type,date,path,active,present})
    if(lesson)
    {
        return res.status(201).json({message:'New lesson created'})
    } 
    else{
        return res.status(400).json({message:'Invalid lesson'})}
}

const getLessonByCode=async(req,res)=>{
    const{code}=req.params
    const lesson=await Lesson.findOne(code).lean()
    if(!lesson){
        return res.status(400).json({message:"no lesson found"})
    }
    res.json(lesson)
}

const getLessonByCategory=async(req,res)=>{
    const{code}=req.params
    const secondCategory=await secondCategory.findOne(code).lean()
    const lesson=await Lesson.findOne(secondCategory.Code).lean()
    if(!lesson){
        return res.status(400).json({message:"no lesson found"})
    }
    res.json(lesson)
}

const updateLesson=async(req,res)=>{
    const{code}=req.params
    const {name}=req.body
    const {categoryCode}=req.body
    const {type}=req.body
    const {pass}=req.body
    const {active}=req.body
    const {present}=req.body

    if(!Code||!Name){
        return res.status(400).json({message:'fields are required'})
    }
    const lesson=await Lesson.findOne(code).exec()
    if(!lesson){
        return res.status(400).json({message:"lesson not found"})
    }
    lesson.code=code
    lesson.name=name
    lesson.categoryCode=categoryCode
    lesson.type=type
    lesson.pass=pass
    lesson.active=active
    lesson.present=present


    const updateLesson=await lesson.save()
    res.send(`${updateLesson.Name} update`)
}
const deleteLesson=async(req,res)=>{
    const{code}=req.params
    const lesson=await Lesson.findOne(code)
  
    await lesson.deleteOne()
    const reply=(`Lesson: ${lesson.name}, id: ${lesson.code} deleted`)
    res.json(reply)
}
module.exports={getAllLessons,createNewLesson,getLessonByCode,getLessonByCategory,updateLesson,deleteLesson}