require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/auth");

const PORT = 2222;

//import errorHandler from handlers dir
const errHandler = require("./handlers/error");

app.use(cors());
app.use(bodyParser.json());

app.use("api/auth", authRoutes);
//TODOS: all routes config

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