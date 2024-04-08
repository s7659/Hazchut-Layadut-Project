
const mongoose=require('mongoose')
const Category = require("../models/Category");
const SecondCategorySchema=new mongoose.Schema({
    Code:{
        type:String,
        required:true,
        unique:true
    },
    Name:{
        type:String,
        required:true
    },
    CodeCategory:{
        type:mongoose.Schema.Types.ObjectId,
        ref:Category
    }

},{
    timestamps:true
})

module.exports=mongoose.model('SecondCategory',SecondCategorySchema)