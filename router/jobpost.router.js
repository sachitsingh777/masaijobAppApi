const express=require("express")
const { JobpostModel } = require("../models/jobpost.model")
const jobPostRouter=express.Router()

jobPostRouter.post("/post",async(req,res)=>{
    try{
        const job=new JobpostModel(req.body)
        await job.save()
        res.status(200).send({"msg":"post has been successfully"})
    }
    catch(error){
        res.status(200).send({"err":error.message})
    }
})
jobPostRouter.get("/",async(req,res)=>{
    const {role,language,sort,postedAt,page,limit}=req.query
    let search={}
    if(role){
        search.role=role
    }
    if(language){
        search.language={$regex:language,$options:"i"}
    }
     let sortby={}
    if(sort=="asc"){
         sortby.postedAt=1
    }else if(sort=="desc"){
        sortby.postedAt=-1
    }
  let job=await JobpostModel.find(search).sort(sortby).skip((page-1)*limit).limit(limit)
  res.send(job)
})
module.exports={jobPostRouter}