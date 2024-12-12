const express = require("express")
const User = require("../models/user")
const router = express.Router()

router
.get('/getUsers', async (req, res) => {
  try {
    const users = await User.getAllUsers()
    res.send(users)
  } catch(err) {
    res.status(401).send({message: err.message})
  }
})

//http://localhost:3000/user/login

.post('/login', async (req,res) => {
try{
  let user= await User.login(req.body);
  //This will send over password undefined but get everything from the user object
  res.send({...user,password:undefined})
} catch(err){
  res.status(401).send({message: err.message})
}
})

.post('/register', async (req,res) => {
  try{
    const user = await User.register(req.body)
    res.send({...user,password:undefined})
  }catch(err){
    res.status(401).send({message:err.message})
  }
})

module.exports = router