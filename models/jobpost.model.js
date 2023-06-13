const mongoose=require("mongoose")

const JobpostSchema=mongoose.Schema({
    company:{type:String,required:true},
    postedAt:{type:Date,required:true},
    city:{type:String,required:true},
    location:{type:String,required:true},
    role:{type:String,required:true},
    level:{type:String,required:true},
    position:{type:String,required:true},
    language:{type:String,required:true},
    contract:{type:String,required:true},

})

const JobpostModel=mongoose.model("jobpost",JobpostSchema)
module.exports={JobpostModel}


// "company": "Ellette",
// "postedAt": "2021-03-30",
// "city": "Gangtok",
// "location": "American Samoa",
// "role": "Frontend",
// "level": "Junior",
// "contract": "Full Time",
// "position": " Backend Developer",
// "language": "Java"