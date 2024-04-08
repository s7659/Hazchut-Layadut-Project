const mongoose =require("mongoose")

const MessagesSchema=new mongoose.Schema({
   title:{
    type:String,
    required:true
},
    message:{
        type:String,
        required:true
    },
   image:String
    },
    {
        timestamps:true
    }
)
module.exports=MessagesSchema