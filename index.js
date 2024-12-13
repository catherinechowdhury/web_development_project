const express = require("express")
const app = express()
const path = require('path')

app.use(express.json()); // parses JSON bodies

//Create connection to route folder for each entity
const userRoutes = require("./server/routes/user")
const postRoutes = require("./server/routes/post")

//CORS middleware
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");  
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");  
  next();
});
//Change line 19 to whatever home page will be inside your public folder
app.use(express.static(__dirname + "/public"))
app.get('/', (req, res) => res.sendFile(path.join(__dirname + "/public/login.html")))

//app.use('/users', userRoutes)
app.use('/user',userRoutes)
app.use('/post', postRoutes)

//can change port number
//localhost:3000 on web browser
//It would not work until I changed ports
const PORT = process.env.PORT || 5500
app.listen(PORT, () => console.log(`Server started!! Listening on port ${PORT}!!! :)`))
