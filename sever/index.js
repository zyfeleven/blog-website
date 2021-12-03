require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/auth");
const messageRoutes = require("./routes/message");
const {loginRequired,ensureUserCorrect} = require("./middleware/auth");

const PORT = 2222;

//import errorHandler from handlers dir
const errHandler = require("./handlers/error");

app.use(cors());
app.use(bodyParser.json());


//TODOS: all routes config
app.use("api/auth", authRoutes);
app.use("api/users/:id/messages",loginRequired, ensureUserCorrect, messageRoutes);

app.get("/api/messages", loginRequired, async function(req,res,next){
    try{
        let messages = await db.Message.find()
        .sort({createAt:"desc"})
        .populate("user", {
            username:true,
            profilePictureUrl:true,
        });
        return res.status(200).json(messages);
    }catch(err){
        return next(err);
    }
})
//error handler
app.use(function(req,res,next){
    let err = new Error("Not Found");
    err.status = 404;
    next(err);
});

app.use(errHandler);
//listening function
app.listen(PORT,function(){
    console.log(`Sever is starting at port ${PORT}`);
})