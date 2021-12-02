const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true,
    },
    username:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    //used for individual profile picture
    profilePictureUrl:{
        type:String,
    },
})

const User = mongoose.model("user",userSchema);

module.exports = User;