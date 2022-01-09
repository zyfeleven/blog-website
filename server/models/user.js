const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true,
    },
    userName:{
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
    message: [{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Message",
    }]
})

userSchema.pre("save",async function(next){
    try{
        //if the passwrod has not been modified then just continue
        if(!this.isModified("password")){
            return;
        }
        //hash the password and save it
        let hashedPassword = await bcrypt.hash(this.password,10);
        this.password = hashedPassword;
        console.log("password is hashed")
        return next();
    }catch(err){
        console.log("pre catch an error");
        return next(err);
    }
})

//check if the password is valid for the account
userSchema.methods.comparePassword = async function(candidatePassword,next){
    try{
        let isMatch = await bcrypt.compare(candidatePassword,this.password);
        return isMatch;
    }catch(err){
            return next(err);
    }
}


const User = mongoose.model("User",userSchema);
module.exports = User;