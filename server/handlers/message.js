const db = require("../models");

//create a message
exports.createMessage = async function(req,res,next){
    try{
        let message = await db.Message.create({
            text:req.body.text,
            // /api/users/:id/messages
            user:req.params.id,
        });
        //find the user by id
        let foundUser = await db.User.findById(req.params.id);
        //push the message id to the messages array in user schema
        foundUser.message.push(message.id);
        //save the user
        await foundUser.save(); 
        //find the message
        let foundMessage = db.Message.findById(message._id).populate("user",{
            username:true,
            profilePictureUrl:true,
        });
        //return
        return res.status(200).json(foundMessage);

    }catch(err){
        return next(err);
    }
};

exports.getMessage = async function(req,res,next){
    try{
        // /api/user/:id/messages/:message_id
        let message = await db.Message.findById(req.params.message_id);
        return res.status(200).json(message);
    }catch(err){
        return next(err);
    }
};

exports.deleteMessage = async function(req,res,next){
    try{
        let message = await db.Message.findById(req.params.message_id);
        await message.remove();
        return res.status(200).json(message);
    }catch(err){
        return next(err);
    }
};