const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String
})

module.exports = mongoose.model("users",userSchema)  // passing the collection name - "users" and the userSchema Defined above: