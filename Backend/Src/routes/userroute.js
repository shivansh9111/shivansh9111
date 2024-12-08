
const router = require('express').Router();

const { Login, signUp } = require('../controllers/user.controller')
const {loginvalidation,signupValidation} = require('../middlewares/authValidation')



router.post('/signup',signupValidation,signUp)
router.post('/login',loginvalidation,Login)

module.exports=router