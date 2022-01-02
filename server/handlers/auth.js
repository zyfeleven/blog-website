const db = require("../models");
const jwt = require("jsonwebtoken");

exports.signin = async function(req,res,next){
    try{
        let user = await db.User.findOne({
            email:req.body.email,
        });
        let {id,userName,profilePictureUrl} = user;
        let isMatch = await user.comparePassword(req.body.password);
        if(isMatch){
            let token = jwt.sign({
                id,
                userName,
                profilePictureUrl,
            },process.env.SECRET_KEY
            );
            return res.status(200).json({
                id,
                userName,
                profilePictureUrl,
                token,
            });
        }
        else{
            return next({
                status:400,
                message:"Invalid email/password",
            })
        }
        
    }catch(err){
        return next({
            status:400,
            message:"Invalid email/password",
        })
    }
}
exports.signup = async function(req,res,next){
    try{
        //create a user
        console.log(req.body);
        let user = new db.User(req.body);
        console.log("try to sign up 1");
        await user.save();
        console.log("saved!")
        let {id,userName,profilePictureUrl} = user;
        console.log("try to sign up 2");
        let token = jwt.sign({
            id,
            userName,
            profilePictureUrl,
        },process.env.SECRET_KEY);
        console.log("try to sign up 3");
        return res.status(200).json({
            id,
            userName,
            profilePictureUrl,
            token,
        });
    }catch(err){
        console.log("catch an err");
        if(err.code === 11000){
            err.message = "Sorry, the username/email address is already be token"
        }
        return next(
            {
            status:400,
            message:err.message,
        })
    }
}