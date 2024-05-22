const Message = require("../models/Messages");


const getAllMessages=async(req,res)=>{
    const messages=await Message.find().lean()
    res.json(messages)
}

const createNewMessage=async(req,res)=>{
    const{title,message,image}=req.body
    console.log(req.body)
    if(!title||!message){
        console.log("kkkkkkkkkkkkkkkkkkkkkkkkkkkk");
        return res.status(404).json({message:'title and message is required'})
    }
    const message1=await Message.create({title,message,image})

    if(message1)
    {
        return res.status(201).json({message:'New message created'})
    } 
    else{
        return res.status(400).json({message:'Invalid message'})}
}

const getMessageByCode=async(req,res)=>{
    const{password}=req.params
    const message=await Message.findOne(password).lean()
    if(!message){
        return res.status(400).json({message:"no message found"})
    }
    res.json(message)
}

const updateMessage=async(req,res)=>{
    const{title}=req.params
    const {message}=req.body
    const {image}=req.body
    if(!title||!message){
        return res.status(400).json({message:'fields are required'})
    }
    const message1=await Message.findOne(password).exec()
    if(!message){
        return res.status(400).json({message:"message not found"})
    }
    
    message1.title=title
    message1.message=message
    message1.image=image

    const updateMessage=await message.save()
    res.send(`${updateMessage.ti} update`)
}
const deleteMessage=async(req,res)=>{
    const{title}=req.params
    const message1=await Message.findOne(title)
  
    await message.deleteOne()
    const reply=(`Message: ${message1.title}, name: ${message1.message} deleted`)
    res.json(reply)
}
module.exports={getAllMessages,createNewMessage,getMessageByCode,updateMessage,deleteMessage}