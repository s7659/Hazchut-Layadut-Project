
const SecondCategory = require("../models/SecondCategory");

const getAllSecondCategorys=async(req,res)=>{
    const secondCategorys=await SecondCategory.find().lean()
    
    res.json(secondCategorys)
}

const createNewSecondCategory=async(req,res)=>{
    const{Code,Name,CodeCategory}=req.body
    if(!Code||!Name){
        return res.status(404).json({message:'code and name is required'})
    }
    const secondCategory=await SecondCategory.create({Code,Name,CodeCategory})
    if(secondCategory)
    {
        return res.status(201).json({message:'New secondCategory created'})
    } 
   
    else{
        return res.status(400).json({message:'Invalid secondCategory'})}
}

const getSecondCategoryByCode=async(req,res)=>{
    const{Code}=req.params
    const secondCategory=await SecondCategory.findOne(Code).lean()
    if(!secondCategory){
        return res.status(400).json({message:"no secondCategory found"})
    }
    res.json(secondCategory)
}

const updateSecondCategory=async(req,res)=>{
    const{code}=req.params
    const {Code,Name,CodeCategory}=req.body
    if(!Code||!Name){
        return res.status(400).json({message:'fields are required'})
    }
    const secondCategory=await SecondCategory.findOne(One).exec()
    if(!secondCategory){
        return res.status(400).json({message:"secondCategory not found"})
    } 
    secondCategory.Code=Code
    secondCategory.Name=Name
    secondCategory.CodeCategory=CodeCategory
    const updateSecondCategory=await secondCategory.save()
    res.send(`${updateSecondCategory.Name} update`)
}


const deleteSecondCategory=async(req,res)=>{
    const{Code}=req.params
    const secondCategory=await SecondCategory.findOne(Code)
    
    await secondCategory.deleteOne()
    const reply=(`SecondCategory: ${secondCategory.Name}, code: ${secondCategory.Code} deleted`)
    res.json(reply)
}

module.exports={getAllSecondCategorys,createNewSecondCategory,getSecondCategoryByCode,updateSecondCategory,deleteSecondCategory}