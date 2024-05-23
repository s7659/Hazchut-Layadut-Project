const Users = require("../models/Users")

const getAllManagers = async (req, res) => {
    const users = await Users.find({roles:'admin'}).lean()
    if (!users?.length) {
        return res.status(400).json({ message: "no Users found...." })
    
    }
    res.json(users)
    console.log(users);
}
const getAllUsers = async (req, res) => {
    const users = await Users.find({roles:'refresh'}).lean()
    if (!users?.length) {
        return res.status(400).json({ message: "no Users found...." })
    }
    res.json(users)
}

const createNewUser = async (req, res) => {
    const { name, userName, email, phone, password, roles } = req.body
    if (!name || !userName || !password) {
        return res.status(400).json({ message: "fields are required" })
    }
    const users = await Users.find({ userName: userName }).lean()

    if (!users?.length) {
        const a=['admin','secretary','refresh','leap','engaged']
        const tmp=a.filter(x=>x==roles)
        
        if(!tmp?.length && !roles==undefined){
            return res.status(400).json({ message: "Invalid user" })
        }
        const user = await Users.create({ name, userName, email, phone, password, roles })
        if (user) {
            return res.status(201).json({ message: "new user created" })
        }
        else {
            return res.status(400).json({ message: "Invalid user" })
        }
    }
    else {
        return res.status(400).json({ message: "Invalid user" })
    }


}

const upDateUser = async (req, res) => {
    const { _id, name, userName, email, phone, password, roles } = req.body
    console.log(_id, name, userName, password);
    if (!_id || !name || !userName || !password) {
        return res.status(400).json({ message: "fields are required" })
    }
    const a=['admin','refresh']
        const tmp=a.filter(x=>x==roles)
        if(!tmp?.length){
            return res.status(400).json({ message: "Invalid user" })
        }
        
        const user = await Users.findById(_id);
    

        if (!user) {
            return res.status(400).json({ message: "user not found" })
        }
        user.name = name
        user.userName = userName
        user.email = email
        user.password = password
        user.phone = phone
        user.roles = roles
        
        const updateUser = await user.save()
      
   
   if(!updateUser) {
        return res.status(400).json({ message: "invalid user" })
    }
    res.json(`${updateUser.name} updated`)
}
 

const deleteUser = async (req, res) => {
    const { id } = req.params

    const user = await Users.findById(id).exec()

    if (!user) {
        return res.status(400).json({ message: "user not found" })
    }
    const result = await user.deleteOne()
    res.json(`user ${user.name} ID ${user.id} deleted`)
}

const getUserById = async (req, res) => {
    const { id } = req.params
    const user = await Users.findById(id).lean()

    if (!user) {
        return res.status(400).json({ message: "No user found" })
    }
    res.json(user)

}

module.exports = { getAllManagers,getAllUsers, upDateUser, deleteUser, getUserById, createNewUser }