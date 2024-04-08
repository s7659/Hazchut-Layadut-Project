const User = require("../models/Users")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const login = async (req, res) => {
    const { name, password } = req.body
    console.log(req.body);
   
    console.log(name);
    if (!name || !password) {
        return res.status(400).json({ message: "All fields are required" })
    }
    const foundUser = await User.findOne({ userName:name }).lean()
    if (!foundUser) {
        
        return res.status(401).json({ message: "unAuthorized" })
    }
    console.log(name);
    const match = await bcrypt.compare(password, foundUser.password)
    if (!match) {
        return res.status(401).json({ message: "unAuthorized" })
    }
    const userInfo = { _id: foundUser._id, name: foundUser.name, roles: foundUser.roles, userName: foundUser.userName, email: foundUser.email }
    const accesToken = jwt.sign(userInfo, process.env.ACCESS_TOKEN_SECRET)
    res.json({ accesToken: accesToken })
}


const register = async (req, res) => {

    const { userName, password, name, email, phone, roles } = req.body
    console.log({ userName, password, name, email, phone, roles });
    if (!name || !userName || !password) {
      
        return res.status(400).json({ message: "All Fields Are Required!" })
    }
    const duplicate = await User.findOne({ userName: userName }).lean()

    if (duplicate) {
        return res.status(409).json({ message: "Duplicate User" })
    }
    const hashPwd = await bcrypt.hash(password, 10)
    const userObject = { name, email, userName, phone, password: hashPwd, roles }
    const user = await User.create(userObject)
    if (user) {
        return res.status(201).json({ message: `new user ${user.userName} created` })
    }
    else {
        return res.ststus(400).json({ message: "Invalid user recieved" })
    }
}
module.exports = {login,register}