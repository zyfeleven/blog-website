const db = require("../models");
const jwt = require("jsonwebtoken");

exports.signin = function(){

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
        return res.status(200).json{
            id,
            username,
            profilePictureUrl,
            token,
        }
    }catch(err){
        if(err.code === 11000){
            err.message = "Sorry, the username/email address is already be token"
        }
        return next({
            status:400,
            message:err.message,
        })
    }
}