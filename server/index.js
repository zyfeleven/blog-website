require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./models");
const messageRoutes = require("./routes/message");
const {loginRequired,ensureUserCorrect} = require("./middleware/auth");
const {signup,signin} = require("./handlers/auth");
const { createMessage, deleteMessage } = require("./handlers/message");

const PORT = process.env.PORT ||8081;

//import errorHandler from handlers dir
const errorHandler = require("./handlers/error");


app.use(cors());
app.use(bodyParser.json());

app.get("/api/auth", (req,res)=>{
    res.send("hello");
})


// all routes config
//app.use("api/auth", authRoutes);
app.post("/api/auth/signup",signup);
app.post("/api/auth/signin",signin);
app.post("/api/users/:id/messages",createMessage);

app.use("api/users/:id/messages",loginRequired, ensureUserCorrect);

app.get("/api/messages", loginRequired, async function(req,res,next){
    try{
        console.log("get it")
        let messages = await db.Message.find()
        .sort({createAt:"desc"})
        .populate("user", {
            userName:true,
            profilePictureUrl:true,
        });
        return res.status(200).json(messages);
    }catch(err){
        return next(err);
    }
})

app.delete("/api/users/:id/messages/:message_id",deleteMessage)
//error handler

app.use(function(req,res,next){
    let err = new Error("222");
    err.status = 404;
    next(err);
});

app.use(errorHandler);

//listening function
app.listen(PORT,function(){
    console.log(`Sever is starting at port ${PORT}`);
})