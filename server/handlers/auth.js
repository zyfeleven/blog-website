const db = require("../models");
const jwt = require("jsonwebtoken");

exports.signin = async function(req,res,next){
    try{
        let user = await db.User.findOne({
            email:req.body.email,
        });
        let {id,username,profilePictureUrl} = user;
        let isMatch = await user.comparePassword(req.body.password);
        if(isMatch){
            let token = jwt.sign({
                id,
                username,
                profilePictureUrl,
            },process.env.SECRET_KEY
            );
            return res.status(200).json({
                id,
                username,
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
        let user = await db.User.create(req.body);
        let{id,username,profilePictureUrl} = user;
        let token = jwt.sign({
            id,
            username,
            profilePictureUrl,
        },process.env.SECRET_KEY);
        return res.status(200).json({
            id,
            username,
            profilePictureUrl,
            token,
        });
    }catch(err){
        //console.log("111");
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