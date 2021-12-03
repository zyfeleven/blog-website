require("dotenv");
const jwt = require("jsonwebtoken");

//make sure the user is logged in
exports.loginRequired = function(req,res,next){
    try{
        const token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, process.env.SECRET_KEY,function(err,decoded){
            if(decoded){
                return next();
            }
            else{
                return next({
                    status:401,
                    message:"Please log in first",
                });
            }
        });
    }catch(err){
        return next({
            status:401,
            message:"Please log in first",
        });
    }
};
//make sure the user is the correct one
exports.ensureUserCorrect = function(req,res,next){
    try{
        const token = req.headers.authorization.split(" ")[1];
        jwt.verify(token,process.env.SECRET_KEY,function(err,decoded){
            if(decoded && decoded.id === req.params.id){
                return next();
            }
            else{
                return next({
                    status:401,
                    message:"Unauthorized",
                });
            }
        })
    }catch(err){
        return next({
            status:401,
            message:"Unauthorized",
        });
    }
};