require("dotenv").config()
const express=require("express")
const cors=require("cors")

const corsOptions=require("./config/corsOptions")
const connectDB = require("./config/dbConn")
const { default: mongoose } = require("mongoose")
const app=express()
const PORT=process.env.PORT||7264
connectDB()

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.static("public"))

app.use("/api/user",require("./router/userRouter"))
app.use("/api/auth",require("./router/authRouter"))
app.use("/api/lesson",require("./router/lessonRouter"))
app.use("/api/category",require("./router/CategoryRouter"))

app.get('/',(req,res)=>{
    res.send("Home Page")
})

mongoose.connection.once('open',()=>{
    console.log("connected to DB")
    app.listen(PORT, ()=>console.log(`server running on ${PORT}`))
})
mongoose.connection.on('error',err=>{
    console.log(err)
})
