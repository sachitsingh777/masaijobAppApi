const express=require("express")
const cors=require("cors")
require("dotenv").config()
const { connection } = require("./db")
const { jobPostRouter } = require("./router/jobpost.router")
const app=express()
app.use(express.json())
app.use(cors())
app.get("/",(req,res)=>{
    res.send("home page")
})
app.use("/job",jobPostRouter)
app.listen(process.env.port,async(req,res)=>{
    try{
        await connection
        console.log("connected to the db")
    }
    catch(error){
        console.log(error)
        console.log("Not connected to the db")
    }
    console.log("server port at the running is 8080")
})