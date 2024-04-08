const mongoose=require('mongoose')
const categorySchema=new mongoose.Schema({
    Code:{
        type:String,
        required:true,
        unique:true
    },
    Name:{
        type:String,
        required:true
    }

},{
    timestamps:true
})

module.exports=mongoose.model('Category',categorySchema)