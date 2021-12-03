const mongoose = require("mongoose");
const User = require("./user");

//create message schema
const messageSchema = new mongoose.Schema({
    text:{
        type:String,
        required:true,
        maxLength: 160,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    }
});

//when removing a message, also remove it from the array in User schema
messageSchema.pre("remove",async function(next){
    try{
        //find a user
        let user = await User.findById(this.userId);
        //remove the id of the message from that user's message array
        user.message.remove(this.id);
        //save that user
        await user.save();
        //return
        return next();
    }catch(err){
        return next(err);
    }
})

const Message = mongoose.model("Message",messageSchema);
module.exports = Message;