
const User= require('../models/User.model')
const bcrypt= require('bcrypt')
const jwt = require('jsonwebtoken')
// creating a new user

const signUp =  async (req,res) => {

 try {
     const {username,email,password} = req.body;
     const user = await User.findOne({email});
     if(user) {
      return res.status(402)
      .json({message: 'user already exists you cant login', success:false});
     }

     const usermodel = new User({username,email,password});
     usermodel.password=await bcrypt.hash(password,10);
     await usermodel.save();

     return res.status(201)
     .json({message:'signup successfully', success: true })
 
 } catch (error) {
  return res.status(500)
  .json({message:"internal server error" , success : false})
 }

}



const Login = async (req,res) => {
  try {
    const {email,password}=req.body;
const user = await User.findOne({email})
console.log(user)
if(!user){
  return res.status(401)
  .json({message:'email or password is wrong ', success : true})
}
const ispassMatch = await bcrypt.compare(password,user.password)

if(!ispassMatch){
  return res.status(401)
  .json({message:'password is incorrect', success: false})
}

const jwttoken = jwt.sign(
 { email:user.email , id:user._id},
process.env.JWT_SECRET_KEY,
{expiresIn:"24h"} )
return res.status(200)
.json({
  message:"login successfully",
  success:true,
  jwttoken,
  email:user.email,
  username:user.username
})

  } catch (error) {
    return res.status(501)
    .json({message:"internal server error",success: false})
  
  }

}

module.exports={signUp,Login}