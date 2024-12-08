const mongoose = require('mongoose')
const mongouri= process.env.MONGODB_URI


mongoose.connect(mongouri)
.then(()=>{
  console.log("mongoDb connected successfully")
}) 
.catch((err)=>{
  console.log("mongodb not connection error",err)
})