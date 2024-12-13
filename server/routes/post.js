const express = require("express")
const User = require("../models/post")
const router = express.Router()

router
.get('/getPosts', async (req, res) => {
  try {
    const post = await Posts.allUserPosts()
    res.send(post)
  } catch(err) {
    res.status(401).send({message: err.message})
  }
})


.post('/create', async (req,res) => {
try{
  let post= await Post.createPost(req.body);
  res.send(post)
} catch(err){
  res.status(401).send({message: err.message})
}
})

.put('/edit', async(req, res) => {
  try {
    let post = await Post.updatePost(req.body)
  } catch(err) {
    res.status(401).send({message: err.message})
  }
})

.delete('/deletepost', async(req, res) => {
  try {
    let post = await Post.deletePost(req.body)
    res.send({success: "Account has been deleted"})
  } catch(err) {
    res.status(401).send({message: err.message})
  }
})


module.exports = router