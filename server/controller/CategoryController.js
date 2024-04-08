const Category = require("../models/Category");

const getAllCategorys=async(req,res)=>{
    
    const categories=await Category.find().lean()
    res.json(categories)
}

const createNewCategory=async(req,res)=>{
    if(req.user.roles!="admin")
    return res.status(201).json({message:'New category created'})
    const{Code,Name}=req.body
    if(!Code||!Name){
        return res.status(404).json({message:'Code is required'})
    }
    const category=await Category.create({Code,Name})
    if(category)
    {
        return res.status(201).json({message:'New category created'})
    } 
    else{
        return res.status(400).json({message:'Invalid category'})}
}

const getCategoryByCode=async(req,res)=>{
    const{Code}=req.params
    const category=await Category.findOne(Code).lean()
    if(!category){
        return res.status(400).json({message:"no category found"})
    }
    res.json(category)
}

const updateCategory=async(req,res)=>{
    const{Code}=req.params
    const {Name}=req.body
    if(!Code||!Name){
        return res.status(400).json({message:'fields are required'})
    }
    const category=await Category.findOne(Code).exec()
    if(!category){
        return res.status(400).json({message:"category not found"})
    }
    category.Code=Code
    category.Name=Name

    const updateCategory=await category.save()
    res.send(`${updateCategory.Name} update`)
}
const deleteCategory=async(req,res)=>{
    const{Code}=req.params
    const category=await Category.findOne(Code)
  
    await category.deleteOne()
    const reply=(`Category: ${category.Name}, id: ${category.Code} deleted`)
    res.json(reply)
}
module.exports={getAllCategorys,createNewCategory,getCategoryByCode,updateCategory,deleteCategory}