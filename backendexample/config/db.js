const mongoose=require("mongoose")

const connection=mongoose.connect("mongodb://0.0.0.0/menudb")
    .then(()=>{
        console.log("connected to db")
    })
    .catch((err)=>{
        console.log(err)
    })


module.exports=connection