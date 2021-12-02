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
    isModified:{
        type:boolean,
        default:false,
    }
})

userSchema.pre("save",async function(){
    try{
        //if the passwrod has not been modified then just continue
        if(!this.isModified("password")){
            return next();
        }
        //hash the password and save it
        let hashedPassword = await bcrypt.hash(this.password,10);
        this.password = hashedPassword;
        return next();
    }catch(err){
        return next(err);
    }
})

//check if the password is valid for the account
userSchema.method.comparePassword = async function(candidatePassword,next){
    try{
        let isMatch = await bcrypt.compare(candidatePassword,this.password);
        return isMatch;
    }catch(err){
            return next(err);
    }
}


const User = mongoose.model("user",userSchema);
module.exports = User;