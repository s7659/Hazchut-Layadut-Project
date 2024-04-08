const mongoose=require("mongoose")
const SecondCategory = require("./SecondCategory")
const user = require("../models/Users");

const LessonSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    code:{
        type:String,
        required:true,
        unique:true
    },
    categoryCode:{
        type:mongoose.Schema.Types.ObjectId,
        ref:SecondCategory
    },
    type:{
        type:String,
        enum:['video','oudio','text']
    },
    date:Date,
    path:{
        type:String,
        required:true,
        unique:true
    },
    active:Boolean,
    present:Boolean
    
},{
    timestamps:true
})
module.exports=mongoose.model("lesson",LessonSchema)