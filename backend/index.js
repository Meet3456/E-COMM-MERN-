const express = require('express');
const User = require('./db/users')     // Importing the users file
const app = express();
const cors = require('cors')

const mongoose = require('mongoose')
mongoose.connect("mongodb://0.0.0.0:27017/e-commerce")

// middelware for controlling data
app.use(express.json())
app.use(cors())


// making new user and adding the data to the DB
app.post('/register',async (req,resp)=>{
    console.log(req.body)
    let user = new User(req.body);     // jo request send kiya hai postman ke through uska body
    let result = await user.save();
    result = result.toJSON();     // .save() -> To save in the database 
    resp.send(result)
})

app.listen(5000)