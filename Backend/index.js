const express = require('express')
const app = express()
// const bodyparser = require('body-parser')
const{json,urlencoded}=express
const cors = require('cors')
const userroute= require('./Src/routes/userroute')
require ('dotenv').config()
require("./Src/models/db/db")
const chatroutes= require('./Src/routes/chatroutes')
const PORT = process.env.PORT || 5000

app.use(json())
app.use(urlencoded({extended:true}))
app.use(cors())
app.use(express.static('public'))



app.use("/user",userroute)
app.use('/api/chat', chatroutes);

app.listen(PORT,()=>{
console.log(`server is running on port ${PORT}`)
})